import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Settings Section
      S.listItem()
        .title('⚙️ Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Homepage Settings')
                .child(
                  S.document()
                    .schemaType('homepageSettings')
                    .documentId('homepageSettings')
                ),
              S.listItem()
                .title('About Page')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                ),
              S.listItem()
                .title('Contact Information')
                .child(
                  S.document()
                    .schemaType('contactInfo')
                    .documentId('contactInfo')
                ),
              S.listItem()
                .title('Photo Gallery')
                .child(
                  S.document()
                    .schemaType('photoGallery')
                    .documentId('photoGallery')
                ),
            ])
        ),
      
      S.divider(),
      
      // Projects — split into Current and Completed
      S.listItem()
        .title('🏗️ Current Projects')
        .child(
          S.documentList()
            .title('Current Projects')
            .schemaType('project')
            .filter('_type == "project" && (status == "active" || !defined(status))')
        ),
      S.listItem()
        .title('✅ Completed Projects')
        .child(
          S.documentList()
            .title('Completed Projects')
            .schemaType('project')
            .filter('_type == "project" && status == "completed"')
        ),

      S.divider(),

      // Other Content
      S.documentTypeListItem('product').title('🪨 Products'),
      S.documentTypeListItem('service').title('🛠️ Services'),
    ])