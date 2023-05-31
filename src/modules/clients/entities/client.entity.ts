import { Exclude } from "class-transformer";
import { randomUUID } from "node:crypto";
import { generateAvatar } from "src/functions";

export class Client {
  readonly id: string;
  name: string;
  email: string;
  cellphone: string;
  created_at: Date;
  img: string

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
    this.img = generateAvatar();
  }
}
