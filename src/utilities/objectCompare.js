export default function objectCompare(obj1, obj2) {
  if ((obj1 === null || obj2 === null) && obj1 !== obj2) return false;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  keys1.every((k) => {
    return true;
  });
  keys2.every((k) => {
    return true;
  });

//   return keys1.every((key) => {
//     if(typeof(obj1[key])===Object && typeof(obj2[key])===Object ){
//        return objectCompare(obj1[key],obj2[key])
//     }
//     return obj1[key] === obj2[key];
//   });

}
