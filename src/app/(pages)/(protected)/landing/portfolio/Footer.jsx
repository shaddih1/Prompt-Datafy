import Link from 'next/link'

const Footer = () => {
  return (
    <section className="py-8">
      <div className="container">
        <ul className="flex flex-wrap items-center justify-center gap-5">
          <li className="after:content-['-'] after:text-slate-300 after:font-extrabold">
            <Link href="" className="text-slate-600 hover:text-blue-600 me-4">
              About
            </Link>
          </li>
          <li className="after:content-['-'] after:text-slate-300 after:font-extrabold">
            <Link href="" className="text-slate-600 hover:text-blue-600 me-4">
              Services
            </Link>
          </li>
          <li>
            <Link href="" className="text-slate-600 hover:text-blue-600 me-4">
              Contact
            </Link>
          </li>
        </ul>
        <p className="mt-5 text-center text-slate-600">
          {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by
          <Link href="" className="hover:text-blue-600">
            Coderthemes
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Footer
