import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { ContactsRepository } from "./repositories/contacts.repository";
import { Contact } from "./entities/contact.entity";

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}

  async verifyIsEmailUnique(email: string) {
    const contact: Contact = await this.contactsRepository.findByEmail(email);
    if (contact) throw new ConflictException('Contact already exists');
  }

  async create(client_id: string, createContactDto: CreateContactDto) {
    await this.verifyIsEmailUnique(createContactDto.email);
    const contact: Contact = await this.contactsRepository.create(client_id, createContactDto);
    return contact;
  }

  async findAll(client_id: string) {
    const contacts: Contact[] = await this.contactsRepository.findAll(client_id);
    return contacts;
  }

  async findOne(id: string) {
    const contact: Contact = await this.contactsRepository.findOne(id);
    if (!contact) throw new NotFoundException('Contact not found');
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    await this.findOne(id);
    if (updateContactDto.email) await this.verifyIsEmailUnique(updateContactDto.email);
    const contact: Contact = await this.contactsRepository.update(id, updateContactDto);
    return contact;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.contactsRepository.remove(id);
  }
  
}
