import { z } from "zod";

export const formSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    number: z.string().nonempty(),
    address: z.string().nonempty(),
    linkedIn: z.string().url().optional(),
    portfolioSite: z.string().url().optional(),
    resume: z.string().nonempty(),
    graduation: z.string().nonempty(),
    university: z.string().nonempty(),
    degree: z.string().nonempty(),
    graduationDate: z.string().nonempty(),
    skills: z.record(z.string()),
    workExperience: z.record(z.string()),
    certifications: z.record(z.string())
  });