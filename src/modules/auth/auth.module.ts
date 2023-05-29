import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ClientsModule } from "../clients/clients.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";
import { ContactsModule } from "../contacts/contacts.module";
import { OwnerGuard } from "./owner.auth.guard";

@Module({
  imports: [
    ClientsModule,
    ContactsModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {expiresIn: "12h"}
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    OwnerGuard,
  ]
})
export class AuthModule {}
