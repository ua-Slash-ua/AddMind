import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  // imports: [PrismaModule], // ⬅️ додаємо модуль
  controllers: [UserController],
  providers: [UserService,PrismaService]
})
export class UserModule {}
