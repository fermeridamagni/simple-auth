import { z } from "zod/v4";
import { AuthProviderSchema } from "@/lib/schemas/provider-schemas";

export const SimpleAuthOptionsSchema = z.object({
  providers: z.array(AuthProviderSchema),
});
