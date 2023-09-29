// @ts-nocheck
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// export enum TEST_THEME {
//   primary= "primary",
//   highlight= "highlight"
// }

// eslint-disable-next-line import/prefer-default-export
export const useSectionTrigger = (
    sectionData:Array<any> = []
  ) => {

  gsap.registerPlugin(ScrollTrigger);
  const main = ref();
  const commonSection = ref();
  onMounted(() => {
    commonSection.value = gsap.context((self) => {
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
    }, main.value);
  });

  onUnmounted(() => {
    commonSection.value.revert();
  });
}
