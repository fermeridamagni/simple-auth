import type { AuthProviderSchema } from "@schemas/provider-schemas";
import type { z } from "zod";

export interface AuthProvider extends z.infer<typeof AuthProviderSchema> {}
