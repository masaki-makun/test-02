const capitalize=str=>str.replace(/(^\w{1})|(\s+\w{1})/g,match=>match.toUpperCase());
const result=capitalize("obake");
console.log(result);
