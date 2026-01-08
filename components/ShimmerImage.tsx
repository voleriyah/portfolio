'use client';

import Image, { ImageProps } from 'next/image';
import { shimmer, toBase64 } from '@/lib/shimmer';

interface ShimmerImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  width: number;
  height: number;
  priority?: boolean;
}

export default function ShimmerImage({ width, height, priority, ...props }: ShimmerImageProps) {
  // Only add shimmer if not priority (priority images load immediately)
  const shimmerDataURL = priority 
    ? undefined 
    : `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;

  return (
    <Image
      {...props}
      width={width}
      height={height}
      priority={priority}
      placeholder={priority ? undefined : "blur"}
      blurDataURL={shimmerDataURL}
    />
  );
}

