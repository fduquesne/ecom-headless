import request from "supertest";
import { describe, expect, it } from "vitest";

import { createApp } from "../../../src/app";

describe("Check [Product] endpoints", () => {
  describe("GET /api/artifacts/products", () => {
    it("should [Returns a non-empty array] when [Nominal]", async () => {
      const app = createApp();
      const res = await request(app).get("/api/artifacts/products").expect(200);

      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/artifacts/products/:id", () => {
    it("should [Returns 404] when [id] is unknown", async () => {
      const app = createApp();
      const res = await request(app)
        .get("/api/artifacts/products/does_not_exist")
        .expect(404);
      expect(res.body).toEqual({ error: "PRODUCT_NOT_FOUND" });
    });

    it("should [Returns 200] when [Nominal]", async () => {
      const app = createApp();
      const listRes = await request(app)
        .get("/api/artifacts/products")
        .expect(200);
      expect(Array.isArray(listRes.body)).toBe(true);
      expect(listRes.body.length).toBeGreaterThan(0);
      const existingId = listRes.body[0].id;
      expect(typeof existingId).toBe("string");
      const itemRes = await request(app)
        .get(`/api/artifacts/products/${existingId}`)
        .expect(200);
      expect(itemRes.body.id).toBe(existingId);
    });
  });
});
