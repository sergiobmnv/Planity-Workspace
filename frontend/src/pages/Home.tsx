import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };

  return (
    <div className="bg-[#111827] text-white font-sans overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 md:px-16 lg:px-24 py-6 z-50 bg-[#111827]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-blue-500 text-3xl sm:text-4xl">▲</span>
          <span className="text-2xl sm:text-3xl font-bold tracking-wide">Planity</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
          <a href="#caracteristicas" className="hover:text-blue-400 transition-colors">Características</a>
          <a href="#cta" className="hover:text-blue-400 transition-colors">Empezar</a>
        </nav>

        <Link 
          to="/login" 
          className="bg-blue-600/20 hover:bg-blue-500 border border-blue-500/50 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-sm shadow-lg shadow-blue-500/10"
        >
          Iniciar Sesión
        </Link>
      </header>

      {/* --- SECCIÓN 1: HERO (Limpiada y modernizada) --- */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-20 w-full overflow-hidden">
        
        {/* Luz de fondo sutil (reemplaza a las olas para dar profundidad) */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="px-8 md:px-16 lg:px-24 relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-12">
          <motion.div 
            className="max-w-3xl text-left z-10 w-full"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 mt-10 tracking-tight">
              Organiza, planifica y <br />
              haz realidad tus <br />
              proyectos con <span className="text-blue-500">Planity</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              La herramienta perfecta para gestionar tus tareas, equipos y eventos de forma ágil y centralizada. Todo lo que necesitas, sin complicaciones.
            </motion.p>
            
            <motion.div variants={fadeUp} className="relative inline-block w-full sm:w-auto">
              <div className="btn-glow"></div>
              <Link 
                to="/registro" 
                className="relative inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 text-center shadow-xl shadow-blue-600/30"
              >
                Comenzar Ahora
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN 2: CARACTERÍSTICAS --- */}
      <section id="caracteristicas" className="py-32 px-8 md:px-16 lg:px-24 bg-[#0d131f] relative border-t border-white/5">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Por qué elegir <span className="text-blue-500">Planity</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Diseñado para que los equipos modernos trabajen sin fricciones. Todo lo que necesitas en un solo lugar.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-[#111827] border border-slate-800 p-10 rounded-3xl hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-8 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Rendimiento Ágil</h3>
              <p className="text-slate-400 leading-relaxed">Carga instantánea y sincronización en tiempo real. No pierdas ni un segundo esperando a que tu espacio de trabajo se actualice.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#111827] border border-slate-800 p-10 rounded-3xl hover:border-purple-500/50 transition-colors group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 text-2xl mb-8 group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Trabajo en Equipo</h3>
              <p className="text-slate-400 leading-relaxed">Asigna tareas, deja comentarios y mantén a todo tu equipo perfectamente alineado hacia el mismo objetivo.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#111827] border border-slate-800 p-10 rounded-3xl hover:border-green-500/50 transition-colors group">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 text-2xl mb-8 group-hover:scale-110 transition-transform">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Seguridad Total</h3>
              <p className="text-slate-400 leading-relaxed">Tus datos están protegidos. Sistema de autenticación encriptado y copias de seguridad automáticas para tu tranquilidad.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- SECCIÓN 3: CTA --- */}
      <section id="cta" className="py-32 px-8 relative overflow-hidden flex items-center justify-center text-center border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">No dejes para mañana lo que puedes organizar hoy</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Únete a la nueva generación de profesionales y empieza a usar Planity de forma totalmente gratuita.</p>
          <Link 
            to="/registro" 
            className="inline-block bg-white text-[#111827] hover:bg-slate-200 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Crear mi cuenta gratis
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm bg-[#0d131f]">
        <p>© {new Date().getFullYear()} Planity. Proyecto TFG creado por Sergio.</p>
      </footer>

    </div>
  );
}