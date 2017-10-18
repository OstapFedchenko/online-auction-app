const goodValidate = values => {
    const errors = {};

    if (!values.name) 
        errors.name = 'Fild Name is mondatory';
    if (!values.senderName) 
        errors.senderName = 'Fild Name is mondatory';
    if (!values.senderEmail) 
        errors.senderEmail = 'Fild Name is mondatory';
    if (!values.body) 
        errors.body = 'Fild Name is mondatory';


    return errors;
}

export default goodValidate;