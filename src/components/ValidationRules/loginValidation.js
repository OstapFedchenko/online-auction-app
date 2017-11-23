const loginValidate = values => {
    const errors = {};
    const maxLength = 20;
    const minLength = 2;
    const requeredText = 'This field is mandatory';
    const lengthFieldText = `Length of this field should be more than ${minLength} and less than ${maxLength} characters`;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email) 
        errors.email = requeredText;
    if (values.email != null && (values.email.length > maxLength + 15 || values.email.length < minLength)) 
        errors.email = lengthFieldText;
    if (values.email != null && !values.email.match(emailRegex)) 
        errors.email = 'Please enter a valid email adress';

    if (!values.password) 
        errors.password = requeredText;

    return errors;
}

export default loginValidate;