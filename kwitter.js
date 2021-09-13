function adduser() {
    nameany= document.getElementById("").value ;
    localStorage.setItem("username" , nameany);
    window.location= "kwitter_room.html";
}