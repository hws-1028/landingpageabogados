# Giraldo Leguizamón Abogados y Asociados SAS

Landing page del bufete de abogados, con una estética premium, editorial y sobria basada exclusivamente en negro, blanco y dorado.

## Versión

0.0.0

## Secciones de la página

- **Header** — menú de navegación y botón "Consulta tu caso".
- **Hero** — presentación principal.
- **Nosotros** — carrusel de imágenes y texto institucional.
- **Servicios** — grilla con los servicios del despacho.
- **Equipo** — carrusel con los integrantes del equipo.
- **Contacto** — CTA de ancho completo con `fondo.png` de fondo y un botón que abre el modal de consulta.
- **Modal** — formulario de contacto (consulta / PQRS / mensaje).
- **Footer** — datos de contacto y redes sociales.

## Tecnologías

- **React** 19.2.8
- **TypeScript** ~6.0.2
- **Vite** 8.2.0
- **CSS puro** (sin Tailwind, Bootstrap ni Material UI)
- **React Compiler** (habilitado)

## Requisitos

- Node.js (versión LTS recomendada)
- npm

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Build de producción

```bash
npm run build
```

## Vista previa del build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Levanta el servidor de desarrollo con HMR |
| `npm run build` | Compila TypeScript y genera el build de producción |
| `npm run preview` | Sirve localmente el build generado |
| `npm run lint` | Ejecuta ESLint sobre el código |

## Estructura del proyecto

- `src/components/` — componentes de la página (Header, Hero, AboutUs, Services, Team, Contact, Modal, Footer)
- `src/assets/` — imágenes e iconos (`fondo.png`, `Logo.png`, `imagen.jpeg`, `icons/`)
- `src/db/` — datos de los servicios (`servicesData.ts`) y el equipo (`teamData.ts`)
- `src/App.tsx` — composición principal de la aplicación
- `src/main.tsx` — punto de entrada
- `src/index.css` — variables, reset y estilos globales

## Notas

- El formulario de contacto vive en el `Modal`; el botón del CTA de la sección de contacto abre ese modal en modo "consulta".
