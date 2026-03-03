import { motion } from 'motion/react';
import { useState } from 'react';

export function Cases() {
  const [filter, setFilter] = useState('Todos');

  const filters = [
    'Todos', 'Visão Computacional', 'Governança', 'IA & RPA', 'Managed Services',
    'Power BI', 'Apps', 'Workflow', 'Compliance', 'RPA', 'Sustentação',
    'IA Conversacional', 'Integração', 'Body Shop', 'Engenharia de Apps', 'Engenharia de Dados',
  ];

  const cases = [
    { title: 'Automação industrial com visão computacional', tag: 'Visão Computacional', result: '80% redução de falhas' },
    { title: 'Estruturação de CoE Power Platform', tag: 'Governança', result: '3 squads implantados' },
    { title: 'Funcionário Digital para conferência de processos', tag: 'IA & RPA', result: '12.000 horas/ano salvas' },
    { title: 'Suporte 24x7 corporativo multinacional', tag: 'Managed Services', result: '99.8% SLA atingido' },
    { title: 'Fábrica de BI — dashboards financeiros', tag: 'Power BI', result: '45 painéis entregues' },
    { title: 'Portal de gestão de contratos em Power Apps', tag: 'Apps', result: '100% digital' },
    { title: 'Automatização de relatórios executivos C-Level', tag: 'Power BI', result: '8h/semana economizadas' },
    { title: 'Orquestração de processos com n8n + APIs', tag: 'Workflow', result: '15 integrações ativas' },
    { title: 'Governança LGPD em ambiente Power Platform', tag: 'Compliance', result: '100% conformidade' },
    { title: 'Automatização de rotinas financeiras com RPA', tag: 'RPA', result: '5.000 horas/ano salvas' },
    { title: 'Sustentação evolutiva de 30+ apps em produção', tag: 'Sustentação', result: '30 apps mantidos' },
    { title: 'Chatbot de atendimento com IA generativa', tag: 'IA Conversacional', result: '70% automação' },
  ];

  const filteredCases = filter === 'Todos' ? cases : cases.filter(c => c.tag === filter);

  return (
    <section id="cases" className="py-32" style={{ background: 'hsl(225,15%,8%)' }}>
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
              Portfólio
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: 'hsl(0,0%,95%)' }}>
            Cases de Sucesso
          </h2>
          <p className="text-xl mb-12" style={{ color: 'hsl(220,10%,55%)' }}>
            Resultados reais em operações enterprise de alta complexidade
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { value: '40.000+', label: 'Horas salvas por ano' },
              { value: '100+', label: 'Apps criados' },
              { value: '200+', label: 'Dashboards entregues' },
              { value: '50+', label: 'Funcionários Digitais ativos' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-4xl font-black mb-2 text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, hsl(195,90%,50%), hsl(260,65%,60%))',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'hsl(220,10%,55%)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.slice(0, 8).map((f, i) => (
            <button
              key={i}
              onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: filter === f ? 'linear-gradient(135deg, hsl(195,90%,50%), hsl(260,65%,60%))' : 'hsl(225,15%,12%)',
                color: filter === f ? 'white' : 'hsl(220,10%,55%)',
                border: `1px solid ${filter === f ? 'transparent' : 'hsl(225,15%,18%)'}`,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6 border"
              style={{
                background: 'hsl(225,15%,12%)',
                borderColor: 'hsl(225,15%,18%)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: 'hsl(195,90%,50%,0.2)',
                  color: 'hsl(195,90%,50%)',
                }}
              >
                {caseItem.tag}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: 'hsl(0,0%,95%)' }}>
                {caseItem.title}
              </h3>
              <div
                className="text-2xl font-black text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, hsl(195,90%,50%), hsl(260,65%,60%))',
                }}
              >
                {caseItem.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
