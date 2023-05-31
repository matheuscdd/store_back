import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Req
} from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { JwtAuthGuard } from "../auth/jwt.auth.guard";
import { iUser } from "../auth/interface";


@Controller("clients")
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post("")
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get("")
  findAll() {
    return this.clientsService.findAll();
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  profile(@Req() {user}: iUser) {
    return this.clientsService.findOne(user.id);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch("")
  @UseGuards(JwtAuthGuard)
  update(@Req() {user}: iUser, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(user.id, updateClientDto);
  }

  @Delete("")
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  remove(@Req() {user}: iUser) {
    return this.clientsService.remove(user.id);
  }
}
