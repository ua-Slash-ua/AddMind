import {PrismaService} from "../../prisma/prisma.service";

export async function validateUserLogin(prisma: PrismaService, userLogin: string, userId: number = 0): Promise<boolean> {
    const result = await prisma.modelUser.findFirst({
        where: {
            login: userLogin,
        },
    });
    // Якщо логін вже існує
    if (result) {
        // Якщо це оновлення і логін належить цьому ж юзеру — дозволити
        if (userId !== 0 && result.id === userId) {
            return true;
        }
        // Інакше — логін зайнятий
        return false;
    }

    // Якщо логін не знайдено — можна використовувати
    return true;

}
