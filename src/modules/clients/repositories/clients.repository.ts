import { CreateClientDto } from "../dto/create-client.dto";
import { UpdateClientDto } from "../dto/update-client.dto";
import { Client } from "../entities/client.entity";

export abstract class ClientsRepository {
    abstract create(data: CreateClientDto): Promise<Client>;
    abstract findAll(): Promise<Client[]>;
    abstract findOne(id: string): Promise<Client>;
    abstract findByEmail(email: string): Promise<Client>;
    abstract update(id: string, data: UpdateClientDto): Promise<Client>;
    abstract remove(id: string): Promise<void>;
}