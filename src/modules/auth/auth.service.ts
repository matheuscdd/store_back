import { Injectable } from "@nestjs/common";
import { ClientsService } from "../clients/clients.service";
import { JwtService } from "@nestjs/jwt";
import { Client } from "../clients/entities/client.entity";
import { compareSync } from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(
        private clientsService: ClientsService,
        private jwtService: JwtService
    ) {}
    
    async validateClient(email: string, password: string) {
        const client: Client = await this.clientsService.findByEmail(email);
        const passwordMatch: boolean = compareSync(password, client ? client.password : "");
        if (!passwordMatch) return null;
        return {email};
    }

    async login(email: string) {
        const { id }: { id: string } = await this.clientsService.findByEmail(email);
        return {
            token: this.jwtService.sign({email}, {subject: id})
        }
    }

}
