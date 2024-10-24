import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SoundButton from './sound-btn';

const NotesSection = () => {
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
            Notas Musicais
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            As notas musicais são os blocos de construção básicos da música. Elas são os sons individuais que combinamos para criar melodias e harmonias. No sistema ocidental de música, temos sete notas principais, que são:
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Notas Comuns</h2>
          <ul className="space-y-4">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Dó (C)</h3>
              <p className="text-stone-600 text-lg">
                Dó é a nota de partida em muitas escalas musicais.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Ré (D)</h3>
              <p className="text-stone-600 text-lg">
                Ré é a segunda nota da escala diatônica.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Mi (E)</h3>
              <p className="text-stone-600 text-lg">
                Mi é a terceira nota da escala diatônica.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Fá (F)</h3>
              <p className="text-stone-600 text-lg">
                Fá é a quarta nota da escala diatônica.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Sol (G)</h3>
              <p className="text-stone-600 text-lg">
                Sol é a quinta nota da escala diatônica.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Lá (A)</h3>
              <p className="text-stone-600 text-lg">
                Lá é a sexta nota da escala diatônica.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Si (B)</h3>
              <p className="text-stone-600 text-lg">
                Si é a sétima nota da escala diatônica.
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
          <p className="text-stone-700 text-lg">
            Entender as notas musicais é fundamental para qualquer músico ou compositor. Praticar as notas em diferentes contextos pode ajudar a desenvolver uma compreensão mais profunda de como elas funcionam juntas para criar música.
          </p>
        </motion.div>
        <motion.div className='pt-5'>
          <SoundButton soundFile="/notes.mp3" label="Notas músicais" />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default NotesSection;
