import { describe, expect, it } from "vitest";

import { DATA_FETCHING_STRATEGY } from "@/config/data-fetching";

describe("DATA_FETCHING_STRATEGY", () => {
  it("defers TanStack Query until search sprint", () => {
    expect(DATA_FETCHING_STRATEGY.status).toBe("deferred");
    expect(DATA_FETCHING_STRATEGY.adopted).toBe("@tanstack/react-query");
  });
});
