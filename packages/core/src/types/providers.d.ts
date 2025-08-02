import type { z } from "zod/v4";
import type { AuthProviderSchema } from "@schemas/provider-schemas";

export interface AuthProvider extends z.infer<typeof AuthProviderSchema> {}
