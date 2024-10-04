import React from "react";

function useWindowWidthResize() {
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    if (window) {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
    return () => {};
  }, []);

  return windowWidth;
}

export default useWindowWidthResize;
