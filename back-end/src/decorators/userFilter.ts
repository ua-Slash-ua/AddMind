import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {UserFilter} from "../types/user";

export const FilterQuery = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): UserFilter => {
        const request = ctx.switchToHttp().getRequest();
        const query = request.query;

        const filter: UserFilter = {};

        if (query.loginStartsWith) {
            filter.loginStartsWith = String(query.loginStartsWith);
        }

        if (query.ids) {
            filter.ids = String(query.ids)
                .split(',')
                .map((id) => parseInt(id))
                .filter((id) => !isNaN(id));
        }

        if (query.updateFrom) {
            filter.updateFrom = new Date(String(query.updateFrom));
        }

        if (query.updateTo) {
            filter.updateTo = new Date(String(query.updateTo));
        }

        return filter;
    },
);