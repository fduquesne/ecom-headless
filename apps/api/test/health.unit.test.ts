import { describe, expect, it } from "vitest";

import { buildHealthPayload } from "../src/routes/health.routes";

describe("health payload", () => {
  it("returns ok=true", () => {
    expect(buildHealthPayload()).toEqual({ ok: true });
  });
});
