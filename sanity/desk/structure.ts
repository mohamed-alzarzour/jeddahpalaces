import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('المحتوى')
    .items([
      // Settings Section
      S.listItem()
        .title('⚙️ الإعدادات')
        .child(
          S.list()
            .title('الإعدادات')
            .items([
              S.listItem()
                .title('إعدادات الصفحة الرئيسية')
                .child(
                  S.document()
                    .schemaType('homepageSettings')
                    .documentId('homepageSettings')
                ),
              S.listItem()
                .title('صفحة من نحن')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                ),
              S.listItem()
                .title('معلومات التواصل')
                .child(
                  S.document()
                    .schemaType('contactInfo')
                    .documentId('contactInfo')
                ),
              S.listItem()
                .title('معرض الصور')
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
        .title('🏗️ المشاريع الحالية')
        .child(
          S.documentList()
            .title('المشاريع الحالية')
            .schemaType('project')
            .filter('_type == "project" && (status == "active" || !defined(status))')
        ),
      S.listItem()
        .title('✅ المشاريع المكتملة')
        .child(
          S.documentList()
            .title('المشاريع المكتملة')
            .schemaType('project')
            .filter('_type == "project" && status == "completed"')
        ),

      S.divider(),

      // Other Content
      S.documentTypeListItem('product').title('🪨 المنتجات'),
      S.documentTypeListItem('service').title('🛠️ الخدمات'),
    ])