import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ToneSection = () => {
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
            Timbres
          </motion.h1>
          <motion.p 
            initial={{ x: 200 }} 
            animate={{ x: headerInView ? 0 : 200 }} 
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-lg text-stone-700 mt-4"
          >
            O timbre é a qualidade do som que nos permite distinguir uma fonte sonora de outra, mesmo que estejam tocando a mesma nota. Ele é o que torna a música rica e variada, permitindo que diferentes instrumentos e vozes se destaquem.
          </motion.p>
        </header>
        
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: componentsInView ? 1 : 0.8 }} 
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
          ref={componentsRef}
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Fatores que Afetam o Timbre</h2>
          <ul className="space-y-4">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Forma do Instrumento</h3>
              <p className="text-stone-600 text-lg">
                A construção e o design de um instrumento afetam como o som é produzido e projetado.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Material</h3>
              <p className="text-stone-600 text-lg">
                O tipo de material utilizado para fazer o instrumento influencia o timbre; por exemplo, madeira, metal ou plástico têm propriedades sonoras distintas.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Técnica de Execução</h3>
              <p className="text-stone-600 text-lg">
                A maneira como o músico toca o instrumento, como a intensidade e a posição da mão, também altera o timbre.
              </p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: componentsInView ? 1 : 0, x: componentsInView ? 0 : -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-stone-700">Processamento do Som</h3>
              <p className="text-stone-600 text-lg">
                Efeitos eletrônicos e técnicas de gravação podem modificar o timbre original de um instrumento.
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
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Exemplos de Timbres</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-stone-700">Piano</h3>
              <p className="text-stone-600 text-lg">
                Possui um timbre rico e ressonante, com harmônicos complexos.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-stone-700">Violino</h3>
              <p className="text-stone-600 text-lg">
                Produz um som suave e expressivo, com uma gama dinâmica ampla.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-stone-700">Guitarra Elétrica</h3>
              <p className="text-stone-600 text-lg">
                O timbre pode variar enormemente dependendo dos efeitos e amplificadores utilizados.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-stone-700">Voz Humana</h3>
              <p className="text-stone-600 text-lg">
                Cada voz é única, com diferentes nuances e qualidades que expressam emoção.
              </p>
            </li>
          </ul>
          <p className="text-stone-700 text-lg mt-4">
            Compreender o timbre é essencial para qualquer compositor ou músico, pois a escolha dos timbres pode transformar uma peça musical e impactar a experiência do ouvinte. Explore diferentes instrumentos e ouça como suas características timbrais moldam a música que você cria!
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default ToneSection;
