import React from "react";

const WhatsappButton = () => {
  const phoneNumber = "3515177171";
  const message =
    "Hola, quiero hablar sobre el desarrollo de software, me comunico desde la web.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
      style={{ zIndex: 1000, cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.115 1.514 5.857L0 24l6.143-1.514A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.95 0-3.77-.5-5.357-1.357l-.393-.214-3.643.893.893-3.643-.214-.393A10.44 10.44 0 011.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5zM17.25 14.25c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.88 1.23 3.08c.15.2 2.13 3.27 5.17 4.58.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.08 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
      <span className="ml-2 hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsappButton;
