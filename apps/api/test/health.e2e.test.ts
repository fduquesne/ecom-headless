import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../src/app";

describe("GET /health (e2e)", () => {
  it("responds with 200 and ok=true", async () => {
    const app = createApp();

    const res = await request(app).get("/health").expect(200);

    expect(res.body).toEqual({ ok: true });
  });
});
