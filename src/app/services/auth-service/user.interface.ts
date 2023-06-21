export enum UserRole {
  ADMIN = 1,
  USER = 2
}

export interface Role {
  id: UserRole
}

export interface Roles {
  name: string,
  UserRole: Role
}

export interface User {
  email: string;
  password: string;
  roles: [Roles];
}
