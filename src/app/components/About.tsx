import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Ser a ponte entre tecnologia e negócios, alavancando o crescimento das empresas e acompanhando sua transformação digital e cultural com excelência e governança.',
      gradient: 'hsl(195,90%,50%)',
    },
    {
      icon: Eye,
      title: 'Nossa Visão',
      description: 'Ser o parceiro tecnológico de escolha para a jornada de transformação empresarial, apoiando empresas sem fronteiras, desafiando-nos constantemente.',
      gradient: 'hsl(230,55%,60%)',
    },
    {
      icon: Heart,
      title: 'Nossos Valores',
      description: 'Paixão pelo sucesso • Inovação contínua • Empatia e colaboração • Curiosidade e criatividade • Construção coletiva • Ambiente inclusivo • Evolução permanente.',
      gradient: 'hsl(260,65%,60%)',
    },
  ];

  return (
    <section className="py-32" style={{ background: 'hsl(225,15%,8%)' }}>
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
              Somos LIT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: 'hsl(0,0%,95%)' }}>
            Quem Somos
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(220,10%,55%)' }}>
            A ponte entre tecnologia e negócios, alavancando o crescimento das empresas com transformação digital e cultural.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="group relative rounded-3xl p-8 border"
                style={{
                  background: 'hsl(225,15%,12%)',
                  borderColor: 'hsl(225,15%,18%)',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: `${card.gradient}` }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(0,0%,95%)' }}>
                  {card.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'hsl(220,10%,55%)' }}>
                  {card.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                  style={{ background: card.gradient }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
