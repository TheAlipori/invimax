// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const invitaciones = defineCollection({
  schema: z.object({
    title: z.string(),
    pareja: z.string(),
    fecha: z.string().default("Próximamente"),
    lugar: z.string(),
    mensaje: z.string().optional()
  })
});

export const collections = { invitaciones };