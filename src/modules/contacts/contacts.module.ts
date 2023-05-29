import { Module } from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { ContactsController } from "./contacts.controller";
import { PrismaService } from "src/prisma.service";
import { ContactsRepository } from "./repositories/contacts.repository";
import { ContactsPrismaRepository } from "./prisma/contact.prisma.repository";

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactsRepository,
      useClass: ContactsPrismaRepository
    }
  ],
  exports: [ContactsService]
})
export class ContactsModule {}
