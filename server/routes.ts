import type { Express } from "express";
import { storage } from "./storage";
import { exampleInsertSchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  app.get("/api/proxy", async (req, res) => {
    const targetUrl = req.query.url as string;
    
    if (!targetUrl) {
      return res.status(400).json({ error: "URL parameter is required" });
    }

    try {
      const response = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      const contentType = response.headers.get('content-type') || 'text/html';
      res.setHeader('Content-Type', contentType);
      res.setHeader('Access-Control-Allow-Origin', '*');

      const data = await response.arrayBuffer();
      res.send(Buffer.from(data));
    } catch (error) {
      console.error('Proxy error:', error);
      res.status(500).json({ error: 'Failed to fetch URL' });
    }
  });

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
