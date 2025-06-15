// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),       // pon .optional() si a veces no lo usas
    pubDate: z.coerce.date(),
    description: z.string(),
  }),

  // 👇 layout para todos los posts de la colección
  // (ruta relativa DESDE  src/content/  a tu Post.astro)
  layout: '../Layouts/Post.astro',
});

export const collections = { blog };
