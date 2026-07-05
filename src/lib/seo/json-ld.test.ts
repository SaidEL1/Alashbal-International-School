import { describe, expect, it } from "vitest";

import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo/json-ld";
import { ageBandHrefs, statKeys, testimonialKeys } from "@/config/homepage";

describe("json-ld", () => {
  it("builds organization schema", () => {
    const schema = buildOrganizationSchema("en");
    expect(schema["@type"]).toBe("EducationalOrganization");
    expect(schema.name).toBeTruthy();
  });

  it("builds website schema", () => {
    const schema = buildWebsiteSchema("ar");
    expect(schema["@type"]).toBe("WebSite");
    expect(schema.inLanguage).toBe("ar");
  });
});

describe("homepage config", () => {
  it("defines five age bands", () => {
    expect(ageBandHrefs).toHaveLength(5);
  });

  it("defines four stats", () => {
    expect(statKeys).toHaveLength(4);
  });

  it("defines three testimonials", () => {
    expect(testimonialKeys).toHaveLength(3);
  });
});
