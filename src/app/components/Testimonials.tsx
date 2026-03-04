import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: 'A LIT transformou completamente nossa operação. Implementaram Funcionários Digitais que salvam 12.000 horas por ano. Arquitetura impecável e governança total.',
    rating: 5,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    content: 'Estruturaram nosso CoE Power Platform do zero. 3 squads implantados com governança e LGPD completa. Profissionalismo e expertise incomparáveis.',
    rating: 5,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    content: 'Suporte 24x7 com 99.8% de SLA. Managed Services de alto nível. A LIT é parceiro estratégico essencial para nossa operação crítica.',
    rating: 5,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    content: 'Fábrica de BI entregou 45 dashboards financeiros com ROI visível em 30 dias. Analytics em tempo real mudou nossa tomada de decisão.',
    rating: 5,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    content: 'Automação industrial com visão computacional reduziu 80% das falhas. Tecnologia de ponta com arquitetura enterprise robusta.',
    rating: 5,
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    content: 'Portal de gestão de contratos 100% digital em Power Apps. Integração com SAP em tempo real. Squad dedicada de excelência.',
    rating: 5,
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function Testimonials() {
  return (
    <section id="cases" className="relative py-32 bg-black overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

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
              CASOS DE SUCESSO
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Histórias
            </span>
            <br />
            <span className="text-white">de Transformação</span>
          </h2>
          <p className="text-xl text-gray-400">
            Resultados reais em operações enterprise de alta complexidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 overflow-hidden">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-8 leading-relaxed italic relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Bottom accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                />

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}