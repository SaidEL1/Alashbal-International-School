import { describe, expect, it } from "vitest";

import { emailSchema } from "./validators";

describe("emailSchema", () => {
  it("accepts valid emails", () => {
    expect(emailSchema.parse("info@aisdoha.net")).toBe("info@aisdoha.net");
  });

  it("rejects invalid emails", () => {
    expect(() => emailSchema.parse("not-an-email")).toThrow();
  });
});
