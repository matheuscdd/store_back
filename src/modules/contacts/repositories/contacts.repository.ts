import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";

export abstract class ContactsRepository {
    abstract create(client_id: string, data: CreateContactDto): Promise<Contact>;
    abstract findAll(client_id: string): Promise<Contact[]>;
    abstract findOne(id: string): Promise<Contact>;
    abstract findByEmail(email: string): Promise<Contact>;
    abstract update(id: string, data: UpdateContactDto): Promise<Contact>;
    abstract remove(id: string): Promise<void>;
}
