const goodValidate = values => {
    const errors = {};
    const requeredText = 'This field is mandatory';

    if (!values.name) 
        errors.name = requeredText;
    if (!values.senderName) 
        errors.senderName = requeredText;
    if (!values.senderEmail) 
        errors.senderEmail = requeredText;
    if (!values.body) 
        errors.body = requeredText;

    return errors;
}

export default goodValidate;