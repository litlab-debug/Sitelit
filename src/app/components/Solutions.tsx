import { motion } from 'motion/react';
import { ArrowRight, Check, Bot } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const solutions = [
  {
    title: 'SeuFuncionárioDigital',
    subtitle: 'Além de Chatbot: IA Empresarial Completa',
    description: 'Muito mais que chatbot — um funcionário digital completo com conhecimento profundo do seu negócio, integrações ERP/CRM, visão computacional, análise de documentos e capacidade de executar processos complexos com autonomia e inteligência.',
    image: 'https://images.unsplash.com/photo-1758626099012-2904337e9c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRpZ2l0YWwlMjBlbXBsb3llZSUyMGtub3dsZWRnZSUyMGJhc2UlMjBpbnRlZ3JhdGlvbnxlbnwxfHx8fDE3NzI1ODcxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-600 to-cyan-500',
    benefits: [
      'Base de conhecimento empresarial',
      'Integrações ERP/CRM/SAP',
      'Visão computacional + OCR IA',
      'Execução autônoma de processos',
    ],
  },
  {
    title: 'Chatbots & IA',
    subtitle: 'Inteligência Conversacional',
    description: 'Chatbots inteligentes com IA Generativa (GPT, Claude) para atendimento, vendas e suporte — integrados com seus sistemas e disponíveis 24/7.',
    image: 'https://images.unsplash.com/photo-1751448582395-27fc57293f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2hhdGJvdCUyMGNvbnZlcnNhdGlvbnxlbnwxfHx8fDE3NzI1ODY3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-600 to-pink-500',
    benefits: [
      'IA Generativa (GPT/Claude)',
      'RAG Enterprise',
      'NLP customizado',
      'Integração omnichannel',
    ],
  },
  {
    title: 'Power Platform',
    subtitle: 'Low-Code + High-Code',
    description: 'Aplicações corporativas combinando Low-Code (Power Platform) e High-Code (React, Node.js, Python, .NET) com arquitetura robusta.',
    image: 'https://images.unsplash.com/photo-1617780421515-08fae9caa171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBwb3dlciUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjU4Njc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-orange-600 to-red-500',
    benefits: [
      'Power Apps + Power BI',
      'Dataverse integrado',
      'React / Node.js / .NET',
      'Azure DevOps CI/CD',
    ],
  },
  {
    title: 'RPA Enterprise',
    subtitle: 'Automação Robótica de Processos',
    description: 'Automação inteligente de processos repetitivos com UiPath, Automation Anywhere e Power Automate — reduzindo custos e aumentando a produtividade.',
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwcHJvY2VzcyUyMGF1dG9tYXRpb24lMjBmYWN0b3J5fGVufDF8fHx8MTc3MjU1MDc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-indigo-600 to-blue-500',
    benefits: [
      'UiPath + Automation Anywhere',
      'Power Automate Desktop',
      'Orquestração de bots',
      'Monitoramento 24/7',
    ],
  },
  {
    title: 'Engenharia de Dados',
    subtitle: 'Data Lakehouse & Analytics',
    description: 'Arquitetura completa de dados: ingestão, transformação, armazenamento e análise com as melhores práticas de Data Engineering e BI.',
    image: 'https://images.unsplash.com/photo-1761449779811-33f7c48ed367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmclMjBwaXBlbGluZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI1ODY4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-teal-600 to-cyan-500',
    benefits: [
      'Azure Synapse + Databricks',
      'ETL/ELT com ADF',
      'Data Lakehouse',
      'Power BI + Analytics',
    ],
  },
];

export function Solutions() {
  const whatsappUrl = 'https://wa.me/5511910162966?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20LIT.';
  
  return (
    <section id="solucoes" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
                    onClick={() => window.open(whatsappUrl, '_blank')}
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