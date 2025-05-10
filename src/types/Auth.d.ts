export interface UserState {
  user: User[] | null;
  token: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  tenantId?: string;
  branchId?: string;
  password: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface LoginPayLoad {
  email: string;
  password: string;
}
export interface LoginResponse {
  message: string;
  token: string;
  user: User[];
}
