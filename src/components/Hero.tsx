import { Calendar, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On définit des animations CSS personnalisées pour un balancement lent et naturel
  const customAnimations = `
    @keyframes sway-slow {
      0%, 100% { transform: rotate(-2deg) translateY(0px); }
      50% { transform: rotate(2deg) translateY(15px); }
    }
    @keyframes sway-slower {
       0%, 100% { transform: rotate(1deg) translateX(0px) scale(1); }
       50% { transform: rotate(-1deg) translateX(20px) scale(1.05); }
    }
    .animate-sway-slow { animation: sway-slow 15s ease-in-out infinite; }
    .animate-sway-slower { animation: sway-slower 20s ease-in-out infinite; }
  `;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50 pt-20 overflow-hidden">
      {/* Injection des styles d'animation */}
      <style>{customAnimations}</style>

      {/* --- BACKGROUND ANIMÉ --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Vos anciennes taches de couleur, mais ralenties pour un effet "respiration" */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-rose-200/40 rounded-full filter blur-3xl animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-amber-200/40 rounded-full filter blur-3xl animate-pulse delay-1000 duration-[12s]"></div>

        {/* NOUVEAU : Silhouette de branche en haut à gauche */}
        <div className="absolute -top-20 -left-20 opacity-20 animate-sway-slow text-rose-300">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[30rem] h-[30rem] transform -rotate-12">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
        </div>

        {/* NOUVEAU : Silhouette de feuillage en bas à droite */}
        <div className="absolute -bottom-32 -right-20 opacity-20 animate-sway-slower text-amber-300/80 delay-1000">
             <svg width="500" height="500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-[40rem] h-[40rem] transform rotate-45">
                <path d="M21,12C21,9.97 19.97,8.11 18.4,7L17.14,9.34L18.87,12.33L17,15.56L15.26,12.57L17,9.57L16,7.85L14.26,10.85L15.7,13.33L17.43,16.33L15.7,19.33L13.96,16.33L12.5,13.81L10.77,16.81L12.5,19.81L10.77,22.81L9.03,19.81L10.5,17.29L8.77,14.29L7.3,16.81L5.57,13.81L7.03,11.29L5.3,8.29L3.56,11.29L1.83,8.29L3.29,5.76L1.56,2.76L3.29,-0.24L5.03,2.76L6.76,5.76L8.5,2.76L10.23,5.76L11.96,2.76L13.7,5.76L15.43,2.76L17.17,5.76L18.9,2.76L20.63,5.76L22.37,2.76L24.1,5.76L22.37,8.76L20.63,5.76L19.17,8.29L21,12Z" />
            </svg>
        </div>

      </div>

      {/* --- CONTENU PRINCIPAL (Inchangé) --- */}
      <div className="relative container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 leading-tight">
            Lynda – Rayonnement & Bien-être
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Praticienne certifiée en Hypnose Ericksonienne & PNL
          </p>

          <p className="text-lg md:text-xl text-gray-500 mb-12">
            Coach bien-être & mentale | Coaching online & en plein air – Switzerland
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('reservation')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Réserver une séance
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-200"
            >
              <Mail className="w-5 h-5" />
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}