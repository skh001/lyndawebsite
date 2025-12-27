import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-light">Lynda KH</span>
            </div>
            <p className="text-gray-400 text-lg font-light mb-2">
              Merci pour votre visite.
            </p>
            <p className="text-gray-300 flex items-center justify-center gap-2">
              Prenez soin de vous, votre transformation commence dès aujourd'hui
              <Heart className="w-4 h-4 text-rose-400" />
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-300 leading-relaxed text-center">
                <strong className="text-white">Mention légale :</strong> L'hypnose ne remplace pas un suivi médical et doit être pratiquée en complément d'un traitement professionnel si nécessaire. Les séances proposées sont des accompagnements de bien-être et ne constituent pas des actes médicaux.
              </p>
            </div>

            <div className="text-center text-sm text-gray-400">
              <p>© {currentYear} Lynda – Rayonnement & Bien-être. Tous droits réservés.</p>
              <p className="mt-2">Praticienne certifiée en Hypnose Ericksonienne & PNL | Switzerland</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
