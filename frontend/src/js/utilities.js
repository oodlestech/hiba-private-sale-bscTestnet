import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const errors = {};

export const isEmpty =(obj)=> {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const swalHandler =(icon, msg, type)=> {
    return(
        MySwal.fire(
            `${icon}`,
            `${msg}`,
            `${type}`
        )
    )
}

export const clearErrorHandler = () => {
   return errors = {};
//    // for enumerable and non-enumerable properties
//    for (const prop of Object.getOwnPropertyNames(obj)) {
//        delete obj[prop];
//    }
}

export const signupValidate = values => {
    
    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be greather than 8 letters' + values.password.length;
    } else if (/^[a-zA-Z0-9]+$/.test(values.email)) {
        errors.password = 'Password must be alpha-numeric';
    }
    return errors;
};

export const clubValidate = values => {
    const errors = {};
    // if (!values.clubLogo.name) {
    //     errors.clubLogo = 'Required';
    // } else if (!imageExtensions.includes(logoExtension)) {
    //     errors.clubLogo = 'Invalid image format (jpeg,jpg,png,gif) are expected';
    // } else if (values.clubLogo.size > 13631488) {
    //     errors.clubLogo = 'Logo size exceeded 13MB';
    // }

    if (!values.clubSlogan) {
        errors.clubSlogan = 'Required';
    }

    if (!values.phoneNo) {
        errors.phoneNo = 'Required';
    } else if (isNaN(values.phoneNo)) {
        errors.phoneNo = 'Phone number must be a number ';
    }
    return errors;
};


export const capitalizeFirstLetter = (str) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}
