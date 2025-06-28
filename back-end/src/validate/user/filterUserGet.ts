import {UserFilter} from "../../types/user";

export function buildUserFilter(filter?: UserFilter): any {
    const where: any = {};

    if (!filter) return where;

    if (filter.loginStartsWith) {
        where.login = {
            startsWith: filter.loginStartsWith,
            mode: 'insensitive',
        };
    }

    if (filter.ids && filter.ids.length > 0) {
        where.id = {
            in: filter.ids,
        };
    }

    if (filter.updateFrom || filter.updateTo) {
        where.update_dt = {};
        if (filter.updateFrom) {
            where.update_dt.gte = filter.updateFrom;
        }
        if (filter.updateTo) {
            where.update_dt.lte = filter.updateTo;
        }
    }

    return where;
}