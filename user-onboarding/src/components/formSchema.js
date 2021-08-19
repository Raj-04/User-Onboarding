import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .min(2)
    .required("Please enter a name "),
    email: yup
    .string()
    .email()
    .required("Please enter a valid email address"),
    password: yup
    .string()
    .min(4)
    .max(10)
    .required("Please enter a valid password"),
    role: yup
    .string()
    .required('Please select a role.')
    .oneOf(['Engineer', 'Developer', 'Designer'], 
    'You must select a role from the list.'),
    tosCheck: yup
    .boolean()
    .oneOf([true], "Please read and accept the Terms of Service")
}) 