export const isErrors = (errors) => {
    if(errors == undefined || errors == null){
        return false;
    }
    return true;
}

export const getMainError = (errors) => {
    return errors[0]['message'].split(' ')[1];
}

export const getErrors = (errors) => {
    if(isErrors(errors)){
        return getMainError(errors);
    }
    return null;
}