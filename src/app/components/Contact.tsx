import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/50 to-pink-950/50" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
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
              PRÓXIMO PASSO
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Vamos Transformar
            </span>
            <br />
            <span className="text-white">Seu Negócio?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Agende um diagnóstico estratégico gratuito e descubra como a LIT pode acelerar seus resultados
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'adm@littechnologia.com',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Phone,
                label: 'Telefone',
                value: '+55 (11) 91016-2966',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: MapPin,
                label: 'Localização',
                value: 'São Paulo, SP - Brasil',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((contact, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                  <div className="text-white font-semibold text-lg">{contact.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 border border-gray-800 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />

              <form className="relative space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-3">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all"
                      placeholder="João Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-3">
                      Email Corporativo
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white transition-all"
                      placeholder="joao@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-3">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-white transition-all"
                      placeholder="Nome da Empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-3">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white transition-all"
                      placeholder="(11) 9 9999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-3">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-black/50 border border-gray-800 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white resize-none transition-all"
                    placeholder="Conte-nos sobre seu projeto ou desafio..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Diagnóstico Gratuito
                  <Send className="w-5 h-5" />
                </motion.button>

                <p className="text-center text-sm text-gray-500">
                  Respondemos em até 24 horas úteis
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}