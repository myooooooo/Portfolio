import React, { useState, useEffect } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === 'submitting') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 300);
      return () => clearInterval(interval);
    } else if (status === 'success' || status === 'idle') {
      setProgress(0);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user types
    if (errors[e.target.name]) {
        setErrors(prev => ({...prev, [e.target.name]: ''}));
    }
  };

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = "Hé ! T'as oublié ton joli prénom 🙈";
    if (!formData.email.trim()) newErrors.email = "Sans email, je te réponds par télépathie ? 🔮";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Ça ressemble pas à un email ça chérie... 💅";
    if (!formData.message.trim()) newErrors.message = "Ne sois pas timide, dis-moi tout ! 💌";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setProgress(10);

    // Simulate form submission to a backend
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setProgress(100);
      setTimeout(() => {
         console.log("Form Submitted:", formData);
         setStatus('success');
         setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-[0px_10px_40px_rgba(255,0,128,0.15)] border border-pop-light relative overflow-hidden transition-all hover:shadow-[0px_15px_50px_rgba(157,0,255,0.2)] animate-scale-in">
      <div className="absolute top-0 left-0 w-full h-2 bg-pop-light">
         {/* Progress Bar */}
         <div 
           className="h-full bg-gradient-to-r from-pop-pink to-pop-purple transition-all duration-300 ease-out"
           style={{ width: status === 'submitting' ? `${progress}%` : '0%' }}
         ></div>
      </div>
      
      {status === 'success' ? (
        <div className="text-center py-12 animate-fade-in-up">
          <div className="text-7xl mb-4 animate-bounce">🎉</div>
          <h3 className="text-3xl font-display text-pop-pink mb-2">Message Reçu !</h3>
          <p className="text-gray-600 font-medium">Merci sweetie ! Je sors mes pinceaux et je te réponds.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-8 px-6 py-3 bg-pop-light text-pop-pink font-bold rounded-full hover:bg-pop-pink hover:text-white transition-colors transform hover:scale-110"
          >
            Envoyer un autre ✨
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative">
             {/* Loading Overlay */}
             {status === 'submitting' && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-3xl animate-fade-in-up">
                    <div className="relative w-20 h-20 mb-4">
                         <div className="absolute inset-0 border-4 border-pop-light rounded-full"></div>
                         <div className="absolute inset-0 border-4 border-pop-pink rounded-full border-t-transparent animate-spin"></div>
                         <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse">💌</div>
                    </div>
                    <p className="text-pop-purple font-bold animate-pulse">Envoi magique en cours...</p>
                    <div className="w-48 h-2 bg-pop-light rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-pop-pink transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
             )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-pop-purple ml-3 group-focus-within:text-pop-pink transition-colors">Nom</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className={`w-full bg-pop-light/30 border-2 p-4 rounded-2xl text-sm focus:bg-white focus:outline-none transition-all text-pop-purple placeholder-pop-pink/50 ${errors.name ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-pop-pink'}`}
                    placeholder="Ton joli nom d'artiste"
                    />
                    {errors.name && <p className="text-red-500 text-xs font-bold ml-3 animate-wiggle">{errors.name}</p>}
                </div>
                <div className="space-y-2 group">
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-pop-purple ml-3 group-focus-within:text-pop-pink transition-colors">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className={`w-full bg-pop-light/30 border-2 p-4 rounded-2xl text-sm focus:bg-white focus:outline-none transition-all text-pop-purple placeholder-pop-pink/50 ${errors.email ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-pop-pink'}`}
                    placeholder="ton@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs font-bold ml-3 animate-wiggle">{errors.email}</p>}
                </div>
            </div>

            <div className="space-y-2 group">
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest font-bold text-pop-purple ml-3 group-focus-within:text-pop-pink transition-colors">Objet</label>
                <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full bg-pop-light/30 border-2 border-transparent p-4 rounded-2xl text-sm focus:bg-white focus:outline-none focus:border-pop-pink transition-all text-pop-purple placeholder-pop-pink/50"
                placeholder="Projet ? Collab ? Fan art ?"
                />
            </div>

            <div className="space-y-2 group">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-pop-purple ml-3 group-focus-within:text-pop-pink transition-colors">Message</label>
                <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full bg-pop-light/30 border-2 p-4 rounded-2xl text-sm focus:bg-white focus:outline-none transition-all text-pop-purple placeholder-pop-pink/50 resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-pop-pink'}`}
                placeholder="Raconte-moi tout... (J'adore les détails !)"
                />
                {errors.message && <p className="text-red-500 text-xs font-bold ml-3 animate-wiggle">{errors.message}</p>}
            </div>

            <div className="pt-4 flex justify-center">
                <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-pop-pink text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-[0px_8px_0px_0px_#c40062] hover:shadow-[0px_4px_0px_0px_#c40062] hover:translate-y-1 hover:bg-pop-purple transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:translate-y-2 active:shadow-none flex items-center gap-2 group"
                >
                <span>Envoyer le message</span>
                <span className="group-hover:rotate-45 transition-transform duration-300">💖</span>
                </button>
            </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;