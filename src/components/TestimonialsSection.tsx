import { Star, Instagram } from 'lucide-react';

export default function TestimonialsSection() {
  const realTestimonials = [
    {
      id: 1,
      name: "Nour",
      text: "Depuis que je suis sortie du rdv je me sens mieux dans ma peau, je ne sais pas comment expliquer faut le vivre pour le comprendre. Je conseille vraiment l'hypnose aux personnes qui ont vécu le harcèlement ou d'autres traumatismes.",
      rating: 5,
    },
    {
      id: 2,
      name: "Une patiente",
      text: "Au début j'étais un peu stressée et réticente, mais vous avez su me mettre à l'aise. Je me suis sentie vraiment bien, soulagée et comprise. Après la séance, j'ai eu l'impression de revivre : un sentiment incroyable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Luna",
      text: "Je me réjouis de te raconter comment se passent les choses depuis notre rdv, il y a eu beaucoup d'évolution. J'ai enfin réussi à faire certaines choses. Je te remercie infiniment.",
      rating: 5,
    },
  ];

  return (
    <section id="avis" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Témoignages
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Découvrez les retours et expériences des personnes que j'ai accompagnées.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {realTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic flex-grow">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-medium text-gray-800 mt-auto">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                <Star className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Avis Google</h3>
              <p className="text-gray-600 text-sm mb-4">
                Retrouvez tous mes avis clients sur Google
              </p>
              <a
                href="https://share.google/lxi8b4u2OhFz62qnh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-gray-700 rounded-full hover:shadow-md transition-shadow text-sm font-medium"
              >
                Voir les avis Google
              </a>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                <Instagram className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Instagram</h3>
              <p className="text-gray-600 text-sm mb-4">
                Découvrez les retours de mes clients sur Instagram
              </p>
              <a
                href="https://www.instagram.com/lynda_rayonnement/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-gray-700 rounded-full hover:shadow-md transition-shadow text-sm font-medium"
              >
                Suivre sur Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}