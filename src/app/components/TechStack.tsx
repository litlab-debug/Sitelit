import { motion } from 'motion/react';

const technologies = [
  // RPA Tools
  {
    name: 'UiPath',
    logo: 'https://www.vectorlogo.zone/logos/uipath/uipath-ar21.svg',
    category: 'RPA',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Automation Anywhere',
    logo: 'https://www.automationanywhere.com/sites/default/files/images/easyblog_articles/2144/b2ap3_large_aa-logo-2019.png',
    category: 'RPA',
    gradient: 'from-orange-600 to-orange-500',
  },
  {
    name: 'Blue Prism',
    logo: 'https://www.vectorlogo.zone/logos/blueprism/blueprism-ar21.svg',
    category: 'RPA',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Power Automate',
    logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
    category: 'RPA',
    gradient: 'from-blue-500 to-cyan-500',
  },
  
  // AI/ML Platforms
  {
    name: 'OpenAI',
    logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg',
    category: 'AI',
    gradient: 'from-green-400 to-teal-400',
  },
  {
    name: 'Anthropic',
    logo: 'https://pbs.twimg.com/profile_images/1779883296919216128/w2fkMWRe_400x400.jpg',
    category: 'AI',
    gradient: 'from-orange-400 to-amber-400',
  },
  {
    name: 'Google AI',
    logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
    category: 'AI',
    gradient: 'from-blue-500 to-red-500',
  },
  {
    name: 'Hugging Face',
    logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    category: 'AI/ML',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'LangChain',
    logo: 'https://avatars.githubusercontent.com/u/126733545?s=280&v=4',
    category: 'AI',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'TensorFlow',
    logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
    category: 'ML',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    name: 'PyTorch',
    logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
    category: 'ML',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    name: 'Azure AI',
    logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
    category: 'AI Cloud',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'IBM Watson',
    logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg',
    category: 'AI',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'AWS AI',
    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
    category: 'AI Cloud',
    gradient: 'from-orange-500 to-yellow-500',
  },
  
  // Workflow & Automation
  {
    name: 'N8N',
    logo: 'https://n8n.io/n8n-logo.png',
    category: 'Workflow',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Zapier',
    logo: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg',
    category: 'Automation',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Make',
    logo: 'https://www.make.com/en/assets/brand/make-logo-black.svg',
    category: 'Automation',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Airflow',
    logo: 'https://www.vectorlogo.zone/logos/apache_airflow/apache_airflow-icon.svg',
    category: 'Workflow',
    gradient: 'from-teal-500 to-cyan-500',
  },
  
  // Microsoft Power Platform
  {
    name: 'Power Platform',
    logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
    category: 'Low-Code',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Power Apps',
    logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
    category: 'Low-Code',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Power BI',
    logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
    category: 'Analytics',
    gradient: 'from-yellow-500 to-orange-500',
  },
  
  // Cloud & Infrastructure
  {
    name: 'Azure',
    logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
    category: 'Cloud',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'AWS',
    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
    category: 'Cloud',
    gradient: 'from-orange-500 to-yellow-600',
  },
  {
    name: 'Google Cloud',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    category: 'Cloud',
    gradient: 'from-blue-500 to-red-500',
  },
  
  // Development
  {
    name: 'Python',
    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
    category: 'Language',
    gradient: 'from-blue-400 to-yellow-400',
  },
  {
    name: 'TypeScript',
    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
    category: 'Language',
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    name: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
    category: 'Language',
    gradient: 'from-yellow-400 to-yellow-500',
  },
  {
    name: 'React',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
    category: 'Frontend',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Node.js',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
    category: 'Backend',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: '.NET',
    logo: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg',
    category: 'Framework',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    name: 'FastAPI',
    logo: 'https://www.vectorlogo.zone/logos/fastapi/fastapi-icon.svg',
    category: 'API',
    gradient: 'from-teal-500 to-green-500',
  },
  
  // DevOps & Containers
  {
    name: 'Docker',
    logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
    category: 'DevOps',
    gradient: 'from-blue-500 to-sky-500',
  },
  {
    name: 'Kubernetes',
    logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
    category: 'Orchestration',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'Git',
    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    category: 'Version Control',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    name: 'Azure DevOps',
    logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
    category: 'CI/CD',
    gradient: 'from-blue-500 to-blue-600',
  },
  
  // Databases
  {
    name: 'PostgreSQL',
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
    category: 'Database',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    name: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
    category: 'Database',
    gradient: 'from-green-500 to-green-700',
  },
  {
    name: 'Redis',
    logo: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg',
    category: 'Cache',
    gradient: 'from-red-500 to-red-600',
  },
  {
    name: 'SQL Server',
    logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
    category: 'Database',
    gradient: 'from-red-600 to-orange-600',
  },
  
  // Additional AI/ML Tools
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
    logo: 'https://www.vectorlogo.zone/logos/usepanda/usepanda-icon.svg',
    category: 'Data Science',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    name: 'NumPy',
    logo: 'https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg',
    category: 'Data Science',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'OpenCV',
    logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg',
    category: 'Computer Vision',
    gradient: 'from-green-500 to-blue-500',
  },
  {
    name: 'Selenium',
    logo: 'https://www.vectorlogo.zone/logos/seleniumhq/seleniumhq-ar21.svg',
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
    logo: 'https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg',
    category: 'Automation',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export function TechStack() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
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
              RPA, IA & Automação
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
          >
            Fale com um Especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}