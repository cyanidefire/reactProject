import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<string>('md');

  useEffect(() => {
    function updateScreenSize() {
      if (window.innerWidth < 640) {
        setScreenSize('xs');
      } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setScreenSize("sm");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setScreenSize("md");
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 1280) {
        setScreenSize("xl");
      } else {
        setScreenSize("");
      }
    }

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
};

export default useScreenSize;