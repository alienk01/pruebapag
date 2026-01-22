const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="text-center md:text-left">
        <span className="text-2xl font-bold text-blue-600">WPM AI</span>
        <p className="mt-4 text-gray-500 max-w-xs mx-auto md:mx-0">
          Transformando la búsqueda de empleo con inteligencia artificial avanzada.
        </p>
        <p className="mt-8 text-gray-400 text-sm italic">© 2025 ResumeAI. Todos los derechos reservados.</p>
      </div>
      <div className="flex justify-center md:justify-end gap-12 text-gray-600 font-medium">
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-blue-600 transition">Acerca de</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contacto</a></li>
        </ul>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-blue-600 transition">Privacidad</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Términos</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
