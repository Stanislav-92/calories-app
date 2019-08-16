import { LoginData } from './login-data.model';

export interface SignupData extends LoginData {
  firstname: string;
  lastname: string;
  age?: string;
}
