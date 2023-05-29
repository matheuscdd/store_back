import { Module } from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { ClientsController } from "./clients.controller";
import { PrismaService } from "src/prisma.service";
import { ClientsRepository } from "./repositories/clients.repository";
import { ClientsPrismaRepository } from "./prisma/client.prisma.repository";

@Module({
  controllers: [ClientsController],
  providers: [
    ClientsService, 
    PrismaService,
    {
      provide: ClientsRepository,
      useClass: ClientsPrismaRepository
    }
  ],
})
export class ClientsModule {}
