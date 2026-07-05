import { describe, expect, it } from "vitest";

import { isShellPath, shellPaths } from "@/config/navigation";

describe("navigation shell paths", () => {
  it("includes all mega menu destinations", () => {
    expect(shellPaths.has("/about")).toBe(true);
    expect(shellPaths.has("/academics/stem")).toBe(true);
    expect(shellPaths.has("/academics/languages")).toBe(true);
    expect(shellPaths.has("/admissions/inquire")).toBe(true);
    expect(shellPaths.has("/student-life/gallery")).toBe(true);
  });

  it("rejects unknown paths", () => {
    expect(isShellPath("/unknown-page")).toBe(false);
  });

  it("accepts home path", () => {
    expect(isShellPath("/")).toBe(true);
  });
});
