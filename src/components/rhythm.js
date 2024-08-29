import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RhythmSection = () => {
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
            Ritmo
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            O ritmo é a organização dos sons e silêncios ao longo do tempo. Ele é o que dá movimento e vida à música, criando padrões que podem ser simples ou complexos.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Elementos do Ritmo</h2>
          <ul className="space-y-4">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Compasso</h3>
              <p className="text-stone-600 text-lg">
                O compasso é a divisão da música em partes iguais, cada uma contendo um número fixo de batidas. Exemplo: o compasso 4/4 tem quatro batidas por medida.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Batida</h3>
              <p className="text-stone-600 text-lg">
                A batida é a unidade básica de tempo na música, a pulsação que você sente ao ouvir uma música. As batidas podem ser fortes ou fracas, criando diferentes sensações rítmicas.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Tempo</h3>
              <p className="text-stone-600 text-lg">
                O tempo é a velocidade com que as batidas são tocadas. Ele é medido em batidas por minuto (BPM). Exemplo: um tempo de 120 BPM significa que há 120 batidas por minuto.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Acentuação</h3>
              <p className="text-stone-600 text-lg">
                A acentuação é a ênfase em certas batidas dentro de um compasso. As batidas acentuadas criam padrões rítmicos e ajudam a definir o caráter da música.
              </p>
            </motion.li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ x: 100 }} 
          animate={{ x: footerInView ? 0 : 100 }} 
          transition={{ type: 'spring', stiffness: 50 }}
          className="mt-8"
          ref={footerRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Importância do Ritmo</h2>
          <p className="text-stone-700 text-lg">
            O ritmo é fundamental para a música, pois ele organiza os sons no tempo e cria a base sobre a qual os outros elementos musicais são construídos. Compreender o ritmo é essencial para qualquer músico, pois ele ajuda a tocar e compor de forma mais coesa e expressiva.
          </p>
          <p className="text-stone-700 text-lg mt-4">
            Praticar diferentes padrões rítmicos e entender como eles interagem com outros elementos musicais pode melhorar suas habilidades musicais e enriquecer suas composições.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default RhythmSection;
