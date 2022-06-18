import React, { useState, useEffect } from "react";
import MockMobile from "../../Components/MockMobile/MockMobile";
import MockDesktop from "../../Components/MockDesktop/MockDesktop";

const ViewportConditional = ({ url }) => {
  const [width, setWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
    }

    handleWindowResize();
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <MockMobile url={url} />
  ) : (
    <MockDesktop url={url} />
  );
};

export default ViewportConditional;
