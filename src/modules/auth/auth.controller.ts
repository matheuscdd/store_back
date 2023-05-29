import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local.auth.guard";


@Controller("login")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("")
  @UseGuards(LocalAuthGuard)
  login(@Body() {email}: {email: string, password: string}) {
      return this.authService.login(email);
  }
}
