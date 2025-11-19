import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage, ChatSender } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', sender: ChatSender.BOT, text: "Coucou ! 👋 Je suis l'assistant de ce portfolio. Je connais tous les secrets (et les dessins) de la créatrice !" }
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

    // Format history for the API
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
      console.error(e);
      // Fallback error message in chat
      setMessages(prev => [...prev, { 
          id: Date.now().toString(), 
          sender: ChatSender.BOT, 
          text: "Oups, mon cerveau numérique a buggé... 🤯 Réessaie !" 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border-4 border-pop-pink flex flex-col animate-fade-in-up overflow-hidden transform transition-all">
          <div className="bg-pop-pink text-white p-4 flex justify-between items-center rounded-t-[1.2rem]">
            <div className="flex items-center gap-2">
                <span className="text-2xl bg-white rounded-full p-1">👩‍🎨</span>
                <div>
                    <span className="text-sm font-bold tracking-wide block">Arty Bot</span>
                    <span className="text-[10px] opacity-90 block">Online & Creative</span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white text-xl font-bold bg-pop-pink hover:bg-pop-purple rounded-full w-8 h-8 transition-colors">✕</button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-pop-light/30 space-y-4 scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm font-medium shadow-sm transition-all hover:shadow-md ${
                  msg.sender === ChatSender.USER 
                    ? 'bg-pop-purple text-white rounded-br-none' 
                    : 'bg-white text-pop-purple border border-pop-light rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Custom Loading Bubble */}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white text-pop-pink px-4 py-3 rounded-2xl rounded-bl-none border border-pop-light shadow-sm flex items-center gap-1">
                   <div className="w-2 h-2 bg-pop-pink rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-pop-pink rounded-full animate-bounce animation-delay-200"></div>
                   <div className="w-2 h-2 bg-pop-pink rounded-full animate-bounce animation-delay-400"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white flex gap-2 border-t border-pop-light">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Dis-moi tout..."
              className="flex-grow bg-pop-light/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink text-pop-purple placeholder-pop-purple/40 transition-shadow"
              disabled={isLoading}
              autoFocus
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-pop-pink text-white h-9 w-9 rounded-full flex items-center justify-center hover:bg-pop-purple transition-all disabled:opacity-50 disabled:hover:bg-pop-pink hover:rotate-12 active:scale-90"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 flex items-center justify-center rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 ${isOpen ? 'bg-pop-purple text-white rotate-90' : 'bg-pop-pink text-white animate-bounce-slow'}`}
      >
        {isOpen ? (
             <span className="text-2xl font-bold">✕</span>
        ) : (
             <span className="text-3xl">💬</span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;