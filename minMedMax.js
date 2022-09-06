
const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let max,med,min
   
  if(n1>n2 && n1>n3){
    max=n1
    if(n2>n3){
        med=n2
    }else 
        min=n3
        

  }else if (n2>n3 && n2>n1){
    max=n2
    if(n3>n1){
        med=n3
    }else
       min=n1
  }else if (n3>n1 && n3>n2){
    max = n3
    if(n1>n2){
     med = n1
    }else
         min=n2
  }
}
(minMedMax(5,1,2))

module.exports = minMedMax
