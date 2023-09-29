export const useScrollTo = (target:any = 'body', gab:any = 0, fallback:any = null) => {
  const getElementY = (target:any) => {
    return window.pageYOffset + document.querySelector(target).getBoundingClientRect().top
  }

  const scrollToSection = (element:string, duration:number) =>{
    let startingY = window.pageYOffset
    let elementY = getElementY(element)
    let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY - gab
    let diff = targetY - startingY
    let easing = (t:any) => { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
    let start:any

    if (!diff) return

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp
      let time = timestamp - start
      let percent = Math.min(time / duration, 1)
      percent = easing(percent)

      window.scrollTo(0, startingY + diff * percent)

      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    })
  }

  const toEl = document.querySelector(target);
  (toEl) ? scrollToSection(target, 1000) : window.location.href ='/';
}