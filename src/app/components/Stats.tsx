import { motion, useMotionValue, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay: number;
  icon: React.ElementType;
  gradient: string;
}

function StatItem({ end, label, suffix = '', prefix = '', delay, icon: Icon, gradient }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });

    const controls = animate(count, end, {
      duration: 2,
      delay,
      ease: 'easeOut',
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, end, delay]);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 border border-gray-800 overflow-hidden">
        {/* Background glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
        />

        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Number */}
        <div className="relative mb-3">
          <span className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
            {prefix}
            {displayValue}
            {suffix}
          </span>
        </div>

        {/* Label */}
        <div className="text-gray-400 text-lg font-semibold uppercase tracking-wider">
          {label}
        </div>

        {/* Bottom accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
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
              NÚMEROS QUE IMPRESSIONAM
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Resultados
            </span>
            <br />
            <span className="text-white">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mais de 10 anos entregando excelência em transformação digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem
            end={200}
            label="Projetos Realizados"
            suffix="+"
            delay={0.2}
            icon={TrendingUp}
            gradient="from-blue-500 to-cyan-500"
          />
          <StatItem
            end={50}
            label="Funcionários Digitais"
            suffix="+"
            delay={0.4}
            icon={Users}
            gradient="from-purple-500 to-pink-500"
          />
          <StatItem
            end={98}
            label="Satisfação dos Clientes"
            suffix="%"
            delay={0.6}
            icon={Award}
            gradient="from-green-500 to-emerald-500"
          />
          <StatItem
            end={24}
            label="Suporte Enterprise"
            suffix="/7"
            delay={0.8}
            icon={Clock}
            gradient="from-orange-500 to-red-500"
          />
        </div>
      </div>
    </section>
  );
}
