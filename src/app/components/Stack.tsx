import { motion } from 'motion/react';
import { MessageSquare, Workflow, Bot, Code } from 'lucide-react';

export function Stack() {
  const stacks = [
    {
      icon: MessageSquare,
      title: 'Chatbots & Agentes de IA',
      description: 'Atendimento inteligente multi-canal com IA generativa, RAG e processamento de linguagem natural.',
      color: 'hsl(195,90%,50%)',
      tags: ['WhatsApp Business API', 'Microsoft Teams', 'Web Chat', 'IA Generativa (GPT/Claude)', 'RAG Enterprise', 'NLP customizado'],
    },
    {
      icon: Workflow,
      title: 'Workflow & Orquestração',
      description: 'Automação de processos complexos com plataformas enterprise e integrações multi-sistema.',
      color: 'hsl(230,55%,60%)',
      tags: ['n8n Enterprise', 'Power Automate', 'Automation Anywhere', 'Webhooks & APIs', 'Event-Driven Architecture'],
    },
    {
      icon: Bot,
      title: 'RPA & Automação Legacy',
      description: 'Automação robótica para sistemas legados, mainframes e interfaces tradicionais.',
      color: 'hsl(260,65%,60%)',
      tags: ['Automation Anywhere', 'UiPath', 'Power Automate Desktop', 'IBM', 'Screen Scraping'],
    },
    {
      icon: Code,
      title: 'Low-Code & High-Code Enterprise',
      description: 'Aplicações corporativas combinando Low-Code (Power Platform) e High-Code (React, Node.js, Python, .NET).',
      color: 'hsl(195,90%,50%)',
      tags: ['Power Apps', 'Power BI', 'Dataverse', 'React / Node.js', '.NET / Python', 'Azure DevOps'],
    },
  ];

  return (
    <section id="stack" className="py-32" style={{ background: 'hsl(225,15%,6%)' }}>
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
              Stack Tecnológico
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: 'hsl(0,0%,95%)' }}>
            Tecnologias de classe mundial
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(220,10%,55%)' }}>
            Dominamos as principais plataformas de automação, IA, low-code e high-code do mercado. O diferencial é como orquestramos tudo com arquitetura e governança enterprise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <motion.div
                key={index}
                className="rounded-3xl p-8 border"
                style={{
                  background: 'hsl(225,15%,12%)',
                  borderColor: 'hsl(225,15%,18%)',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: stack.color }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(0,0%,95%)' }}>
                  {stack.title}
                </h3>
                <p className="mb-6" style={{ color: 'hsl(220,10%,55%)' }}>
                  {stack.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stack.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'hsl(225,15%,18%)',
                        color: 'hsl(220,10%,55%)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <motion.button
            className="px-10 py-4 rounded-xl font-bold text-lg text-white"
            style={{
              background: 'linear-gradient(135deg, hsl(195,90%,50%), hsl(260,65%,60%))',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale com um especialista sobre sua stack
          </motion.button>
        </div>
      </div>
    </section>
  );
}
