import { IsNotEmpty, isNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty({message: 'O nome está vazio!'})
    public name: string;

    @IsNotEmpty({message: 'O telefone está vazio!'})
    public phone: string;

    @IsNotEmpty({message: 'O CPF está vazio!'})
    public CPF: string;
}
