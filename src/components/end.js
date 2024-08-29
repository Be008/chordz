import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinalSection = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/api');
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="bg-gradient-to-b from-stone-100 to-stone-300 text-stone-800 p-8 font-times">
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: sectionInView ? 1 : 0 }} 
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
        ref={sectionRef}
      >
        <header className="mb-8">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: headerInView ? 1 : 0.8, opacity: headerInView ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-5xl font-bold text-stone-900 mb-4"
            ref={headerRef}
          >
            Parabéns!
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-2xl text-stone-700"
          >
            Você completou o curso básico de teoria e composição musical.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: sectionInView ? 1 : 0.8, opacity: sectionInView ? 1 : 0 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-2xl rounded-lg p-8 mt-8"
        >
          <h2 className="text-3xl font-semibold text-stone-800 mb-4">Seu Desafio</h2>
          <p className="text-stone-600 text-lg mb-6">
            Agora que você aprendeu os fundamentos da música, é hora de colocar seu conhecimento em prática. Desafio você a criar sua primeira composição musical!
          </p>
          <p className="text-stone-600 text-lg mb-8">
            Use as notas, acordes, ritmos e campos harmônicos que você aprendeu para criar uma peça única. Não há regras, deixe sua criatividade fluir e aproveite o processo de composição.
          </p>
          <p className="text-stone-600 text-lg mb-8">
            Quando terminar, compartilhe sua composição com amigos e familiares, e sinta o orgulho de criar algo verdadeiramente seu.
          </p>
        </motion.div>
        
        <motion.footer 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: sectionInView ? 0 : 20, opacity: sectionInView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-stone-700 text-lg">
            Obrigado por participar deste curso. Desejo muito sucesso na sua jornada musical!
          </p>
          <p className="text-stone-700 text-lg mt-4">
            Continue explorando, aprendendo e, acima de tudo, se divertindo com a música.
          </p>
        </motion.footer>
      </motion.section>
    </main>
  );
};

export default FinalSection;
