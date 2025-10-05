import type { Example, ExampleInsert } from "@shared/schema";

export interface IStorage {
  getExamples(): Promise<Example[]>;
  getExample(id: number): Promise<Example | undefined>;
  createExample(data: ExampleInsert): Promise<Example>;
}

export class MemStorage implements IStorage {
  private examples: Example[] = [];
  private nextId = 1;

  async getExamples(): Promise<Example[]> {
    return this.examples;
  }

  async getExample(id: number): Promise<Example | undefined> {
    return this.examples.find((e) => e.id === id);
  }

  async createExample(data: ExampleInsert): Promise<Example> {
    const example: Example = {
      ...data,
      id: this.nextId++,
    };
    this.examples.push(example);
    return example;
  }
}

export const storage = new MemStorage();
