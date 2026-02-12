import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage, ChatSender } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', sender: ChatSender.BOT, text: "Salut ! ✨ Je suis l'assistant IA de Zineb. Pose-moi tes questions sur ses créations ou son parcours !" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const historyStrings = messages.map(m => `${m.sender === ChatSender.USER ? 'Utilisateur' : 'Assistant'}: ${m.text}`);

    try {
      const responseText = await sendMessageToGemini(historyStrings, userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: ChatSender.BOT,
        text: responseText
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
      setMessages(prev => [...prev, { 
          id: Date.now().toString(), 
          sender: ChatSender.BOT, 
          text: "Oups, petit bug rose ! ✨ Réessaie dans un instant." 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, messages]);

  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-80 md:w-[360px] glass rounded-[2.5rem] shadow-2xl border border-pop-pink/10 flex flex-col overflow-hidden animate-scale-in origin-bottom-right">
          <div className="bg-pop-pink p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-inner">💖</div>
                <div>
                    <span className="text-white text-sm font-black tracking-tight block">ZINEB AI</span>
                    <span className="text-[10px] text-white/70 font-bold block uppercase tracking-widest">Active Now</span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">✕</button>
          </div>
          
          <div className="h-96 overflow-y-auto p-6 space-y-4 scroll-smooth bg-white/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-semibold shadow-sm transition-all ${
                  msg.sender === ChatSender.USER 
                    ? 'bg-pop-pink text-white rounded-br-none' 
                    : 'bg-white text-apple-black border border-gray-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                   <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-pop-pink rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-pop-pink rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-pop-pink rounded-full animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white/80 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask anything..."
              className="flex-grow bg-gray-50 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink text-apple-black"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-pop-pink text-white w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-pop-pink/20 disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 border-4 border-white ${isOpen ? 'bg-apple-black rotate-90' : 'bg-pop-pink animate-bounce'}`}
      >
        {isOpen ? <span className="text-white">✕</span> : <span className="text-white text-2xl">💖</span>}
      </button>
    </div>
  );
};

export default ChatWidget;