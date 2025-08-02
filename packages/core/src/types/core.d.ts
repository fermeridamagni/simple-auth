import type { z } from "zod/v4";
import type { SimpleAuthOptionsSchema } from "@schemas/code-schemas";

export interface SimpleAuthOptions
  extends z.infer<typeof SimpleAuthOptionsSchema> {}
