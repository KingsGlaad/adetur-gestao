import { useState, useEffect } from "react";

export function useParallax(speed: number = 0.5) {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    if (window.innerWidth >= 768) {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) return {};

  return { transform: `translateY(${offsetY * speed}px)`, willChange: "transform" };
}