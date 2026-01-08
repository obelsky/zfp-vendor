'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { knowledgeBase, fallbackResponse, welcomeMessage, type KnowledgeItem } from '@/lib/chatbot-knowledge';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  link?: string;
  linkText?: string;
  suggestions?: string[];
}

function findAnswer(query: string): KnowledgeItem {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Hledání shody v keywords
  let bestMatch: KnowledgeItem | null = null;
  let bestScore = 0;
  
  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      const normalizedKeyword = keyword.toLowerCase();
      
      // Přesná shoda nebo obsahuje
      if (normalizedQuery.includes(normalizedKeyword) || normalizedKeyword.includes(normalizedQuery)) {
        const score = normalizedKeyword.length;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = item;
        }
      }
      
      // Částečná shoda (slova)
      const queryWords = normalizedQuery.split(/\s+/);
      const keywordWords = normalizedKeyword.split(/\s+/);
      
      for (const qWord of queryWords) {
        for (const kWord of keywordWords) {
          if (qWord.length > 2 && kWord.length > 2) {
            if (qWord.includes(kWord) || kWord.includes(qWord)) {
              const score = Math.min(qWord.length, kWord.length);
              if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
              }
            }
          }
        }
      }
    }
  }
  
  return bestMatch || fallbackResponse;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 'welcome',
        type: 'bot',
        text: welcomeMessage.answer,
        suggestions: welcomeMessage.suggestions,
      }]);
    }
  }, [isOpen, messages.length]);
  
  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      text: messageText,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(messageText);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        text: answer.answer,
        link: answer.link,
        linkText: answer.linkText,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 500 + Math.random() * 500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };
  
  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full',
          'bg-gradient-to-r from-brand-gold to-brand-orange',
          'text-brand-darker shadow-lg',
          'flex items-center justify-center',
          'hover:shadow-[0_0_30px_rgba(207,84,0,0.4)] hover:scale-105',
          'transition-all duration-300',
          isOpen && 'scale-0 opacity-0'
        )}
        aria-label="Otevřít chat"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat Window */}
      <div
        className={cn(
          'fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]',
          'bg-brand-dark border border-white/10 rounded-2xl shadow-2xl',
          'flex flex-col overflow-hidden',
          'transition-all duration-300 origin-bottom-right',
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        )}
        style={{ height: 'min(600px, calc(100vh - 6rem))' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-brand-darker">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-gold to-brand-orange flex items-center justify-center">
              <Sparkles size={18} className="text-brand-darker" />
            </div>
            <div>
              <h3 className="font-heading text-sm text-white">ZFP Asistent</h3>
              <p className="text-xs text-white/50">Pomohu vám najít, co hledáte</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label="Zavřít chat"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex',
                message.type === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  'max-w-[85%] rounded-2xl px-4 py-3',
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker rounded-br-md'
                    : 'bg-white/5 border border-white/10 text-white/80 rounded-bl-md'
                )}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                
                {/* Link button */}
                {message.link && (
                  <Link
                    href={message.link}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full text-xs font-medium',
                      'bg-brand-gold/20 text-brand-gold hover:bg-brand-gold/30 transition-colors'
                    )}
                  >
                    {message.linkText || 'Více informací'}
                    <ArrowRight size={12} />
                  </Link>
                )}
                
                {/* Suggestions */}
                {message.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1.5 rounded-full text-xs bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-gold/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-brand-gold/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-brand-gold/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-brand-darker">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Napište dotaz..."
              className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center transition-all',
                input.trim()
                  ? 'bg-gradient-to-r from-brand-gold to-brand-orange text-brand-darker hover:shadow-lg'
                  : 'bg-white/10 text-white/30 cursor-not-allowed'
              )}
              aria-label="Odeslat"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
