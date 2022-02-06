
const formVisibility = () => {
    let form = document.querySelector("form").style
    let feedbackBtn=document.querySelector("#feedback-heading")
    feedbackBtn.addEventListener("click", () => {
        form.visibility = "visible";
    })
}
formVisibility()