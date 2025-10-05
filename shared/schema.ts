import { z } from "zod";

export const exampleInsertSchema = z.object({
  name: z.string().min(1),
});

export type ExampleInsert = z.infer<typeof exampleInsertSchema>;

export type Example = ExampleInsert & {
  id: number;
};
