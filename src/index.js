module.exports = function reverse (n) {
    let modulN = Math.abs(n);
    let strModulN = `${modulN}`;
    let reversStrModulN = Number(strModulN.split("").reverse().join(""));
    return reversStrModulN;
}
