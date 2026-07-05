import { describe, expect, it } from "vitest";

import { placeholderGalleryImages } from "@/lib/gallery";

describe("placeholderGalleryImages", () => {
  it("builds gallery items with resolved alt text", () => {
    const images = placeholderGalleryImages(["a", "b"], (id) => `Alt for ${id}`);
    expect(images).toHaveLength(2);
    expect(images[0]).toMatchObject({ id: "a", alt: "Alt for a" });
    expect(images[0]?.src).toBeTruthy();
  });
});
