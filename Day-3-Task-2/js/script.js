function reqListener() {
    let arr=JSON.parse(this.responseText);
    for( let ind in arr)
        {
            console.log(arr[ind].flags.png);
        }
    
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  