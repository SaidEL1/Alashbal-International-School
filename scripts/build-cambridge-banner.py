from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "combridge logo.png"
OUT = ROOT / "public" / "images" / "home" / "cambridge-banner.png"
OUT_2X = ROOT / "public" / "images" / "home" / "cambridge-banner@2x.png"

BANNER_W, BANNER_H = 1920, 800
LOGO_WIDTH_RATIO = 0.76
BG = (255, 255, 255)


def trim_whitespace(img: Image.Image) -> Image.Image:
    rgb = img.convert("RGB")
    pixels = rgb.load()
    w, h = rgb.size
    threshold = 250

    def is_content(x: int, y: int) -> bool:
        r, g, b = pixels[x, y]
        return r < threshold or g < threshold or b < threshold

    top = bottom = left = right = None
    for y in range(h):
        if any(is_content(x, y) for x in range(w)):
            top = y
            break
    for y in range(h - 1, -1, -1):
        if any(is_content(x, y) for x in range(w)):
            bottom = y
            break
    for x in range(w):
        if any(is_content(x, y) for y in range(h)):
            left = x
            break
    for x in range(w - 1, -1, -1):
        if any(is_content(x, y) for y in range(h)):
            right = x
            break

    if None in (top, bottom, left, right):
        return img

    return img.crop((left, top, right + 1, bottom + 1))


def build_banner(width: int, height: int) -> Image.Image:
    source = Image.open(SRC).convert("RGBA")
    trimmed = trim_whitespace(source)

    target_logo_w = int(width * LOGO_WIDTH_RATIO)
    scale = target_logo_w / trimmed.width
    target_logo_h = int(trimmed.height * scale)

    max_h = int(height * 0.82)
    if target_logo_h > max_h:
        scale = max_h / trimmed.height
        target_logo_h = max_h
        target_logo_w = int(trimmed.width * scale)

    logo = trimmed.resize((target_logo_w, target_logo_h), Image.Resampling.LANCZOS)

    banner = Image.new("RGB", (width, height), BG)
    x = (width - target_logo_w) // 2
    y = (height - target_logo_h) // 2
    banner.paste(logo, (x, y), logo)

    return banner


def main() -> None:
    banner_1x = build_banner(BANNER_W, BANNER_H)
    banner_2x = build_banner(BANNER_W * 2, BANNER_H * 2)
    banner_1x.save(OUT, format="PNG", optimize=True)
    banner_2x.save(OUT_2X, format="PNG", optimize=True)
    print(f"Saved {OUT} ({banner_1x.size})")
    print(f"Saved {OUT_2X} ({banner_2x.size})")


if __name__ == "__main__":
    main()
