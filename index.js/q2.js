function toLowerCaseChar(char){
    const lower =
      "abcdefghijklmnopqrstuvwxyz";
    const upper =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<upper.length;i++){
      if(upper[i]===char){
        return lower[i];
      }
    }
  }
  function toLowerCaseWord(word){
    let newWord ="";
    for(let i=0;i<word.length;i++){
      newWord +=
        toLowerCaseChard(word[i]);
    }
    return newWord;
  }
  function toLowerWordsArray(arr){
    let newArr= [];
    for(let i=0;i<arr.length;i++){
      function toLowerCaseWordsArray(arr){
        let newArr=[];
        for (let i=0;i<arr.length;i++){
          newArr.push(toLowerCaseWord(arr[i]));
        }
        return newArr;
      }
      const arr1=["MA","SA","I","SCH","OOL"];
      console.log(toLowerCaseWordsArray(arr1));
    }}