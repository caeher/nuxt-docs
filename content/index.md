---
seo:
  title: Developer Portal | Tokenization Ecosystem
  description: Plataforma integral para la digitalización de activos reales (RWA) sobre Bitcoin y Liquid.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Tokeniza el Mundo Real en [Bitcoin]{.text-primary}.

#description
Documentación técnica, guías y referencia API para construir la próxima generación de finanzas descentralizadas sobre Bitcoin y Liquid Network.

#links
  :::u-button
  ---
  to: /tokenization-api
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Explorar API
  :::

  :::u-button
  ---
  icon: i-lucide-book-open
  color: neutral
  variant: outline
  size: xl
  to: /tokenization-api/tokenization
  ---
  Guía de Tokenización
  :::

#default
  :::prose-pre
  ---
  code: |
    curl -X POST https://api.plan-b2b-flow.cuboplus.caeher.com/v1/assets/upload \
      -H "Authorization: Bearer <token>" \
      -F "file=@property.pdf" \
      -F "category=real_estate"
  filename: Ingesta de Activos
  ---

  ```bash
  curl -X POST https://api.plan-b2b-flow.cuboplus.caeher.com/v1/assets/upload \
    -H "Authorization: Bearer <token>" \
    -F "file=@property.pdf" \
    -F "category=real_estate"
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Diseñado para la Economía del Futuro

#links
  :::u-button
  ---
  color: neutral
  size: lg
  to: /tokenization-api/auth
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Empieza con Auth
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-coins
  ---
  #title
  RWA Digitalization
  #description
  Convierte propiedades, facturas o arte en activos digitales con validez legal y técnica inmediata.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-brain
  ---
  #title
  AI Underwriting
  #description
  Modelos de IA integrados que evalúan automáticamente el riesgo y la valoración de los activos subidos.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-layers
  ---
  #title
  Liquid Network
  #description
  Emisión nativa en la sidechain líder de Bitcoin, con transacciones confidenciales y liquidación en segundos para activos digitales.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shopping-cart
  ---
  #title
  Atomic Marketplace
  #description
  Motor de intercambio P2P con escrows atómicos. Sin riesgo de contraparte, garantizado por código.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-radio
  ---
  #title
  Nostr Integration
  #description
  Descubrimiento de ofertas y reputación social sobre el protocolo Nostr. Global, abierto y resistente a la censura.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  MPC & 2FA Security
  #description
  Custodia de grado institucional combinada con autorización de usuario vía TOTP para cada movimiento de fondos.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Arquitectura Robusta de Microservicios

#links
  :::u-button
  ---
  color: neutral
  size: lg
  to: /tokenization-api
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Ver Ecosistema
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-key
  ---
  #title
  Auth & Identity
  #description
  Gestión de identidades KYC, sesiones seguras y API Keys para desarrolladores externos.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-wallet
  ---
  #title
  Wallet Orchestrator
  #description
  Gestión transparente de UTXOs, Lightning Network y balances multiactivo.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-landmark
  ---
  #title
  Admin & Treasury
  #description
  Control administrativo sobre desembolsos, arbitraje de disputas y auditoría global.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Ver Referencia API
      to: '/tokenization-api'
      trailingIcon: i-lucide-arrow-right
    - label: Contactar Soporte
      to: 'mailto:devs@ecosystem.com'
      variant: subtle
      icon: i-lucide-mail
  title: ¿Listo para construir sobre Bitcoin?
  description: Únete a los desarrolladores que están redefiniendo la propiedad digital. Empieza a integrar hoy mismo.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
