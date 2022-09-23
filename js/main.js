const list=[1,2,3];
const target=list.reduce((sum, current, index)=>sum * current, 1);
console.log(target);
