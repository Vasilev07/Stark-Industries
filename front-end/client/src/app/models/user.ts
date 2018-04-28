import { Roles } from './roles.enum';

export class User {
    public id: number;
    public userName: string;
    public firstName: string;
    public lastName: string;
    public email: string;

    public password: string;
    public createdAt: string;
    public updatedAt: string;
    public roleId: Roles;
    public applicationsCount: number;
}
