import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, HttpCode } from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { iUser } from "../auth/interface";
import { JwtAuthGuard } from "../auth/jwt.auth.guard";
import { OwnerGuard } from "../auth/owner.auth.guard";

@Controller("contacts")
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Req() {user}: iUser, @Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(user.id, createContactDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() {user}: iUser) {
    return this.contactsService.findAll(user.id);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.contactsService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(OwnerGuard)
  @UseGuards(JwtAuthGuard)
  update(@Param("id") id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(":id")
  @HttpCode(204)
  @UseGuards(OwnerGuard)
  @UseGuards(JwtAuthGuard)
  remove(@Param("id") id: string) {
    return this.contactsService.remove(id);
  }
}
