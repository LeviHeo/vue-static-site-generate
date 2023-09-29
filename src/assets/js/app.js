import Swiper from './plugin/swiper.js'
import Cookies from './plugin/cookie.js';
import axios from './plugin/axios.js';
import gsap from './plugin/gsap/all.js'
import { ScrollTrigger } from './plugin/gsap/ScrollTrigger.js'

;(function(win,doc,callback){'use strict';callback=callback||function(){};function detach(){if(doc.addEventListener){doc.removeEventListener('DOMContentLoaded',completed)}else{doc.detachEvent('onreadystatechange',completed)}}function completed(){if(doc.addEventListener||event.type==='load'||doc.readyState==='complete'){detach();callback(window)}}function init(){if (doc.addEventListener){doc.addEventListener('DOMContentLoaded',completed)}else{doc.attachEvent('onreadystatechange',completed)}}init()})(window,document,function(win){
  (function() {
    window.EWJ = window.EWJ || {};
    const EWJ = window.EWJ;

    EWJ.setting = EWJ.setting || {};
    EWJ.setting = {
      layout:false,
      isMobile:false,
      locale:'en',
      transitionSpeed:500,
      breakPoint: {
        navigation:1200,
        mobile:767,
        pc:1440
      }
    }

    EWJ.common = EWJ.common || {};
    EWJ.common = (() => {
      const init = () => {
        [
          setLocale,
          browserCheck,
          imageResponsive,
          cookieConcent,
          scrollAnimation,
          header,
          headerMobile,
          footer,
          backtotop,
          mask,
          popup,
          switchLocale
        ].forEach((fnc)=>{
          fnc.init()
        })

        // Test Codes
        axios.get('https://api.github.com/users/barbier')
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
        });
      }

      const setLocale = {
        init:()=> {
          const url = window.location.pathname
          const path = url.split('/')[1]
          const locales = ['/en', '/zh']

          locales.map(item => {
            if(url.indexOf(item) > -1) {
              EWJ.setting.locale = item.replace('/', '');
            }
          })

          if(path.length < 1) {
            window.location.href = '/en'
            return
          }
        }
      }

      const browserCheck = {
        init:()=> {
          let userAgent = navigator.userAgent;
          let browserName;
          if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = "chrome";
          } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = "firefox";
          } else if (userAgent.match(/safari/i)) {
            browserName = "safari";
          } else if (userAgent.match(/opr\//i)) {
            browserName = "opera";
          } else if (userAgent.match(/edg/i)) {
            browserName = "edge";
          } else if (userAgent.match(/android/i) || userAgent.match(/iphone/i)) {
            browserName = "mobile";
            EWJ.setting.isMobile = true
          } else {
            browserName = "Unknown";
          }
          document.querySelector('body').classList.add(`ua-${browserName}`)
        }
      }

      const imageResponsive = {
        init:()=> {
          imageResponsive.set()
          window.addEventListener('resize', imageResponsive.set)
        },
        set:()=> {
          const images = document.querySelectorAll('img');
          let winWidth = window.innerWidth, realWidth;
          const checkWidth=()=>{
            if (EWJ.setting.isMobile !== null){
              realWidth = winWidth;
            } else{
              realWidth = window.outerWidth;
            }
            return realWidth;
          }
          checkWidth();

          if (realWidth < 769){
            EWJ.setting.layout = "mobile";
          } else if (realWidth < 1025){
            EWJ.setting.layout = "tablet";
          } else{
            EWJ.setting.layout = "pc";
          }

          images.forEach(el => {
            if(EWJ.setting.layout === 'mobile' && el.dataset.srcMobile) {
              el.src = el.dataset.srcMobile
            }

            if(EWJ.setting.layout === 'tablet' && el.dataset.srcTablet) {
              el.src = el.dataset.srcTablet
            }

            if(EWJ.setting.layout === 'pc' && el.dataset.srcPc) {
              el.src = el.dataset.srcPc
            }
          })
        }
      }

      const cookieConcentName = 'cookieConsent'
      const cookieConcent = {
        init:()=> {
          const hasCookie = Cookies.get(cookieConcentName);

          if(hasCookie) {return}
          if(hasCookie !== undefined || !hasCookie) {
            const cookieConcentWrap = document.querySelector('.components--cookie-consent');
            const agreeBtn = cookieConcentWrap.querySelector('.btn-agree');
            cookieConcentWrap.classList.add(activeClass)
            agreeBtn.addEventListener('click', ()=> {
              Cookies.set(cookieConcentName, true);
              cookieConcentWrap.classList.remove(activeClass);
            })
          }
        }
      }

      const scrollAnimation = {
        init:()=> {
          gsap.registerPlugin(ScrollTrigger);
          scrollAnimation.section();
        },
        section:()=> {
          const sections = document.querySelectorAll('section')
          sections.forEach((section, index) => {
            gsap.to(section, {
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                toggleClass:{
                    targets:section,
                    className:"hello"
                }
              },
            });

            gsap.to(section, {
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: '20% top',
                toggleClass:{
                  targets:section,
                  className:"hello"
                },
                onEnter:()=> {
                },
                onEnterBack:()=> {
                },
                onLeaveBack:()=> {
                }
              },
            });
          });
        }
      }

      const activeClass = 'active';
      const bodyScrollClass = 'over-hidden';

      const header = {
        init:()=> {
          header.notice()
          header.scrollFromTop()
          header.toggleSubMenu()
          header.outSideSubMenu()
          header.toggleLocaleOption()
          header.setDefaultActiveSubMenuGroup()
          header.subMenuSlide()
          header.subMenuChange()
        },
        notice:()=> {
          let noticeSlider = null;
          const noticeSliderOpt = {
            direction:'vertical',
            loop:true,
            autoplay: {
              delay: 3000,
              pauseOnMouseEnter:true,
            }
          }

          const noticeSliderOptMob = {
            speed:10000,
            autoplay: {
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            loop: true,
            slidesPerView: "auto",
            watchSlidesProgress: true,
            spaceBetween: 0,
            grabCursor: true,
            breakPoints:{
              100: {
                speed:10000,
              },
              700: {
                speed:6000
              }
            }
          }

          const initSwiper = ()=> {
            if (window.innerWidth <= EWJ.setting.breakPoint.navigation) {
              noticeSlider && noticeSlider.destroy();
              noticeSlider = new Swiper('.selling-notice .swiper', noticeSliderOptMob);
            } else {
              noticeSlider && noticeSlider.destroy();
              noticeSlider = new Swiper('.selling-notice .swiper', noticeSliderOpt);
            }
          }

          let timer;


          window.addEventListener('resize', ()=> {
            if(timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(initSwiper, 100)
          })

          initSwiper()

          // const noticeSlider = new Swiper('.selling-notice .swiper', noticeSliderOptMob);
        },
        setDefaultActiveSubMenuGroup:()=> {
          const allMenuBtn = document.querySelectorAll('.nav-item');
          for (let i = 0; i < allMenuBtn.length; i++) {
            const el = allMenuBtn[i];
            const subNav = el.parentNode.querySelector('.sub-menu-nav');
            if(subNav) {
              const firstGroup = subNav.querySelector('li:first-child .select-group');
              header.selectGroup(firstGroup, 'init')
            }
          }
        },
        selectGroup:(el, status)=> {
          const allSubMenuGroup = document.querySelectorAll('.nav-item-sub-menu');
          const allSelectSubMenuBtn = document.querySelectorAll('.select-group');
          const subMenuBG = document.querySelector('.main-navigation-sub-menu-bg');
          const subMenuNavBG = document.querySelector('.sub-menu-nav-bg');
          const subMenuInnerPadding = 90;

          const detailGroupList = document.querySelectorAll('.group-content-detail');
          const resetList = [
            ...allSelectSubMenuBtn,
            ...detailGroupList
          ]
          resetList.forEach(el => el.classList.remove(activeClass))
          el.classList.add(activeClass);

          const targetGroup = document.querySelector(`#group-${el.dataset.target}`)
          if(targetGroup) {
            targetGroup.classList.add(activeClass);
            if(status !== 'init') {
              const elHeight = (targetGroup.offsetHeight + subMenuInnerPadding);
              const setHeightGroup = [
                subMenuBG,
                subMenuNavBG,
                ...allSubMenuGroup
              ]

              setHeightGroup.forEach(el => el.style.height = `${elHeight}px`)
            }
          }
        },
        subMenuChange:()=> {
          const allSelectSubMenuBtn = document.querySelectorAll('.select-group');
          allSelectSubMenuBtn.forEach(el => {
            el.addEventListener('click', ()=> {
              header.selectGroup(el);
            })
          })
        },
        subMenuSlide:()=> {
          const isShowBtn = (el, wrapper)=> {
            const disableClass = 'disabled';
            const btnPrev = wrapper.querySelector('.btn-prev');
            el.isBeginning ? 
              btnPrev.classList.add(disableClass) : 
              btnPrev.classList.remove(disableClass)

            const btnNext = wrapper.querySelector('.btn-next');
            el.isEnd ? 
              btnNext.classList.add(disableClass) : 
              btnNext.classList.remove(disableClass)
          }

          const signature = '#group-signature'
          const signatureSliderWrapper = document.querySelector(signature);
          const signatureOption = {
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
              nextEl: `${signature} .btn-next`,
              prevEl: `${signature} .btn-prev`,
            },
            on: {
              afterInit:()=> {
                setTimeout(() => {
                  isShowBtn(subMenuSlider, signatureSliderWrapper)
                }, 100);
              },
              slideChange:()=> {
                isShowBtn(subMenuSlider, signatureSliderWrapper)
              },
              resize:()=> {
                isShowBtn(subMenuSlider, signatureSliderWrapper)
              }
            }
          }
          const subMenuSlider = new Swiper(`${signature} .swiper`, signatureOption);

          const normalList = '.nav-item-sub-menu .group-content-detail-thumb-list'
          const normalSliderWrapper = document.querySelector(normalList);
          const normalOption = {
            slidesPerView: "auto",
            spaceBetween: 10,
            centerInsufficientSlides:true,
            navigation: {
              nextEl: `${normalList} .btn-next`,
              prevEl: `${normalList} .btn-prev`,
            },
            on: {
              afterInit:()=> {
                setTimeout(() => {
                  isShowBtn(normlListSlider, normalSliderWrapper)
                }, 100);
              },
              slideChange:()=> {
                setTimeout(() => {
                  isShowBtn(normlListSlider, normalSliderWrapper)
                },100);
              },
              resize:()=> {
                isShowBtn(normlListSlider, normalSliderWrapper)
              }
            }
          }

          const normlListSlider = new Swiper('.nav-item-sub-menu .group-content-detail-thumb-list .swiper', normalOption);
        },
        outSideSubMenu:()=> {
          const headerContent = document.querySelector('.header-content');
          const headerSubContent = document.querySelector('.header-sub-content');

          const outSideArea = [
            headerContent,
            headerSubContent
          ]

          outSideArea.forEach(el => {
            el.addEventListener('mouseover', ()=> {
              header.closeSubMenu();
              mask.hide();
            })
          })
        },
        scrollFromTop:()=> {
          const getDistant = ()=> {
            const headerEl = document.querySelector('.header')
            const fromTop = document.documentElement.scrollTop;
            const asideBTT = document.querySelector('.aside-back-to-top');
            if (window.innerWidth > EWJ.setting.breakPoint.navigation) {
              if(fromTop < (window.innerHeight * 0.3)) {
                asideBTT.classList.add('hide')
              }else {
                asideBTT.classList.remove('hide')
              }
              if(fromTop > 80) {
                headerEl.classList.add('fold', 'disabled')
              }else {
                setUnfold()
              }
            }else {
              setUnfoldMobile()
            }
          }

          const setUnfold = ()=> {
            const headerEl = document.querySelector('.header')
            headerEl.classList.remove('fold')
            setTimeout(() => {
              headerEl.classList.remove('disabled')
            }, 300);
          }

          const setUnfoldMobile = ()=> {
            const headerEl = document.querySelector('.header')
            const fromTop = document.documentElement.scrollTop;
            if(fromTop > 80) {
              headerEl.classList.add('fold')
            }else {
              setUnfold()
            }
          }

          const isResize = ()=> {
            if (window.innerWidth > EWJ.setting.breakPoint.navigation) {
              getDistant();
            } else {
              header.closeSubMenu();
              mask.hideNoPopup();
              setUnfoldMobile();
            }
          }

          getDistant();
          window.addEventListener('scroll', ()=> getDistant());
          window.addEventListener('resize', ()=> isResize())
        },
        closeSubMenu:()=> {
          const allMenuBtn = document.querySelectorAll('.nav-item');
          const allSubMenuGroup = document.querySelectorAll('.nav-item-sub-menu');
          const subMenuBG = document.querySelector('.main-navigation-sub-menu-bg');

          const unActiveTarget = [
            ...allSubMenuGroup,
            ...allMenuBtn
          ]

          unActiveTarget.forEach(el => {
            el.classList.remove(activeClass)
          })

          const resetHeight = [
            ...allSubMenuGroup,
            subMenuBG
          ]

          resetHeight.forEach(el => {
            el.style.height= '0px'
          })

        },
        toggleSubMenu:()=> {
          const allMenuBtn = document.querySelectorAll('.nav-item');
          const subMenuBG = document.querySelector('.main-navigation-sub-menu-bg');
          const subMenuNavBG = document.querySelector('.sub-menu-nav-bg');

          const menuDropDown = (el)=> {
            header.closeSubMenu();
            const subMenuGroup = el.parentNode.querySelector('.nav-item-sub-menu');
            if(subMenuGroup && subMenuGroup !== null) {
              [el, subMenuGroup].forEach(item => item.classList.add(activeClass))

              const elHeight = subMenuGroup.querySelector('.sub-menu-group').offsetHeight;
              [subMenuBG, subMenuGroup, subMenuNavBG].forEach(el => el.style.height = `${elHeight}px`)

              mask.show();
            }
            subMenuGroup === null && mask.hide();
          }

          allMenuBtn.forEach(el => {
            let holdTime;
            ['mouseover', 'focus'].forEach((event)=> {
              el.addEventListener(event, ()=> {
                holdTime = setTimeout(() => menuDropDown(el), 300);
              });
            })
            el.addEventListener('mouseout', ()=> clearTimeout(holdTime));
          })
        },
        toggleLocaleOption:()=> {
          const localeBtn  = document.querySelectorAll('.head-locale-current');
          const localeWrap = document.querySelectorAll('.head-locale-select');
          localeBtn.forEach(el => {
            el.addEventListener('click', function(){
              header.closeSubMenu()
              mask.hide()
              localeWrap.forEach(tt => {
                const target = tt.classList;
                target.contains(activeClass) ? target.remove(activeClass) : target.add(activeClass) ;
              })
            });
          })

          document.addEventListener('click', function handleClickOutsideBox(event) {
            localeWrap.forEach(el => {
              if(!el.contains(event.target)) {
                el.classList.remove(activeClass)
              }
            })
          });
        }
      }

      const headerMobile = {
        init:()=> {
          headerMobile.toggleMobNav()
          headerMobile.toggleMobSubNav()
          headerMobile.closeSubMenuGroup()
        },
        toggleMobNav:()=> {
          const mobNavOpenBtn = document.querySelector('.btn-mobile-nav');;
          const mobNavWrap = document.querySelector('.header-navigation-mob');
          mobNavOpenBtn.addEventListener('click', (el)=> {
            if(mobNavWrap.classList.contains(activeClass)) {
              headerMobile.closeSubMenuGroup('all')
            }else {
              scroll.disable()
            }

            [mobNavOpenBtn, mobNavWrap].forEach(el => {
              el.classList.toggle(activeClass)
            })
          })

          const isResize = ()=> {
            const mobNavWrap = document.querySelector('.header-navigation-mob');
            if (window.innerWidth > EWJ.setting.breakPoint.navigation) {
              if(mobNavWrap.classList.contains(activeClass)) {
                headerMobile.closeSubMenuGroup('all')
              }

              [mobNavOpenBtn, mobNavWrap].forEach(el => {
                el.classList.remove(activeClass)
              })
            } else {
            }
          }

          window.addEventListener('resize', ()=> isResize())
        },
        toggleMobSubNav:()=> {
          const mobNavBtn = document.querySelectorAll('.mob-nav-item');
          const mobNavWrap = document.querySelector('.header-navigation-mob');

          mobNavBtn.forEach(el => {
            if(el.classList.contains('has-sub')) {
              el.addEventListener('click', ()=> {
                document.querySelector('.header-navigation-mob-inner').scrollTo(0, 0);

                if(el.dataset.target) {
                  mobNavWrap.classList.add('open-subnav');
                  document.querySelector(`#sub-${el.dataset.target}`).classList.add(activeClass);
                }

                if(el.dataset.subTarget) {
                  mobNavWrap.classList.add('open-subnav-detail');
                  document.querySelector(`#sub-detail-${el.dataset.subTarget}`).classList.add(activeClass);
                }
              })
            }
          })
        },
        closeSubMenuGroup:(status)=> {
          const closeBtn = document.querySelectorAll('.btn-close-sub-menu');
          const mobNavWrap = document.querySelector('.header-navigation-mob');
          const mobSubNavGroup = document.querySelectorAll('.mob-nav-sub-menu .mob-nav-sub-menu-group');
          const mobSubNavDetailGroup = document.querySelectorAll('.mob-nav-sub-menu-detail .mob-nav-sub-menu-group');

          const closeItems = {
            group:()=> {
              mobNavWrap.classList.remove('open-subnav')
              setTimeout(() => {
                mobSubNavGroup.forEach(el => el.classList.remove('active'))
              }, 300);
            },
            detail:()=> {
              mobNavWrap.classList.remove('open-subnav-detail');
              setTimeout(() => {
                mobSubNavDetailGroup.forEach(el => el.classList.remove('active'))
              }, 300);
            }
          }

          if(status === 'all') {
            closeItems.group()
            closeItems.detail()
            scroll.enable()
            return
          }

          closeBtn.forEach(el => {
            el.addEventListener('click', ()=> {
              const target = el.dataset.close;
              if(target) {
                closeItems[target]()
                return
              }
            })
          })
        }
      }

      const scroll = {
        disable:()=> {
          document.body.classList.add(bodyScrollClass);
        },
        enable:()=> {
          document.body.classList.remove(bodyScrollClass);
        }
      }

      const showClass = {
        show:'show',
        fade:'fade-in',
        popup:'popup'
      }

      const mask = {
        init:()=> {
          const maskEl = document.querySelector('#mask');
          maskEl.addEventListener('click', ()=> {
            header.closeSubMenu()
            mask.hide()
            popup.close()
            scroll.enable()
          })
        },
        show:(mode)=> {
          const maskEl = document.querySelector('#mask');
          if(!maskEl.classList.contains(showClass.show)) {
            maskEl.classList.add(showClass.show, mode === 'popup' ? showClass.popup : undefined);
            setTimeout(() => {
              maskEl.classList.add(showClass.show, showClass.fade);
            }, 100);
          }
        },
        hide:()=> {
          const maskEl = document.querySelector('#mask');
          maskEl.classList.remove(showClass.fade);
          setTimeout(() => {
            maskEl.classList.remove(showClass.show, showClass.popup);
          }, 300);
        },
        hideNoPopup:()=> {
          const maskEl = document.querySelector('#mask');
          if(!maskEl.classList.contains(showClass.popup)) {
            mask.hide()
          }
        }
      }

      const switchLocale = {
        init:()=>{
          switchLocale.changeLocale();
        },
        changeLocale:()=> {
          const changeBtn = document.querySelectorAll('.update-locale');
          changeBtn.forEach(el => {
            el.addEventListener("click", (event)=> {
              switchLocale.redirectTo(event.target.dataset.locale)
            });
          })
        },
        redirectTo:(to)=> {
          const url = window.location.pathname;
          return window.location.href = url.replace(url.split('/')[1], to);
        }
      }

      const footer = {
        init:()=> {
          footer.toggleLocaleOption()
        },
        toggleLocaleOption:()=> {
          const localeBtn  = document.querySelector('.locale-current');
          const localeWrap = document.querySelector('.locale-select');

          localeBtn.addEventListener('click', function(){
            localeWrap.classList.toggle(activeClass)
          });

          document.addEventListener('click', function handleClickOutsideBox(event) {
            if (!localeWrap.contains(event.target)) {
              localeWrap.classList.remove(activeClass)
            }
          });
        }
      }

      const backtotop = {
        init:()=> {
          backtotop.click()
          backtotop.sticky()
        },
        click:()=> {
          const btnBTT = document.querySelectorAll('.back-to-top')
          btnBTT.forEach(el => {
            el.addEventListener('click', function(){
              EWJ.scrollTo()
              el.blur()
            });
          })
        },
        sticky:()=> {
          const asideBTT = document.querySelector('.aside-back-to-top');
          const stickyClass = 'unsticky'
          gsap.timeline({
            scrollTrigger: {
             trigger:document.querySelector('.components--footer-benefit'),
             start: "top bottom",
             onEnter:()=> {
              asideBTT.classList.add(stickyClass)
             },
             onLeaveBack:()=> {
              asideBTT.classList.remove(stickyClass)
             }
          }})
        }
      }

      const popup = {
        init:()=> {
          const allButton = document.querySelectorAll('button');
          allButton.forEach(el => {
            if(el.dataset.popup){
              el.addEventListener('click', ()=> popup.open(el.dataset.popup))
            }
          })

          const popupCloseBtn = document.querySelectorAll('.btn-popup-close')
          popupCloseBtn.forEach(el => {
            el.addEventListener('click', ()=> {
              popup.close()
              mask.hide()
            })
          })
        },
        open:(target)=> {
            mask.show('popup')
            scroll.disable()
            const popupContainer = document.querySelector('.components--popup-container');
            const addTarget = [
              popupContainer,
              document.body,
              popupContainer.querySelector(`#${target}`),
            ]

            addTarget.forEach(el => el.classList.add(activeClass))

            if(target === 'share-page') {
              EWJ.share.getlink()
            }
        },
        close:()=> {
          scroll.enable()
          const popupContainer = document.querySelector('.components--popup-container');
          const innerContainer = popupContainer.querySelectorAll('.content-group')
          const removeTarget = [
            popupContainer,
            document.body,
            ...innerContainer
          ]
          removeTarget.forEach(el => el.classList.remove(activeClass))
        }
      }

      return{
        init:init
      }
    })();

    EWJ.scrollTo = EWJ.scrollTo || {};
    EWJ.scrollTo = ((target = 'body', gap = 0) => {
      const getElementY = (target) => {
        return window.pageYOffset + document.querySelector(target).getBoundingClientRect().top
      }

      const scrollToSection = (element, duration) =>{
        let startingY = window.pageYOffset
        let elementY = getElementY(element)
        let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY - gap
        let diff = targetY - startingY
        let easing = (t) => { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
        let start;

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
    });

    EWJ.share = EWJ.share || {};
    EWJ.share = (() => {
      const init = () => {
        [
          shareLink,
        ].forEach((fnc)=>{
          fnc.init()
        })
      }

      const getlink = ()=> {
        const copyText = document.getElementById("share-url");
        copyText.value = window.location.href
      }

      const shareLink = {
        init:()=> {
          const shareBtns = document.querySelectorAll('.btn-share-link')

          shareBtns.forEach(el => {
            el.addEventListener('click', ()=> {
              console.log(el.dataset.shareTarget)
              shareLink.sns(el.dataset.shareTarget)
            })
          })

          shareLink.copylink()
        },
        sns:(target)=> {
          const option = {
            title:encodeURIComponent(document.title),
            url:encodeURIComponent(window.location.href),
            thumb:'https://www.emperorwatchjewellery.com/upload/images/product/pam01043_20200417073828_740.jpg'
          }
          let shareUrl = '';
          if(target === 'facebook') {
            shareUrl = `https://www.facebook.com/sharer.php?u=${option.url}`
          }

          if(target === 'weibo') {
            shareUrl = `https://service.weibo.com/share/share.php?url=${option.url}&title=${option.title}&pic=${option.thumb}`
          }
          window.open(shareUrl, '_blank')
        },
        copylink:()=> {
          const shareLinkBtn = document.querySelector('.share-link-preview')
          const copyText = document.getElementById("share-url");
          if(shareLinkBtn) {
            shareLinkBtn.addEventListener('click', ()=> {
              copyText.select();
              copyText.setSelectionRange(0, 99999);
              navigator.clipboard.writeText(copyText.value);
            })
          }
        }
      }

      return {
        init:init,
        getlink
      }
    })();

    EWJ.components = EWJ.components || {};
    EWJ.components = (() => {
      const init = () => {
        [
          keyVisual,
          LeftVisualRightContentSlider,
          CollectionSlider,
          toggleList,
          CategorySlider
        ].forEach((fnc)=>{
          fnc.init()
        })
      }

      const keyVisual = {
        init:()=> {
          const setSlider = (el) => {
            return new Swiper(`#${el.id}`, {
              navigation: {
                nextEl: `#${el.id} .btn-next`,
                prevEl: `#${el.id} .btn-prev`,
              },
              loop:true,
              effect: 'fade',
              speed:EWJ.setting.transitionSpeed,
              on:{
                afterInit:(swiper)=> {
                  if(swiper.slides.length > 1) {
                    getCurrentPagination(swiper.realIndex, swiper.slides.length, `#${el.id} .pagination`)
                    showPagination(`#${el.id}`)
                  }
                },
                slideChangeTransitionStart:(swiper)=> {
                  if(swiper.slides.length > 1) {
                    showPagination(`#${el.id}`)
                    getCurrentPagination(swiper.realIndex, swiper.slides.length, `#${el.id} .pagination`)
                  }
                }
              }
            });
          }

          const showPagination = (container)=> {
            document.querySelector(`${container} .keyvisual-controller`).classList.add('active')
          }

          const getCurrentPagination = (current, total, container)=> {
            const page = `${current + 1}/${total}`
            document.querySelector(container).innerHTML = page
            return page
          }

          const keyVisualSlide = document.querySelectorAll('.components--keyvisual .swiper');
          const keyVisuals = [];
          keyVisualSlide.forEach((el, idx) => {
            el.setAttribute("id", `kv-slider-${idx}`);
            keyVisuals[idx] = setSlider(el, idx)
          })
        }
      }

      const LeftVisualRightContentSlider = {
        init:()=> {
          const contentSlide = document.querySelectorAll('.components--left-visual-right-content-slider .right-content .swiper');
          const visualSlide = document.querySelectorAll('.components--left-visual-right-content-slider .left-visual .swiper');

          let leftSlide = [],
              rightSlide = []

          const setRightSlider = (el, idx) => {
            return new Swiper(`#${el.id}`, {
              navigation: {
                nextEl: `#${el.id} .btn-next`,
                prevEl: `#${el.id} .btn-prev`,
              },
              loop:true,
              effect: 'fade',
              fadeEffect: {
                crossFade: true
              },
              speed:EWJ.setting.transitionSpeed,
              on:{
                afterInit:(swiper)=> {
                },
                slideChangeTransitionStart:(swiper)=> {
                  leftSlide[idx].slideTo(swiper.realIndex)
                }
              },
            });
          }
          const setLeftSlider = (el, idx) => {
            return new Swiper(`#${el.id}`, {
              loop:true,
              effect: 'fade',
              fadeEffect: {
                crossFade: true
              },
              speed:EWJ.setting.transitionSpeed,
              allowTouchMove:false,
            });
          }

          visualSlide.forEach((el, idx) => {
            el.setAttribute("id", `left-visual-slider-${idx}`);
            leftSlide[idx] = setLeftSlider(el, idx)
          })
          contentSlide.forEach((el, idx) => {
            el.setAttribute("id", `right-content-slider-${idx}`);
            rightSlide[idx] = setRightSlider(el, idx)
          })
        }
      }

      const CategorySlider = {
        init:()=> {
          const categorySliders = document.querySelectorAll('.components--category-slider');

          const setSlider = (el, idx) => {
            return new Swiper(`#${el.id} .swiper`, {
              navigation: {
                nextEl: `#${el.id} .btn-next`,
                prevEl: `#${el.id} .btn-prev`,
              },
              slidesPerView: 'auto',
              spaceBetween:20,
              loop:true,
            });
          }

          categorySliders.forEach((el, idx) => {
            el.setAttribute("id", `category-slider-${idx}`);
            setSlider(el, idx)
          })

        }
      }

      const CollectionSlider = {
        init:()=> {
          const contentSlide = document.querySelectorAll('.components--collection-slider .collection-content .swiper');
          const visualSlide = document.querySelectorAll('.components--collection-slider .collection-kv .swiper');

          let leftSlide = [],
              rightSlide = []

          const setLeftSlider = (el, idx) => {
            return new Swiper(`#${el.id}`, {
              navigation: {
                nextEl: `#${el.id} .btn-next`,
                prevEl: `#${el.id} .btn-prev`,
              },
              loop:true,
              speed:EWJ.setting.transitionSpeed,
              on:{
                afterInit:(swiper)=> {
                },
                slideChangeTransitionStart:(swiper)=> {
                  rightSlide[idx].slideTo(swiper.realIndex)
                  const tt = document.querySelector(`#${el.id} .swiper-slide-active .collection-content-item`)
                  console.log(tt.dataset.bgColor)
                  document.querySelector(`#${el.id}`).style.background = `#${tt.dataset.bgColor}`
                }
              },
            });
          }
          const setRightSlider = (el, idx) => {
            return new Swiper(`#${el.id}`, {
              loop:true,
              effect: 'fade',
              fadeEffect: {
                crossFade: true
              },
              speed:EWJ.setting.transitionSpeed,
              allowTouchMove:false,
            });
          }

          visualSlide.forEach((el, idx) => {
            el.setAttribute("id", `right-collection-slider-${idx}`);
            rightSlide[idx] = setRightSlider(el, idx)
          })

          contentSlide.forEach((el, idx) => {
            el.setAttribute("id", `left-collection-slider-${idx}`);
            leftSlide[idx] = setLeftSlider(el, idx)
          })
        }
      }

      const toggleList = {
        init:()=> {
          toggleList.tabnav()

          let linkToggle = document.querySelectorAll('.toggle-item-title');
          const openList = (el, container)=> {
            [el, container].forEach(item => {
              item.classList.add('active')
            })
            container.style.height = 'auto';

            let height = container.clientHeight + 'px';

            container.style.height = '0px';

            setTimeout(function () {
              container.style.height = height;
            }, 0);
          }

          const closeList = (el, container) => {
            container.style.height = '0px';

                container.addEventListener('transitionend', function () {
                  [el, container].forEach(item => {
                    item.classList.remove('active')
                  })
                }, {
                  once: true
                });
          }

          const updateHeight = (el, container)=> {
            let height = container.querySelector('.item-body-inner').offsetHeight + 'px';
            container.style.height = height;
          }

          linkToggle.forEach((el, idx) => {
            let container = el.parentNode.querySelector('.toggle-item-body')

            el.addEventListener('click', (event)=> {
              event.preventDefault();
              !container.classList.contains('active') ? openList(el, container) : closeList(el, container)

              // when window height changed
              ScrollTrigger.refresh(true);
              setTimeout(() => {
                ScrollTrigger.refresh(true);
              }, 300);
            })

            window.addEventListener('resize', ()=> {
              updateHeight(el, container);
            })
          })
        },
        tabnav:()=> {
          const tabNavButtons = document.querySelectorAll('.toggle-tab-nav .change-tab');
          const tabGroups = document.querySelectorAll('.toggle-list-group')

          tabNavButtons.forEach((el, idx) => {
            if(idx === 0) {
              el.classList.add('active')
              tabGroups[0].classList.add('active')
            }

            el.addEventListener('click', (event)=>{
              el.parentNode.parentNode.querySelectorAll('.change-tab').forEach(nav => {
                nav.classList.remove('active')
              })
              el.classList.add('active')

              tabGroups.forEach((group, order) => {
                group.classList.remove('active')
                if(group.id === el.dataset.tab) {
                  group.classList.add('active')
                }
              })
            })
          })
        }
      }

      return {
        init:init,
      }
    })();

    setTimeout(() => {
      // ! SetTimeout for Local Dev, Wait for render virtual DOM
      EWJ.common.init();
      EWJ.components.init();
      EWJ.share.init();
    }, 500);
  })();
});
