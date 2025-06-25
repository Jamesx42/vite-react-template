// src/App.tsx


import "./App.css"; import React, { useState, useEffect } from 'react';
import { Download, Play, MessageCircle, Phone, Send, X, Star, Coins, Zap, Crown, Trophy, Gem, Shield, Heart, Target, Rocket, Gift, Diamond } from 'lucide-react';

const CasinoApp = () => {
  const [contactPopup, setContactPopup] = useState(false);
  const [agentPopup, setAgentPopup] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');
  // Game data with icons and descriptions
  const games = [
    {
      name: "Orion Stars",
      url: "http://www.orions.cc/download",
      icon: Star,
      description: "Embark on a stellar gaming adventure with cosmic rewards and infinite possibilities"
    },
    {
      name: "Vegas Sweep",
      url: "https://m.lasvegassweeps.com/",
      icon: Coins,
      description: "Experience the ultimate Vegas thrill with sweepstakes and jackpot excitement"
    },
    {
      name: "Milkyway",
      url: "https://milkywayapp.xyz/",
      icon: Zap,
      description: "Journey through galactic gaming realms with stellar bonuses and cosmic wins"
    },
    {
      name: "GameVault",
      url: "https://download.gamevault999.com/",
      icon: Crown,
      description: "Unlock the treasure vault of premium games and exclusive royal rewards"
    },
    {
      name: "Juwa",
      url: "http://dl.juwa777.com",
      icon: Trophy,
      description: "Master the art of winning with legendary games and championship prizes"
    },
    {
      name: "FireKirin",
      url: "http://firekirin.xyz:8580/index.html",
      icon: Gem,
      description: "Ignite your gaming passion with fiery excitement and blazing jackpots"
    },
    {
      name: "Mafia",
      url: "http://www.mafia77777.com",
      icon: Shield,
      description: "Enter the underground world of high-stakes gaming and exclusive privileges"
    },
    {
      name: "Vblink",
      url: "https://www.vblink777.club/",
      icon: Heart,
      description: "Connect with fortune through vibrant games and heart-pounding excitement"
    },
    {
      name: "Gameroom",
      url: "https://www.gameroom777.com/m",
      icon: Target,
      description: "Step into the ultimate gaming lounge with precision gameplay and big wins"
    },
    {
      name: "Panda Master",
      url: "https://pandamaster.vip:8888/",
      icon: Rocket,
      description: "Master the bamboo forest of fortune with ancient wisdom and modern rewards"
    },
    {
      name: "Cash Machine",
      url: "https://www.cashmachine777.com/",
      icon: Gift,
      description: "Transform your luck into instant cash with mechanical precision and golden rewards"
    }
  ];

  const handleGameAction = (gameName, action) => {
    setSelectedGame(`${gameName} - ${action}`);
    setAgentPopup(true);
  };

  const ContactButton = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setContactPopup(true)}
        className="bg-gradient-to-r from-yellow-400/80 to-yellow-600/80 backdrop-blur-xl text-black p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-all duration-300 border border-yellow-300/50 relative overflow-hidden group"
      >
        <div className="absolute inset-0 animate-pulse">
          <Star className="absolute top-1 left-1 text-yellow-200" size={12} />
          <Zap className="absolute top-1 right-1 text-yellow-200" size={12} />
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-200 rounded-sm"></div>
        </div>
        <MessageCircle size={24} className="relative z-10" />
      </button>
    </div>
  );

  const ContactPopup = () => (
    contactPopup && (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 m-4 max-w-sm w-full shadow-2xl relative overflow-hidden">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>

          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Contact Agent</h3>
            <button
              onClick={() => setContactPopup(false)}
              className="text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-2 backdrop-blur-sm"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4 relative z-10">
            <a
              href="https://wa.me/15753595056"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500/80 backdrop-blur-sm hover:bg-green-600/80 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Phone size={20} />
              <span className="font-medium">WhatsApp Business</span>
            </a>
            <a
              href="https://facebook.com/epicwinnersx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600/80 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <MessageCircle size={20} />
              <span className="font-medium">Facebook Page</span>
            </a>
            <a
              href="https://t.me/countrygaming"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-400/80 backdrop-blur-sm hover:bg-blue-500/80 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Send size={20} />
              <span className="font-medium">Telegram Channel</span>
            </a>
          </div>
        </div>
      </div>
    )
  );

  const AgentPopup = () => (
    agentPopup && (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 m-4 max-w-sm w-full shadow-2xl relative overflow-hidden">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>

          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Connect with Agent</h3>
            <button
              onClick={() => setAgentPopup(false)}
              className="text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-2 backdrop-blur-sm"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-white/80 mb-6 relative z-10 font-medium">Contact our agent for {selectedGame}</p>
          <div className="space-y-4 relative z-10">
            <a
              href="https://wa.me/15753595056"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500/80 backdrop-blur-sm hover:bg-green-600/80 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Phone size={20} />
              <span className="font-medium">WhatsApp Agent</span>
            </a>
            <a
              href="https://facebook.com/epicwinnersx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600/80 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <MessageCircle size={20} />
              <span className="font-medium">Facebook Support</span>
            </a>
            <a
              href="https://t.me/countrygaming"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-400/80 backdrop-blur-sm hover:bg-blue-500/80 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Send size={20} />
              <span className="font-medium">Telegram Support</span>
            </a>
          </div>
        </div>
      </div>
    )
  );

  const GameCard = ({ game }) => {
    const IconComponent = game.icon;

    return (
      <div className="group bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden hover:bg-white/15">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>

        {/* Light animation on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-1 mb-4 relative z-10">
          <span className="bg-green-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">✓ Verified</span>
          <span className="bg-blue-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">🛡️ Trusted</span>
          <span className="bg-purple-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">👑 Premium</span>
          <span className="bg-yellow-500/80 backdrop-blur-sm text-black text-xs px-2 py-1 rounded-full border border-white/20">⭐ 5.0</span>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-yellow-400/80 to-yellow-600/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg group-hover:animate-pulse border border-white/20">
              <IconComponent size={32} className="text-black" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all">
              {game.name}
            </h3>
          </div>

          <p className="text-white/80 text-sm mb-6 leading-relaxed">
            {game.description}
          </p>

          <div className="flex gap-3">
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 hover:from-yellow-400/80 hover:to-yellow-500/80 backdrop-blur-sm text-black font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 border border-white/20"
            >
              <Download size={18} />
              Download
            </a>
            <button
              onClick={() => handleGameAction(game.name, 'Load')}
              className="flex-1 bg-gradient-to-r from-green-500/80 to-green-600/80 hover:from-green-400/80 hover:to-green-500/80 backdrop-blur-sm text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 border border-white/20"
            >
              <Play size={18} />
              Load
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-3xl text-white overflow-hidden relative">
      {/* Glass overlay for entire background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 pointer-events-none z-0"></div>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-transparent to-yellow-800/30 animate-pulse"></div>

        {/* Floating Casino Chips */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${10 + (i * 5)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 border-white shadow-lg opacity-70 animate-spin"></div>
          </div>
        ))}

        {/* Sparkles using built-in animations */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: '2s'
            }}
          >
            <Diamond className="text-yellow-400 opacity-60" size={6} />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-12 backdrop-blur-sm">
        <div className="inline-block bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-pulse mb-4">
            🎰 PREMIUM CASINO 🎰
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
            Experience the ultimate gaming destination with premium games, instant wins, and 24/7 agent support
          </p>
        </div>
      </header>

      {/* Games Grid */}
      <main className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <GameCard key={`game-${index}`} game={game} />
          ))}
        </div>
      </main>

      {/* Contact Button */}
      <ContactButton />

      {/* Popups */}
      <ContactPopup />
      <AgentPopup />
    </div>
  );
};

export default CasinoApp;