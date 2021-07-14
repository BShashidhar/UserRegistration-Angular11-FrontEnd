import { Role } from './role';
import { Gender } from './gender';

export class User {
  id!: string;
  title!: string;
  firstName!: string;
  lastName!: string;
  emailId!: string;
  password!: string;
  role!: Role;
  gender!: Gender;
  isDeleting: boolean = false;
}
