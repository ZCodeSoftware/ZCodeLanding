import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { SocialLinks } from "./ui/SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full pb-0 mt-auto" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          ¿Listo para llevar <span className="text-purple">tu software</span> al
          siguiente nivel?
        </h1>
        <p className="text-white-200 my-5 text-center">
          Cuéntanos sobre tu proyecto y trabajemos juntos en la solución
          perfecta para tu negocio.
        </p>

        <a href="mailto:zcodesoftware.info@gmail.com">
          <MagicButton
            title="Hablemos"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Z Code Software Factory
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
