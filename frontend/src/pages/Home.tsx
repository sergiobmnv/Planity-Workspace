import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111827] text-white relative overflow-hidden flex flex-col font-sans">
      
      {/* 1. NAVBAR ESTIRADO: Hemos quitado el max-w-7xl y aumentado el padding lateral */}
      <header className="flex justify-between items-center px-8 md:px-16 lg:px-24 py-8 relative z-20 w-full">
        <div className="flex items-center gap-3">
          <span className="text-blue-500 text-3xl sm:text-4xl">▲</span>
          <span className="text-2xl sm:text-3xl font-bold tracking-wide">Planity</span>
        </div>
        
        <Link 
          to="/login" 
          className="bg-blue-600/20 hover:bg-blue-500 border border-blue-500/50 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-sm shadow-lg shadow-blue-500/10"
        >
          Iniciar Sesión
        </Link>
      </header>

      {/* 2. CONTENIDO PRINCIPAL: Dividido en 2 columnas (Texto a la izq, Gráfico a la der) */}
      <main className="flex-grow flex items-center px-8 md:px-16 lg:px-24 relative z-10 w-full mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* COLUMNA IZQUIERDA: Textos y Botón */}
          <div className="max-w-2xl text-left z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Organiza, planifica y <br />
              haz realidad tus <br />
              proyectos con <span className="text-blue-400">Planity</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              La herramienta perfecta para gestionar tus tareas, equipos y eventos de forma ágil y centralizada.
            </p>
            
            <div className="relative inline-block w-full sm:w-auto mt-2">
              <div className="btn-glow"></div>
              <Link 
                to="/registro" 
                className="relative inline-block w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 text-center shadow-xl shadow-blue-500/50"
              >
                Comenzar Ahora
              </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA: Elementos gráficos flotantes (Solo visible en pantallas grandes) */}
          <div className="hidden lg:flex relative justify-center items-center h-[400px] w-full">
            {/* Efecto de luz difuminada en el fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Tarjeta de Tarea Principal (Flotante) */}
            <div className="absolute bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-80 shadow-2xl transform -translate-y-8 translate-x-12 hover:-translate-y-10 transition-transform duration-500">
              <div className="flex justify-between items-center mb-4">
                <div className="h-3 w-1/3 bg-blue-400/80 rounded-full"></div>
                <div className="h-6 w-6 rounded-full bg-slate-300/30"></div>
              </div>
              <div className="h-4 w-3/4 bg-slate-200/50 rounded-full mb-3"></div>
              <div className="h-4 w-1/2 bg-slate-200/30 rounded-full mb-6"></div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-[#111827]"></div>
                  <div className="h-8 w-8 rounded-full bg-purple-500 border-2 border-[#111827]"></div>
                </div>
                <div className="h-3 w-16 bg-green-400/60 rounded-full"></div>
              </div>
            </div>

            {/* Tarjeta de Progreso Secundaria (Flotante) */}
            <div className="absolute bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl w-64 shadow-xl transform translate-y-24 -translate-x-20 hover:translate-y-20 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <div className="h-5 w-5 bg-blue-400 rounded-sm"></div>
                </div>
                <div>
                  <div className="h-3 w-20 bg-slate-200/60 rounded-full mb-2"></div>
                  <div className="h-2 w-12 bg-slate-400/40 rounded-full"></div>
                </div>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 mt-4">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Efecto de Olas Animadas en la Base (Sin cambios) */}
      <div className="absolute bottom-0 w-full left-0 pointer-events-none select-none h-48 md:h-64 overflow-hidden z-0">
        <div className="absolute bottom-0 left-0 h-full animate-waves-slow opacity-50 flex">
          <svg viewBox="0 0 1440 320" className="h-full w-full flex-shrink-0" preserveAspectRatio="none">
            <path fill="#1e3a8a" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="h-full w-full flex-shrink-0" preserveAspectRatio="none">
            <path fill="#1e3a8a" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 h-full animate-waves-fast opacity-80 flex">
          <svg viewBox="0 0 1440 320" className="h-full w-full flex-shrink-0" preserveAspectRatio="none">
            <path fill="#2563eb" d="M0,256L60,245.3C120,235,240,213,360,213.3C480,213,600,235,720,245.3C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" className="h-full w-full flex-shrink-0" preserveAspectRatio="none">
            <path fill="#2563eb" d="M0,256L60,245.3C120,235,240,213,360,213.3C480,213,600,235,720,245.3C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}