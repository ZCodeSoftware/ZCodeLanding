import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pt-10">
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="ZCode Software Factory"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            En ZCode, transformamos tus ideas en soluciones digitales innovadoras. 
            Desarrollamos software a medida que impulsa tu negocio hacia el futuro. 
            Nuestro equipo de expertos está comprometido con la excelencia, asegurando que cada proyecto 
            se entregue con la más alta calidad y precisión. Con un enfoque y diseños futuristas, 
            confiamos en llevar tu visión a la realidad con tecnología de vanguardia y un enfoque centrado en el cliente.
          </p>
          <a href="#about">
            <MagicButton
              title="Saber Más"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;