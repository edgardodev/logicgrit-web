# Revisión legal y Meta — LogicGrit Lía (BORRADOR; NO APROBADO)
Fecha de preparación: 2026-11-26. Rama: `docs/politica-privacidad-meta-lia`.

## Estado y alcance
- Sitio comercial público `logicgrit-web` es estático y despliega automáticamente a producción desde `main`. Esta rama **no debe integrarse** ni marcarse lista hasta completar las validaciones.
- Páginas propuestas: `/politica-de-privacidad/` y `/eliminacion-de-datos/`. `noindex,nofollow` y aviso de borrador deben retirarse cuando esté aprobado el contenido final.
- `contacto@logicgrit.com` figura en el sitio existente y el propietario confirmó que funciona; además, confirmó que será el **único canal para ejercer derechos de privacidad y eliminación**. Ya no debe etiquetarse como correo «sin confirmar». Verificar procedimiento interno para recibir y responder solicitudes de privacidad.
- La página corporativa no reemplaza las políticas ni avisos de cada negocio cliente de Lía.
- **Finalidad del producto declarada por el propietario:** LogicGrit Lía es software CRM para cada negocio: organizar clientes, seguimiento de ventas y, al habilitarse las funciones, citas y pedidos. WhatsApp es el canal de entrada; una posible integración de IA sirve solo para interpretar mensajes y tabular información en el CRM. LogicGrit no crea, entrena ni comercializa modelos de IA, y no vende ni permite entrenar modelos con los datos de los clientes. **Confirmar contractualmente la misma restricción con cada proveedor técnico/IA antes de activarlo.**
- **Estado técnico:** la IA para tabulación de mensajes de WhatsApp y las funciones de agenda/pedidos no deben presentarse como listas para producción si aún están pendientes.

## Bloqueos antes de publicar o enviar a Meta
1. **Identidad ya confirmada:** Edgardo Florez Otero, persona natural que opera LogicGrit, domicilio Barranquilla, Atlántico, Colombia, correo `contacto@logicgrit.com`. **Teléfono identificativo comercial:** +57 310 462 0827 (ya figura en la web); las solicitudes formales de privacidad se tramitan exclusivamente por correo. **Único dato de identificación pendiente:** confirmar una dirección física válida de correspondencia para satisfacer el artículo 2.2.2.25.3.1 del Decreto 1074 de 2015. Evitar publicar datos personales innecesarios; la ley sí exige dirección del responsable. No inventar NIT ni domicilio físico.
2. Revisar con asesor legal colombiano: Ley 1581/2012, Decreto 1074/2015, Circular Externa SIC 002/2024 para IA; condiciones comerciales y de servicio, política de cookies y protección del consumidor según corresponda.
3. **Acuerdo confirmado:** historial de conversaciones de WhatsApp: máximo 12 meses desde la última interacción, con supresión anticipada según proceda. **Pendiente técnico esencial:** implementar y verificar cumplimiento de ese límite y sus efectos en backups y datos derivados antes de prometerlo como control operativo. Documentar matriz de retención para contactos, ventas, citas, pedidos, autorizaciones, auditoría, cuentas, pagos y respaldos; no inventar plazos legales ni de producto. Validar procedimiento interno de respuesta a solicitudes de derechos.
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
- Meta — indicaciones generales de URL de política y URL/instrucciones de eliminación de datos: https://developers.facebook.com/docs/fundraiser-api/create-an-app/ (documentación sobre otra funcionalidad; validar además instrucciones específicas del tipo de app de WhatsApp)
- Decreto 1074 de 2015 — art. 2.2.2.25.3.1: https://cancilleria.gov.co/sites/default/files/Normograma/docs/decreto_1074_2015_pr025.htm
- WhatsApp Business — política de mensajería, avisos y consentimiento: https://business.whatsapp.com/policy/preview?lang=es_LA
