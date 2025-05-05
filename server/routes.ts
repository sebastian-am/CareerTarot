import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCareerInsightSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for career insights
  app.get("/api/insights", async (req, res) => {
    try {
      const insights = await storage.getAllCareerInsights();
      res.json(insights);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch career insights" });
    }
  });

  app.get("/api/insights/random", async (req, res) => {
    try {
      const insights = await storage.getAllCareerInsights();
      
      if (insights.length === 0) {
        return res.status(404).json({ message: "No career insights available" });
      }
      
      const randomIndex = Math.floor(Math.random() * insights.length);
      const randomInsight = insights[randomIndex];
      
      res.json(randomInsight);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch a random career insight" });
    }
  });

  app.post("/api/insights", async (req, res) => {
    try {
      const validatedData = insertCareerInsightSchema.parse(req.body);
      const createdInsight = await storage.createCareerInsight(validatedData);
      res.status(201).json(createdInsight);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid career insight data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create career insight" });
    }
  });

  app.post("/api/insights/bulk", async (req, res) => {
    try {
      const schema = z.array(insertCareerInsightSchema);
      const validatedData = schema.parse(req.body);
      const createdInsights = await storage.createManyCareerInsights(validatedData);
      res.status(201).json(createdInsights);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid career insight data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create career insights in bulk" });
    }
  });

  app.post("/api/insights/reset", async (req, res) => {
    try {
      await storage.resetWithDefaultData();
      res.json({ message: "Career insights reset to default data" });
    } catch (error) {
      res.status(500).json({ message: "Failed to reset career insights" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
