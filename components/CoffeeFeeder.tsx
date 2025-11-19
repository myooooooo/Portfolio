
import React, { useState } from 'react';

const CoffeeFeeder: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isSipping, setIsSipping] = useState(false);
  const [message, setMessage] = useState("");

  const messages = ["Yum! 😋", "Energy++ ⚡", "Coding fuel ⛽", "More! ☕", "Alive! 🧟‍♀️", "Thanks! 💖"];

  const giveCoffee = () => {
    setCount(c => c + 1);
    setIsSipping(true);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    
    setTimeout(() => {
      setIsSipping(false);
    }, 500);
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 hidden md:flex flex-col items-end gap-2">
       {isSipping && (
         <div className="bg-white px-3 py-1 rounded-t-xl rounded-bl-xl shadow-md text-xs font-bold text-pop-purple animate-fade-in-up">
            {message}
         </div>
       )}
       
       <div className="relative group">
           <button 
             onClick={giveCoffee}
             className="w-14 h-14 bg-orange-100 border-2 border-orange-400 rounded-full flex items-center justify-center text-2xl shadow-[4px_4px_0px_0px_#f97316] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#f97316] transition-all active:scale-95"
           >
             <span className={`transform transition-transform ${isSipping ? 'scale-125 rotate-12' : 'group-hover:rotate-12'}`}>
                ☕
             </span>
           </button>
           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
             {count}
           </span>
       </div>
    </div>
  );
};

export default CoffeeFeeder;
