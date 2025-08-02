import { SimpleAuthOptionsSchema } from "@schemas/code-schemas";
import type { SimpleAuthOptions } from "@/types/core";
import { SimpleAuthError } from "./lib/utils/errors";

function SimpleAuth(options: SimpleAuthOptions) {
  // Validate options using Zod schema
  const parsedOptions = SimpleAuthOptionsSchema.safeParse(options);
  if (!parsedOptions.success) {
    throw new SimpleAuthError(
      `Invalid SimpleAuth options: ${parsedOptions.error.message}`,
      "INVALID_AUTH_OPTIONS"
    );
  }
}

export default SimpleAuth;
