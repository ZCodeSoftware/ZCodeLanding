export const navItems = [
  { name: "INICIO", link: "/" },
  { name: "QUIÉNES SOMOS", link: "#about" },
  { name: "SERVICIOS", link: "#projects" },
  { name: "TESTIMONIOS", link: "#testimonials" },
  { name: "GALERIA", link: "/gallery" },
  { name: "CONTACTO", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Colaboración Cercana",
    description:
      "Priorizamos la colaboración con el cliente, fomentando la comunicación abierta y continua.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/attention.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Desarrollo Web",
    description:
      "Creamos aplicaciones web modernas y escalables para impulsar tu negocio.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Desarrollo Móvil",
    description:
      "Desarrollamos aplicaciones móviles nativas y multiplataforma para alcanzar a tus usuarios en cualquier dispositivo.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/iphone.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Consultoría Tecnológica",
    description:
      "Ofrecemos asesoramiento experto para ayudarte a tomar decisiones tecnológicas informadas.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Soluciones Personalizadas",
    description:
      "Desarrollamos soluciones de software a medida para satisfacer las necesidades específicas de tu negocio.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/software.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Soporte Continuo",
    description:
      "Proveemos soporte y mantenimiento continuo para asegurar el éxito a largo plazo de tus proyectos.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const testimonials = [
  {
    quote:
      "Trabajar con Z Code fue una experiencia excepcional. Su equipo entendió perfectamente nuestras necesidades y desarrolló una solución a medida que optimizó nuestros procesos internos. Altamente recomendados.",
    name: "Carolina Gómez",
    title: "CEO, Innovatech Solutions",
  },
  {
    quote:
      "Z Code transformó nuestra idea en una plataforma SaaS escalable y eficiente. La comunicación y el profesionalismo del equipo fueron clave para el éxito del proyecto.",
    name: "Juan Pérez",
    title: "Fundador, StartUp SaaS",
  },
  {
    quote:
      "Necesitábamos una aplicación móvil funcional y atractiva para nuestros clientes, y Z Code superó nuestras expectativas. Su enfoque en la experiencia del usuario marcó la diferencia.",
    name: "Sofía Martínez",
    title: "Gerente de Producto, FitApp",
  },
  {
    quote:
      "Contratamos a Z Code para la integración de múltiples APIs en nuestro sistema y su trabajo fue impecable. Ahora nuestra plataforma es mucho más eficiente y automatizada.",
    name: "Roberto García",
    title: "CTO, E-Commerce Pro",
  },
  {
    quote:
      "Gracias a Z Code, logramos optimizar y modernizar nuestro software existente sin interrumpir nuestras operaciones. Su equipo técnico es de primer nivel.",
    name: "Laura Rodríguez",
    title: "Directora de Tecnología, FinTech Solutions",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrollo de Software a Medida",
    desc: "Creamos soluciones personalizadas para empresas, adaptándonos a sus necesidades y objetivos específicos.",
    className: "md:col-span-2",
    thumbnail: "/software-a-medida.jpg",
  },
  {
    id: 2,
    title: "Desarrollo de Plataformas SaaS",
    desc: "Diseñamos y construimos plataformas SaaS escalables para digitalizar y optimizar procesos empresariales.",
    className: "md:col-span-2",
    thumbnail: "/saas.jpg",
  },
  {
    id: 3,
    title: "Desarrollo de Aplicaciones Móviles",
    desc: "Creamos apps móviles nativas y multiplataforma para Android e iOS, impulsando la movilidad de los negocios.",
    className: "md:col-span-2",
    thumbnail: "/apps-moviles.jpg",
  },
  {
    id: 4,
    title: "Consultoría en Tecnología",
    desc: "Brindamos asesoramiento en desarrollo de software, arquitectura de sistemas y transformación digital.",
    className: "md:col-span-2",
    thumbnail: "/consultoria.jpg",
  },
  {
    id: 5,
    title: "Integración de APIs y Servicios",
    desc: "Conectamos software con APIs de terceros para mejorar la eficiencia y automatización de los procesos empresariales.",
    className: "md:col-span-2",
    thumbnail: "/integracion-apis.jpg",
  },
  {
    id: 6,
    title: "Optimización y Mantenimiento de Software",
    desc: "Mejoramos el rendimiento, la seguridad y la escalabilidad de sistemas existentes, asegurando su continuidad operativa.",
    className: "md:col-span-2",
    thumbnail: "/mantenimiento-software.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
