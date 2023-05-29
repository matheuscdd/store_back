import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { ContactsService } from "../contacts/contacts.service";
import { Contact } from "../contacts/entities/contact.entity";

@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(private contactsService: ContactsService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
    const req = context.switchToHttp().getRequest()
    const contact_id: string = req.params.id;
    const client_logged = req.user;
    const contact: Contact = await this.contactsService.findOne(contact_id);
    return contact.client_id === client_logged.id;
  }
}