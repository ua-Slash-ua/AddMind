import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {TypeUser} from "../types/user";
import {IResponse} from "../interfaces/response";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('')
    async createUser(@Body() userData: TypeUser):Promise<IResponse> {
        return await this.userService.createUser(userData);
    }
    @Get()
    async  getUsers():Promise<IResponse>{
        return await this.userService.getAll();
    }
}

