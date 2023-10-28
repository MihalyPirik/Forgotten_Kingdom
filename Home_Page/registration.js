let email,password
import { registration } from "../Database"


document.querySelector('form').submit(()=>{
    email=document.querySelectorAll('input')[0].innerText
    password=document.querySelectorAll('input')[1].innerText;
    console.log(email)
    console.log(password)
    registration(email,password)}
)

