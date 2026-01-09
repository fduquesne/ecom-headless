import { createApp } from "./app";

const app = createApp();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(PORT, () => {
  console.log(`[api] listening on http://localhost:${PORT}`);
});
