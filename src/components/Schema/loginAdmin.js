import * as yup from 'yup';

export const adminLoginSchema = yup.object({
    adminId: yup.string().max(15, 'Matric Number must not exceed 13 characters').required("required"),
    password: yup.string().required('Password is required'),
});