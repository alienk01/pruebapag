const features = [
  { 
    icon: "✍️", 
    title: "Currículums con IA", 
    desc: "Nuestros algoritmos analizan las vacantes y optimizan tus palabras clave automáticamente." 
  },
  { 
    icon: "🧠", 
    title: "Personalización", 
    desc: "Cambia diseños y estructuras en tiempo real con nuestra interfaz intuitiva de drag-and-drop." 
  },
  { 
    icon: "📨", 
    title: "Asistente de Carta", 
    desc: "Genera cartas de presentación persuasivas que complementan perfectamente tu perfil." 
  }
];

const Features = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Herramientas inteligentes que funcionan para ti</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Tecnología de vanguardia para dar el siguiente salto en tu carrera profesional.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 border border-gray-100 rounded-3xl hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group bg-white" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
