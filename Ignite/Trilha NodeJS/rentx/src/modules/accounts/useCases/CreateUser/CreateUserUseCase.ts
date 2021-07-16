import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { };

    async execute({ name, password, email, username, driver_license }: ICreateUserDTO): Promise<void> {
        await this.userRepository.create({
            name,
            password,
            email,
            username,
            driver_license
        })
    }
}

export {
    CreateUserUseCase
}