import { container, inject, injectable } from "tsyringe";
import { hash } from "bcrypt"

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { };

    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
        
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists")
        }
 
        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license
        })
    }
}

export {
    CreateUserUseCase
}