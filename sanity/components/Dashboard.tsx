import {useCallback, useState, useEffect} from 'react'
import {Card, Flex, Heading, Text, Grid, Stack, Box} from '@sanity/ui'
import logo from '../static/logo.png'

const sections = [
  {
    emoji: '📄',
    title: 'الصفحة الرئيسية',
    desc: 'عنوان ووصف وصورة الرئيسية',
    color: '#C5B080',
    structureId: 'homepage',
  },
  {
    emoji: 'ℹ️',
    title: 'من نحن',
    desc: 'السيرة الذاتية وصورة المهندس',
    color: '#C5B080',
    structureId: 'about',
  },
  {
    emoji: '📞',
    title: 'معلومات التواصل',
    desc: 'الهاتف والعنوان والسوشيال ميديا',
    color: '#C5B080',
    structureId: 'contact',
  },
  {
    emoji: '🖼️',
    title: 'معرض الصور',
    desc: 'صور المعرض والتصنيفات',
    color: '#C5B080',
    structureId: 'gallery',
  },
  {
    emoji: '🏗️',
    title: 'المشاريع الحالية',
    desc: 'المشاريع الجاري تنفيذها',
    color: '#D4A843',
    structureId: 'current-projects',
  },
  {
    emoji: '✅',
    title: 'المشاريع المكتملة',
    desc: 'المشاريع المنتهية',
    color: '#5C8A5E',
    structureId: 'completed-projects',
  },
  {
    emoji: '🪨',
    title: 'المنتجات',
    desc: 'الأحجار الطبيعية',
    color: '#8B775C',
    structureId: 'products',
  },
  {
    emoji: '🛠️',
    title: 'الخدمات',
    desc: 'خدمات الشركة',
    color: '#6A5D4D',
    structureId: 'services',
  },
]

export function Dashboard() {
  const navigateTo = useCallback((structureId: string) => {
    window.location.href = `/structure/${structureId}`
  }, [])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <Card
      padding={[3, 4, 5]}
      style={{
        minHeight: '100%',
        background: 'linear-gradient(135deg, #2E2D2B 0%, #1a1918 100%)',
        direction: 'rtl',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Flex direction="column" align="center" gap={[3, 4, 5]} style={{maxWidth: '950px', margin: '0 auto', paddingBottom: '40px'}}>
        <Flex direction="column" align="center" gap={2} style={{marginBottom: isMobile ? '4px' : '8px'}}>
          <div
            style={{
              width: isMobile ? '56px' : '80px',
              height: isMobile ? '56px' : '80px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #C5B080',
              boxShadow: '0 4px 16px rgba(197,176,128,0.3)',
            }}
          >
            <img
              src={logo}
              alt="قصور جدة"
              style={{width: '100%', height: '100%', objectFit: 'contain'}}
            />
          </div>
          <Stack space={1} style={{textAlign: 'center'}}>
            <Heading size={isMobile ? 1 : 3} style={{color: '#F8F5EE'}}>
              قصور جدة للحجر الطبيعي
            </Heading>
            <Text size={1} style={{color: '#C5B080', fontWeight: 500}}>
              لوحة إدارة المحتوى
            </Text>
          </Stack>
        </Flex>

        {!isMobile && (
          <Card
            padding={4}
            radius={3}
            style={{
              background: 'rgba(197,176,128,0.08)',
              border: '1px solid rgba(197,176,128,0.2)',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Text size={2} style={{color: '#d4c9b0', lineHeight: 1.8}}>
              مرحباً بك! اضغط على أي قسم للبدء في تعديل محتوى الموقع.
            </Text>
          </Card>
        )}

        <SectionLabel label="إعدادات الصفحات" />
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: isMobile ? '8px' : '12px'}}>
          {sections.slice(0, 4).map((section) => (
            <SectionCard key={section.structureId} section={section} onClick={navigateTo} isMobile={isMobile} />
          ))}
        </div>

        <SectionLabel label="المشاريع" />
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: isMobile ? '8px' : '12px'}}>
          {sections.slice(4, 6).map((section) => (
            <SectionCard key={section.structureId} section={section} onClick={navigateTo} isMobile={isMobile} />
          ))}
        </div>

        <SectionLabel label="المنتجات والخدمات" />
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: isMobile ? '8px' : '12px'}}>
          {sections.slice(6).map((section) => (
            <SectionCard key={section.structureId} section={section} onClick={navigateTo} isMobile={isMobile} />
          ))}
        </div>
      </Flex>
    </Card>
  )
}

function SectionLabel({label}: {label: string}) {
  return (
    <Flex align="center" gap={2} style={{width: '100%', marginTop: '4px'}}>
      <div style={{flex: 1, height: '1px', background: 'rgba(197,176,128,0.2)'}} />
      <Text size={1} weight="bold" style={{color: '#C5B080', whiteSpace: 'nowrap', padding: '0 12px'}}>
        {label}
      </Text>
      <div style={{flex: 1, height: '1px', background: 'rgba(197,176,128,0.2)'}} />
    </Flex>
  )
}

function SectionCard({section, onClick, isMobile}: {section: typeof sections[0]; onClick: (id: string) => void; isMobile: boolean}) {
  return (
    <button
      onClick={() => onClick(section.structureId)}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRight: `4px solid ${section.color}`,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderRadius: '10px',
        padding: isMobile ? '10px 12px' : '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        direction: 'rtl',
        textAlign: 'right',
        color: '#F8F5EE',
        fontFamily: 'inherit',
      }}
    >
      <div style={{
        fontSize: isMobile ? '22px' : '28px',
        flexShrink: 0,
        width: isMobile ? '36px' : '44px',
        height: isMobile ? '36px' : '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        background: `${section.color}15`,
      }}>
        {section.emoji}
      </div>
      <div style={{flex: 1, minWidth: 0}}>
        <div style={{
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: 700,
          color: '#F8F5EE',
          lineHeight: 1.4,
        }}>
          {section.title}
        </div>
        {!isMobile && (
          <div style={{
            fontSize: '12px',
            color: 'rgba(248,245,238,0.5)',
            lineHeight: 1.4,
            marginTop: '2px',
          }}>
            {section.desc}
          </div>
        )}
      </div>
      <div style={{
        color: 'rgba(197,176,128,0.4)',
        fontSize: '18px',
        flexShrink: 0,
      }}>
        ‹
      </div>
    </button>
  )
}
