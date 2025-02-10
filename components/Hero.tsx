import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="flex justify-center relative z-10 mt-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <TextGenerateEffect
          words="Transformamos tu visión en software innovador."
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          En Z Code, no solo desarrollamos software a medida, nos sumergimos en
          tu negocio para entenderlo y aportar nuestra visión experta. Creamos
          soluciones digitales que optimizan procesos, potencian tu crecimiento
          y te preparan para el futuro.
        </p>
        <a href="#about">
          <MagicButton
            title="Descubre cómo lo hacemos"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
