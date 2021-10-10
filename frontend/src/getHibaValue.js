function getHibaValue(totalUSD) {
    var result = totalUSD ;
    result = parseInt(result.value / 0.3);
    // return result.toString();
    return result;
}

export default getHibaValue;