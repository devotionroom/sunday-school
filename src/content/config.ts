import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bibleReference: z.string().optional(),
    bigIdea: z.string().optional(),
    activities: z.array(z.string()).optional(),
    introduction: z.string().optional(),
    learningObjectives: z.array(z.string()).optional(),
    duration: z.string().optional(),
    memoryVerse: z.string().optional(),
  }),
});

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    targetAges: z.array(z.string()).optional(),
    type: z.string().optional(),
    time: z.string().optional(),
    materials: z.array(z.string()).optional(),
    printables: z.array(
      z.object({
        title: z.string(),
        fileUrl: z.string(),
      })
    ).optional(),
  }),
});

export const collections = {
  lessons,
  activities,
};
