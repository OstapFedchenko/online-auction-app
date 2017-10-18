const categoryValidate = values => {
    const errors = {};
    
    if (!values.name) 
        errors.name = 'This field is mandatory';
    
    return errors;
}

export default categoryValidate;