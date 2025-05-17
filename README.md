# NPJ - Sistema de Agendamento de Estágio

## Sobre o Projeto

Este é um aplicativo desktop desenvolvido como atividade de estágio para alunos de Ciência da Computação da FMU (Faculdades Metropolitanas Unidas). O sistema tem como objetivo facilitar e otimizar o processo de agendamento de estágios para alunos do curso de Direito no NPJ (Núcleo de Prática Jurídica) da FMU.

## Funcionalidades Principais

- Agendamento de horários para estágio
- Gerenciamento de vagas disponíveis
- Acompanhamento do status do estágio
- Interface intuitiva para alunos e coordenadores
- Sistema de notificações para confirmações e lembretes
- Armazenamento local dos dados

## Tecnologias Utilizadas

- Electron + Electron Forge
- React.js
- TypeScript
- Vite
- TailwindCSS
- Better-SQLite3 (Banco de dados local)
- ESLint + Prettier

## Requisitos do Sistema

- Node.js (versão 22 ou superior)
- PNPM (gerenciador de pacotes)
- Windows 10 ou superior

## Instalação e Configuração

1. Clone o repositório:

```bash
git clone https://github.com/micleal/estagio-npj-app
```

2. Instale as dependências:

```bash
pnpm install
```

3. Inicie o aplicativo em modo de desenvolvimento:

```bash
pnpm start
```

4. Para criar um executável:

```bash
pnpm make
```

## Scripts Disponíveis

- `pnpm start`: Inicia o aplicativo em modo de desenvolvimento
- `pnpm package`: Cria um pacote do aplicativo
- `pnpm make`: Cria um instalador do aplicativo
- `pnpm publish`: Publica o aplicativo
- `pnpm lint`: Executa a verificação de código

## Estrutura do Projeto

```
npj-intership-app/
├── src/                     # Código fonte
├── .vite/                   # Build do Vite
├── forge.config.ts          # Configuração do Electron Forge
├── vite.renderer.config.mts # Configuração do Vite para o renderer
├── vite.main.config.ts      # Configuração do Vite para o main
└── vite.preload.config.ts   # Configuração do Vite para o preload
```

## Contribuição

Este projeto é mantido pelos estagiários de Ciência da Computação da FMU. Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é propriedade da FMU e seu uso é restrito aos alunos e funcionários da instituição.

## Contato

Para mais informações, entre em contato com a coordenação do curso de Ciência da Computação da FMU.
