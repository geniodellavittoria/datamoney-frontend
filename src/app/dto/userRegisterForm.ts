export interface UserRegisterForm {
  username: string;
  password: string;
  role: 'doctor' | 'patient' | 'buyer';
}
