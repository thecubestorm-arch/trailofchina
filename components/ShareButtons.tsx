'use client'

import { useState } from 'react'
import { Link2, Share2, MessageCircle, Check } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.trailofchina.com'
  const url = `${baseUrl}/blog/${slug}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareTwitter = () => {
    const text = encodeURIComponent(title)
    const shareUrl = encodeURIComponent(url)
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      '_blank',
      'width=550,height=420'
    )
  }

  const shareFacebook = () => {
    const shareUrl = encodeURIComponent(url)
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      '_blank',
      'width=550,height=420'
    )
  }

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${title} ${url}`)
    window.open(
      `https://wa.me/?text=${text}`,
      '_blank'
    )
  }

  const buttonClass =
    "inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#f5f1ea] text-[#1a3a4a] hover:bg-[#af5d32] hover:text-white transition-colors duration-200"

  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="text-sm text-[#64748b] mr-1">Share:</span>
      <button
        onClick={handleCopyLink}
        className={buttonClass}
        aria-label="Copy link"
        title="Copy link"
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
      <button
        onClick={shareTwitter}
        className={buttonClass}
        aria-label="Share on X/Twitter"
        title="Share on X/Twitter"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
      <button
        onClick={shareFacebook}
        className={buttonClass}
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </button>
      <button
        onClick={shareWhatsApp}
        className={buttonClass}
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <MessageCircle size={16} />
      </button>
    </div>
  )
}
