import { randomUUID } from "node:crypto";
import { generateAvatar } from "src/functions";

export class Contact {
  readonly id: string;
  readonly client_id: string;
  name: string;
  email: string;
  cellphone: string;
  created_at: Date;
  img: string;


  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
    this.img = generateAvatar();
  }
}
