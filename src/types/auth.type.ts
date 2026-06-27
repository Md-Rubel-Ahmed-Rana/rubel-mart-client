export type ISignupPayload = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type ICurrentUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  is_verified: boolean;
  phone: null;
  role: string;
  status: string;
  created_at: string;
  updated_at: string;
};
