const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Crea currículums perfectos con <span className="text-blue-600">IA en segundos</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Optimiza tu perfil profesional para algoritmos de reclutamiento (ATS) y destaca entre la multitud con diseño inteligente.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Comienza la prueba gratuita
            </button>
            <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition">
              Ver demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-16 md:mt-0 relative" data-aos="zoom-in">
          {/* Aquí iría la animación Lottie o el Visual */}
          <div className="relative w-full aspect-square bg-blue-100 rounded-3xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center text-blue-400">
               {/* Placeholder para SVG Animado */}
               <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
