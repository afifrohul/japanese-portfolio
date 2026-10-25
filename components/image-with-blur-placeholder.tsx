"use client"

import { cn } from "cn"
import Image, { type StaticImageData } from "next/image"
import { useState } from "react"

interface ImageWithBlurPlaceholderProps {
  src: StaticImageData
  classname?: string
}

export default function ImageWithBlurPlaceholder({
  src,
  classname,
}: ImageWithBlurPlaceholderProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src={src}
      alt="image"
      placeholder="blur"
      onLoad={() => setLoaded(true)}
      className={cn(
        `object-cover transition-all duration-100 ease-out ${
          loaded ? "blur-0 opacity-100" : "opacity-10 blur-xl"
        } `,
        classname
      )}
    />
  )
}
