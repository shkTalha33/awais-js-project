var user = sessionStorage.getItem("username")
document.getElementById('naam').innerHTML =  "<h3>Welcome Mr."+ user + "!"+"<h3/>"
document.getElementById('inputClear').onclick = function(){
    document.getElementById('input1').value = ""
}


const cities =['Faisalbad' , 'Karachi','Quetta','Peshawar','Multan','Islamabad','Rawalpindi']

    
document.getElementById('print').onclick =()=>{
    document.getElementById('show').innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('show').innerHTML 
        += num + ") " + cities[i] + "<br />" 
    }
}
document.getElementById('add').onclick = () =>{
    document.getElementById('show').innerHTML = ""
   var inputVal = document.getElementById('input1').value
    if (!inputVal) {
        alert('Please Fill Input Field')
        return;
    } else {
        
        cities.push(inputVal)
        document.getElementById('show').innerHTML = "<p>Your City "+"<span style='color:red'>"+inputVal+"</span>"+" Is Added </p>"
    }
}
document.getElementById('check').onclick =()=>{
   let inputVal2 = document.getElementById('input1').value
   for (let i = 0; i < cities.length; i++) {
    const checking = cities[i];
  
       if (!inputVal2 ) {
        document.getElementById('show').innerHTML = "<span style='color:red; font-size:23px;'>please Enter City Name</span>"
       } else {
        if (inputVal2 == checking) {
            document.getElementById('show').innerHTML = "Your City is "+"<span style='color:green;font-size:23px;'>"+inputVal2+"</span> present the in list"
        } else {
            document.getElementById('show').innerHTML = "Your City is "+"<span style='color:red; font-size:23px;'>"+inputVal2+"</span> not the in list"
        }
       }
    
    
   }
}















document.getElementById('outputClear').onclick =() =>{
    document.getElementById('show').innerHTML = ""
}