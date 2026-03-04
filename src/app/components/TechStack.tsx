import { motion } from 'motion/react';

const technologies = [
  // 🤖 RPA Tools
  {
    name: 'UiPath',
    logo: 'https://cdn.simpleicons.org/uipath',
    category: 'RPA',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Automation Anywhere',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Automation_Anywhere_Logo.png',
    category: 'RPA',
    gradient: 'from-orange-600 to-orange-500',
  },
  {
    name: 'Blue Prism',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Blue_Prism_logo.png',
    category: 'RPA',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Power Automate',
    logo: 'https://cdn.simpleicons.org/microsoftpowerautomate',
    category: 'RPA',
    gradient: 'from-blue-500 to-cyan-500',
  },
  
  // 🧠 AI/ML Platforms
  {
    name: 'OpenAI',
    logo: 'https://cdn.simpleicons.org/openai',
    category: 'AI',
    gradient: 'from-green-400 to-teal-400',
  },
  {
    name: 'Anthropic',
    logo: 'https://cdn.simpleicons.org/anthropic',
    category: 'AI',
    gradient: 'from-orange-400 to-amber-400',
  },
  {
    name: 'Google AI',
    logo: 'https://cdn.simpleicons.org/google',
    category: 'AI',
    gradient: 'from-blue-500 to-red-500',
  },
  {
    name: 'Hugging Face',
    logo: 'https://huggingface.co/front/assets/huggingface_logo.svg',
    category: 'AI/ML',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'LangChain',
    logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4',
    category: 'AI',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'TensorFlow',
    logo: 'https://cdn.simpleicons.org/tensorflow',
    category: 'ML',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    name: 'PyTorch',
    logo: 'https://cdn.simpleicons.org/pytorch',
    category: 'ML',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    name: 'Azure AI',
    logo: 'https://cdn.simpleicons.org/microsoftazure',
    category: 'AI Cloud',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'IBM Watson',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    category: 'AI',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'AWS AI',
    logo: 'https://cdn.simpleicons.org/amazonaws',
    category: 'AI Cloud',
    gradient: 'from-orange-500 to-yellow-500',
  },
  
  // ⚡ Workflow & Automation
  {
    name: 'n8n',
    logo: 'https://cdn.simpleicons.org/n8n',
    category: 'Workflow',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Zapier',
    logo: 'https://cdn.simpleicons.org/zapier',
    category: 'Automation',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Make',
    logo: 'https://www.make.com/en/favicon.ico',
    category: 'Automation',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Airflow',
    logo: 'https://cdn.simpleicons.org/apacheairflow',
    category: 'Workflow',
    gradient: 'from-teal-500 to-cyan-500',
  },
  
  // 💼 Microsoft Power Platform
  {
    name: 'Power Platform',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    category: 'Low-Code',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Power Apps',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Powerapps-logo.png',
    category: 'Low-Code',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Power BI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    category: 'Analytics',
    gradient: 'from-yellow-500 to-orange-500',
  },
  
  // ☁️ Cloud & Infrastructure
  {
    name: 'Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    category: 'Cloud',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'AWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    category: 'Cloud',
    gradient: 'from-orange-500 to-yellow-600',
  },
  {
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    category: 'Cloud',
    gradient: 'from-blue-500 to-red-500',
  },
  
  // 💻 Development
  {
    name: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    category: 'Language',
    gradient: 'from-blue-400 to-yellow-400',
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg',
    category: 'Language',
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    category: 'Language',
    gradient: 'from-yellow-400 to-yellow-500',
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    category: 'Frontend',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    category: 'Backend',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: '.NET',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
    category: 'Framework',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    name: 'FastAPI',
    logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
    category: 'API',
    gradient: 'from-teal-500 to-green-500',
  },
  
  // 🔧 DevOps & Containers
  {
    name: 'Docker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    category: 'DevOps',
    gradient: 'from-blue-500 to-sky-500',
  },
  {
    name: 'Kubernetes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    category: 'Orchestration',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'Git',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    category: 'Version Control',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    name: 'Azure DevOps',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Azure_DevOps_Logo.svg',
    category: 'CI/CD',
    gradient: 'from-blue-500 to-blue-600',
  },
  
  // 🗄️ Databases
  {
    name: 'PostgreSQL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    category: 'Database',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    name: 'MongoDB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    category: 'Database',
    gradient: 'from-green-500 to-green-700',
  },
  {
    name: 'Redis',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Redis_logo.svg',
    category: 'Cache',
    gradient: 'from-red-500 to-red-600',
  },
  {
    name: 'SQL Server',
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Microsoft_SQL_Server_Logo.svg',
    category: 'Database',
    gradient: 'from-red-600 to-orange-600',
  },
  
  // 📊 Data Science & ML
  {
    name: 'Scikit-learn',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    category: 'ML',
    gradient: 'from-orange-500 to-blue-500',
  },
  {
    name: 'Keras',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
    category: 'ML',
    gradient: 'from-red-500 to-red-600',
  },
  {
    name: 'Pandas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg',
    category: 'Data Science',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    name: 'NumPy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo.svg',
    category: 'Data Science',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'OpenCV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg',
    category: 'Computer Vision',
    gradient: 'from-green-500 to-blue-500',
  },
  {
    name: 'Selenium',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png',
    category: 'Automation',
    gradient: 'from-green-600 to-green-500',
  },
  {
    name: 'Playwright',
    logo: 'https://playwright.dev/img/playwright-logo.svg',
    category: 'Automation',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    name: 'Puppeteer',
    logo: 'https://seeklogo.com/images/P/puppeteer-logo-2F3C3A6D1B-seeklogo.com.png',
    category: 'Automation',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export function TechStack() {
  const whatsappUrl = 'https://wa.me/5511910162966?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20o%20stack%20tecnológico%20da%20LIT.';
  
  return (
    <section id="stack" className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      
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
              STACK TECNOLÓGICO COMPLETO
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              48+ Tecnologias
            </span>
            <br />
            <span className="text-white">Enterprise-Grade</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dominamos todas as principais plataformas de RPA, Inteligência Artificial, Machine Learning e Automação do mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 overflow-hidden aspect-square flex flex-col items-center justify-center">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Logo */}
                <div className="relative w-16 h-16 mb-3 flex items-center justify-center p-2">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tech.name)}&background=random&size=128`;
                    }}
                  />
                </div>

                {/* Name */}
                <div className="relative text-center">
                  <div className="text-white font-bold text-sm mb-1 leading-tight">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-8 text-lg">
            + Integrações com SAP, Oracle, TOTVS, Salesforce e centenas de outras plataformas enterprise
          </p>
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Fale com um Especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
