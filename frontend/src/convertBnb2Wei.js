function convertBnb2Wei(bnbValue) {
    var result = bnbValue;
    result =  parseFloat(result.value);
    result = result * 1000000000000000000;
    return result.toString();
}

export default convertBnb2Wei;

