import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const locales = [
  'en',
  'zh'
]

export const useLocale = (
  pos:number = 1
)=> {
  const route = useRoute()
  const locale = route.path.split('/')[pos]
  const updateHtmlAttr = (loc:any)=> {
    useHead({
      htmlAttrs:{
        lang:loc
      }
    })
  }
  if (locales.includes(locale)) {
    return updateHtmlAttr(locale)
    // return locale
  }else {
    return updateHtmlAttr(locales[0])
    // return locales[0]
  }
}