import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {TypeUser} from "../types/user";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('')
    async createUserRequest(@Body() userData: TypeUser) {
        return await this.userService.createUser(userData);
    }
}

