import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Comment se déroule une séance ?",
      answer: "Une première discussion pour comprendre vos besoins, suivie d'un accompagnement personnalisé (hypnose, PNL, coaching…). Chaque séance est adaptée à votre rythme et à vos objectifs.",
    },
    {
      question: "Combien de séances sont nécessaires ?",
      answer: "Cela dépend de votre objectif. Certaines personnes ressentent une évolution dès la première séance. D'autres préfèrent un suivi régulier pour ancrer les changements en profondeur.",
    },
    {
      question: "L'hypnose est-elle dangereuse ?",
      answer: "Non. C'est un état naturel de conscience modifiée, doux et sécurisé. Vous restez toujours conscient et en contrôle. L'hypnose ne peut pas vous faire faire quelque chose contre votre volonté.",
    },
    {
      question: "Puis-je faire une séance en ligne ?",
      answer: "Oui, toutes les séances sont disponibles en visio, avec la même qualité d'accompagnement. L'important est de vous installer dans un endroit calme où vous vous sentez en sécurité.",
    },
    {
      question: "Quelles sont les contre-indications ?",
      answer: "L'hypnose est déconseillée en cas de troubles psychiatriques graves. Elle ne remplace jamais un traitement médical et doit être pratiquée en complément d'un suivi professionnel si nécessaire.",
    },
    {
      question: "Comment me préparer à ma première séance ?",
      answer: "Aucune préparation particulière n'est nécessaire. Venez simplement avec l'intention d'être ouvert au changement, dans un espace calme et confortable.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Questions fréquentes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Vous avez des questions ? Voici les réponses aux interrogations les plus courantes.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-rose-50/50 transition-colors"
                >
                  <span className="font-medium text-gray-800 text-lg">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-rose-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-rose-500" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
