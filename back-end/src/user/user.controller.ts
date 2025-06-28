import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {TypeUser, UserFilter} from "../types/user";
import {IResponse} from "../interfaces/response";
import {FilterQuery} from "../decorators/userFilter";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() userData: TypeUser):Promise<IResponse> {
        return await this.userService.createUser(userData);
    }
    @Get()
    async getUsers(@FilterQuery() filter: UserFilter): Promise<IResponse> {
        return await this.userService.getAllUser(filter);
    }
    @Delete(':id')
    async removeUser(@Param('id',ParseIntPipe) userId: number): Promise<IResponse> {
        return await this.userService.removeUser(userId);
    }
    @Patch(':id')
    async updateUser(
        @Param('id', ParseIntPipe) userId: number,
        @Body() userData: TypeUser
    ): Promise<IResponse> {
        return await this.userService.updateUser(userId, userData);
    }


}

