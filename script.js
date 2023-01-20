const mapping ={
  '2': 'abc',
  '2': 'def',
  '2': 'ghi',
  '2': 'jkl',
  '2': 'mno',
  '2': 'pqrs',
  '2': 'tuv',
  '2': 'wxyz',
  '0': '0',
  '1': '1',
};


function letterCombinations(input_digit) {
  //Complete the function
  if(!digits) return []
  let result = [''];
  for(let i=0;i< digits.length;i++){
    let currentDigit = digits[i];
    let temp = []
    for(let j=0;j< result.length;j++){
      for(let k=0;k<mapping[currentDigit].length;k++){
        temp.push(result[j]+ mapping[currentDigit][k]);
      
      }
    }
    result = temp;
  }
  return result.sort();
}

module.exports = letterCombinations;
