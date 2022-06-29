function powersOfTwo(n){
    let arr = [];
    for (let i = 0; i <= n; i++) {
      let num = Math.pow(2,i);
      arr.push(num);
    }
    return arr
  }