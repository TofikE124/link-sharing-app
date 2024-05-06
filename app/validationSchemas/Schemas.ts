import { z } from "zod";

const requiredMessage = "This field is required";

export const EditProfileSchema = z.object({
  firstName: z.string().min(1, requiredMessage),
  lastName: z.string().min(1, requiredMessage),
  contactEmail: z.string().min(1, requiredMessage).email("Invalid email"),
  profileImage: z.string({ message: requiredMessage }).min(1, requiredMessage),
});
