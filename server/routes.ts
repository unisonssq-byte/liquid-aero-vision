import type { Express } from "express";
import { storage } from "./storage";
import { exampleInsertSchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  app.get("/api/examples", async (_req, res) => {
    const examples = await storage.getExamples();
    res.json(examples);
  });

  app.get("/api/examples/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const example = await storage.getExample(id);
    if (!example) {
      return res.status(404).json({ message: "Example not found" });
    }
    res.json(example);
  });

  app.post("/api/examples", async (req, res) => {
    const result = exampleInsertSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    const example = await storage.createExample(result.data);
    res.json(example);
  });
}
