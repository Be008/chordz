import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TonesAndSemitonesSection = () => {
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
            Tons e Semitons (Intervalos)
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            Tons e semitons são os intervalos básicos que formam a estrutura da música ocidental. Eles são fundamentais para a formação de escalas, acordes e melodias.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Definições Básicas</h2>
          <ul className="space-y-4">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Semitom</h3>
              <p className="text-stone-600 text-lg">
                O semitom é o menor intervalo na música ocidental, representando a distância entre duas notas adjacentes. Por exemplo, a distância entre Mi (E) e Fá (F) ou entre Si (B) e Dó (C).
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Tom</h3>
              <p className="text-stone-600 text-lg">
                O tom é um intervalo composto por dois semitons. Por exemplo, a distância entre Dó (C) e Ré (D) ou entre Fá (F) e Sol (G).
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
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Importância na Música</h2>
          <p className="text-stone-700 text-lg">
            Compreender tons e semitons é crucial para a construção de escalas e acordes. Por exemplo, a escala diatônica maior, que é uma das mais utilizadas na música ocidental, segue o padrão de tons e semitons: tom, tom, semitom, tom, tom, tom, semitom. Este padrão cria a familiar sequência de notas Dó (C), Ré (D), Mi (E), Fá (F), Sol (G), Lá (A), Si (B), Dó (C).
          </p>
          <p className="text-stone-700 text-lg mt-4">
            Estudar e praticar a identificação de tons e semitons ajudará a desenvolver sua habilidade de reconhecer e utilizar esses intervalos na composição e performance musical.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default TonesAndSemitonesSection;
