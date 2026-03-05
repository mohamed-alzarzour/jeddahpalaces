import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './desk/structure'
import logo from './static/logo.png'

export default defineConfig({
  name: 'default',
  title: 'قصور جدة للحجر الطبيعي',


  projectId: 'pch9lqf5',
  dataset: 'production',

  plugins: [
	structureTool({
	structure
}),
	 visionTool()],

  schema: {
    types: schemaTypes,
  },
 icon: () => <img src={logo} alt="JPNS" style={{ height: '24px', width: 'auto' }} />,
})
