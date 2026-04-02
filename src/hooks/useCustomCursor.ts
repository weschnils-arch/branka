import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const followerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const dot = document.createElement('div')
    const follower = document.createElement('div')

    Object.assign(dot.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#6E6259',
      pointerEvents: 'none',
      zIndex: '9999',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.2s, height 0.2s',
    })

    Object.assign(follower.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      border: '1px solid rgba(110, 98, 89, 0.25)',
      pointerEvents: 'none',
      zIndex: '9998',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.3s, height 0.3s, border-color 0.3s',
    })

    document.body.appendChild(dot)
    document.body.appendChild(follower)
    document.body.style.cursor = 'none'
    dotRef.current = dot
    followerRef.current = follower

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.15
      followerY += (mouseY - followerY) * 0.15
      follower.style.left = `${followerX}px`
      follower.style.top = `${followerY}px`
      requestAnimationFrame(animate)
    }

    const onMouseEnterInteractive = () => {
      follower.style.width = '48px'
      follower.style.height = '48px'
      follower.style.borderColor = 'rgba(154, 159, 122, 0.4)'
      dot.style.width = '4px'
      dot.style.height = '4px'
    }

    const onMouseLeaveInteractive = () => {
      follower.style.width = '28px'
      follower.style.height = '28px'
      follower.style.borderColor = 'rgba(110, 98, 89, 0.25)'
      dot.style.width = '6px'
      dot.style.height = '6px'
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
      ;(el as HTMLElement).style.cursor = 'none'
    })

    const observer = new MutationObserver(() => {
      const newEls = document.querySelectorAll('a, button, [data-cursor-hover]')
      newEls.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
        ;(el as HTMLElement).style.cursor = 'none'
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
      dot.remove()
      follower.remove()
      document.body.style.cursor = ''
    }
  }, [])
}
