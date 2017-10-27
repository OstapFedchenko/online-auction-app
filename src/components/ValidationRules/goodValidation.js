const goodValidate = values => {
    const errors = {};
    const maxLength = 20;
    const minLength = 2;
    const requeredText = 'This field is mandatory';
    const lengthFieldText = `Length of this field should be more than ${minLength} and less than ${maxLength} characters`;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.name) 
        errors.name = requeredText;
    if(values.name != null && (values.name.length > maxLength || values.name.length < minLength))
        errors.name = lengthFieldText;

    if (!values.senderName) 
        errors.senderName = requeredText;
    if(values.senderName != null && (values.senderName.length > maxLength || values.senderName.length < minLength))
        errors.senderName = lengthFieldText;

    if (!values.senderEmail) 
        errors.senderEmail = requeredText;
    if(values.senderEmail != null && (values.senderEmail.length > maxLength || values.senderEmail.length < minLength))
        errors.senderEmail = lengthFieldText;
    if(values.senderEmail != null && !values.senderEmail.match(emailRegex))
        errors.senderEmail = 'Please enter a valid email adress';
    if (!values.body) 
        errors.body = requeredText;

    return errors;
}

export default goodValidate;