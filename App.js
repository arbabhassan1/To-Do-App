const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");



function addtask() {
    if (input_box.value === '') {
        alert("You must write somethings!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = '';
    save_data()
}

list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save_data()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save_data()
    }
}, false);


function save_data() {
    localStorage.setItem("data", list_container.innerHTML);

}

function get_data(){
    list_container.innerHTML=localStorage.getItem("data");
}
get_data();


input_box.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        addtask();
    }
})