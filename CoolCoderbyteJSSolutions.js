function AdditivePersistence(num) { 
  var c = 0;
  var n = num.toString();
  while (n.length > 1) {
    c += 1;
    n = eval(n.split('').join('+')).toString();
  }
  return c;
}
AdditivePersistence(readline());           


function MultiplicativePersistence(num) { 
  var count = 0;
  var num = num.toString();
  while (num.length > 1){
  	count ++;
    num = eval(num.split('').join('*')).toString();
  }
  return count;         
}
   


var ArrayAddition = function(arr) {
    var largest = arr.sort(function(a,b){return a - b}).pop();
    var min = 2;
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < arr.length; i++) {
        fn(i, arr, [], all);
    }
    all.push(arr);
    for(p=0; p<all.length; p++){
     var total = 0;
      for(m=0; m<all[p].length; m++){
       total += all[p][m];
      }
      if(total === largest){
        return "true";
      }
    }
    return "false";
}



var combine = function(a) {
  var fn = function(n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (var j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  }
  var all = [];
  for (var i=0; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
}


function MultipleBrackets(str) { 
  var pCount = 0;
  var sCount = 0;
  var count = [0,0];
  for(i=0; i<str.length; i++){
   if(str[i] === '('){
    counter = i;
    tempCount = 0;
    while(str[counter] !== ')' && (counter < str.length) && str[counter] !== '('){
     if(str[counter] === '['){
      tempCount += 1;
     };
     if(str[counter] === ']'){
      tempCount -= 1;
     };
     counter ++;
    };
    if(tempCount !== 0){
     return 'hi';
    };
   pCount ++;  
   };
   if(str[i] === '['){
    counter = i;
    tempCount = 0;
    while(str[counter] !== ']' && (counter < str.length) && str[counter] !== '['){
     if(str[counter] === '('){
      tempCount += 1;
     };
     if(str[counter] === ')'){
      tempCount -= 1;
     };
     counter ++;
    };
    if(tempCount !== 0){
     return 0;
    };
   sCount ++;  
   };
   if(str[i] === ')'){
    pCount --;
    if(pCount < 0){
     return 0;
    }
    count[0] = count[0] + 1;
   };
   if(str[i] === ']'){
    sCount --;
    if(sCount < 0){
     return 0;
    }
    count[1] = count[1] + 1;
   };
  };
  if(pCount === 0 && sCount === 0){
   if(count[0] !== 0 || count[1] !== 0){
   	return 1 + ' ' + (count[0] + count[1]) 
   }
   else{
    return 1;
   }
  }
  else{
   return 0; 
  }         
};

