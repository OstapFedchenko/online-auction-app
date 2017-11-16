const signupValidate = values => {
    const errors = {};
    const maxLength = 20;
    const minLength = 2;
    const requeredText = 'This field is mandatory';
    const lengthFieldText = `Length of this field should be more than ${minLength} and less than ${maxLength} characters`;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.firstName) 
        errors.firstName = requeredText;
    if (values.firstName != null && (values.firstName.length > maxLength || values.firstName.length < minLength)) 
        errors.firstName = lengthFieldText;
    
    if (!values.lastName) 
        errors.lastName = requeredText;
    if (values.lastName != null && (values.lastName.length > maxLength || values.lastName.length < minLength)) 
        errors.lastName = lengthFieldText;
    
    if (!values.email) 
        errors.email = requeredText;
    if (values.email != null && (values.email.length > maxLength + 15 || values.email.length < minLength)) 
        errors.email = lengthFieldText;
    if (values.email != null && !values.email.match(emailRegex)) 
        errors.email = 'Please enter a valid email adress';

    if (!values.password) 
        errors.password = requeredText;

    if (!values.confirmPassword) 
        errors.confirmPassword = requeredText;
    
    if(values.password != null && values.confirmPassword != null && values.password !== values.confirmPassword)
        errors.confirmPassword = 'Please confirm your password';

    return errors;
}

export default signupValidate;