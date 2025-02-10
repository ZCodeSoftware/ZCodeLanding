import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-center">
        Nuestro <span className="text-purple">Enfoque</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
        <Card
          title="Comprensión del Negocio"
          icon={<PhaseIcon order="Fase 1" />}
          des="Analizamos a fondo tu empresa y tus necesidades para proponer la mejor estrategia tecnológica. Nos involucramos en entender tu modelo de negocio para crear soluciones efectivas."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-gray-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Diseño y Desarrollo"
          icon={<PhaseIcon order="Fase 2" />}
          des="Diseñamos y desarrollamos software a medida con tecnología de vanguardia. Priorizamos la escalabilidad, el rendimiento y la experiencia del usuario."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gray-900 rounded-3xl overflow-hidden"
            colors={[
              [125, 211, 252],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Entrega y Optimización"
          icon={<PhaseIcon order="Fase 3" />}
          des="Implementamos tu solución y realizamos pruebas rigurosas para garantizar calidad. Ofrecemos soporte y mejoras continuas para asegurar el éxito a largo plazo."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] dark:border-white/[0.2] max-w-sm w-full mx-auto p-6 relative lg:h-[35rem] rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 transition duration-200 mx-auto">
          {icon}
        </div>
        <h2 className="text-white text-3xl font-bold mt-4 group-hover/canvas-card:text-purple transition duration-200">
          {title}
        </h2>
        <p className="text-sm text-dark mt-4 transition duration-200">{des}</p>
      </div>
    </div>
  );
};

const PhaseIcon = ({ order }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
        {order}
      </span>
    </button>
  );
};
