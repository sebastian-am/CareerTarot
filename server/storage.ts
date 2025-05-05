import { 
  careerInsights, 
  type CareerInsight, 
  type InsertCareerInsight,
  defaultCareerInsights 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  getAllCareerInsights(): Promise<CareerInsight[]>;
  getCareerInsight(id: number): Promise<CareerInsight | undefined>;
  createCareerInsight(insight: InsertCareerInsight): Promise<CareerInsight>;
  createManyCareerInsights(insights: InsertCareerInsight[]): Promise<CareerInsight[]>;
  resetWithDefaultData(): Promise<void>;
}

export class MemStorage implements IStorage {
  private insights: Map<number, CareerInsight>;
  private currentId: number;

  constructor() {
    this.insights = new Map();
    this.currentId = 1;
    this.initializeDefaultData();
  }

  private async initializeDefaultData() {
    await this.resetWithDefaultData();
  }

  async getAllCareerInsights(): Promise<CareerInsight[]> {
    return Array.from(this.insights.values());
  }

  async getCareerInsight(id: number): Promise<CareerInsight | undefined> {
    return this.insights.get(id);
  }

  async createCareerInsight(insight: InsertCareerInsight): Promise<CareerInsight> {
    const id = this.currentId++;
    const newInsight: CareerInsight = { ...insight, id };
    this.insights.set(id, newInsight);
    return newInsight;
  }

  async createManyCareerInsights(insights: InsertCareerInsight[]): Promise<CareerInsight[]> {
    const createdInsights: CareerInsight[] = [];
    
    for (const insight of insights) {
      const createdInsight = await this.createCareerInsight(insight);
      createdInsights.push(createdInsight);
    }
    
    return createdInsights;
  }

  async resetWithDefaultData(): Promise<void> {
    this.insights.clear();
    this.currentId = 1;
    await this.createManyCareerInsights(defaultCareerInsights);
  }
}

export const storage = new MemStorage();
