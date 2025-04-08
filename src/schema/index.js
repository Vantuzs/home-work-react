import * as yup from 'yup'

export const REGISTER_SCHEMA = yup.object({
    firstName: yup.string().required('Это поле обязательное').min(2,'Frist name должно быть больше 2 символов').max(30,'Frist name должно быть меньше 30 символов'),
    lastName: yup.string().required('Это поле обязательное').min(2,'Last name должно быть больше 2 символов').max(30,'Last name должно быть меньше 30 символов'),
    email: yup.string().email().required('Это поле обязательное'),
    password: yup.string().required('Это поле обязательное').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null], 'Пароли не совпадают').required('Это поле обязательное')
});

export const LOGIN_SCHEMA = yup.object({
    email: yup.string().email().required('Это поле обязательное'),
    password: yup.string().required('Это поле обязательное').min(6,'Пароль должен быть больше 6 симоволов')
})