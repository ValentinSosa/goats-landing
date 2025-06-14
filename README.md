# 🌐 GOAT Landing Page - Freelance Agency

Landing page profesional desarrollada con **React + Vite**, **TypeScript** y **Tailwind CSS**. Incluye tests, buenas prácticas de colaboración y scripts útiles para desarrollo y despliegue.



## 🚀 Tecnologías principales
- **React** (Vite)
- **TypeScript**
- **Tailwind CSS**
- **ESLint** (linting)
- **Prettier** (formateo)

## 📦 Estructura del proyecto

```
goat-landing/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.scss
│   ├── assets/
│   └── ...
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── eslint.config.ts
├── postcss.config.js
└── README.md
```

## ⚡ Instalación y setup rápido

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tefazc/landing-page.git
   cd landing-page
   ```
2. Instalá dependencias:
   ```bash
   npm install
   ```
3. Iniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La app estará disponible en: http://localhost:5173

## 🛠️ Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Genera build de producción
- `npm run preview` — Previsualiza el build
- `npm run lint` — Linting con ESLint
- `npm run format` — Formatea el código con Prettier

## 🤝 Colaboración y buenas prácticas

- Código en **TypeScript** para mayor robustez.
- Usa **ESLint** y **Prettier** antes de hacer PRs.
- Estructura de carpetas clara y modular.
- Imágenes del equipo en `src/assets/`.
- Tests automáticos para componentes clave.
- Sugerido: ramas feature/ y PRs descriptivos.

## 🌍 Deploy

- AWS S3 + Cloudfront

## 👥 Autores
- Valentín Sosa
- Stefano Zino Colanino
- Roco Sittoni