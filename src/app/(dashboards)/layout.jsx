import {  Suspense } from 'react'
import dynamic from 'next/dynamic'
const SessionProviderWrapper = dynamic(
  () => import('@/components/SessionProviderWrapper'),
  { ssr: false }
)
const Navbar = dynamic(() => import('@/components/common/Navbar2'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

const Layout = ({ children }) => {
  return (
    <SessionProviderWrapper>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div />}>{children}</Suspense>

      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
    </SessionProviderWrapper>
  )
}

export default Layout
