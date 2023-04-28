import { z } from 'zod';

const ItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});

export type Item = z.infer<typeof ItemSchema>;
