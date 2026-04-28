# PokeScan Landing

Landing page promocional de **PokeScan**, creada con **Astro**, enfocada a presentar la app, sus capturas reales, el overlay en vivo, la personalizacion visual y la descarga directa del APK.

## Que incluye

- Hero principal con captura real de la app y mensaje comercial.
- Secciones por bloques tipo presentacion con navegacion suave.
- Galerias visuales con animaciones de aparicion progresiva.
- Adaptacion para escritorio y movil.
- Descarga directa del APK desde la propia landing.
- Preparacion para despliegue en GitHub Pages con GitHub Actions.

## Stack

- `Astro`
- `@astrojs/sitemap`
- CSS global personalizado

## Ejecutar en local

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
npm run preview
```

## Publicacion en GitHub Pages

Este proyecto esta preparado para publicarse en:

```text
https://Christian-B-P.github.io/pokescan-landing/
```

Pasos:

1. Crea un repositorio publico llamado `pokescan-landing`.
2. Sube este proyecto al repositorio.
3. En GitHub entra en `Settings > Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. Haz push a la rama `main`.

El workflow ya esta incluido en:

[`/.github/workflows/deploy.yml`](/Users/vlayde/Documents/Proyectos%20GitActions/PokeScan%20LandingPage/.github/workflows/deploy.yml)

Y la configuracion de Astro para Pages esta en:

[`/astro.config.mjs`](/Users/vlayde/Documents/Proyectos%20GitActions/PokeScan%20LandingPage/astro.config.mjs)

## Estructura principal

- [`src/pages/index.astro`](/Users/vlayde/Documents/Proyectos%20GitActions/PokeScan%20LandingPage/src/pages/index.astro): contenido principal de la landing.
- [`src/styles/global.css`](/Users/vlayde/Documents/Proyectos%20GitActions/PokeScan%20LandingPage/src/styles/global.css): estilos globales, responsive, animaciones y comportamiento visual.
- [`public/media`](/Users/vlayde/Documents/Proyectos%20GitActions/PokeScan%20LandingPage/public/media): capturas e imagenes usadas por la landing.
- [`public/downloads/PokeScan.apk`](/Users/vlayde/Documents/Proyectos%20GitActions/PokeScan%20LandingPage/public/downloads/PokeScan.apk): APK descargable desde la web.

## Autoria

Proyecto y diseno original creados por **Vlayde**.

Copyright (c) 2026 Vlayde. Todos los derechos reservados.

Este codigo, diseno, textos, estructura visual e identidad de la web no pueden copiarse, redistribuirse ni reutilizarse sin permiso expreso del autor.
