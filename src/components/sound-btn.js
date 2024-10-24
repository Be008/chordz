import { useEffect, useState } from 'react';

const SoundButton = ({ soundFile, label }) => {
  const [audio, setAudio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (soundFile) {
      const newAudio = new Audio(soundFile);

      // Listener para tratar erros de carregamento do áudio
      newAudio.onerror = () => {
        setError(`Erro ao carregar o áudio: ${soundFile}`);
      };

      setAudio(newAudio);

      // Limpa o recurso quando o componente for desmontado
      return () => {
        if (newAudio) {
          newAudio.pause();
          newAudio.src = '';
        }
      };
    }
  }, [soundFile]);

  const handlePlaySound = () => {
    if (audio) {
      audio.play().catch((error) => {
        console.error('Erro ao tentar reproduzir o som:', error);
      });
    } else {
      console.error('Áudio não está disponível ou ocorreu um erro.');
    }
  };

  return (
    <div>
      <button
        onClick={handlePlaySound}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 active:scale-95 transition transform duration-150"
      >
        {label}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SoundButton;
