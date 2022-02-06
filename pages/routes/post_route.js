import React,{ useState } from "react";

const post = () => {
    const bodyEmail = document.querySelector("#email");
    const bodyMessage=document.querySelector("#message")
    bodyEmail.addEventListener("change", (e) => {
        setEmail(e.target.value)
    })
     bodyMessage.addEventListener("change", (e) => {
       setMessage(e.target.value);
     });
    const [email, setEmail] = useState("")
    const [message,setMessage]=useState("")
    const bodyFormData = new FormData();
    bodyFormData.append("email", email);
    bodyFormData.append("message", message);
    fetch("http://localhost:3004/feedbacks", {
        method: "POST",
        body: bodyFormData,
    });
    console.log("posted")
}
post();
let sendButton=document.querySelector("#postFeedback")
