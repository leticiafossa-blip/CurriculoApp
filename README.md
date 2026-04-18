📄 Sistema de Gestão de Currículos — Etapa 1 (Frontend)
📌 Sobre o Projeto

Este projeto tem como objetivo o desenvolvimento de uma aplicação web para gestão de currículos, utilizando o ecossistema Next.js com foco em:

Experiência do usuário (UX)
Arquitetura modular de componentes
Validação robusta de formulários

Nesta Etapa 1, o foco está exclusivamente no frontend, utilizando dados mockados e armazenamento local.

🚀 Tecnologias Utilizadas
Framework: Next.js (App Router)
Estilização: Tailwind CSS
Componentes UI: shadcn/ui
Formulários: React Hook Form + Yup
Máscaras: React Input Mask Next
Notificações: Sonner
Ícones: React Icons
Imagens: Next.js Image Component


🧱 Arquitetura do Projeto

🔹 Componentes Globais
Header: Identificação do sistema + navegação principal
Nav: Menu integrado ao header
Footer: Informações de rodapé e links secundários

🔹 Rotas e Páginas
Rota	Descrição
/	Landing page com apresentação do sistema
/curriculos/visualizar	Lista de currículos
/curriculos/visualizar/[id]	Detalhes do currículo
/curriculos/cadastrar	Cadastro de novo currículo

🔐 Proteção de Rotas
URLs amigáveis e organizadas
Estrutura que evita exploração direta de rotas internas
⚙️ Funcionalidades
📦 Persistência Mockada
Uso de constantes ou localStorage
Imagens armazenadas em /public
✅ Validação de Formulários
Campos obrigatórios
Validação de e-mail
Tamanho mínimo de textos

🎭 Máscaras de Entrada
CPF
Telefone
Datas

🔔 Feedback Visual
Notificações com Sonner (sucesso/erro)


⏳ Estados da Interface
Empty State
Mensagem amigável quando não houver currículos
Botão: “Criar meu primeiro currículo”
Loading (Skeleton)
Uso do Skeleton do shadcn/ui
Simulação de carregamento em rotas dinâmicas

🔍 Busca e Filtro
Filtro em tempo real por:
Nome
Cargo
Atualização dinâmica conforme digitação
(Opcional) uso de debounce

📦 Entrega
Repositório no GitHub
Histórico de commits
README inicial (este documento)

✨ Refinamentos de UI
Botões:
Estados: hover, focus, disabled
Navegação:
Indicação visual de rota ativa
Feedback:
Toasts com mensagens detalhadas de erro (Yup)

📌 Status do Projeto

🚧 Em desenvolvimento (Etapa 1 - Frontend)
