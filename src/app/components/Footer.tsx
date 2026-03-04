import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { LOGO_COLORIDO } from '../assets';

export function Footer() {
  return (
    <footer style={{ background: 'hsl(225,15%,8%)', borderTop: '1px solid hsl(225,15%,18%)' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <img 
              src={LOGO_COLORIDO} 
              alt="LIT Digital Transformation" 
              className="h-12 mb-6" 
              style={{ mixBlendMode: 'screen' }}
            />
            <p className="mb-6 max-w-md" style={{ color: 'hsl(220,10%,55%)' }}>
              Consultoria especializada em ecossistemas digitais inteligentes — IA, automação, Power Platform, engenharia de dados e times de alta performance.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/lit-digitaltransformation/' },
                { Icon: Mail, href: 'mailto:adm@littechnologia.com' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'hsl(225,15%,12%)', color: 'hsl(220,10%,55%)' }}
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(195,90%,50%)', color: 'white' }}
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: 'hsl(0,0%,95%)' }}>Soluções</h3>
            <ul className="space-y-2">
              {['SeuFuncionárioDigital', 'Chatbots & IA', 'Power Platform', 'RPA Enterprise', 'Engenharia de Dados'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors" style={{ color: 'hsl(220,10%,55%)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: 'hsl(0,0%,95%)' }}>Serviços</h3>
            <ul className="space-y-2">
              {['Managed Services', 'Body Shop & Squads', 'Sustentação Evolutiva', 'Arquitetura Corporativa'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors" style={{ color: 'hsl(220,10%,55%)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: 'hsl(0,0%,95%)' }}>Empresa</h3>
            <ul className="space-y-2">
              {['Sobre a LIT', 'Cases de Sucesso', 'Metodologia', 'Contato'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors" style={{ color: 'hsl(220,10%,55%)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'hsl(225,15%,18%)' }}>
          <p style={{ color: 'hsl(220,10%,55%)' }}>
            © 2026 LIT Digital Transformation. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors" style={{ color: 'hsl(220,10%,55%)' }}>
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors" style={{ color: 'hsl(220,10%,55%)' }}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}