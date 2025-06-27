import {Injectable} from '@nestjs/common';
import {TypeUser} from "../types/user";
import {validateUserLogin} from "../validate/user/validateUserLogin";
import {PrismaService} from "../prisma/prisma.service";
import {IResponse} from "../interfaces/response";


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }

    async createUser(userData: TypeUser): Promise<IResponse> {
        if (!await validateUserLogin(this.prisma, userData.login)) {
            return {
                status: 'error',
                message: 'Користувач з таким логіном уже існує!'
            }
        }
        if (userData.id || userData.update_dt) {
            return {
                status: 'error',
                message: 'id && update_dt при створенні не передається'
            }
        }
        let currentTime = Date.now();
        userData.create_dt = new Date(currentTime);

        const result = await this.prisma.modelUser.create(
            {
                data: userData
            }
        );
        if(!result){
            return {
                status: 'error',
                message: 'Не вдалося додати користувача в БД!',
            }
        }
        return {
            status: 'success',
            message: `Користувача з id ${result.id} додано!`,
        }
    }

    async getAllUser():Promise<IResponse>{
        const result = await this.prisma.modelUser.findMany({
            orderBy: {
                id: 'desc'
            },
        });
        if (!result){
            return {
                status: 'error',
                message: 'Не вдалося отримати користувачаів в БД!',
            }

        }
        return {
            status: 'success',
            message: 'Користувачів отримано!',
            data: result
        }
    }

    async removeUser(userId:number):Promise<IResponse>{
        const result = await this.prisma.modelUser.delete({
            where: {
                id:userId
            }
            }
        )
        if (!result){
            return {
                status: 'error',
                message: `Не вдалося видалити користувача ${userId}!`,
            }

        }
        return {
            status: 'success',
            message: `Користувача ${userId} видалено!`,
            data: result
        }
    }

    async updateUser(userId:number,userData: TypeUser): Promise<IResponse> {
        if (!await validateUserLogin(this.prisma, userData.login, userId)) {
            return {
                status: 'error',
                message: 'Користувач з таким логіном уже існує!'
            }
        }
        if (userData.create_dt) {
            return {
                status: 'error',
                message: 'create_dt при створенні не передається'
            }
        }

        let currentTime = Date.now();
        userData.update_dt = new Date(currentTime);

        const result = await this.prisma.modelUser.update(
            {
                where :{
                    id:userId,
                },
                data:userData
            }
        );
        if(!result){
            return {
                status: 'error',
                message: `Не вдалося оновити користувача ${userId}`,
            }
        }
        return {
            status: 'success',
            message: `Користувача з id ${userId} оновлено!`,
        }
    }
}
