import React from "react";

export default function Background() {
  return (
    <picture>
      <img
        className="hidden lg:block absolute l"
        srcSet="src\assets\AnimatedShapeDesktop.svg"
      />
      <img
        className="hidden lg:hidden sm:block absolute"
        srcSet="src\assets\AnimatedShapeTablet.svg"
      />
      <img
        className="sm:hidden absolute "
        src="src\assets\AnimatedShapephone.svg"
        alt="Responsive Image"
      />
    </picture>
  );
}
