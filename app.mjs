import express from "express";
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
app.use(express.static("public"));
// });

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port http://loacalhost:${port}`);
});
