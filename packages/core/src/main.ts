import type { Adapter } from "./types";
import type { Provider } from "./types";

export class SimpleAuth {
  private adapter: Adapter;
  private providers: Provider[];

  constructor({
    adapter,
    providers,
  }: {
    adapter: Adapter;
    providers: Provider[];
  }) {
    this.adapter = adapter;
    this.providers = providers;
  }

  async signIn({}) {}

  async signOut({}) {}

  async signUp({}) {}
}
