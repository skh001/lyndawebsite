import { Calendar, Video, TreePine, Sparkles, ArrowDown } from 'lucide-react';

export default function ReservationSection() {
  return (
    <section id="reservation" className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Réservation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Prenez rendez-vous facilement en choisissant le créneau qui vous convient.
            </p>
            <p className="text-gray-600 mt-2">
              Je vous accueille en ligne ou en présentiel (plein air), selon vos préférences.
            </p>

            {/* --- BOUTON CORRIGÉ (C'est maintenant un lien direct) --- */}
            <div className="mt-8">
              <a 
                href="#tarifs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-rose-200 text-rose-500 rounded-full font-medium hover:bg-rose-50 hover:border-rose-300 hover:shadow-md transition-all duration-300 group"
              >
                <Sparkles className="w-4 h-4" />
                Découvrir les formules & tarifs
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
            {/* -------------------------------------------------------- */}

          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Séance en ligne</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Confort de votre domicile, qualité d'accompagnement identique
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Séance en plein air</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Reconnexion avec la nature en Suisse
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-rose-500" />
              <h3 className="text-2xl font-light text-gray-800">Choisissez votre créneau</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-4">
                Widget Calendly à intégrer ici
              </p>
              <p className="text-sm text-gray-500">
                Pour intégrer Calendly, ajoutez votre URL Calendly et le widget s'affichera automatiquement.
              </p>
              <div className="mt-6">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}