import Image from "next/image";

import bgDeskTop from "@/assets/images/background-pattern-desktop.svg";
import bgMobile from "@/assets/images/background-pattern-mobile.svg";

export default function ImageContainer() {
  return (
    <section>
      <div className="hidden md:block">
        <Image
          src={bgDeskTop}
          alt="bg image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={bgMobile}
          alt="bg image"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
