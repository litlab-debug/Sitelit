import { motion } from 'motion/react';
import { ArrowRight, Check, Bot } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const solutions = [
  {
    title: 'SeuFuncionárioDigital',
    subtitle: 'Automação Inteligente Enterprise',
    description: 'Funcionários Digitais treinados com IA para executar processos com precisão, escala e inteligência — 24 horas por dia, 7 dias por semana, sem erros humanos.',
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwcHJvY2VzcyUyMGF1dG9tYXRpb24lMjBmYWN0b3J5fGVufDF8fHx8MTc3MjU1MDc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-600 to-cyan-500',
    benefits: [
      'Validação automática com IA',
      'OCR + IA para documentos',
      'Visão computacional industrial',
      'Integração ERP completa',
    ],
  },
  {
    title: 'IA & Machine Learning',
    subtitle: 'Inteligência que Aprende',
    description: 'Modelos de IA customizados para análise preditiva, reconhecimento de padrões e automação inteligente com governança enterprise.',
    image: 'https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzI1NTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-600 to-pink-500',
    benefits: [
      'IA Generativa (GPT/Claude)',
      'RAG Enterprise',
      'NLP customizado',
      'Chatbots inteligentes',
    ],
  },
  {
    title: 'Power Platform Enterprise',
    subtitle: 'Low-Code + High-Code',
    description: 'Aplicações corporativas combinando Low-Code (Power Platform) e High-Code (React, Node.js, Python, .NET) com arquitetura robusta.',
    image: 'https://images.unsplash.com/photo-1726065235158-d9c3f817f331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBlbnRlcnByaXNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI1NDI5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-orange-600 to-red-500',
    benefits: [
      'Power Apps + Power BI',
      'Dataverse integrado',
      'React / Node.js / .NET',
      'Azure DevOps CI/CD',
    ],
  },
  {
    title: 'Arquitetura Digital',
    subtitle: 'Infraestrutura Enterprise-Grade',
    description: 'Infraestrutura com os mais altos padrões de segurança, governança e escalabilidade — pronta para operações de missão crítica.',
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTUwNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-green-600 to-emerald-500',
    benefits: [
      'Azure Cloud Native',
      'Docker + Kubernetes',
      'CI/CD automatizado',
      'LGPD & Compliance total',
    ],
  },
];

export function Solutions() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-blue-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              SOLUÇÕES PERSONALIZADAS
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Soluções
            </span>
            <br />
            <span className="text-white">Sob Medida</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {solutions.map((solution, index) => (
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-10`} />
                  
                  {/* Image */}
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
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
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${solution.gradient} bg-opacity-20 rounded-full mb-4`}>
                    <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${solution.gradient}`}>
                      {solution.subtitle}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                    {solution.title}
                  </h3>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {solution.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${solution.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`group px-8 py-4 bg-gradient-to-r ${solution.gradient} text-white rounded-2xl font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      Saiba Mais
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
