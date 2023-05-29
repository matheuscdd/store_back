import { PrismaService } from "src/prisma.service";
import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { Contact } from "../entities/contact.entity";
import { ContactsRepository } from "../repositories/contacts.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
    constructor (private prisma: PrismaService) {}

    async create(client_id: string, data: CreateContactDto): Promise<Contact> {
        const contact: Contact = new Contact();
        Object.assign(contact, {
            ...data
        });

        const newContact: Contact = await this.prisma.contact.create({
            data: {
                ...contact,
                client_id
            }
        });

        return newContact;
    }

    async findAll(client_id: string): Promise<Contact[]> {
        const contacts: Contact[] = await this.prisma.contact.findMany({
            where: {client_id}
        });
        
        return contacts;
    }

    async findOne(id: string): Promise<Contact> {
        const contact: Contact = await this.prisma.contact.findUnique({
            where: {id}
        });

        return contact;
    }
    
    async findByEmail(email: string): Promise<Contact> {
        const contact: Contact = await this.prisma.contact.findUnique({
            where: {email}
        });

        return contact;
    }

    async update(id: string, data: UpdateContactDto): Promise<Contact> {
        const contact: Contact = await this.prisma.contact.update({
            where: {id},
            data: {...data}
        });
        return contact;
    }

    async remove(id: string): Promise<void> {
        await this.prisma.contact.delete({
            where: {id}
        });
    }
    

}