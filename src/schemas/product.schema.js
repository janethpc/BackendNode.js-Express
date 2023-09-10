import { z } from "zod";

export const productSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
  price: z.number({
    required_error: "price is required",
  }),
  category: z.string({
    required_error: "Category is required",
  }),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
});