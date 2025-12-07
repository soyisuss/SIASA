import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '¡Hola! Bienvenido a SIASA. ¿En qué puedo ayudarte hoy con nuestras soluciones de seguridad?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMessage.text);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[450px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-[#005c99] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-bold text-sm">Asistente Virtual SIASA</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[#0073e6] text-white rounded-tr-none'
                      : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-500 border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu duda aquí..."
                className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0073e6]"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#005c99] text-white p-2 rounded-full hover:bg-[#004d80] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
            <div className="text-[10px] text-gray-400 text-center mt-2">
                Powered by Gemini AI
            </div>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-center w-14 h-14 bg-[#005c99] rounded-full shadow-lg hover:bg-[#004d80] transition-all duration-300 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute right-full mr-4 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat de Ayuda
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;