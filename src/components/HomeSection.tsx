import { Heart, Sparkles, Shield } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="accueil" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Bienvenue dans un espace dédié à l'apaisement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
            <p className="text-center text-xl">
              Je vous accompagne grâce à l'hypnose ericksonienne, à la PNL, au coaching mental et aux séances bien-être, afin de vous aider à retrouver équilibre et confiance.
            </p>

            <p className="text-center">
              Chaque séance est personnalisée, bienveillante et centrée sur vos besoins profonds.
            </p>

            <p className="text-center">
              Mon approche douce et intuitive vous invite à reconnecter avec votre potentiel, à libérer les tensions et à retrouver une harmonie durable entre le corps et l'esprit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Approche Bienveillante</h3>
              <p className="text-gray-600 text-sm">
                Un accompagnement personnalisé dans un espace de sécurité et d'écoute
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Transformation Intérieure</h3>
              <p className="text-gray-600 text-sm">
                Libérez votre potentiel et retrouvez confiance en vous
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Pratique Éthique</h3>
              <p className="text-gray-600 text-sm">
                Dans le respect d'un code de déontologie professionnel
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <p className="text-center text-sm text-gray-700 italic">
              <strong>Important :</strong> L'hypnose est une pratique complémentaire qui ne remplace en aucun cas un traitement médical et s'exerce dans le respect d'un code de déontologie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
