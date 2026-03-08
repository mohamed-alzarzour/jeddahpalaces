import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './desk/structure'
import {jpnsTheme} from './theme'
import {CustomNavbar} from './components/CustomNavbar'
import {Dashboard} from './components/Dashboard'
import logo from './static/logo.png'
import './static/custom.css'

if (typeof document !== 'undefined') {
  const root = document.documentElement
  root.setAttribute('data-scheme', 'dark')
  root.setAttribute('data-ui-scheme', 'dark')
  root.dataset.scheme = 'dark'
  root.dataset.uiScheme = 'dark'
  localStorage.setItem('sanityStudio:ui:colorScheme', '"dark"')
}

export default defineConfig({
  name: 'default',
  title: 'قصور جدة للحجر الطبيعي',

  projectId: 'pch9lqf5',
  dataset: 'production',

  theme: jpnsTheme,

  plugins: [
    structureTool({
      structure,
      title: 'المحتوى',
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  icon: () => <img src={logo} alt="قصور جدة" style={{height: '24px', width: 'auto'}} />,

  studio: {
    components: {
      navbar: CustomNavbar,
    },
  },

  tools: (prev) => [
    {
      name: 'dashboard',
      title: 'الرئيسية',
      icon: () => <span style={{fontSize: '18px'}}>🏠</span>,
      component: Dashboard,
    },
    ...prev,
  ],
})
