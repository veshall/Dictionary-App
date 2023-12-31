import React from "react";
import desktopSvg from "../assets/AnimatedShapeDesktop.svg";
import tabletSvg from "../assets/AnimatedShapeTablet.svg";
import PhoneSvg from "../assets/AnimatedShapephone.svg";

export default function Background() {
  return (
    <picture>
      <img className="hidden lg:block absolute " src={desktopSvg} />
      <img className="hidden lg:hidden sm:block absolute" src={tabletSvg} />
      <img className="sm:hidden absolute" src={PhoneSvg} />
    </picture>
  );
}
