import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AccidentalsSection = () => {
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
            Acidentes
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            Acidentes são símbolos musicais usados para alterar a altura das notas. Eles são fundamentais para a criação de diferentes escalas e acordes, permitindo uma variedade de expressões musicais.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Tipos de Acidentes</h2>
          <ul className="space-y-4">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Sustenido (#)</h3>
              <p className="text-stone-600 text-lg">
                O sustenido eleva a nota em um semitom. Por exemplo, Dó sustenido (C#) é um semitom acima de Dó (C).
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Bemol (b)</h3>
              <p className="text-stone-600 text-lg">
                O bemol abaixa a nota em um semitom. Por exemplo, Ré bemol (Db) é um semitom abaixo de Ré (D).
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
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Uso de Acidentes na Música</h2>
          <p className="text-stone-700 text-lg">
            Acidentes são utilizados para criar uma variedade de sons e efeitos musicais. Eles permitem a modulação entre diferentes tonalidades e a criação de escalas cromáticas, onde cada nota é um semitom acima ou abaixo da anterior.
          </p>
          <p className="text-stone-700 text-lg mt-4">
            Na composição e execução musical, entender e utilizar corretamente os acidentes é essencial para enriquecer a harmonia e a melodia, proporcionando uma maior expressão e variação nas músicas.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default AccidentalsSection;
