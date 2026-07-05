import type { GalleryImage } from "@/config/academics";
import { imagePaths } from "@/lib/images";

export function placeholderGalleryImages(
  ids: string[],
  altResolver: (id: string) => string,
): GalleryImage[] {
  return ids.map((id) => ({
    id,
    src: imagePaths.about.placeholder,
    alt: altResolver(id),
  }));
}
