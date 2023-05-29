import { Exclude } from "class-transformer";
import { randomUUID } from "node:crypto";

export class Client {
  readonly id: string;
  name: string;
  email: string;
  cellphone: string;
  created_at: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
