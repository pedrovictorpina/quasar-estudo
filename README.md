# 🚀 Quasar Framework - Projeto de Estudo Completo

![Quasar Framework](https://img.shields.io/badge/Quasar-Framework-1976D2?style=for-the-badge&logo=quasar&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📋 Sobre o Projeto

Este é um projeto completo de estudo do **Quasar Framework**, demonstrando todas as principais funcionalidades, componentes e recursos disponíveis. O projeto foi desenvolvido com **Vue 3**, **TypeScript** e **Composition API**, seguindo as melhores práticas de desenvolvimento.

## ✨ Funcionalidades Demonstradas

### 🎨 **Componentes de Interface**
- **Botões**: Diversos tipos, tamanhos, cores e estados
- **Cards**: Layouts responsivos e interativos
- **Dialogs**: Modais customizáveis e reutilizáveis
- **Forms**: Validação, máscaras e componentes de entrada
- **Tables**: Tabelas com paginação, ordenação e filtros
- **Lists**: Listas dinâmicas e interativas
- **Menus**: Navegação e dropdowns
- **Toolbars**: Barras de ferramentas responsivas

### 📱 **Layout e Responsividade**
- **Grid System**: Sistema de grid flexível do Quasar
- **Breakpoints**: Responsividade para diferentes dispositivos
- **Flex Layout**: Layouts flexíveis e adaptativos
- **Spacing**: Sistema de espaçamento consistente

### 🎭 **Temas e Personalização**
- **Dark Mode**: Alternância entre tema claro e escuro
- **Cores Customizadas**: Paleta de cores personalizável
- **Tipografia**: Diferentes estilos de texto
- **Ícones**: Biblioteca completa de ícones

### 🔧 **Plugins e Utilitários**
- **LocalStorage**: Persistência de dados local
- **SessionStorage**: Armazenamento de sessão
- **Notify**: Sistema de notificações
- **Loading**: Indicadores de carregamento
- **Dialog**: Sistema de diálogos

### 🎯 **Diretivas**
- **Touch**: Gestos touch para mobile
- **Ripple**: Efeito ripple em elementos
- **Scroll**: Controle de scroll
- **Intersection**: Observer de interseção

### 🧩 **Composables**
- **useQuasar**: Hook principal do Quasar
- **useLocalStorage**: Gerenciamento de localStorage
- **useSessionStorage**: Gerenciamento de sessionStorage
- **Custom Composables**: Composables personalizados

### 🎬 **Animações**
- **Transitions**: Transições suaves entre elementos
- **Animations**: Animações CSS personalizadas
- **Page Transitions**: Transições entre páginas
- **Loading Animations**: Animações de carregamento

### 🧭 **Navegação**
- **Vue Router**: Roteamento SPA
- **Nested Routes**: Rotas aninhadas
- **Route Guards**: Proteção de rotas
- **Dynamic Routes**: Rotas dinâmicas

## 🛠️ Tecnologias Utilizadas

- **[Quasar Framework](https://quasar.dev/)** - Framework Vue.js
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool moderna
- **[Vue Router](https://router.vuejs.org/)** - Roteamento oficial do Vue
- **[Pinia](https://pinia.vuejs.org/)** - Gerenciamento de estado
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatador de código

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pedrovictorpina/quasar-estudo.git

# Entre no diretório
cd quasar-project

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── layouts/            # Layouts da aplicação
├── pages/              # Páginas da aplicação
│   ├── AnimationsPage.vue      # Demonstrações de animações
│   ├── ComposablesPage.vue     # Exemplos de composables
│   ├── DataDisplayPage.vue     # Componentes de exibição
│   ├── DirectivesPage.vue      # Diretivas do Quasar
│   ├── FormsPage.vue           # Formulários e validação
│   ├── IndexPage.vue           # Página inicial
│   ├── NavigationPage.vue      # Componentes de navegação
│   ├── PluginsPage.vue         # Plugins e utilitários
│   ├── ResponsivePage.vue      # Layout responsivo
│   └── ThemesPage.vue          # Temas e personalização
├── router/             # Configuração de rotas
├── stores/             # Gerenciamento de estado
└── css/                # Estilos globais
```

## 🎯 Páginas e Demonstrações

### 🏠 **Página Inicial**
Visão geral do projeto com navegação para todas as seções.

### 📊 **Data Display**
- Tabelas com paginação e ordenação
- Cards responsivos
- Listas dinâmicas
- Avatars e badges

### 📝 **Formulários**
- Inputs com validação
- Selects e autocomplete
- Date/time pickers
- File uploads
- Máscaras de entrada

### 🎨 **Temas**
- Alternância dark/light mode
- Customização de cores
- Tipografia responsiva
- Sistema de ícones

### 📱 **Responsividade**
- Grid system flexível
- Breakpoints customizados
- Layouts adaptativos
- Mobile-first design

### 🔌 **Plugins**
- Sistema de notificações
- Gerenciamento de loading
- Persistência de dados
- Diálogos customizáveis

### 🎭 **Diretivas**
- Gestos touch
- Efeitos visuais
- Controle de scroll
- Intersection observer

### 🧩 **Composables**
- Hooks personalizados
- Reutilização de lógica
- Gerenciamento de estado
- Utilitários diversos

### 🎬 **Animações**
- Transições CSS
- Animações de entrada/saída
- Loading animations
- Micro-interações

### 🧭 **Navegação**
- Roteamento SPA
- Breadcrumbs
- Steppers
- Tabs dinâmicas

## 🎨 Design System

O projeto segue um design system consistente baseado no Material Design, com:

- **Cores**: Paleta harmoniosa e acessível
- **Tipografia**: Hierarquia clara e legível
- **Espaçamento**: Sistema de grid consistente
- **Componentes**: Reutilizáveis e modulares
- **Responsividade**: Mobile-first approach

## 🔧 Configurações

### ESLint e Prettier
O projeto está configurado com ESLint e Prettier para manter a qualidade e consistência do código.

### TypeScript
Tipagem completa em todo o projeto, garantindo maior segurança e produtividade no desenvolvimento.

### Vite
Configuração otimizada do Vite para desenvolvimento rápido e builds eficientes.

## 📚 Recursos de Aprendizado

Cada página do projeto contém:
- **Código comentado**: Explicações detalhadas
- **Exemplos práticos**: Casos de uso reais
- **Boas práticas**: Padrões recomendados
- **Documentação**: Links para recursos oficiais

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novos exemplos
- Melhorar a documentação

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- [Documentação Oficial do Quasar](https://quasar.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Desenvolvido com ❤️ usando Quasar Framework**

*Este projeto é uma demonstração completa das capacidades do Quasar Framework, ideal para desenvolvedores que querem aprender e dominar esta poderosa ferramenta.*
