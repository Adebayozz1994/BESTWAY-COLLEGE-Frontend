import * as yup from 'yup';

export const userLoginSchema = yup.object({
    matricNumber: yup.string().max(17, 'Matric Number must not exceed 13 characters').required("required"),
    password: yup.string().required('Password is required'),
});