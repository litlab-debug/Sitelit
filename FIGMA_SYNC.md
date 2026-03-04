# Como atualizar o projeto com mudanças do Figma Make

Este projeto foi criado pelo **Figma Make** (Make). Para manter o código sincronizado com o design do Figma:

## Opção 1: Push direto do Figma Make para o GitHub (recomendado)

1. No **Figma Make**, abra o arquivo do seu projeto
2. Vá em **Settings** e conecte sua conta **GitHub**
3. Use **"Push to..."** / **"Push to GitHub"** para enviar as alterações
4. Selecione o repositório `litlab-debug/Sitelit` e a branch `main`
5. O código atualizado será enviado automaticamente

> Requer plano pago do Figma (Full seat) para integração com GitHub.

## Opção 2: Download e substituição manual

1. No **Figma Make**, abra o projeto e vá na aba **Code**
2. Clique em **"Download code"**
3. Extraia o arquivo baixado
4. Copie os arquivos relevantes (`src/`, componentes) para este projeto
5. **Importante:** Mantenha suas customizações:
   - `public/logo.png` e `public/lit colorido_Prancheta 1 (1) (1).png`
   - `src/app/assets.ts` (caminho do logo)
   - `vite.config.ts` (base, etc.)
   - `.github/workflows/deploy.yml` (deploy)

## Ativos do Figma (figma:asset)

O Figma Make usa imports como `figma:asset/xxx.png`. Quando você baixa ou faz push, esses imports precisam ser **substituídos** por arquivos locais em `public/`, pois o `figma:asset` só funciona dentro do ambiente do Figma.

Exemplo: substitua  
`import x from 'figma:asset/xxx.png'`  
por  
`import x from '/nome-do-arquivo.png'`  
(com o arquivo em `public/`)
