import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const careerInsights = pgTable("career_insights", {
  id: serial("id").primaryKey(),
  podcastNumber: integer("podcast_number").notNull(),
  podcastTitle: text("podcast_title").notNull(),
  podcastLink: text("podcast_link").notNull(),
  intervieweeName: text("interviewee_name").notNull(),
  industrySectors: text("industry_sectors").array().notNull(),
  transcriptExcerptNumber: integer("transcript_excerpt_number").notNull(),
  transcriptExcerptText: text("transcript_excerpt_text").notNull(),
  quote: text("quote").notNull(),
  initialCode: text("initial_code").notNull(),
});

export const insertCareerInsightSchema = createInsertSchema(careerInsights);

export type InsertCareerInsight = z.infer<typeof insertCareerInsightSchema>;
export type CareerInsight = typeof careerInsights.$inferSelect;

// This is the default dataset to use until the user provides their own
export const defaultCareerInsights: InsertCareerInsight[] = [
  {
    podcastNumber: 1,
    podcastTitle: "Finding Your Path",
    podcastLink: "https://yourfutureisbusiness.org/podcast/finding-your-path",
    intervieweeName: "Alex Johnson",
    industrySectors: ["Technology", "Education"],
    transcriptExcerptNumber: 12,
    transcriptExcerptText: "When discussing career choices, Alex emphasized the importance of adaptability.",
    quote: "The most important skill is learning how to learn. In today's rapidly changing world, being adaptable and curious will take you further than any specific technical skill.",
    initialCode: "Adaptability"
  },
  {
    podcastNumber: 2,
    podcastTitle: "Careers in Healthcare",
    podcastLink: "https://yourfutureisbusiness.org/podcast/healthcare-careers",
    intervieweeName: "Dr. Sarah Chen",
    industrySectors: ["Healthcare", "Research"],
    transcriptExcerptNumber: 8,
    transcriptExcerptText: "Dr. Chen shared her non-linear career journey in healthcare.",
    quote: "Don't be afraid to pivot. I started in clinical practice but discovered my passion for research along the way. Your first job doesn't determine your entire career.",
    initialCode: "Career Flexibility"
  },
  {
    podcastNumber: 3,
    podcastTitle: "Creative Industries",
    podcastLink: "https://yourfutureisbusiness.org/podcast/creative-industries",
    intervieweeName: "Marcus Taylor",
    industrySectors: ["Design", "Marketing"],
    transcriptExcerptNumber: 15,
    transcriptExcerptText: "Marcus shared insights about authenticity in creative fields.",
    quote: "Build a portfolio of work you're proud of, not just what you think others want to see. Authenticity stands out in creative fields where everyone is trying to follow trends.",
    initialCode: "Authentic Expression"
  },
  {
    podcastNumber: 4,
    podcastTitle: "Entrepreneurship Journey",
    podcastLink: "https://yourfutureisbusiness.org/podcast/entrepreneurship",
    intervieweeName: "Samantha Wright",
    industrySectors: ["Business", "Entrepreneurship"],
    transcriptExcerptNumber: 22,
    transcriptExcerptText: "Samantha discussed her path to becoming an entrepreneur.",
    quote: "Failure is just a stepping stone to success. Every mistake I made taught me something valuable that I couldn't have learned any other way.",
    initialCode: "Embracing Failure"
  },
  {
    podcastNumber: 5,
    podcastTitle: "Tech Leadership",
    podcastLink: "https://yourfutureisbusiness.org/podcast/tech-leadership",
    intervieweeName: "David Park",
    industrySectors: ["Technology", "Leadership"],
    transcriptExcerptNumber: 9,
    transcriptExcerptText: "David reflected on his progression from programmer to CTO.",
    quote: "Technical skills get you in the door, but people skills help you advance. As I moved up in my career, I realized that understanding people became more important than understanding code.",
    initialCode: "People Skills"
  }
];
