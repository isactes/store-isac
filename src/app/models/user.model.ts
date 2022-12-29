export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    rol: 'custumer' | 'admin';
  }

  export interface CreateUserDTO extends Omit<User, 'id'> {}
