// @ts-nocheck
import path from 'node:path'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import components from 'unplugin-vue-components/vite'
import customHeader from 'vite-plugin-html-config'

// ! Copy Static Javascript rollup, Copy files directly to 'dist' and minify with Terser
import { viteStaticCopy as fileCopy } from 'vite-plugin-static-copy'
import { minifyJs as fileMinify } from './src/plugins/minify'

// ! Replace HTML - Beautify
// ? https://www.npmjs.com/package/replace-in-file
import replace from 'replace-in-file'
import { replaceOption } from './src/plugins/replace'

// import generateSitemap from 'vite-ssg-sitemap'
// ? https://vitejs.dev/config/
export default (({mode}) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };
  const env = loadEnv(mode, process.cwd(), '')

  const {
    VITE_GTM,
    VITE_GA,
    VITE_PIXEL,
    VITE_GOOGLE_MAP_API_KEY
  } = process.env

  const LOCAL_DEV_PATH = 'http://localhost:5173'

  return defineConfig({
    base: '/',
    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, 'src')}/`,
        '~': `${path.resolve(__dirname, 'src/assets')}/`,
        $fonts:resolve('./src/assets/fonts'),
        $images:resolve('./src/assets/images')
      }
    },
    define: {
      __APP_ENV__: env.APP_ENV,
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    plugins: [
      vue(),
      pages({
        extensions: ['vue'],
      }),
      components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
      }),
       // ! Common Meta tag handling
      customHeader({
        favicon: '/favicon.png',
        headScripts: [
          {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${VITE_GTM}`,
            type: 'module',
            crossorigin: 'anonymous',
          },
          {
            src: `${LOCAL_DEV_PATH}/src/assets/js/app.js`,
            type: 'module',
          },
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${VITE_GA}');`,
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${VITE_GTM}');`,
        ],
        scripts: [
          `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${VITE_PIXEL}');
          fbq('track', 'PageView');`,
        ],
        metas: [
          {
            name:'theme-color',
            content:'#000000'
          },
          {
            name: 'keywords',
            content: 'vue.js, static site generate, framework',
          },
          {
            name: 'description',
            content: 'Lorem ipsum...',
          }
        ]
      }),
      // ! Copy Static Javascript to 'dist'. SFC scripts are not used.
      fileCopy({
        targets: [
          {
            src: 'src/assets/js',
            dest: './assets'
          }
        ]
      })
    ],
    // ? https://github.com/antfu/vite-ssg/blob/main/src/types.ts
    ssgOptions: {
      // dirStyle:'nested',
      // script: 'async',
      formatting: 'prettify',
      onFinished() {
        //generateSitemap()
        replace.sync(replaceOption); // ? Remove junk code & beautify
        fileMinify(); // ? Minify & Mangle Custom JS
      }
    },
    build: {
      transpile: ['gsap'],
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
              extType = 'images';
            } else if (/woff|woff2|ttf/.test(extType)) {
              extType = "fonts";
            }
            return `assets/${extType}/[name].[ext]`;
          },
          // ! Don't use chunk for Static HTML, chunk links in output HTML are deleted using replace plugin.
          entryFileNames: `.temp/[name].js`,
          chunkFileNames: `.temp/[name].js`
        },
      },
    },
  })
})
