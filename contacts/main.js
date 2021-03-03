//do + - : name , desc, # or email, and for each make a div with a random pfp.



let containerEL = document.getElementById("container");

let divCount = 0;

let contacts = [];

let imgArray = ["imgs/image1.jpg","imgs/image2.jpg","imgs/image3.jpg"];
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {

    if (event.keyCode === 13) {
        var contact = [prompt("Their name?"), prompt("Their phone number?"), prompt("A description of them?")]
        divCount++;
        contacts.push(contact);
        console.log(contacts);
    }

    if (event.keyCode === 46) {

    }
    contactHandler();
}

function divHandler(name, desc, number) {
    div = document.createElement("div");
    img = document.createElement("img");
    img.src= imgArray[randomInt(0,2)];
    containerEL.appendChild(div);
    div.classList.add("div");
    div.innerHTML = `${img} ${name}, ${desc} - ${number}`;
    console.log(div);
}



function contactHandler() {

    containerEL.innerHTML = "";



    for (let i = 0; i < contacts.length; i++) {

        divHandler(contacts[i][0], contacts[i][1], contacts[i][2]);
    }


}




function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);

}