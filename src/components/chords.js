import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ChordsSection = () => {
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
            Acordes
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            Acordes são combinações de três ou mais notas tocadas juntas, criando harmonias ricas e complexas. Eles são a base da harmonia na música e são usados em praticamente todos os gêneros musicais.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Tipos de Acordes</h2>
          <ul className="space-y-4">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Acorde Maior</h3>
              <p className="text-stone-600 text-lg">
                Um acorde maior é composto por uma raiz, uma terça maior (quatro semitons acima da raiz) e uma quinta justa (sete semitons acima da raiz). Exemplo: o acorde de Dó maior (C) é formado pelas notas C, E, e G.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Acorde Menor</h3>
              <p className="text-stone-600 text-lg">
                Um acorde menor é composto por uma raiz, uma terça menor (três semitons acima da raiz) e uma quinta justa (sete semitons acima da raiz). Exemplo: o acorde de Lá menor (Am) é formado pelas notas A, C, e E.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Acorde Diminuto</h3>
              <p className="text-stone-600 text-lg">
                Um acorde diminuto é composto por uma raiz, uma terça menor (três semitons acima da raiz) e uma quinta diminuta (seis semitons acima da raiz). Exemplo: o acorde de Si diminuto (Bdim) é formado pelas notas B, D, e F.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Acorde Aumentado</h3>
              <p className="text-stone-600 text-lg">
                Um acorde aumentado é composto por uma raiz, uma terça maior (quatro semitons acima da raiz) e uma quinta aumentada (oito semitons acima da raiz). Exemplo: o acorde de Dó aumentado (Caug) é formado pelas notas C, E, e G#.
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
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Formação de Acordes</h2>
          <p className="text-stone-700 text-lg">
            A formação de acordes é baseada em intervalos específicos entre as notas. A partir de uma nota raiz, adicionamos outras notas conforme os intervalos desejados para formar diferentes tipos de acordes. Compreender os intervalos e como usá-los é fundamental para criar e tocar acordes.
          </p>
          <p className="text-stone-700 text-lg mt-4">
            Praticar a formação e o reconhecimento de diferentes acordes ajudará a melhorar suas habilidades musicais e a expandir suas opções de composição e performance.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default ChordsSection;
