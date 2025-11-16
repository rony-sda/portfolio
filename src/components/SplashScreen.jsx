import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplashScreen = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const lettersRef = useRef([]);

  lettersRef.current = [];

  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    lettersRef.current.forEach((el, i) => {
      const span = el.querySelector("span");

      // Animate letter appear
      gsap.fromTo(
        el,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: i * 0.3,
          ease: "elastic.in",
          onComplete: () => {
            // After appear → make it green
            gsap.to(span, {
              opacity: 1,
              duration: 0.3,
              delay: 0.1,
              ease: "power4.out",
              onComplete: () => {
                // Permanent green + start blinking
                gsap.set(el, { color: "#3CCF91" });
                gsap.to(el, {
                  opacity: 0.3,
                  duration: 0.6,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                });
              },
            });
          },
        }
      );
    });

    // Fade out splash after all letters
    const totalDuration = lettersRef.current.length * 0.3 + 2;
    gsap.to(loadingRef.current, {
      opacity: 0,
      duration: 1,
      delay: totalDuration,
      onComplete: () => {
        if (loadingRef.current) {
          loadingRef.current.style.display = "none";
        }
        if (onComplete) onComplete();
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      id="loading"
    >
      <div className="loading-text flex items-center" id="name-loader">
        {["M", "E", "H", "E", "D", "I"].map((letter, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="relative inline-block opacity-0 font-special font-bold text-[40px] md:text-[80px] lg:text-[120px] text-[rgba(255,255,255,0.15)]"
            data-text={letter}
          >
            {letter}
            <span
              className="absolute top-0 left-0 text-[#3CCF91] opacity-0 drop-shadow-[0_0_15px_#3CCF91]"
              aria-hidden="true"
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
