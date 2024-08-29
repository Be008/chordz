import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HarmonicFieldSection = () => {
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
            Campo Harmônico
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            O campo harmônico é um conjunto de acordes que são derivados de uma escala específica e que soam bem juntos. Ele é uma ferramenta essencial para a composição e a improvisação musical.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Formação do Campo Harmônico</h2>
          <p className="text-stone-600 text-lg">
            Para formar um campo harmônico, pegamos uma escala e construímos um acorde para cada nota dessa escala, utilizando apenas as notas que pertencem à escala original.
          </p>
          <motion.ul className="space-y-4">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Campo Harmônico Maior</h3>
              <p className="text-stone-600 text-lg">
                O campo harmônico maior é formado por acordes maiores, menores e um acorde diminuto. Exemplo: o campo harmônico de Dó maior (C) é composto pelos acordes: C, Dm, Em, F, G, Am, Bdim.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Campo Harmônico Menor</h3>
              <p className="text-stone-600 text-lg">
                O campo harmônico menor é formado por acordes menores, maiores e um acorde diminuto. Exemplo: o campo harmônico de Lá menor (Am) é composto pelos acordes: Am, Bdim, C, Dm, Em, F, G.
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
        
        <motion.div 
          initial={{ x: 100 }} 
          animate={{ x: footerInView ? 0 : 100 }} 
          transition={{ type: 'spring', stiffness: 50 }}
          className="mt-8"
          ref={footerRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Uso do Campo Harmônico</h2>
          <p className="text-stone-700 text-lg">
            O campo harmônico é utilizado para criar progressões de acordes que são agradáveis ao ouvido. Ao conhecer o campo harmônico, você pode facilmente encontrar acordes que funcionam bem juntos em uma determinada tonalidade.
          </p>
          <p className="text-stone-700 text-lg mt-4">
            Compreender e aplicar o campo harmônico é essencial para a composição e a improvisação, permitindo a criação de músicas mais coesas e harmoniosas.
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default HarmonicFieldSection;
