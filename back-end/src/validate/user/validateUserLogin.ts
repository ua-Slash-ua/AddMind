import {TypeUser} from "../../types/user";
import {PrismaService} from "../../prisma/prisma.service";

export async function validateUserLogin(prisma: PrismaService, userLogin: string): Promise<boolean> {
    const result = await prisma.modelUser.findFirst({
        where: {
            login: userLogin,
        },
    });
    return !result
}
