import { motion } from 'motion/react';

const clients = [
  'Bradesco', 'Itaú', 'Ambev', 'Vale', 'Petrobras', 'Magazine Luiza',
  'Natura', 'Embraer', 'Votorantim', 'Suzano', 'Raízen', 'B3',
  'Siemens', 'Bosch', 'Samsung', 'LG', 'Nestlé', 'Unilever',
  'JBS', 'BRF', 'CPFL', 'Energisa', 'Tim', 'Claro',
];

export function Clients() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: 'hsl(225,15%,6%)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-block px-6 py-2 rounded-full mb-4"
            style={{
              background: 'linear-gradient(135deg, hsl(195,90%,50%,0.1), hsl(260,65%,60%,0.1))',
              border: '1px solid hsl(195,90%,50%,0.2)',
            }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, hsl(195,90%,50%), hsl(260,65%,60%))',
            }}>
              Clientes
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black" style={{ color: 'hsl(0,0%,95%)' }}>
            Nossos Clientes
          </h2>
        </motion.div>

        {/* Infinite marquee */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 rounded-xl border backdrop-blur-sm"
                  style={{
                    background: 'hsl(225,15%,12%,0.5)',
                    borderColor: 'hsl(225,15%,18%)',
                    minWidth: '200px',
                  }}
                >
                  <span className="text-lg font-semibold whitespace-nowrap" style={{ color: 'hsl(220,10%,55%)' }}>
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, hsl(225,15%,6%) 0%, transparent 100%)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none"
            style={{
              background: 'linear-gradient(-90deg, hsl(225,15%,6%) 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
