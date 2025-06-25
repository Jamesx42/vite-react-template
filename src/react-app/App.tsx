import "./App.css";
import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Star, Shield, Clock, DollarSign, Phone, MessageCircle, Send, X, Menu, CheckCircle, Zap } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  description: string;
  downloadUrl: string;
  image: string;
  rating: number;
  category: string;
}

const App: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // Suppress unused variable warning
  console.log(activeGame);

  const games: Game[] = [
    {
      id: 'orion',
      name: 'Orion Stars',
      description: 'Experience the ultimate space-themed casino with stunning graphics and massive jackpots.',
      downloadUrl: 'http://www.orions.cc/download',
      image: '🌟',
      rating: 4.9,
      category: 'Space Adventure'
    },
    {
      id: 'vegas',
      name: 'Vegas Sweep',
      description: 'Classic Vegas experience with premium slot machines and authentic casino atmosphere.',
      downloadUrl: 'https://m.lasvegassweeps.com/',
      image: '🎰',
      rating: 4.8,
      category: 'Classic Vegas'
    },
    {
      id: 'milkyway',
      name: 'Milkyway',
      description: 'Journey through the galaxy with cosmic rewards and stellar gaming experience.',
      downloadUrl: 'https://milkywayapp.xyz/',
      image: '🌌',
      rating: 4.9,
      category: 'Cosmic Gaming'
    },
    {
      id: 'gamevault',
      name: 'GameVault',
      description: 'Secure gaming vault with premium slots and guaranteed fair play mechanisms.',
      downloadUrl: 'https://download.gamevault999.com/',
      image: '🏆',
      rating: 4.7,
      category: 'Premium Security'
    },
    {
      id: 'juwa',
      name: 'Juwa',
      description: 'High-energy gaming platform with instant payouts and 24/7 customer support.',
      downloadUrl: 'http://dl.juwa777.com',
      image: '⚡',
      rating: 4.8,
      category: 'High Energy'
    },
    {
      id: 'firekirin',
      name: 'Fire Kirin',
      description: 'Mythical gaming experience with dragon-themed slots and legendary bonuses.',
      downloadUrl: 'http://firekirin.xyz:8580/index.html',
      image: '🐉',
      rating: 4.6,
      category: 'Mythical Adventure'
    },
    {
      id: 'mafia',
      name: 'Mafia',
      description: 'Underground casino experience with exclusive VIP games and premium rewards.',
      downloadUrl: 'http://www.mafia77777.com',
      image: '🎯',
      rating: 4.7,
      category: 'VIP Exclusive'
    },
    {
      id: 'vblink',
      name: 'VBlink',
      description: 'Fast-paced gaming with instant deposits and lightning-quick withdrawals.',
      downloadUrl: 'https://www.vblink777.club/',
      image: '💎',
      rating: 4.8,
      category: 'Lightning Fast'
    },
    {
      id: 'gameroom',
      name: 'Game Room',
      description: 'Exclusive gaming lounge with premium tables and professional dealers.',
      downloadUrl: 'https://www.gameroom777.com/m',
      image: '🎲',
      rating: 4.9,
      category: 'Premium Lounge'
    },
    {
      id: 'pandamaster',
      name: 'Panda Master',
      description: 'Asian-inspired gaming with lucky bamboo bonuses and fortune multipliers.',
      downloadUrl: 'https://pandamaster.vip:8888/',
      image: '🐼',
      rating: 4.7,
      category: 'Asian Fortune'
    },
    {
      id: 'cashmachine',
      name: 'Cash Machine',
      description: 'Direct money-making slots with guaranteed payouts and instant cash rewards.',
      downloadUrl: 'https://www.cashmachine777.com/',
      image: '💰',
      rating: 4.8,
      category: 'Instant Cash'
    }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "100% Certified", desc: "Licensed & Regulated" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Instant Cashout", desc: "Withdraw Anytime" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Available", desc: "Always Online" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Verified Games", desc: "Fair Play Guaranteed" }
  ];

  const handleLoadPoints = () => {
    setShowContactModal(true);
  };

  const handleContactAgent = (platform: string) => {
    const links = {
      telegram: 'https://t.me/countrygaming',
      facebook: 'https://facebook.com/epicwinnersx',
      whatsapp: 'https://wa.me/15753595056'
    };
    window.open(links[platform as keyof typeof links], '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.game-card');
      cards.forEach((card, index) => {
        console.log(index);
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          card.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl font-bold text-black">
                🎰
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Premium Slots
                </h1>
                <p className="text-xs text-gray-300">Certified & Trusted</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <div className="text-yellow-400">{feature.icon}</div>
                  <span className="text-gray-300">{feature.title}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
              PREMIUM CASINO
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience the ultimate gaming adventure with certified, premium slot machines.
              <span className="text-yellow-400 font-semibold"> Instant cashouts, 24/7 support</span>, and guaranteed fair play.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">{feature.title}</div>
                      <div className="text-xs text-gray-300">{feature.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25">
                <Zap className="w-5 h-5 inline mr-2" />
                Start Playing Now
              </button>
              <button
                onClick={() => setShowContactModal(true)}
                className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium Game Collection
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our exclusive selection of certified premium slot games
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game, gameIndex) => (
              <div
                key={game.id}
                className={`game-card opacity-0 translate-y-8 transition-all duration-700 delay-${gameIndex * 100}`}
                onMouseEnter={() => setActiveGame(game.id)}
                onMouseLeave={() => setActiveGame(null)}
              >
                <div className="group relative backdrop-blur-md bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {game.image}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">{game.name}</h4>
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${starIndex < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">{game.rating}</span>
                      </div>
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full text-xs font-medium text-yellow-400 border border-yellow-400/30 mb-3">
                        {game.category}
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                      {game.description}
                    </p>

                    <div className="flex flex-col space-y-3">
                      <button
                        onClick={() => window.open(game.downloadUrl, '_blank')}
                        className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25"
                      >
                        <Download className="w-4 h-4 inline mr-2" />
                        Download
                      </button>

                      <button
                        onClick={handleLoadPoints}
                        className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold text-white"
                      >
                        <ExternalLink className="w-4 h-4 inline mr-2" />
                        Load Points
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Contact Our Agent
                </h3>
                <p className="text-gray-300">Choose your preferred platform to load points</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleContactAgent('telegram')}
                  className="w-full flex items-center justify-center space-x-3 p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl hover:bg-blue-500/30 transition-all duration-300"
                >
                  <Send className="w-6 h-6 text-blue-400" />
                  <span className="font-semibold">Telegram: @countrygaming</span>
                </button>

                <button
                  onClick={() => handleContactAgent('facebook')}
                  className="w-full flex items-center justify-center space-x-3 p-4 bg-blue-600/20 border border-blue-600/30 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold">Facebook: @epicwinnersx</span>
                </button>

                <button
                  onClick={() => handleContactAgent('whatsapp')}
                  className="w-full flex items-center justify-center space-x-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl hover:bg-green-500/30 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-green-400" />
                  <span className="font-semibold">WhatsApp: +1 575 359 5056</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Contact Button */}
      <button
        onClick={() => setShowContactModal(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      >
        <Phone className="w-8 h-8" />
      </button>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .shimmer-effect {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;