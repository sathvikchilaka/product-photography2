import { useMemo, useState, type ImgHTMLAttributes } from 'react'
import { placeholderDataUri } from '../lib/placeholder'
import { useDummyImages } from '../data/content'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  /** Intrinsic dimensions used for the SVG placeholder fallback. */
  phWidth?: number
  phHeight?: number
  /**
   * When true, skip the remote src and use the local SVG placeholder directly.
   * Useful for offline previews or when you want the editorial dummy look.
   */
  dummy?: boolean
}

/**
 * <img> with an automatic SVG placeholder fallback if the network image fails.
 * Alt text is used both for a11y and as the placeholder label.
 */
export function Img({ src, alt, phWidth = 800, phHeight = 1000, dummy, className, ...rest }: Props) {
  const placeholder = useMemo(
    () => placeholderDataUri(alt || 'Image', phWidth, phHeight),
    [alt, phWidth, phHeight],
  )
  const [failed, setFailed] = useState(false)
  const usePlaceholder = dummy ?? useDummyImages ?? failed

  return (
    <img
      src={usePlaceholder || failed ? placeholder : src}
      alt={alt}
      onError={() => !failed && setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
