// components/ChatBot.tsx
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { MessageCircle, X, Send, Bot, Phone, Mail, User, DollarSign, Briefcase } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Type Definitions
interface Message {
  text: string;
  isBot: boolean;
  timestamp: number;
}

interface Answers {
  service?: string;
  budget?: string;
  name?: string;
  email?: string;
  phone?: string;
  timestamp?: string;
  source?: string;
}

interface LeadData extends Answers {
  name: string;
  email: string;
  phone: string;
  timestamp: string;
  source: string;
}

type Step = 1 | 2 | 3 | 4;

interface ChatBotProps {
  position?: 'bottom-right' | 'bottom-left' | 'custom';
}

export default function ChatBot({ position = 'bottom-right' }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [hasInitialMessage, setHasInitialMessage] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const addMessage = (text: string, isBot: boolean = true): void => {
    setChatHistory(prev => [...prev, { text, isBot, timestamp: Date.now() }]);
  };

  const handleServiceSelect = (service: string): void => {
    setAnswers({ ...answers, service });
    addMessage(service, false);
    addMessage(`Great choice! ${service} is one of our specialties. What's your budget range?`);
    setStep(2);
  };

  const handleBudgetSelect = (budget: string): void => {
    setAnswers({ ...answers, budget });
    addMessage(budget, false);
    addMessage("Perfect! One last step. Please share your contact details so our team can reach out.");
    setStep(3);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (!name || !email) {
      addMessage("Please provide at least your name and email.", true);
      return;
    }

    const leadData: LeadData = {
      ...answers,
      name,
      email,
      phone: phone || "Not provided",
      timestamp: new Date().toISOString(),
      source: "Website Chatbot"
    };

    setAnswers(leadData);
    addMessage(`Thanks ${name}! Submitting your information...`, false);
    setLoading(true);

    try {
      const response = await fetch("/api/send-to-ghl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData)
      });

      if (response.ok) {
        addMessage("✅ Perfect! We've received your information. Our team will contact you within 24 hours. Thank you for reaching out!");
        addMessage("Would you like to start a conversation on WhatsApp? Click the link below:", true);
        setStep(4);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error:", error);
      addMessage("Sorry, there was an error. Please email us directly at hello@ghlscaleup.com", true);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = (): void => {
    setStep(1);
    setAnswers({});
    setChatHistory([]);
    setHasInitialMessage(false);
  };

  // Initial message when chat opens
  useEffect(() => {
    if (isOpen && !hasInitialMessage) {
      addMessage("Hi! 👋 Welcome to GHL ScaleUp. I'll help you get started. What service are you interested in?");
      setHasInitialMessage(true);
    }
  }, [isOpen, hasInitialMessage]);

  // Position classes
  const positionClasses = {
    'bottom-right': 'right-5',
    'bottom-left': 'left-5',
    'custom': '',
  };

  const buttonPositionClass = positionClasses[position];
  const chatWindowPositionClass = position === 'bottom-right' ? 'right-5' : 'left-5';

  const services = [
    { id: "website", label: "Website Development", emoji: "💻", color: "text-blue-600" },
    { id: "ghl", label: "GoHighLevel Setup", emoji: "🚀", color: "text-purple-600" },
    { id: "ai", label: "AI Automation", emoji: "🤖", color: "text-blue-600" },
    { id: "marketing", label: "Digital Marketing", emoji: "📈", color: "text-green-600" }
  ];

  const budgets = [
    { id: "below_1k", label: "Below $1,000", emoji: "💰" },
    { id: "1k_5k", label: "$1,000 - $5,000", emoji: "💰" },
    { id: "5k_10k", label: "$5,000 - $10,000", emoji: "💰" },
    { id: "above_10k", label: "$10,000+", emoji: "💰" }
  ];

  return (
    <>
      {/* Floating Button - No fixed positioning here, parent will handle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed bottom-24 ${chatWindowPositionClass} w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col`}
          style={{ zIndex: 9999 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <div>
                <h2 className="font-semibold text-lg">AI Assistant</h2>
                <p className="text-xs opacity-90">We'll respond within 24h</p>
              </div>
            </div>
            <button 
              onClick={resetChat} 
              className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition"
              aria-label="Reset conversation"
            >
              Reset
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatHistory.length === 0 && !loading && (
              <div className="text-center text-gray-400 text-sm mt-4">
                Click an option below to get started
              </div>
            )}
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-4 bg-white">
            {step === 1 && (
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.label)}
                    className="w-full text-left p-2 border rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <Briefcase size={18} className={service.color} />
                    <span>{service.emoji} {service.label}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-2">
                {budgets.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => handleBudgetSelect(budget.label)}
                    className="w-full text-left p-2 border rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <DollarSign size={18} className="text-green-600" />
                    <span>{budget.emoji} {budget.label}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Submit →"}
                </button>
              </form>
            )}

            {step === 4 && (
              <div className="text-center space-y-3">
                <a
                  href={`https://wa.me/1234567890?text=Hi! I just submitted my details via the website chatbot. My name is ${answers.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={20} />
                  Continue on WhatsApp
                </a>
                <button
                  onClick={resetChat}
                  className="block w-full border p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  Start New Conversation
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}