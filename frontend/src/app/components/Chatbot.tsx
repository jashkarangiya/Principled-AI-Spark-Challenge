import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

const API_BASE_URL = import.meta.env.PROD ? '' : 'http://localhost:8000';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', data }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', data: { message: 'Sorry, I encountered an error. Please try again.' } }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#8c1d40] text-white rounded-full p-4 shadow-lg hover:bg-[#6d1632] transition-colors z-50"
        >
          <MessageCircle className="size-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-[#e8e8e8]">
          {/* Header */}
          <div className="bg-[#8c1d40] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-['Arial'] font-bold text-[16px]">Career Assistant</h3>
              <p className="font-['Arial'] text-[12px] opacity-90">Ask about careers & resources</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-[#6d1632] p-1 rounded">
              <X className="size-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-[#767676] font-['Arial'] text-[14px] mt-8">
                <p className="mb-2">👋 Hi! I can help you find:</p>
                <p className="text-[12px]">• Careers matching your interests</p>
                <p className="text-[12px]">• ASU resources & programs</p>
                <p className="text-[12px]">• Career information</p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'user' ? (
                  <div className="bg-[#8c1d40] text-white px-4 py-2 rounded-lg max-w-[80%] font-['Arial'] text-[14px]">
                    {msg.content}
                  </div>
                ) : (
                  <div className="max-w-[90%] space-y-3">
                    <div className="bg-[#f5f5f5] px-4 py-2 rounded-lg font-['Arial'] text-[14px] text-[#191919]">
                      {msg.data.message}
                    </div>

                    {/* Career Cards */}
                    {msg.data.careers?.length > 0 && (
                      <div className="space-y-2">
                        {msg.data.careers.map((career: any) => (
                          <Link
                            key={career.slug}
                            to={`/career/${career.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="block bg-white border border-[#e8e8e8] rounded p-3 hover:shadow-md transition-shadow"
                          >
                            <div className="flex gap-3">
                              {career.image_url && (
                                <img src={career.image_url} alt={career.name} className="w-16 h-16 object-cover rounded" />
                              )}
                              <div className="flex-1">
                                <h4 className="font-['Arial'] font-bold text-[14px] text-[#191919]">{career.name}</h4>
                                <p className="font-['Arial'] text-[12px] text-[#767676]">{career.field}</p>
                                <div className="flex gap-3 mt-1">
                                  <span className="font-['Arial'] text-[11px] text-[#191919]">💰 {career.salary_median}</span>
                                  <span className="font-['Arial'] text-[11px] text-[#191919]">📈 {career.growth_rate}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Resources */}
                    {msg.data.resources?.length > 0 && (
                      <div className="space-y-2">
                        {msg.data.resources.map((resource: any, i: number) => (
                          <div key={i} className="bg-white border border-[#e8e8e8] rounded p-3">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h4 className="font-['Arial'] font-bold text-[13px] text-[#191919]">{resource.title}</h4>
                                <p className="font-['Arial'] text-[11px] text-[#767676] mt-1">{resource.description}</p>
                                <span className="inline-block bg-[#ffc627] px-2 py-1 rounded text-[10px] font-['Arial'] font-bold mt-2">
                                  {resource.tag}
                                </span>
                              </div>
                            </div>
                            {resource.link_url && (
                              <a href={resource.link_url} target="_blank" rel="noopener noreferrer" className="text-[#8c1d40] text-[11px] font-['Arial'] hover:underline mt-2 inline-block">
                                Learn more →
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#f5f5f5] px-4 py-2 rounded-lg font-['Arial'] text-[14px] text-[#767676]">
                  Thinking...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#e8e8e8]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about careers..."
                className="flex-1 px-3 py-2 border border-[#d0d0d0] rounded font-['Arial'] text-[14px] focus:outline-none focus:border-[#8c1d40]"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-[#8c1d40] text-white p-2 rounded hover:bg-[#6d1632] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
