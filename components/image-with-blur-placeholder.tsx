"use client"

import Image, { type StaticImageData } from "next/image"
import { useState } from "react"

interface ImageWithBlurPlaceholderProps {
  src: StaticImageData
}

export default function ImageWithBlurPlaceholder({
  src,
}: ImageWithBlurPlaceholderProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      src={src}
      alt="image"
      width={500}
      height={500}
      placeholder="blur"
      onLoad={() => setLoaded(true)}
      className={`h-36 w-36 object-contain transition-all duration-100 ease-out md:h-56 md:w-56 ${
        loaded ? "blur-0 opacity-100" : "opacity-10 blur-xl"
      } `}
    />
  )
}
