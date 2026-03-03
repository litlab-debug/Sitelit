import { motion } from 'motion/react';
import { FileCode, Shield, TrendingUp, Lock, Zap, Gauge } from 'lucide-react';

export function DNA() {
  const features = [
    {
      icon: FileCode,
      title: 'Arquitetura antes do código',
      description: 'Nenhum projeto começa sem blueprint técnico e aprovação de arquitetura.',
    },
    {
      icon: Shield,
      title: 'Governança como fundamento',
      description: 'Processos auditáveis, rastreáveis e controlados desde o primeiro dia.',
    },
    {
      icon: TrendingUp,
      title: 'ROI mensurável e documentado',
      description: 'Cada iniciativa gera valor tangível, apresentado ao board com KPIs claros.',
    },
    {
      icon: Lock,
      title: 'Segurança & LGPD',
      description: 'Compliance total, políticas de acesso rigorosas e auditoria permanente.',
    },
    {
      icon: Zap,
      title: 'Escalabilidade nativa',
      description: 'De 10 para 10.000 usuários sem retrabalho — arquitetura preparada para crescer.',
    },
    {
      icon: Gauge,
      title: 'Performance operacional',
      description: 'Eficiência máxima em cada camada da operação digital corporativa.',
    },
  ];

  return (
    <section id="dna" className="py-32 relative overflow-hidden" style={{ background: 'hsl(225,15%,6%)' }}>
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(195,90%,50%) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
              DNA LIT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: 'hsl(0,0%,95%)' }}>
            O que nos torna diferentes
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(220,10%,55%)' }}>
            A LIT não desenvolve apenas soluções tecnológicas. Estruturamos transformação digital com governança, métricas e ROI comprovado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative rounded-2xl p-8 border backdrop-blur-sm"
                style={{
                  background: 'hsl(225,15%,12%)',
                  borderColor: 'hsl(225,15%,18%)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: 'linear-gradient(135deg, hsl(195,90%,50%,0.2), hsl(260,65%,60%,0.2))',
                  }}
                />

                <div className="relative">
                  <Icon className="w-12 h-12 mb-4" style={{ color: 'hsl(195,90%,50%)' }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'hsl(0,0%,95%)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'hsl(220,10%,55%)' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
