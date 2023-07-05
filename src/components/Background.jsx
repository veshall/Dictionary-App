import React from "react";

export default function Background() {
  return (
    <picture>
      <img
        className="hidden lg:block absolute "
        src="src\assets\AnimatedShapeDesktop.svg"
      />

      <img
        className="hidden lg:hidden sm:block absolute"
        src="src\assets\AnimatedShapeTablet.svg"
      />

      <img
        className="sm:hidden absolute"
        src="src\assets\AnimatedShapephone.svg"
      />
    </picture>
  );
}
