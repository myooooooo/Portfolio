import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage, ChatSender } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', sender: ChatSender.BOT, text: "Salut ! ✨ Je suis l'assistant de Zineb. En quoi puis-je t'aider ?" }
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

    // Format history for the updated SDK
    const history = messages.map(m => ({
      role: m.sender === ChatSender.USER ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(history, userMsg.text);
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
          text: "Oups ! ✨ Réessaie dans un instant." 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, messages]);

  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end">
      {isOpen && (
        <div className="mb-6 w-80 md:w-[360px] bg-white border border-black shadow-2xl flex flex-col overflow-hidden animate-scale-in origin-bottom-right">
          <div className="bg-black p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pop-pink rounded-none"></div>
                <div>
                    <span className="text-sm font-black tracking-widest uppercase block">ZINEB.AI</span>
                    <span className="text-[10px] opacity-50 font-bold block uppercase tracking-widest">Digital Twin</span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">✕</button>
          </div>
          
          <div className="h-96 overflow-y-auto p-6 space-y-6 bg-swiss-gray scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === ChatSender.USER ? 'items-end' : 'items-start'}`}>
                <span className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-30">
                  {msg.sender === ChatSender.USER ? 'Visitor' : 'Zineb AI'}
                </span>
                <div className={`max-w-[90%] px-4 py-3 text-sm font-medium border ${
                  msg.sender === ChatSender.USER 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-black/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-1 p-2">
                <div className="w-1.5 h-1.5 bg-pop-pink rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-pop-pink rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-pop-pink rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-black flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-grow bg-swiss-gray border-none px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-pop-pink"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-black text-white w-12 h-12 flex items-center justify-center hover:bg-pop-pink transition-colors disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 border-2 border-black flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-110 ${isOpen ? 'bg-white rotate-90' : 'bg-pop-pink'}`}
      >
        {isOpen ? <span className="text-black text-xl">✕</span> : <span className="text-white text-2xl font-black">AI</span>}
      </button>
    </div>
  );
};

export default ChatWidget;