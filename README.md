<div align="center">

# 💊 Farmácia do Logan — Front-end

Interface em React para gerenciar as categorias de produtos de uma farmácia, consumindo uma API REST em Spring Boot.

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

[![CI](https://github.com/Day-Barbosa/farmacia/actions/workflows/ci.yml/badge.svg)](https://github.com/Day-Barbosa/farmacia/actions/workflows/ci.yml)
![Status](https://img.shields.io/badge/status-concluído-success)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

**[🌐 Aplicação ao vivo](https://farmacia-omega-eight.vercel.app/)** · **[⚙️ API (farmacia-api)](https://github.com/Day-Barbosa/farmacia-api)**

</div>

---

<!-- 📸 MÍDIA: grave um GIF curto (home com o hover do Logan → listar categorias → cadastrar → editar → deletar) e salve em docs/demo.gif. Depois troque este comentário por:
<p align="center"><img src="docs/demo.gif" alt="Demonstração do front da Farmácia" width="800"></p>
-->

## 💡 Sobre o projeto

Front-end do par **Farmácia** (API + web): permite listar, cadastrar, editar e excluir as **categorias** que organizam os produtos da farmácia, com navegação SPA e uma camada de serviço que isola as chamadas HTTP. Tem um *easter egg*: passe o mouse sobre o nome "Logan" na home. 🐱

## 🏗️ Arquitetura e decisões técnicas

```mermaid
flowchart LR
    subgraph SPA["React SPA (Vercel)"]
        R["React Router<br/>Home · Categorias · Form · Deletar"] --> CP["Componentes de categoria<br/>Listar · Card · Form · Deletar"]
        CP --> S["CategoriaService.ts<br/>Axios + VITE_API_URL"]
    end
    S -- "HTTPS + JSON" --> API["API Spring Boot<br/>(Render)"]
```

| Decisão | Por quê |
|---|---|
| **`CategoriaService` tipado** | Cada função devolve `Promise<Categoria>` ou `Promise<Categoria[]>`, então os componentes não conhecem detalhes do Axios. |
| **Mesmo formulário para criar e editar** | `FormCategoria` decide o modo pelo `:id` da rota, sem duplicar tela. |
| **Exclusão com confirmação** | Rota própria (`/deletarcategoria/:id`) mostra os dados antes de apagar. |
| **`VITE_API_URL`** | O mesmo código aponta para a API local ou de produção. |
| **`vercel.json` com rewrite** | Links diretos e F5 em rotas internas funcionam no deploy. |

## ✨ Funcionalidades

- Navegação SPA com React Router (Home, Categorias, Nova Categoria)
- Listagem de categorias em cards responsivos
- Cadastro e edição de categorias no mesmo formulário
- Exclusão com tela de confirmação
- Layout com Tailwind CSS

## 🗺️ Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Página inicial |
| `/categorias` | `ListarCategorias` | Lista as categorias |
| `/cadastrarCategoria` | `FormCategoria` | Cadastro |
| `/editarcategoria/:id` | `FormCategoria` | Edição |
| `/deletarcategoria/:id` | `DeletarCategoria` | Confirmação de exclusão |

## 🚀 Como rodar localmente

**Pré-requisito:** Node.js 20+.

```bash
git clone https://github.com/Day-Barbosa/farmacia.git
cd farmacia
npm install
cp .env.example .env.local      # opcional: aponta para a API local
npm run dev
```

Abra **http://localhost:5173**. Sem `.env.local`, o front usa a API em produção.

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Checagem de tipos + build de produção |
| `npm run lint` | ESLint |

O GitHub Actions roda `lint` e `build` a cada push.

## 📁 Estrutura

```text
src/
├── components/
│   ├── categorias/   # CardCategoria, DeletarCategoria, FormCategoria, ListarCategorias
│   ├── footer/
│   └── navbar/
├── models/           # Categoria, Produto
├── pages/home/
└── services/         # CategoriaService (Axios)
```

## 🗺️ Próximos passos

- [ ] Tela de login e envio do token JWT (a `farmacia-api` exige token para cadastrar, editar e excluir)
- [ ] CRUD de produtos com filtro por categoria
- [ ] Feedback visual de sucesso e erro nas operações

## 👩‍💻 Autora

**Dayana Barbosa** · [LinkedIn](https://www.linkedin.com/in/dayanabarbosa-devjava/) · [GitHub](https://github.com/Day-Barbosa)

Projeto desenvolvido na formação Java Fullstack da Generation Brasil.

---

<sub>Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE).</sub>
