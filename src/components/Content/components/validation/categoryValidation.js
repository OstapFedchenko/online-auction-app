const categoryValidate = values => {
    const errors = {};
    
    if (!values.name) 
        errors.name = 'Fild Name is mondatory';
    
    return errors;
}

export default categoryValidate;