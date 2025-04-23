"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"

interface ImageModalProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}

export function ImageModal({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes,
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only mount the portal on the client
  useEffect(() => {
    setMounted(true)
    
    // Lock scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <>
      {/* Clickable thumbnail */}
      <div 
        className={`relative cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill={width === undefined || height === undefined}
          width={width}
          height={height}
          className="object-cover"
          priority={priority}
          sizes={sizes}
        />
      </div>
      
      {/* Modal portal */}
      {mounted && isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center" onClick={() => setIsOpen(false)}>
          <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              className="object-contain max-h-screen max-w-full"
              width={1920}
              height={1080}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              priority
            />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-[10000] text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>,
        document.body
      )}
    </>
  )
} 