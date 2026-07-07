# Farmácia — Front-end React

Front-end desenvolvido em React para um sistema de gerenciamento de farmácia, com produtos organizados por categoria.

## 🚀 Tecnologias

- **React** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM** — roteamento SPA
- **Axios** — consumo da API REST
- **ESLint** — padronização de código

## 📋 Funcionalidades

- Navegação entre páginas via React Router (Home, Categorias, Nova Categoria)
- Listagem de categorias cadastradas
- Cadastro de novas categorias
- Edição de categorias existentes
- Exclusão de categorias (com tela de confirmação)

## 🗂️ Estrutura do projeto

```
src/
├── assets/
├── components/
│   ├── categorias/
│   │   ├── CardCategoria.tsx
│   │   ├── DeletarCategoria.tsx
│   │   ├── FormCategoria.tsx
│   │   └── ListarCategorias.tsx
│   ├── footer/
│   │   └── Footer.tsx
│   └── navbar/
│       └── Navbar.tsx
├── models/
│   ├── Categoria.ts
│   └── Produto.ts
├── pages/
│   └── home/
│       └── Home.tsx
├── services/
│   └── CategoriaService.ts
├── App.tsx
└── main.tsx
```

## 🔌 API

Este front-end consome a seguinte API REST:

```
https://farmacia-jjxo.onrender.com
```

### Endpoints utilizados (Categoria)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/categorias` | Lista todas as categorias |
| GET | `/categorias/{id}` | Busca categoria por ID |
| GET | `/categorias/nome/{nome}` | Busca categorias por nome |
| POST | `/categorias` | Cadastra uma nova categoria |
| PUT | `/categorias` | Atualiza uma categoria existente |
| DELETE | `/categorias/{id}` | Remove uma categoria |

## 🖥️ Rotas do front-end

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial |
| `/categorias` | ListarCategorias | Lista todas as categorias |
| `/cadastrarCategoria` | FormCategoria | Formulário de cadastro |
| `/editarcategoria/:id` | FormCategoria | Formulário de edição |
| `/deletarcategoria/:id` | DeletarCategoria | Confirmação de exclusão |

## ⚙️ Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/Day-Barbosa/farmacia.git

# Entrar na pasta
cd farmacia

# Instalar as dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

O projeto ficará disponível em `http://localhost:5173`.

## 👩‍💻 Autora

**Dayana Barbosa**
Projeto desenvolvido durante o curso Java Fullstack — Generation Brasil.
