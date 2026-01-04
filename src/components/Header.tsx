import { Menu, X } from 'lucide-react'; 
import { useState } from 'react';

// 1. IMPORT YOUR LOGO HERE
// Make sure the filename matches exactly (logo.png vs Logo.png)
import logoImg from '../images/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* --- LOGO SECTION START --- */}
          <div className="flex items-center">
            <img 
              src={logoImg} // 2. USE THE IMPORTED VARIABLE
              alt="Logo Lynda" 
              className="h-10 w-auto object-contain"
            />
          </div>
          {/* --- LOGO SECTION END --- */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-rose-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><button onClick={() => scrollToSection('accueil')} className="text-gray-600 hover:text-rose-500 transition-colors">Accueil</button></li>
            <li><button onClick={() => scrollToSection('reservation')} className="text-gray-600 hover:text-rose-500 transition-colors">Réservation</button></li>
            <li><button onClick={() => scrollToSection('avis')} className="text-gray-600 hover:text-rose-500 transition-colors">Avis</button></li>
            <li><button onClick={() => scrollToSection('qui-suis-je')} className="text-gray-600 hover:text-rose-500 transition-colors">Qui suis-je</button></li>
            <li><button onClick={() => scrollToSection('tarifs')} className="text-gray-600 hover:text-rose-500 transition-colors">Tarifs</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-rose-500 transition-colors">Contact</button></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li><button onClick={() => scrollToSection('accueil')} className="block w-full text-left text-gray-600 hover:text-rose-500 transition-colors">Accueil</button></li>
            <li><button onClick={() => scrollToSection('reservation')} className="block w-full text-left text-gray-600 hover:text-rose-500 transition-colors">Réservation</button></li>
            <li><button onClick={() => scrollToSection('avis')} className="block w-full text-left text-gray-600 hover:text-rose-500 transition-colors">Avis</button></li>
            <li><button onClick={() => scrollToSection('qui-suis-je')} className="block w-full text-left text-gray-600 hover:text-rose-500 transition-colors">Qui suis-je</button></li>
            <li><button onClick={() => scrollToSection('tarifs')} className="block w-full text-left text-gray-600 hover:text-rose-500 transition-colors">Tarifs</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-rose-500 transition-colors">Contact</button></li>
          </ul>
        )}
      </nav>
    </header>
  );
}