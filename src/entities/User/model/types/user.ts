export interface User {
    username: string;
    id: number;
    password: string;
}

export interface UserSchema {
    authData?: User;
}
