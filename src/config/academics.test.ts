import { describe, expect, it } from "vitest";

import { academicProgramKeys, galleryCategories, programRoutes } from "@/config/academics";

describe("academics config", () => {
  it("maps each program to a dedicated route", () => {
    expect(Object.keys(programRoutes)).toHaveLength(4);
    expect(programRoutes.earlyYears.href).toBe("/academics/early-years");
    expect(programRoutes.primary.href).toBe("/academics/primary");
    expect(programRoutes.middleSchool.href).toBe("/academics/middle-school");
    expect(programRoutes.highSchool.href).toBe("/academics/high-school");
  });

  it("chains program navigation prev/next", () => {
    expect(programRoutes.primary.prev).toBe("earlyYears");
    expect(programRoutes.primary.next).toBe("middleSchool");
    expect(programRoutes.highSchool.prev).toBe("middleSchool");
    expect(programRoutes.highSchool.next).toBeUndefined();
  });

  it("defines gallery filter categories", () => {
    expect(galleryCategories[0]).toBe("all");
    expect(galleryCategories).toContain("sports");
  });

  it("exports four core academic program keys", () => {
    expect(academicProgramKeys).toEqual(["earlyYears", "primary", "middleSchool", "highSchool"]);
  });
});
