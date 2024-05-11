import { PlatformType } from "@prisma/client";
import { z, ZodEnum } from "zod";

const requiredMessage = "This field is required";

const PlatformTypeValues = Object.values(PlatformType) as [string, ...string[]];

export const EditProfileSchema = z.object({
  firstName: z.string().min(1, requiredMessage),
  lastName: z.string().min(1, requiredMessage),
  contactEmail: z.string().min(1, requiredMessage).email("Invalid email"),
  profileImage: z.string({ message: requiredMessage }).min(1, requiredMessage),
});

const platformSchema = z.object({
  id: z.string(),
  type: z.enum(PlatformTypeValues),
  link: z.string().min(1, requiredMessage).url("Invalid url"),
});

export const CreatePlatformSchema = z.object({
  platforms: z.array(platformSchema),
});

export const LoginSchema = z.object({
  email: z.string().min(1, requiredMessage).email("Invalid email"),
  password: z.string().min(1, requiredMessage).min(8, "Invalid password"),
});

export const SignUpSchema = z.object({
  email: z.string().min(1, requiredMessage).email("Invalid email"),
  password: z.string().min(1, requiredMessage).min(8, "Invalid password"),
  repeatedPassword: z.string().min(1, requiredMessage),
});
