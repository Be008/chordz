import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MusicSection = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });
  const [componentsRef, componentsInView] = useInView({ triggerOnce: true });
  const [footerRef, footerInView] = useInView({ triggerOnce: true });

  return (
    <main className="bg-stone-100 text-stone-800 p-8 font-times">
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: sectionInView ? 1 : 0 }} 
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
        ref={sectionRef}
      >
        <header className="mb-8">
          <motion.h1 
            initial={{ x: -200 }} 
            animate={{ x: headerInView ? 0 : -200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-4xl font-bold text-stone-900"
            ref={headerRef}
          >
            O que é Música?
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            A pergunta “o que é música?” tem sido alvo de discussão há décadas. Alguns autores defendem que a música é a combinação de sons e silêncios de uma maneira organizada.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Componentes da Música</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-stone-700">Melodia</h3>
              <p className="text-stone-600 text-lg">
                Melodia é a sequência de notas que é percebida como uma única entidade. É aquilo que pode ser cantado ou tocado em um instrumento.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-stone-700">Harmonia</h3>
              <p className="text-stone-600 text-lg">
                Harmonia é a combinação de diferentes notas tocadas ou cantadas simultaneamente para criar um som agradável. Ela serve como base para a melodia.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-stone-700">Ritmo</h3>
              <p className="text-stone-600 text-lg">
                Ritmo é o padrão de duração e acentuação dos sons em uma música. Ele é responsável pela organização temporal dos sons e silêncios.
              </p>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ x: 100 }} 
          animate={{ x: footerInView ? 0 : 100 }} 
          transition={{ type: 'spring', stiffness: 50 }}
          className="mt-8"
          ref={footerRef}
        >
          <p className="text-stone-700">
            Esses três elementos – melodia, harmonia e ritmo – formam a base de toda a música. Compreender esses conceitos é o primeiro passo para criar e apreciar a música de maneira mais profunda.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default MusicSection;
