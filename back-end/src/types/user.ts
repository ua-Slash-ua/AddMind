export type TypeUser  = {
    id? :number,
    login :string,
    create_dt?: Date,
    update_dt?: Date,
} & TypeUserPass


export type TypeUserPass = {
    password?:string
    old_password? :string
    new_password? :string
}

export type UserFilter = {
    loginStartsWith?: string;
    ids?: number[];
    updateFrom?: Date;
    updateTo?: Date;
};
