const SupportCenter = () => {
  return (
    <div>
      <div className="sticky top-24 border rounded-md px-12 py-6">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-slate-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={12} cy={12} r={10} /> <circle cx={12} cy={12} r={4} />
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
          </svg>
          <h4 className="text-lg">Support center</h4>
        </div>
        <h5 className="font-medium mt-3 text-slate-400">
          <span className="font-semibold">Can&apos;t find the answer? </span>
          We are here to help you all the time.
        </h5>
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <svg
            className="w-5 h-5 text-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <h4 className="text-slate-400">Talk to Support Team</h4>
        </div>
        <div className="flex flex-wrap items-center gap-4 my-3">
          <svg
            className="w-5 h-5 text-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <h4 className="text-slate-400">help@coderthemes.com</h4>
        </div>
        <div className="flex flex-wrap items-center gap-4 my-3">
          <svg
            className="w-5 h-5 text-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          <h4 className="text-slate-400">@coderthemes</h4>
        </div>
      </div>
    </div>
  )
}

export default SupportCenter
