import {User, UserRole} from "./user.interface";

export interface AuthServiceInterface {
  login: (email: string, password: string) => void,
  logout: () => void
  user: User | undefined
  userRoles: UserRole | undefined
}
