# LogicGrit Website

Sitio estático profesional construido con HTML, CSS y JavaScript vanilla.

## Estructura

- `index.html` — contenido y estructura SEO.
- `styles/styles.css` — estilos, responsive, animaciones y componentes visuales.
- `scripts/main.js` — contador animado, reveal al hacer scroll, tabs, FAQ y menú móvil.
- `assets/logicgrit-logo.png` — logo entregado por LogicGrit.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador o, recomendado, levantar un servidor local:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

## Contacto configurado

- WhatsApp: +57 310 462 0827
- Email: contacto@logicgrit.com

## Publicación

La carpeta puede desplegarse directamente en Netlify, Vercel, GitHub Pages, Cloudflare Pages o cualquier hosting estático.

## Seguridad en producción

- `_headers` configura CSP, HSTS, protección contra iframes, permisos del navegador y caché en Netlify y Cloudflare Pages.
- `vercel.json` aplica los mismos encabezados cuando el despliegue se hace en Vercel.
- La CSP también está declarada en el HTML como protección parcial de respaldo para hostings que no admiten encabezados personalizados.
- HSTS solo funciona por encabezado HTTP. Si se usa otro hosting, hay que copiar allí las reglas de `_headers` y mantener HTTPS activo.
- Si se modifica el bloque JSON-LD del `<head>`, se debe recalcular el hash SHA-256 incluido en las políticas CSP.

## Activar el sitio en Google

Las URLs SEO están preparadas para `https://logicgrit.com/`. Si el dominio final cambia, reemplázalo en `index.html`, `robots.txt` y `sitemap.xml` antes de publicar.

1. Publica el sitio con HTTPS y comprueba que carguen `https://logicgrit.com/robots.txt` y `https://logicgrit.com/sitemap.xml`.
2. Registra el dominio en Google Search Console mediante verificación DNS.
3. Envía `https://logicgrit.com/sitemap.xml` en la sección **Sitemaps**.
4. Usa **Inspección de URL** para la página principal y solicita la indexación.
5. Prueba los datos estructurados con Rich Results Test y revisa Core Web Vitals en Search Console.
6. Crea y completa el Perfil de Empresa de Google si LogicGrit atiende una ubicación o zona de servicio válida.
7. Publica casos de éxito y páginas específicas para cada servicio y ciudad objetivo. El contenido útil, la reputación y enlaces legítimos son necesarios para competir por las primeras posiciones; los metadatos por sí solos no garantizan el primer lugar.
