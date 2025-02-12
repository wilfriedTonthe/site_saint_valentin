import React, { useRef } from 'react';
import { Heart, Stars, Gift, Volume2, Music, Flower, UserRound as Rose, Sparkles } from 'lucide-react';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating decorations background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className={`absolute text-pink-300 opacity-20 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <Rose
            key={`rose-${i}`}
            className={`absolute text-red-300 opacity-20 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s infinite`,
              fontSize: `${25 + Math.random() * 15}px`
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <Flower
            key={`flower-${i}`}
            className={`absolute text-purple-300 opacity-20 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s infinite`,
              fontSize: `${15 + Math.random() * 25}px`
            }}
          />
        ))}
      </div>

      {/* Audio Player */}
      <audio
        ref={audioRef}
        src="love.mp3"
        loop
      />
      
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-20 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
      >
        <Volume2 className={`w-6 h-6 ${isPlaying ? 'text-pink-500' : 'text-gray-500'}`} />
      </button>

      {/* Main content */}
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-7xl w-full text-center relative z-10">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Rose className="text-red-500 w-12 h-12" />
          <Heart className="text-red-500 w-16 h-16 animate-pulse" />
          <Rose className="text-red-500 w-12 h-12" />
        </div>
        
        <h1 className="text-5xl font-bold text-red-600 mb-12">
          Joyeuse Saint-Valentin
        </h1>

{/* Parents Photos */}
<div className="flex justify-center gap-10 md:gap-20 mb-16 w-full max-w-screen-lg mx-auto">
  
  {/* Carte Maman */}
  <div className="group relative">
    <div className="relative w-[400px] h-[500px] transition-transform duration-300 group-hover:scale-105 border-4 border-pink-500 rounded-lg shadow-2xl overflow-hidden">
      <img
        src="mam.jpg"
        alt="Maman"
        className="w-full h-full object-cover"
      />
      {/* Effet de survol */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="mt-6 text-center">
      <p className="text-3xl font-serif text-pink-600 font-medium">Maman</p>
      <p className="text-xl text-gray-600 italic mt-2">Mon amour éternel</p>
    </div>
  </div>

  {/* Carte Papa */}
  <div className="group relative">
    <div className="relative w-[400px] h-[500px] transition-transform duration-300 group-hover:scale-105 border-4 border-blue-500 rounded-lg shadow-2xl overflow-hidden">
      <img
        src="papa.jpg"
        alt="Papa"
        className="w-full h-full object-cover"
      />
      {/* Effet de survol */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="mt-6 text-center">
      <p className="text-3xl font-serif text-blue-600 font-medium">Papa</p>
      <p className="text-xl text-gray-600 italic mt-2">Mon héros de toujours</p>
    </div>
  </div>

</div>




        {/* Musical Section */}
        <div className="relative mb-16 p-12 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl shadow-xl">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Music className="w-12 h-12 text-pink-500" />
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <Heart className={`w-16 h-16 text-pink-500 ${isPlaying ? 'animate-bounce' : ''}`} />
              <Sparkles className={`w-12 h-12 text-yellow-500 ${isPlaying ? 'animate-spin-slow' : ''}`} />
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-serif text-pink-700 mb-4">Notre Mélodie d'Amour</h3>
              <p className="text-xl text-gray-700 italic">
                Écoutez cette douce mélodie qui représente tout l'amour que j'ai pour vous
              </p>
              <button
                onClick={toggleAudio}
                className="mt-6 px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
              >
                {isPlaying ? 'Pause' : 'Jouer'} la Musique
                <Music className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Heart className={`w-16 h-16 text-pink-500 ${isPlaying ? 'animate-bounce' : ''}`} />
              <Sparkles className={`w-12 h-12 text-yellow-500 ${isPlaying ? 'animate-spin-slow' : ''}`} />
            </div>
          </div>
        </div>

        {/* French Love Poem */}
        <div className="mb-16 text-center max-w-3xl mx-auto bg-white/50 p-10 rounded-xl shadow-lg">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h3 className="text-4xl font-serif text-pink-700 mb-8">Poème d'Amour</h3>
          <p className="text-2xl text-gray-700 leading-relaxed italic font-serif">
            Dans mon cœur, vous êtes la lumière<br/>
            Qui guide mes pas sur cette terre<br/>
            Votre amour, tel un phare dans la nuit<br/>
            M'éclaire et me remplit de vie<br/><br/>
            
            Papa, Maman, vous êtes mon trésor<br/>
            Plus précieux que tout l'or<br/>
            Votre amour est ma force, ma joie<br/>
            Mon refuge quand je perds ma voie
          </p>
        </div>

        <div className="mb-12 bg-pink-50/80 p-10 rounded-xl shadow-lg relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Gift className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-4xl font-semibold text-pink-700 mb-8">
            Chers Parents
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            En cette journée spéciale de l'amour, je voulais vous dire à quel point vous êtes importants pour moi. 
            Merci pour tout votre amour, votre soutien et votre dévouement.
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Vous êtes les meilleurs parents qu'on puisse avoir, et je vous aime de tout mon cœur. ❤️
          </p>
        </div>

        <div className="flex justify-center gap-10 mb-10">
          <Gift className="text-pink-500 w-12 h-12" />
          <Stars className="text-pink-500 w-12 h-12" />
          <Heart className="text-pink-500 w-12 h-12" />
        </div>

        <div className="text-3xl font-medium text-red-500 font-serif">
          Avec tout mon amour
        </div>
      </div>
    </div>
  );
}

export default App;