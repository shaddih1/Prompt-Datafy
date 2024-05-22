'use client'
import Typist from 'react-text-typist'

const CryptoTypist = () => {
  return (
    <span className="typewrite">
      <Typist
        sentences={['Crypto', 'NFT']}
        typingSpeed={1500}
        deletingSpeed={700}
        showCursor={false}
        startDelay={100}
        cursorSmooth
        pauseTime={2500}
      />
    </span>
  )
}

export default CryptoTypist
