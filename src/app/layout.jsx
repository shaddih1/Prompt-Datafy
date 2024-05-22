
import Image from 'next/image'
import { Be_Vietnam_Pro } from 'next/font/google'

import NextTopLoader from 'nextjs-toploader'
import AppProviders from '@/components/AppProviders'

import appLogo from '@/assets/images/logo-dark.png'

// styles
import './globals.css'
import 'aos/dist/aos.css'

const BeVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
})


export const metadata = {
  title: {
    template:
      '%s | Prompt Next - Tailwind CSS Multipurpose Landing Page Template',
    default: 'Prompt - Tailwind CSS Multipurpose Landing Page Template',
  },
  description:
    'Prompt Nextjs - Tailwind CSS Multipurpose Landing Templates is a powerful multipurpose landing template based on the Tailwind CSS framework. The prompt is a fully-featured modern multi-purpose template built on top of awesome Tailwind CSS v3.3.2. It’s for building responsive, mobile-first landing pages, and websites with Tailwind. The clean and well-commented code allows you to easily customize it. You can simply update its contents, images, and scss according to your company info. The prompt has 10 different types of landings, which are quite enough for your business.',
  authors: [{ name: 'Coderthemes' }],
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <style>{splashScreenStyles}</style>
      </head>
      <body className={BeVietnamPro.className}>
        <div id="splash-screen">
          <Image alt="Logo" width={355} height={83} src={appLogo} style={{ height: '10%', width: 'auto' }} />
        </div>
        <NextTopLoader color='#2864e6' showSpinner={false} />
        <AppProviders>
          <div id='__next_splash'>
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
