import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -bottom-48 -right-48 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-full border border-cyan-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              SOBRE A LIT
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Quem Somos
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A <span className="text-white font-bold">LIT Digital Transformation</span> é uma consultoria especializada em ecossistemas digitais inteligentes — combinando IA, automação, Power Platform, engenharia de dados e times de alta performance para transformar operações empresariais.
          </p>
        </motion.div>

        {/* Missão, Visão, Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: 'Missão',
              description: 'Transformar operações empresariais através de soluções digitais inteligentes, escaláveis e sustentáveis — entregando valor real e mensurável.',
              gradient: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Eye,
              title: 'Visão',
              description: 'Ser referência em transformação digital no Brasil, reconhecida pela excelência técnica, inovação e impacto nos negócios dos clientes.',
              gradient: 'from-purple-500 to-pink-500',
            },
            {
              icon: Heart,
              title: 'Valores',
              description: 'Excelência técnica, inovação constante, transparência total, compromisso com resultados e desenvolvimento contínuo de pessoas.',
              gradient: 'from-orange-500 to-red-500',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: '500+', label: 'Processos Automatizados' },
            { value: '50+', label: 'Clientes Enterprise' },
            { value: '95%', label: 'Satisfação do Cliente' },
            { value: '24/7', label: 'Suporte Disponível' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
