import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private seqId = 0;
  
  @UsePipes(ValidationPipe)
  create(createUserDto: CreateUserDto) {
    this.seqId++;

    const newUser = new User(this.seqId, createUserDto.name, createUserDto.CPF, createUserDto.phone, '', '', '');
    this.users.push(newUser);

    return {data: newUser.id, message: 'Criado com sucesso!'};
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
