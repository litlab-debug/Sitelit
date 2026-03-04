import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Managed Services',
    subtitle: 'Gestão Completa de TI',
    description: 'Gerenciamento completo da sua infraestrutura digital — monitoramento 24/7, suporte especializado, atualizações proativas e SLA garantido.',
    image: 'https://images.unsplash.com/photo-1680691257251-5fead813b73e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOT0MlMjBuZXR3b3JrJTIwb3BlcmF0aW9ucyUyMGNlbnRlciUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzcyNTg3MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-600 to-indigo-600',
    benefits: [
      'Monitoramento 24/7',
      'SLA garantido',
      'Suporte N1, N2 e N3',
      'Gestão de incidentes',
    ],
  },
  {
    title: 'Body Shop & Squads',
    subtitle: 'Times de Alta Performance',
    description: 'Squads ágeis dedicados ao seu projeto — desenvolvedores, arquitetos, QA e POs trabalhando em sinergia com seu time.',
    image: 'https://images.unsplash.com/photo-1732210038505-34a70d3b45a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NzI1ODY4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-600 to-pink-600',
    benefits: [
      'Squads dedicados',
      'Metodologias ágeis',
      'Seniores especializados',
      'Fit cultural garantido',
    ],
  },
  {
    title: 'Sustentação Evolutiva',
    subtitle: 'Melhoria Contínua',
    description: 'Evolução constante das suas soluções — correções, melhorias, novas features e adaptações às mudanças do negócio.',
    image: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250aW51b3VzJTIwc29mdHdhcmUlMjBldm9sdXRpb24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzI1ODcxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-green-600 to-teal-600',
    benefits: [
      'Correções e hotfixes',
      'Novas funcionalidades',
      'Refatoração de código',
      'Documentação atualizada',
    ],
  },
  {
    title: 'Arquitetura Corporativa',
    subtitle: 'Infraestrutura Enterprise-Grade',
    description: 'Arquitetura de soluções escaláveis, seguras e resilientes — alinhadas às melhores práticas de cloud, microserviços e governança.',
    image: 'https://images.unsplash.com/photo-1762698439076-d4ba29992a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGFyY2hpdGVjdHVyZSUyMGluZnJhc3RydWN0dXJlJTIwZGlhZ3JhbXxlbnwxfHx8fDE3NzI1ODY4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-orange-600 to-red-600',
    benefits: [
      'Cloud Native Design',
      'Microserviços',
      'LGPD & Segurança',
      'Escalabilidade garantida',
    ],
  },
];

export function ManagedServices() {
  const whatsappUrl = 'https://wa.me/5511910162966?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20LIT.';
  
  return (
    <section id="servicos" className="py-32 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-purple-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              SERVIÇOS GERENCIADOS
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              Serviços
            </span>
            <br />
            <span className="text-white">Enterprise</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative group overflow-hidden rounded-3xl">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-10`} />
                  
                  {/* Image */}
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                </div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${service.gradient} bg-opacity-20 rounded-full mb-4`}>
                    <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                    {service.title}
                  </h3>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`group px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    <span className="flex items-center gap-2">
                      Contratar Serviço
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}