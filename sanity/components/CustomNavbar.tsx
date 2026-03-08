import {useEffect} from 'react'
import type {NavbarProps} from 'sanity'

function fixChipAlignment() {
  const perspList = document.querySelector('[data-testid="document-perspective-list"]')
  if (!perspList) return

  const pl = perspList as HTMLElement
  pl.style.display = 'flex'
  pl.style.alignItems = 'center'
  pl.style.gap = '4px'
  pl.style.flexWrap = 'nowrap'

  pl.querySelectorAll('button').forEach((btn) => {
    btn.style.height = '25px'
    btn.style.minHeight = '25px'
    btn.style.maxHeight = '25px'
    btn.style.padding = '2px 8px'
    btn.style.fontSize = '12px'
  })

  let parent = perspList.parentElement
  for (let i = 0; i < 5 && parent; i++) {
    const style = getComputedStyle(parent)
    if (style.display === 'flex') {
      parent.style.alignItems = 'center'
      break
    }
    parent = parent.parentElement
  }
}

export function CustomNavbar(props: NavbarProps) {
  useEffect(() => {
    fixChipAlignment()

    const observer = new MutationObserver(() => {
      fixChipAlignment()
    })
    observer.observe(document.body, {childList: true, subtree: true})

    return () => {
      observer.disconnect()
    }
  }, [])

  return props.renderDefault(props)
}
