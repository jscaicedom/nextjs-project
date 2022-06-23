export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string
  date_of_birth: string;
  employment: {
    title: string;
    key_skill: string;
  },
  address: {
    city: string;
    state: string
    country: string
  }
}