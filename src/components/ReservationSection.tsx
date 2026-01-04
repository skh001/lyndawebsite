import { Calendar, Video, MapPin, Sparkles, ArrowDown } from 'lucide-react';

export default function ReservationSection() {
  return (
    <section
      id="reservation"
      className="py-20 bg-gradient-to-br from-rose-50 to-amber-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto"> {/* Increased width slightly for 3 columns */}
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Réservation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>

            <p className="text-lg text-gray-600">
              Prenez rendez-vous facilement en choisissant le créneau qui vous convient.
            </p>
            <p className="text-gray-600 mt-2">
              Je vous accueille en ligne ou en cabinet (Neuchâtel & Boudry), selon vos préférences.
            </p>

            {/* Tarifs button */}
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
          </div>

          {/* Session types */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Option 1: Online */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Séance en ligne
              </h3>
              <p className="text-gray-600 text-sm">
                Confort de votre domicile, qualité identique
              </p>
            </div>

            {/* Option 2: Neuchâtel */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Cabinet Neuchâtel
              </h3>
              <p className="text-gray-600 text-sm">
                Consultation en présentiel au centre-ville
              </p>
            </div>

            {/* Option 3: Boudry */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Cabinet Boudry
              </h3>
              <p className="text-gray-600 text-sm">
                Consultation en présentiel (région Littoral)
              </p>
            </div>
          </div>

          {/* Calendly section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-rose-500" />
              <h3 className="text-2xl font-light text-gray-800">
                Choisissez votre créneau
              </h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-4">
                Cliquez ci-dessous pour accéder au calendrier de réservation
              </p>

              <div className="mt-6">
                <a
                  href="https://calendly.com/lyndakhenchelaoui/hypnose-ericksonienne"
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