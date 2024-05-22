import Link from 'next/link'
import { FaMinus } from 'react-icons/fa6'

const Footer4 = () => {
  const footerLinks = [
    'About',
    'Privacy',
    'Terms',
    'Developers',
    'Support',
    'Careers',
  ]

  return (
    <section className="bg-white py-6 relative">
      <div className="container">
        <div className="flex items-center flex-wrap">
          <div className="grow">
            <div className="flex items-center gap-3">
              {(footerLinks ?? []).map((link, idx) => {
                return (
                  <div key={idx} className="inline-flex items-center">
                    <Link href="" className="flex items-center">
                      {link} <FaMinus size={14} />
                    </Link>
                  </div>
                )
              })}
              <div className="inline-flex items-center">
                <Link href="">
                  Careers
                  <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-semibold bg-green-500/10 text-green-500">
                    We&nbsp;re hiring
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="shrink md:text-end mt-4 lg:mt-0">
            <p className="text-sm mb-0">
              {new Date().getFullYear()} © Prompt. All rights reserved. Crafted
              by <Link href="https://coderthemes.com/">Coderthemes</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer4
