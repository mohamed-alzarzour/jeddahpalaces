import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('المحتوى')
    .items([
      S.listItem()
        .title('🏠 العودة للرئيسية')
        .id('back-to-dashboard')
        .child(
          S.component()
            .id('redirect-dashboard')
            .component(() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/dashboard'
              }
              return null
            })
        ),

      S.divider(),

      S.listItem()
        .title('📄 الصفحة الرئيسية')
        .id('homepage')
        .child(
          S.document()
            .schemaType('homepageSettings')
            .documentId('homepageSettings')
            .title('إعدادات الصفحة الرئيسية')
        ),

      S.listItem()
        .title('ℹ️ من نحن')
        .id('about')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('صفحة من نحن')
        ),

      S.listItem()
        .title('📞 معلومات التواصل')
        .id('contact')
        .child(
          S.document()
            .schemaType('contactInfo')
            .documentId('contactInfo')
            .title('معلومات التواصل')
        ),

      S.listItem()
        .title('🖼️ معرض الصور')
        .id('gallery')
        .child(
          S.document()
            .schemaType('photoGallery')
            .documentId('photoGallery')
            .title('معرض الصور')
        ),

      S.divider(),

      S.listItem()
        .title('🏗️ المشاريع الحالية')
        .id('current-projects')
        .child(
          S.documentList()
            .title('المشاريع الحالية')
            .schemaType('project')
            .filter('_type == "project" && (status == "active" || !defined(status))')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      S.listItem()
        .title('✅ المشاريع المكتملة')
        .id('completed-projects')
        .child(
          S.documentList()
            .title('المشاريع المكتملة')
            .schemaType('project')
            .filter('_type == "project" && status == "completed"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      S.divider(),

      S.listItem()
        .title('🪨 المنتجات')
        .id('products')
        .child(
          S.documentList()
            .title('المنتجات')
            .schemaType('product')
            .filter('_type == "product"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      S.listItem()
        .title('🛠️ الخدمات')
        .id('services')
        .child(
          S.documentList()
            .title('الخدمات')
            .schemaType('service')
            .filter('_type == "service"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
    ])