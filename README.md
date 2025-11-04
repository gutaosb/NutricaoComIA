# 🥗 NutriAI — Gerador de Cardápios Personalizados

**NutriAI** é uma aplicação web simples que utiliza **Flask (Python)** no backend e **React + Vite + TailwindCSS** no frontend para gerar **cardápios personalizados com base em dados do usuário**, como idade, peso, altura, sexo e nível de atividade física.  
A geração dos cardápios é feita através da **API do Gemini AI (Google)**, e o usuário pode **baixar o cardápio em PDF com formatação Markdown**.

---

## 🚀 Funcionalidades

- 🧮 Cálculo automático do metabolismo basal (TMB)
- 🤖 Integração com IA (Gemini API)
- 🥑 Geração de cardápio baseado em:
  - Objetivo (perder, manter ou ganhar peso)
  - Alergias e preferências alimentares
- 📄 Download do cardápio em **PDF formatado com Markdown**
- 💬 Possibilidade de gerar novos cardápios sem recarregar a página

---

## 🏗️ Estrutura do Projeto

```
nutri-ai/
│
├── backend/
│   ├── __init__.py
│   ├── app.py
│   ├── requirements.txt
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── constants.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── ai_service.py
│   │   └── pdf_service.py
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── eslint.config.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── InputField.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── pages/
│   │   │   ├── ResultPage.jsx
│   │       └── HomePage.jsx
│   │   ├── services/
│   │   └── api.js
│   └── .env
│
└── README.md
```

---

## ⚙️ Como Rodar o Projeto

### 🔹 Backend (Flask)

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # (Windows)
source venv/bin/activate       # (Linux/Mac)

pip install -r requirements.txt
```

Crie um arquivo `.env` com a variável de ambiente:

```
GOOGLE_API_KEY=coloque_sua_chave_aqui
```

Inicie o servidor:
```bash
python app.py
```

---

### 🔹 Frontend (React + Vite + TailwindCSS)

```bash
cd frontend
npm install
npm run dev
```

O frontend se conectará automaticamente ao backend (ajuste o `.env` do frontend se necessário).

---

## 🧠 Exemplo de Uso

1. O usuário preenche os campos:
   - Idade, peso, altura, sexo, nível de atividade e objetivo.
2. O backend calcula o metabolismo basal.
3. A API Gemini gera o cardápio completo.
4. O usuário pode visualizar o cardápio e optar por **baixá-lo em PDF**.

---

## 🧰 Tecnologias Utilizadas

- **Frontend:** React, Vite, TailwindCSS, Axios
- **Backend:** Flask, Python-dotenv, ReportLab, Markdown2
- **IA:** Gemini API (Google)

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

---

💡 **Feito por Augusto S. Bortoloti**
