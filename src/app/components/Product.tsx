import { motion } from 'motion/react';
import { Bot, CheckCircle, FileCheck, Eye, Factory, DollarSign, Briefcase, Database, Monitor } from 'lucide-react';

export function Product() {
  const benefits = [
    'Arquitetura estruturada',
    'Governança e LGPD',
    'Logs completos e auditoria',
    'ROI comprovado e documentado',
  ];

  const features = [
    { icon: CheckCircle, title: 'Conferência de processos', description: 'Validação automática com IA e regras de negócio' },
    { icon: FileCheck, title: 'Validação de documentos', description: 'OCR + IA para extração e conferência inteligente' },
    { icon: Eye, title: 'Visão computacional', description: 'Inspeção de qualidade industrial por câmeras' },
    { icon: Factory, title: 'Processos industriais', description: 'Automação de rotinas operacionais e produtivas' },
    { icon: DollarSign, title: 'Processos financeiros', description: 'Conciliação, relatórios e compliance automatizado' },
    { icon: Briefcase, title: 'Back-office digital', description: 'Automação de rotinas administrativas e repetitivas' },
    { icon: Database, title: 'Integração ERP', description: 'SAP, Oracle, TOTVS — conectores bidirecionais' },
    { icon: Monitor, title: 'Monitoramento 24/7', description: 'Dashboards operacionais e alertas em tempo real' },
  ];

  return (
    <section id="solucoes" className="py-32" style={{ background: 'hsl(225,15%,8%)' }}>
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
              Produto Principal
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-6" style={{ color: 'hsl(0,0%,95%)' }}>
            SeuFuncionárioDigital
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(220,10%,55%)' }}>
            Funcionários Digitais treinados com IA para executar processos com precisão, escala e inteligência — 24 horas por dia, 7 dias por semana, sem erros humanos.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="rounded-3xl p-12 mb-16 border relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(195,90%,50%,0.1), hsl(260,65%,60%,0.1))',
            borderColor: 'hsl(195,90%,50%,0.3)',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 text-center">
            <Bot className="w-20 h-20 mx-auto mb-6" style={{ color: 'hsl(195,90%,50%)' }} />
            <h3 className="text-3xl font-bold mb-4" style={{ color: 'hsl(0,0%,95%)' }}>
              Empresas de alta performance contratam Funcionários Digitais
            </h3>
            <p className="text-xl mb-8" style={{ color: 'hsl(220,10%,55%)' }}>
              O SeuFuncionárioDigital transforma processos manuais em operações automatizadas com IA, RPA e integração enterprise.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="px-6 py-3 rounded-full border"
                  style={{
                    background: 'hsl(225,15%,12%,0.8)',
                    borderColor: 'hsl(225,15%,18%)',
                  }}
                >
                  <span style={{ color: 'hsl(0,0%,95%)' }}>{benefit}</span>
                </div>
              ))}
            </div>

            <motion.button
              className="px-10 py-4 rounded-xl font-bold text-lg text-white"
              style={{
                background: 'linear-gradient(135deg, hsl(195,90%,50%), hsl(260,65%,60%))',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="rounded-2xl p-6 border"
                style={{
                  background: 'hsl(225,15%,12%)',
                  borderColor: 'hsl(225,15%,18%)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Icon className="w-10 h-10 mb-4" style={{ color: 'hsl(195,90%,50%)' }} />
                <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(0,0%,95%)' }}>
                  {feature.title}
                </h4>
                <p className="text-sm" style={{ color: 'hsl(220,10%,55%)' }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
