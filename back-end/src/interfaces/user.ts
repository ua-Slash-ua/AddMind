export interface UserFilter {
    loginStartsWith?: string;
    ids?: number[];
    updateFrom?: Date;
    updateTo?: Date;
}