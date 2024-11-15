# Finance AI

Finance AI é uma aplicação desenvolvida em Next.js que utiliza inteligência artificial para ajudar os usuários a gerenciar suas finanças de forma mais inteligente e eficiente. A aplicação integra diversas tecnologias modernas para garantir performance, escalabilidade e uma experiência rica para o usuário.

---

## 🚀 Funcionalidades

- Gerenciamento inteligente de finanças pessoais
- Integração com o ChatGPT para insights e recomendações financeiras
- Autenticação de usuários utilizando [Clerk](https://clerk.dev/)
- Persistência de dados com PostgreSQL e ORM Prisma
- Contêinerização com Docker para ambiente padronizado

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- **[Next.js](https://nextjs.org/):** Framework React para aplicações web
- **[Clerk](https://clerk.dev/):** Gerenciamento de autenticação e usuários
- **[Prisma](https://www.prisma.io/):** ORM para manipulação de banco de dados
- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional
- **[Docker](https://www.docker.com/):** Contêinerização para ambientes isolados
- **[OpenAI API](https://platform.openai.com/):** Integração com o ChatGPT
- **[Tailwind CSS](https://tailwindcss.com/):** Framework para estilização
- **npm:** Gerenciador de pacotes utilizado para executar comandos

---

## 🖥️ Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente:

### 1. Clone o repositório
```
git clone https://github.com/gabrcastro/financeai_next.git
cd financeai_next
```
### 2. Instale as dependências
Certifique-se de ter o Node.js e o npm instalados na sua máquina.

```
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis e claro, os valores correspondentes:

```
DATABASE_URL=<url>
POSTGRES_USER=<user>
POSTGRES_PASSWORD=<passwd>

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<key>
CLERK_SECRET_KEY=<key>

# STRIPE
STRIPE_FINANCEAI_PREMIUM_PRICE_ID=<id>
STRIPE_SECRET_KEY=<key>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<key>
STRIPE_WEBHOOK_SECRET_KEY=<key>
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_LINK=<link>

# GPT
OPENAI_API_KEY=<key>
```

### 4. Configure o Prisma
Gere os arquivos do cliente do Prisma e sincronize o esquema do banco de dados:

```
npx prisma generate
npx prisma db push
```
### 5. Execute a aplicação
Inicie o servidor de desenvolvimento:

```
npm run dev
```
Acesse a aplicação em http://localhost:3000.

## 🐳 Docker (Opcional)
No projeto existe um arquivo chamado compose.yaml, lá é preciso configurar o necessário para rodar o docker.
Após configurar corretamente, pode rodar o comando para iniciar o docker.
Claro, precisa que o docker esteja rodando na sua máquina.

```
docker compose up
```

## 📫 Contato
Se tiver dúvidas ou sugestões, entre em contato:

LinkedIn: https://linkedin.com/in/gabrielsouzacastro
