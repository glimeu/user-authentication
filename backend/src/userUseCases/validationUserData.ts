import * as yup from 'yup';
import { UserSignup } from './middlewareUserValidation';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(3),
});

export async function validity({name, email, password}: UserSignup): Promise<any> {
  return schema.isValid({
    name,
    email,
    password
  })
}
