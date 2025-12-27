import { Clock, Brain, Sparkles, TreePine, ArrowRight, Laptop, Check } from 'lucide-react';

// --- CONFIGURATION ---
const CALENDLY_URL = "https://calendly.com/lyndakhenchelaoui/hypnose-ericksonienne"; 
// ---------------------

export default function PricingSection() {
  const services = [
    {
      icon: Sparkles,
      title: "Hypnose Ericksonienne",
      duration: "60-90 min",
      price: "120 CHF",
      features: [
        "Séance personnalisée",
        "Suivi post-séance",
        "Support par email"
      ]
    },
    {
      icon: Brain,
      title: "Coaching mental & PNL",
      duration: "60 min",
      price: "100 CHF",
      features: [
        "Techniques PNL",
        "Exercices pratiques",
        "Plan d'action personnalisé"
      ]
    },
    {
      icon: Laptop, // Icône adaptée pour le Online
      title: "Fitness Online",
      duration: "45 min",
      price: "80 CHF",
      features: [
        "Séance en visio",
        "Programme sur mesure",
        "Suivi de progression"
      ]
    },
    {
      icon: TreePine,
      title: "Fitness Outdoor",
      duration: "60 min",
      price: "90 CHF",
      features: [
        "En plein air",
        "Exercices variés",
        "Motivation & énergie"
      ]
    },
  ];

  const handleBookingClick = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Tarifs transparents
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Des prestations de qualité à des tarifs justes et accessibles.
            </p>
          </div>

          {/* Grille des services */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-rose-50 rounded-2xl p-6 flex flex-col shadow-sm border border-rose-100 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1"
              >
                {/* Header Carte */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-rose-500" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-medium text-gray-800 leading-tight">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Liste des features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Footer Carte (Prix + Bouton) */}
                <div className="pt-4 border-t border-rose-200 mt-auto">
                    <span className="text-2xl font-semibold text-rose-500 block mb-3">
                        {service.price}
                    </span>
                    <button
                        onClick={handleBookingClick}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-colors duration-200"
                    >
                        Réserver
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
              </div>
            ))}
          </div>

          {/* Section Forfaits */}
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Forfaits multi-séances</h3>
            <p className="text-gray-600 mb-4">
              Des tarifs préférentiels pour un accompagnement sur la durée.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6">
              <span className="inline-block px-4 py-2 bg-white rounded-lg text-rose-600 font-medium shadow-sm">
                Pack de 5 séances : <span className="font-bold">-10%</span>
              </span>
              <span className="inline-block px-4 py-2 bg-white rounded-lg text-rose-600 font-medium shadow-sm">
                Pack de 10 séances : <span className="font-bold">-15%</span>
              </span>
            </div>
            <button 
                onClick={() => window.location.href = "mailto:Lyndakhenchelaoui@gmail.com"}
                className="text-sm text-gray-500 hover:text-rose-500 underline decoration-rose-300 underline-offset-4 transition-colors"
            >
              Me contacter pour en savoir plus
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}