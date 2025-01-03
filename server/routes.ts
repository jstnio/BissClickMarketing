import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { chatWithAgent } from "./lib/openai";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

const chatMessageSchema = z.object({
  message: z.string().min(1),
  context: z.string().optional(),
});

export function registerRoutes(app: Express): Server {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      // In a real application, you would:
      // 1. Save to database
      // 2. Send notification email
      // 3. Setup proper error handling

      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      res.json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to process contact form submission" 
        });
      }
    }
  });

  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, context } = chatMessageSchema.parse(req.body);
      const response = await chatWithAgent(message, context);
      res.json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid chat message",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          message: "Failed to process chat message"
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}