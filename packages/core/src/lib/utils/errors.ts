export class SimpleAuthError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super(message);

    this.name = "SimpleAuthError";
    this.code = code;
  }
}
