import { Mail, Instagram, MapPin, Send, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9fe3a418-387b-468c-acb1-93c9c28e308c',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Je suis à votre écoute pour toute question ou demande d'informations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-8">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors outline-none"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors outline-none resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                    Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
                  </div>
                )}
              </form>

              <p className="mt-6 text-sm text-gray-500 italic">
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-gray-800 mb-8">
                Autres moyens de contact
              </h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-2xl border border-rose-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                      <a
                        href="mailto:cLyndakhenchelaoui@gmail.com"
                        className="text-gray-600 hover:text-rose-500 transition-colors"
                      >
                        Lyndakhenchelaoui@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-2xl border border-rose-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Instagram</h4>
                      <a
                        href="https://www.instagram.com/lynda_rayonnement/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-rose-500 transition-colors"
                      >
                        @lynda_rayonnement
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-2xl border border-rose-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Localisation</h4>
                      <p className="text-gray-600">Switzerland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Je m'engage à répondre à toutes vos demandes dans les 48 heures. Votre vie privée est importante, toutes les informations partagées restent strictement confidentielles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
