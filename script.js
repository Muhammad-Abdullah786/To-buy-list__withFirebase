import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";// the add is the funtion i made in funtion.js
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-dataBase.js";// the add is the funtion i made in funtion.js

const appSetting ={
    dataBaseUrl:"https://add-product-b6e2a-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
let app = initializeApp(appSetting)
let dataBase = getDatabase(app)
console.log(app);




let button = document.getElementById('btn')
let userInput = document.getElementById('usrInput')

button.addEventListener('click', function(){
    console.log('clicked', userInput.value);
})

