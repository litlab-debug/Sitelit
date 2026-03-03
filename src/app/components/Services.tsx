import { motion } from 'motion/react';
import { FileCode, Shield, TrendingUp, Lock, Zap, Gauge } from 'lucide-react';

const services = [
  {
    icon: FileCode,
    title: 'Arquitetura antes do código',
    description: 'Nenhum projeto começa sem blueprint técnico e aprovação de arquitetura.',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    bgPattern: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
  },
  {
    icon: Shield,
    title: 'Governança como fundamento',
    description: 'Processos auditáveis, rastreáveis e controlados desde o primeiro dia.',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    bgPattern: 'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)',
  },
  {
    icon: TrendingUp,
    title: 'ROI mensurável e documentado',
    description: 'Cada iniciativa gera valor tangível, apresentado ao board com KPIs claros.',
    gradient: 'from-orange-600 via-red-500 to-pink-500',
    bgPattern: 'radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)',
  },
  {
    icon: Lock,
    title: 'Segurança & LGPD',
    description: 'Compliance total, políticas de acesso rigorosas e auditoria permanente.',
    gradient: 'from-green-600 via-emerald-500 to-teal-500',
    bgPattern: 'radial-gradient(circle at 20% 20%, rgba(5, 150, 105, 0.2) 0%, transparent 50%)',
  },
  {
    icon: Zap,
    title: 'Escalabilidade nativa',
    description: 'De 10 para 10.000 usuários sem retrabalho — arquitetura preparada para crescer.',
    gradient: 'from-indigo-600 via-blue-500 to-cyan-500',
    bgPattern: 'radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)',
  },
  {
    icon: Gauge,
    title: 'Performance operacional',
    description: 'Eficiência máxima em cada camada da operação digital corporativa.',
    gradient: 'from-yellow-600 via-orange-500 to-red-500',
    bgPattern: 'radial-gradient(circle at 50% 20%, rgba(234, 179, 8, 0.2) 0%, transparent 50%)',
  },
];

export function Services() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-blue-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              DNA LIT
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              O que nos torna
            </span>
            <br />
            <span className="text-white">Diferentes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A LIT não desenvolve apenas soluções tecnológicas. Estruturamos transformação digital com governança, métricas e ROI comprovado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 overflow-hidden">
                  {/* Background pattern */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: service.bgPattern }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="relative text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
