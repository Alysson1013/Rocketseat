import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken"


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        //Usuario existe 
        const user = await this.usersRepository.findByEmail(email)

        if (!user) throw new Error("Email or password incorrect!")

        //Senha correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) throw new Error("Email or password incorrect!")

        //Gerar JWT
        const token = sign({}, "fcb1fd566f7ac6c62ec869aecb76a4cb", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name, 
                email: user.email
            }
        }

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }