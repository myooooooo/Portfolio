import React from 'react';

const DiscordTestimonials: React.FC = () => {
  const messages = [
    {
      id: 1,
      user: "StudioKaira",
      avatar: "🎨",
      role: "Art Director",
      color: "#FF0080",
      content: "Zineb a une patte artistique incroyable. Son OC Myo est juste... wow. Et elle gère la commu comme une reine ! 👑",
      time: "Aujourd'hui à 14:32"
    },
    {
      id: 2,
      user: "DevDu75",
      avatar: "👨‍💻",
      role: "Fullstack Dev",
      color: "#00E0FF",
      content: "J'ai bossé avec elle sur Sportoro. Son design UI était pixel perfect et elle code en Python ? Trop fort. 🚀",
      time: "Hier à 09:15"
    },
    {
      id: 3,
      user: "MmiLover",
      avatar: "🎓",
      role: "Étudiant",
      color: "#FEE75C",
      content: "Franchement la meilleure CM qu'on ait eu sur le serveur. Toujours dispo pour aider sur Photoshop !",
      time: "Hier à 18:42"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
           <span className="bg-white text-pop-purple px-4 py-1 rounded-full text-sm font-bold border border-pop-purple shadow-sm inline-block mb-2 transform rotate-2">
             Wall of Love 💬
           </span>
           <h3 className="font-display text-4xl text-pop-purple">
             Vu sur le Serveur <span className="text-[#5865F2]">Discord</span>
           </h3>
        </div>

        <div className="bg-[#36393f] rounded-xl overflow-hidden shadow-2xl border-4 border-[#2f3136] transform transition-transform hover:scale-[1.01]">
          {/* Discord Header fake */}
          <div className="bg-[#202225] p-3 flex items-center border-b border-[#202225]">
             <span className="text-gray-400 text-2xl mr-2">#</span>
             <span className="text-white font-bold">love-pour-zineb</span>
             <span className="text-gray-400 text-xs ml-4 border-l border-gray-600 pl-4">Ce salon est dédié aux feedbacks !</span>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-6 font-sans">
            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-4 group hover:bg-[#32353b] p-2 rounded-md transition-colors">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-gray-700`} style={{backgroundColor: msg.color + '20'}}>
                    {msg.avatar}
                 </div>
                 <div>
                    <div className="flex items-baseline gap-2">
                        <span className="font-bold hover:underline cursor-pointer" style={{color: msg.color}}>{msg.user}</span>
                        <span className="bg-[#5865F2] text-white text-[10px] px-1 rounded uppercase font-bold">BOT</span>
                        <span className="text-gray-400 text-xs">{msg.time}</span>
                    </div>
                    <p className="text-[#dcddde] text-sm md:text-base mt-1">
                        {msg.content}
                    </p>
                 </div>
              </div>
            ))}
            
            {/* Fake input area */}
            <div className="mt-6 mx-2 mb-2">
                <div className="bg-[#40444b] rounded-lg p-3 text-gray-500 text-sm flex items-center gap-2">
                    <div className="bg-gray-400 rounded-full w-5 h-5 flex items-center justify-center text-xs text-[#40444b] font-bold">+</div>
                    <span>Envoyer un message dans #love-pour-zineb</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordTestimonials;