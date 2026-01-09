import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../../../src/app";

describe("Check [Health] endpoints", () => {
  describe("GET /health", () => {
    it("should [Respond with 200 and ok=true] when [Nominal]", async () => {
      const app = createApp();
      const res = await request(app).get("/api/health").expect(200);

      expect(res.body).toEqual({ ok: true });
    });
  });
});
