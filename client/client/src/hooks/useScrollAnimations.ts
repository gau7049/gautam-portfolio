import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Animate section headings
    gsap.utils.toArray<HTMLElement>('.scroll-fade-in').forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
          },
        }
      );
    });

    // Animate staggered text
    gsap.utils.toArray<HTMLElement>('.scroll-stagger').forEach((element) => {
      const children = element.querySelectorAll('.stagger-item');
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            end: 'top 50%',
            scrub: false,
          },
        }
      );
    });

    // Animate cards
    gsap.utils.toArray<HTMLElement>('.scroll-card').forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
          },
        }
      );
    });

    // Parallax effect
    gsap.utils.toArray<HTMLElement>('.parallax').forEach((element) => {
      gsap.to(element, {
        y: 0,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export const animateCounter = (
  element: HTMLElement,
  start: number,
  end: number,
  duration: number = 2
) => {
  const obj = { value: start };
  gsap.to(obj, {
    value: end,
    duration,
    snap: { value: 1 },
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString();
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    },
  });
};

export const createTextSplitAnimation = (selector: string) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((element) => {
    const text = element.textContent || '';
    element.innerHTML = text
      .split('')
      .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    gsap.fromTo(
      element.querySelectorAll('.char'),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
      }
    );
  });
};
