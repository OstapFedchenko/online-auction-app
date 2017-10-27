const categoryValidate = values => {
    const errors = {};
    const maxLength = 15;
    const minLength = 2;

    if (!values.name) 
        errors.name = 'This field is mandatory';
    if(values.name != null && (values.name.length > maxLength || values.name.length < minLength))
        errors.name = `Length of Category Name should be more than ${minLength} and less than ${maxLength} characters`;
    
    return errors;
}

export default categoryValidate;