# Revisión legal y Meta — LogicGrit Lía (BORRADOR; NO APROBADO)
Fecha de preparación: 2026-11-26. Rama: `docs/politica-privacidad-meta-lia`.

## Estado y alcance
- Sitio comercial público `logicgrit-web` es estático y despliega automáticamente a producción desde `main`. Esta rama **no debe integrarse** ni marcarse lista hasta completar las validaciones.
- Páginas propuestas: `/politica-de-privacidad/` y `/eliminacion-de-datos/`. `noindex,nofollow` y aviso de borrador deben retirarse cuando esté aprobado el contenido final.
- `contacto@logicgrit.com` figura en el sitio existente, pero **confirmar recepción real** de solicitudes de privacidad.
- La página corporativa no reemplaza las políticas ni avisos de cada negocio cliente de Lía.

## Bloqueos antes de publicar o enviar a Meta
1. Completar **nombre civil/razón social exacta del responsable**, domicilio/dirección de notificaciones y teléfono de contacto. No inventar datos personales ni publicar NIT sin revisar si es necesario.
2. Revisar con asesor legal colombiano: Ley 1581/2012, Decreto 1074/2015, Circular Externa SIC 002/2024 para IA; condiciones comerciales y de servicio, política de cookies y protección del consumidor según corresponda.
3. Definir y documentar **matriz de retención** (historial, mensajes, contactos, autorizaciones, auditoría, cuentas, pagos, backups). No prometer borrado automático ni plazos no implementados. Validar procedimiento interno de solicitudes de derechos y responsables de atención.
4. Verificar contratos y salvaguardas con **Meta/WhatsApp**, **Cloudflare**, proveedores de hosting, encargados y eventuales terceros de IA; transmisión/transferencia internacional, finalidad y país de tratamiento.
5. Confirmar que la dirección de privacidad pública y la de eliminación devuelven HTTPS 200 **sin login**, desde varios navegadores; retirar noindex/aviso de borrador y enlazar desde el footer del sitio aprobado.
6. Revisar el contenido del aviso de privacidad **de cada negocio** en Lía, con identidad real, autorizaciones previas y registradas, oposición a marketing y vía de atención humana. La política corporativa no otorga autorización para anuncios.
7. En Meta: icono 1024x1024; categoría; URL de política; instrucciones/URL de eliminación; verificación empresarial y App Review según los permisos de Tech Provider/Embedded Signup. Meta puede pedir información adicional. Nada garantiza aprobación.
8. **Riesgo crítico de términos Meta e IA:** revisar los términos vigentes de WhatsApp Business Solution sobre AI Providers y prohibiciones de la IA como funcionalidad principal, así como la prohibición de usar datos de WhatsApp Business Solution (incluidas formas agregadas/derivadas) para crear/entrenar/mejorar modelos generalistas. La atención especializada de pequeños negocios debe validarse para el caso concreto; la política pública no solventa una incompatibilidad de producto.
9. Confirmar que la comunicación revela con claridad que Lía es un asistente automatizado/IA, permite escalamiento humano y no trata datos sensibles/menores sin medidas específicas.
10. No activar IA externa, Instagram ni análisis de conversaciones para otras finalidades hasta evaluación y cambio del aviso.
11. Validar diseño, accesibilidad, CSP, rutas, enlaces y 404, y realizar revisión humana previa a merge. **No tocar otros proyectos ni el entorno de pruebas.**

## Código de Lía inspeccionado en `develop`
- `src/privacy.js`: política por negocio; aviso con AUTORIZO/NO AUTORIZO/REVOCAR/MIS DATOS; eventos de autorización y revocación, sin borrado inmediato.
- `src/whatsapp.js`, `src/whatsapp-provider.js`: firma HMAC y persistencia de WhatsApp; no equivale a aprobación de Meta.
- `src/ai/preview-routes.js`, `src/ai/ollama.js`: Ollama en vista previa local, no envía mensajes de WhatsApp. IA externa e Instagram real pendientes.

## Fuentes oficiales consultadas (verificar versiones vigentes al aprobar)
- SIC — Ley 1581 de 2012: https://sedeelectronica.sic.gov.co/sites/default/files/normatividad/Ley_1581_2012.pdf
- SIC — obligaciones de políticas y avisos: https://sedeelectronica.sic.gov.co/publicaciones/boletin-juridico/concepto/politicas-de-tratamiento-de-datos-personales
- SIC — lineamientos IA (2024): https://sedeelectronica.sic.gov.co/transparencia/normativa/circular-externa-2-de-2024-de-la-superintendencia-de-industria-y-comercio-lineamientos-sobre-el-tratamiento-de-datos
- WhatsApp — política de mensajes: https://business.whatsapp.com/policy/
- WhatsApp — condiciones para WhatsApp Business Platform: https://www.whatsapp.com/legal/WhatsApp-Terms-for-WhatsApp-Business-Platform
- WhatsApp — términos para WhatsApp Business Solution y AI Providers: https://www.whatsapp.com/legal/business-solution-terms/
- Meta — configuración de app, privacidad y eliminación de datos: https://developers.facebook.com/docs/fundraiser-api/create-an-app/
