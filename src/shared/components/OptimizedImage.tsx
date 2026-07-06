import Image from "next/image";

import { BLUR_DATA_URL } from "@/lib/images";
import { cn } from "@/lib/utils";

type OptimizedImageBaseProps = {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  className?: string;
  sizes?: string;
};

type OptimizedImageFillProps = OptimizedImageBaseProps & {
  fill: true;
  width?: never;
  height?: never;
};

type OptimizedImageSizedProps = OptimizedImageBaseProps & {
  fill?: false;
  width: number;
  height: number;
};

type OptimizedImageProps = OptimizedImageFillProps | OptimizedImageSizedProps;

export function OptimizedImage(props: OptimizedImageProps): React.JSX.Element {
  const { src, alt, priority = false, quality = 85, className, sizes } = props;
  const unoptimized = src.endsWith(".svg");

  if (props.fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes={sizes ?? "100vw"}
        quality={quality}
        className={cn("object-cover", className)}
        unoptimized={unoptimized}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={props.width}
      height={props.height}
      priority={priority}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      sizes={sizes}
      quality={quality}
      className={className}
      unoptimized={unoptimized}
    />
  );
}
