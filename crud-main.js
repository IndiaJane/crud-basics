
//Grabbing the ID elements and storing them in variables.
let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

//target the form by adding an EventListener called "submit" because the button we are using a submit button.

//because the form refreshes automatically. So we'll prevent this by using a "prevent default".
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button clicked");
    //invoke it
    formValidation();
});

//grabbing the innerHTML of msg
let formValidation = () => {
    //if the input value is blank, show failure msg.
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank"
        console.log("failure");
    }
    //if not blank, show success and blank error msg.
    else {
        console.log("success");
        msg.innerHTML = ""
        //after success, accept and push data into object by invoking the function 'acceptData'
        acceptData();
    }
};

//Empty object
let data = {};

let acceptData = () => {
    //push data/value into the empty object
    data["text"] = input.value;
    console.log(data);
    //invoking the function to push the data in posts
    createPost()
};

let createPost = () => {
    //pushing the data to the posts. Putting a '+' keeps the previous data
    posts.innerHTML +=
        //template to post the data on different posts and invoking the delete function.
        `<div>
    <p>${data.text}</p>
    <span class="options">
        <img onclick="editPost(this)" src="/crud-basics/images/pen-to-square-solid.png" class="edit-button">

        <img onclick ="deletePost(this)" src="/crud-basics/images/trash-solid.png" class="trash-button">
    </span>
</div>`;
    resetForm()
};

let resetForm = () => {
    input.value = ""
};

//function to delete post
let deletePost = (e) => {
    //deleting the imgs, <spa>, <div>
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}