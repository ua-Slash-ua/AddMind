
export const UserHead = {
    id: 'ID',
    login: 'Логін користувача',
    create_dt: 'Дата реєстрації',
}

export const userLink = process.env.NEXT_PUBLIC_API_URL! + '/user';

export type userType  = {
    id : number,
    login: string,
    password: string,
    create_dt: Date
}

export interface UserFilter {
    loginStartsWith?: string;
    ids?: number[];
    updateFrom?: Date;
    updateTo?: Date;
}