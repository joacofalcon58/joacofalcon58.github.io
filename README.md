# joacofalcon58.github.io

Landing page de portfolio de Joaquín Falcón — Data Analyst / Business Intelligence.

Sitio estático (HTML, CSS y JS vanilla, sin frameworks ni build step) publicado con GitHub Pages.

## Estructura

```
index.html            # página única (hero, proyectos, evidencia técnica, contacto)
assets/css/styles.css # tokens de diseño + estilos
assets/js/main.js     # toggle de idioma ES/EN, año dinámico
assets/img/           # foto de perfil y capturas de proyectos
assets/cv/            # CV en español e inglés
```

## Cómo sumar un proyecto nuevo

Cada proyecto vive como un bloque `<article class="case-study">` dentro de `index.html`,
con su propia sección de tags, etapas (problema/datos/proceso/resultado) y hallazgos.
Para agregar uno:

1. Copiar el bloque `<article class="case-study">` del proyecto de salud como plantilla.
2. Reemplazar tags, texto ES/EN (atributos `data-es` / `data-en`) y links de evidencia técnica.
3. Sumar la imagen de portada a `assets/img/`.

## Desarrollo local

No requiere build. Basta con abrir `index.html` en el navegador, o servirlo con
cualquier servidor estático (`python -m http.server`, extensión Live Server, etc.).
