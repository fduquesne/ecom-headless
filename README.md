# E-commerce headless (Monorepo)

A **from-scratch e-commerce headless** built as a portfolio project to demonstrate real-world engineering practices:
clean architecture, TypeScript, testing, and CI.

The goal is to provide a complete user journey:
**Home → Catalog → Product → Cart → Checkout → Simulated Payment**.

> Data is **mocked** (local JSON). No customer account/auth is required for this.

## ✨ Scope

### Frontend (React)

- Home
- Catalog (product listing)
- Product details
- Cart (local persistence)
- Checkout
- Simulated payment (fake provider)

### API (Node/Express)

- Product listing & product details
- Categories
- Checkout endpoint + payment simulation endpoints

### “Prod-ready” fundamentals

- TypeScript everywhere
- Repository pattern (no ORM)
- Unit tests (API)
- E2E tests (API)
- GitHub Actions CI (lint / test / build)

## 🧱 Tech Stack

**Monorepo**

- pnpm workspaces

**Frontend**

- React + TypeScript
- Tailwind CSS v4
- React Router
- TanStack Query

**Backend**

- Node.js + Express
- Unit tests: Vitest
- E2E tests: Supertest

**Data**

- Local JSON files (mocked dataset)
- Search: Fuse.js (API-side)

## 📁 Repository Structure

```
apps/
|- web/            # React frontend
|- api/            # Express API
packages/
|- shared/         # Shared types, schemas, utilities
|- mock-data/      # JSON datasets (products, categories, ...)
```

## ✅ Prerequisites

- Node.js (LTS recommended)
- pnpm (we use pnpm workspaces for the monorepo)

Install pnpm globally (if not already installed):

```bash
npm i -g pnpm
```

## 🚀 Getting Started (Local)

Typical workflow:

```bash
pnpm install

# run frontend only
pnpm --filter web dev

# run api only
pnpm --filter api dev

# run both
pnpm dev
```

Expected:

- Frontend runs on `http://localhost:8080`
- API runs on `http://localhost:3000` (default for this project)

## 🔌 API (Draft)

> Final endpoints will be documented once implemented.

Planned endpoints:

- `GET /categories`
- `GET /products`
- `GET /products/:id`
- `POST /checkout`
- `POST /payments/:paymentId/confirm`
- `GET /orders/:orderId`

Confirmed endpoints:

- `GET /health`

## 🧪 Testing

> Exact commands will be confirmed once tooling is wired.

API unit tests:

```bash
pnpm --filter api test
```

API e2e tests:

```bash
pnpm --filter api test:e2e
```

Full repo tests:

```bash
pnpm test
```

## 🧭 Development Notes

### Data & Domain

- Source of truth is local JSON
- The API uses repositories to access data
- Validation and shared types live in `packages/shared`

### Search

- Fuzzy search is implemented with Fuse.js
- Can be placed on the client or the API depending on needs/performance

## 🗺️ Roadmap

- [x] Step 0: monorepo bootstrap (pnpm workspaces, web + api running)
- [ ] Step 1: mock data + API catalog endpoints + tests
- [ ] Step 2: frontend pages + TanStack Query integration
- [ ] Step 3: cart + checkout + fake payment provider
- [ ] Step 4: polish (e2e user journey, CI hardening, perf/SEO basics)
