import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { SocialLinks } from "./ui/SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-0" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
       <h1 className="heading lg:max-w-[45vw]">
  ¿Listo para hacer <span className="text-purple">tu mudanza</span> sin estrés?
</h1>
<p className="text-white-200 md:mt-10 my-5 text-center">
  Contáctanos hoy mismo y planifiquemos juntos tu transición sin contratiempos a tu nuevo hogar.
</p>

        <a href="mailto:info.zcode@gmail.com">
  <MagicButton
    title="Hablemos"
    icon={<FaLocationArrow />}
    position="right"
  />
</a>
</div>
<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
  <p className="md:text-base text-sm md:font-normal font-light">
       Copyright © {new Date().getFullYear()} Mudanzas IZ
  </p>


        <div className="flex items-center md:gap-3 gap-6">
         <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
