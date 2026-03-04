import localeString from './localeString'
import localeText from './localeText'
import project from './project'
import product from './product'
import service from './service'
import homepageSettings from './homepageSettings'
import aboutPage from './aboutPage'
import contactInfo from './contactInfo'
import photoGallery from './photoGallery'

export const schemaTypes = [
  // Object types
  localeString,
  localeText,
  
  // Document types
  project,
  product,
  service,
  
  // Singleton documents
  homepageSettings,
  aboutPage,
  contactInfo,
  photoGallery,
]