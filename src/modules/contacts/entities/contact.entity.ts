import { randomUUID } from "node:crypto";

export class Contact {
  readonly id: string;
  readonly client_id: string;
  name: string;
  email: string;
  cellphone: string;
  created_at: Date;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
