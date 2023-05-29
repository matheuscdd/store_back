import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { ClientsRepository } from "./repositories/clients.repository";
import { Client } from "./entities/client.entity";

@Injectable()
export class ClientsService {
  constructor(private clientRepository: ClientsRepository) {}

  async findByEmail(email: string) {
    const findClient: Client = await this.clientRepository.findByEmail(email);
    return findClient;
  }

  async verifyIsEmailUnique(email: string) {
    const findClient: Client = await this.findByEmail(email);
    if (findClient) throw new ConflictException("Client already exists");
    return findClient;
  }

  async create(createClientDto: CreateClientDto) {
    this.verifyIsEmailUnique(createClientDto.email);
    const client: Client = await this.clientRepository.create(createClientDto);
    return client;
  }

  async findAll() {
    const users: Client[] = await this.clientRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const client: Client = await this.clientRepository.findOne(id);
    if (!client) throw new NotFoundException("Client not found");
    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    await this.findOne(id);
    if (updateClientDto.email) await this.verifyIsEmailUnique(updateClientDto.email);
    const client: Client = await this.clientRepository.update(id, updateClientDto);
    return client;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.clientRepository.remove(id);
  }
}
