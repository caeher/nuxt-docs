export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Tokenization Ecosystem'
  },
  header: {
    title: 'Tokenization API',
    to: '/',
    logo: {
      alt: 'Tokenization Ecosystem',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-lucide-code-xml',
      'to': '/tokenization-api',
      'aria-label': 'API Reference'
    }]
  },
  footer: {
    credits: `Tokenization Ecosystem • Built on Bitcoin & Liquid • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/tokenization-ecosystem',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'Contenido',
    bottom: {
      title: 'Recursos',
      edit: '',
      links: [{
        icon: 'i-lucide-book-open',
        label: 'Guía de Inicio',
        to: '/getting-started'
      }, {
        icon: 'i-lucide-shield-check',
        label: 'Seguridad',
        to: '/tokenization-api/auth'
      }]
    }
  }
})
