import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Lautaro Killpa",
    role: "Software Developer",
    quote: "Gracias a ResumeAI logré optimizar mi perfil y conseguí entrevistas en empresas top en semanas.",
    stars: 5,
    img: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Matias Garcia",
    role: "UX Designer",
    quote: "La personalización es increíble. No solo es texto, el diseño es profesional y limpio.",
    stars: 5,
    img: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Sofía Rodríguez",
    role: "Marketing Specialist",
    quote: "La carta de presentación generada por la IA parece escrita por un profesional experto.",
    stars: 4,
    img: "https://i.pravatar.cc/150?u=3"
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Lo que dicen nuestros usuarios</h2>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between" data-aos="zoom-in">
            <div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
            </div>
            <div className="flex items-center gap-4 border-t pt-6">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
