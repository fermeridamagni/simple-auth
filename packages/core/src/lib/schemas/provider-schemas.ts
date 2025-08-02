import { z } from "zod/v4";

export const AuthProviderSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(["oauth", "crededentials", "sms"]),
});
