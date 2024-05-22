import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const SessionProviderWrapper = dynamic(() => import('@/components/SessionProviderWrapper'), { ssr: false })
const Navbar = dynamic(() => import('@/components/layout/Navbar'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

const Layout = ({ children }) => {
  return (
    <SessionProviderWrapper>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div />}>
        {children}
      </Suspense>

      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
    </SessionProviderWrapper>
  )
}

export default Layout
