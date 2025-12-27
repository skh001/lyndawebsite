import { Heart, Shield, Sparkles, Brain, Moon, Target, User } from 'lucide-react';

export default function AboutSection() {
  const approaches = [
    { icon: Heart, text: "Une écoute active, bienveillante et sans jugement" },
    { icon: Sparkles, text: "Un accompagnement entièrement personnalisé" },
    { icon: Shield, text: "Une vision corps-esprit pour un mieux-être global" },
    { icon: Brain, text: "Des outils concrets pour le mental, les émotions et les habitudes" },
    { icon: Heart, text: "Une présence humaine avant tout" },
  ];

  const benefits = [
    { icon: Moon, text: "Gestion du stress et des pensées envahissantes" },
    { icon: Sparkles, text: "Renforcement de la confiance et de l'estime de soi" },
    { icon: Heart, text: "Libération émotionnelle" },
    { icon: Moon, text: "Amélioration du sommeil" },
    { icon: Target, text: "Soutien dans les changements de vie" },
    { icon: Brain, text: "Motivation, objectifs, discipline" },
  ];

  // Placeholder pour le chemin de l'image de Lynda
  const lyndaPhotoUrl = "/images/lynda-photo.jpg"; 
  // N'oubliez pas de créer ou d'ajuster ce chemin dans votre projet !

  return (
    <section id="qui-suis-je" className="py-20 bg-gradient-to-br from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Qui suis-je
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>
          </div>

          {/* Nouveau bloc pour la photo et le texte introductif */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              
              {/* Emplacement de la Photo */}
              <div className="flex-shrink-0 w-full md:w-64 max-w-xs mx-auto md:mx-0">
                <div className="aspect-square w-full rounded-full overflow-hidden shadow-xl border-4 border-rose-200">
                  {/* Utilisation de l'URL définie plus haut */}
                  <img
                    src={lyndaPhotoUrl}
                    alt="Portrait de Lynda, Praticienne en Hypnose et PNL"
                    className="w-full h-full object-cover"
                    // Gérer l'état de chargement ou l'absence d'image avec un fallback
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/256/fecaca/fff?text=Lynda" }}
                  />
                  
                  {/* Option : Fallback si pas de photo (décommenter si vous voulez un simple icône au lieu du placeholder) */}
                  {/* <div className="w-full h-full flex items-center justify-center bg-rose-100">
                      <User className="w-1/3 h-1/3 text-rose-400" />
                  </div> */}
                  
                </div>
              </div>

              {/* Texte de présentation */}
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed flex-grow">
                <p className="text-xl font-light text-gray-800 mt-0">
                  Je m'appelle <span className="text-rose-500 font-medium">Lynda</span>, praticienne certifiée en Hypnose Ericksonienne et PNL, passionnée par le bien-être, la transformation intérieure et l'accompagnement global de la personne.
                </p>

                <p>
                  Mon parcours m'a naturellement conduite à développer une approche holistique, mêlant travail sur l'esprit, écoute du corps et ajustement des émotions.
                </p>

                <p className="mb-0">
                  Chaque séance est un espace de sécurité, de douceur et d'exploration intérieure.
                </p>
              </div>
            </div>
          </div>

          {/* Suites des approches et bienfaits (inchangés) */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100">
              <h3 className="text-2xl font-light text-gray-800 mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-500" />
                Mon approche
              </h3>
              <ul className="space-y-4">
                {approaches.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
              <h3 className="text-2xl font-light text-gray-800 mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                Les bienfaits possibles
              </h3>
              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-lg">
            <p className="text-lg md:text-xl font-light">
              Je vous accompagne toujours avec douceur, respect et confidentialité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}