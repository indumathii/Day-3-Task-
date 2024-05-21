function reqListener() {
    let arr=JSON.parse(this.responseText);
    
    for( let ind in arr)
        {
            console.log(arr[0].name.common);
            console.log(arr[0].region);
            console.log(arr[0].subregion);
            console.log(arr[0].population);
        }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  