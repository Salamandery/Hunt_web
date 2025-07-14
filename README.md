<div align="center">
  <h1>HuntWeb</h1>
  <p>
    <img src="https://img.shields.io/badge/React-16.8.6-blue?logo=react" />
    <img src="https://img.shields.io/badge/Axios-0.19.0-blue" />
    <img src="https://img.shields.io/badge/license-MIT-green" />
  </p>
  <p><b>Aplicação web para listagem e visualização de produtos via API REST</b></p>
</div>

---

## 📋 Sumário
- [🚀 Sobre o Projeto](#-sobre-o-projeto)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗 Padrões de Projeto](#-padrões-de-projeto)
- [⚙️ Configuração e Setup](#️-configuração-e-setup)
- [📁 Estrutura de Pastas](#-estrutura-de-pastas)
- [ℹ️ Observações](#️-observações)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)

---

## 🚀 Sobre o Projeto

O **HuntWeb** é uma aplicação web desenvolvida em React para listagem e visualização de produtos, consumindo uma API REST. O projeto utiliza navegação por rotas, componentes reutilizáveis e paginação de resultados.

---

## 🛠 Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/React-16.8.6-blue?logo=react" />
  <img src="https://img.shields.io/badge/React%20DOM-16.8.6-blue" />
  <img src="https://img.shields.io/badge/React%20Router%20DOM-5.0.1-blue" />
  <img src="https://img.shields.io/badge/Axios-0.19.0-blue" />
  <img src="https://img.shields.io/badge/React%20Scripts-3.0.1-blue" />
</div>

- **React 16.8.6**
- **React DOM 16.8.6**
- **React Router DOM 5.0.1**
- **Axios 0.19.0**
- **React Scripts 3.0.1**

---

## 🏗 Padrões de Projeto

- **Componentização:** Separação de responsabilidades em componentes funcionais e de classe.
- **Serviços:** Consumo de API centralizado em `src/Services/api.js` usando Axios.
- **Rotas:** Gerenciamento de rotas com React Router DOM em `src/routes.js`.
- **Views:** Organização das páginas em `src/Views/`.
- **Estilização:** CSS modularizado por componente/view e estilos globais em `src/styles.css`.

---

## ⚙️ Configuração e Setup

> **Pré-requisitos:**
> - Node.js >= 10.x
> - npm >= 6.x

```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm start

# Build de produção
npm run build

# Testes
npm test
```

O app estará disponível em [http://localhost:3000](http://localhost:3000).

---

## 📁 Estrutura de Pastas

```text
Hunt_web/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── routes.js
│   ├── styles.css
│   ├── serviceWorker.js
│   ├── components/
│   │   └── Header/
│   │       ├── index.js
│   │       └── style.css
│   ├── Services/
│   │   └── api.js
│   └── Views/
│       ├── main/
│       │   ├── index.js
│       │   └── styles.css
│       └── product/
│           ├── index.js
│           └── styles.css
```

---

## ℹ️ Observações
- O projeto utiliza Service Worker (PWA) opcional, desabilitado por padrão. Para ativar, altere `serviceWorker.unregister()` para `serviceWorker.register()` em `src/index.js`.
- A API utilizada está configurada em `src/Services/api.js`.

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>

