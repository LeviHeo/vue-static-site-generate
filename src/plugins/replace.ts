export const replaceOption = {
  files: 'dist/**/*.html',
  from:[
    /\n\s*<!--[\s\S]*?-->/g,
    /<!--[\s\S]*?-->/g,
    /\s+>/g,
    /^\s*$/gm,
    /<i\s*\n\s*class/g,
    /\s*data-server-rendered="true"/g,
    /\s*async=""\s*/g,
    /\s*crossorigin=""\s*/g,
    /<link\s*\n\s*rel/g,
    /"\s*\n\s*\/>/g,
    /"\s*\n\s*type=/g,
    /"\s*\n\s*crossorigin=/g,
    /"\n\s+style=/,
    /<span\s*\n\s*class=/g,
    /\s*\n\s*href=/g,
    /"\n\s+target=/g,
    /<meta\s*\n\s*name=/g,
    /"\s*\n\s*content=/g,
    /"\n\s*content=/g,
    /"\n\s*\/>/g,
    /classification"\s*\n\s*content=/g,
    /js"\s*\n\s*\/>/g,
    /\n\s*\/>/g,
    /\s*&lt;\/script&gt;/g,
    /&lt;/g,
    /&gt;/g,
    /&#39;/g,
    /\s*\n\s*target=/g,
    /\s*\n\s*style=/g,
    /\/src\/assets\//g,
    /<script.*?\/\.temp.*?<\/script>\n    /g,
    /<link.*?\/\.temp.*?\/>\n    /g,
    /"http:\/\/127.0.0.1:5173\//g,
    /\s*\n\s*src=/g,
    /"\s*\n\s*type=/g,
    /"\n\s*type=/g,
    /"\s*\n\s*defer=/g,
    /\s*defer=""\s*/g,
    /\s*\n\s*class=/g,
    /"\n\s*data-target=/g,
    /\s*\n\s*id=/g,
    /\s*\n\s*alt=/g,
    /\s*\n\s*title=/g,
    /\s*\n\s*scrolling=/g,
    /\s*\n\s*frameborder=/g,
    /"http:\/\/localhost:5173\//g,
  ],
  to: [
    '',
    '',
    '>',
    '',
    '<i class',
    '',
    ' async ',
    ' crossorigin ',
    '<link rel',
    '" />',
    '" type=',
    '" crossorigin=',
    '" style=',
    '<span class=',
    ' href=',
    '" target=',
    '<meta name=',
    '" content=',
    '" content=',
    '" />',
    'classification" content=',
    'js" />',
    ' />',
    '</script>',
    '<',
    '>',
    '\'',
    ' target=',
    ' style=',
    '/assets/',
    '',
    '',
    '"/',
    ' src=',
    '" type=',
    '" type=',
    '" defer=',
    ' defer ',
    ' class=',
    '" data-target=',
    ' id=',
    ' alt=',
    ' title=',
    ' scrolling=',
    ' frameborder=',
    '"/',
  ],
}