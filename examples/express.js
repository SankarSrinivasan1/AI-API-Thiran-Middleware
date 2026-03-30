import express from "express";
import { shield } from "../src/index.js";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { input } = req.body;

  const check = await shield({
    input,
    output: null,
    tool: null
  });

  if (!check.safe) {
    return res.status(400).json({ error: check.reason });
  }

  // simulate AI response
  const output = "Safe response";

  const outputCheck = await shield({
    input: null,
    output,
    tool: null
  });

  if (!outputCheck.safe) {
    return res.status(400).json({ error: outputCheck.reason });
  }

  res.json({ output });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
