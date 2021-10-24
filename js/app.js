//html elementlerini seçiyoruz 
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let btnDOM = document.querySelector("#liveToastBtn") //ekle butonu 
let lilength = document.getElementsByTagName("li")

for (let i=0; i < lilength.length; i++){  //elemanları sırayla dolaşmasını sağlıyoruz 
    let closeBtn = document.createElement("span") //close butonu span etiketi içinde olduğu için yeni bir span oluşturduk
    closeBtn.textContent = "\u00D7";  //çarpı işareti oluşturduk
    closeBtn.classList.add("close"); //css dosyasındaki özelliklerin uygulanması için close classını ekledik 
    closeBtn.onclick = removeButton; //bastığımızda ögenin silinmesini sağladık 
    lilength[i].append(closeBtn);  //çarpı işaretini ekledik
    lilength[i].onclick = check;
}


function check() {
    this.classList.toggle("checked")
}

function removeButton() {
    this.parentElement.remove()
}

btnDOM.addEventListener('click', add)  //ekle butonuna batığımızda eleman eklemesini söyledik 

function add() {
    if(taskDOM.value == ""){
        $(".error").toast("show")
    }
    else{
        $(".success").toast("show")
        let liDOM = document.createElement("li")  // yeni bir li elementi eklediğimizi söyledik
        listDOM.append(liDOM)  // yeni li elementimizi listenin sonuna eklememizi istediğimizi söyledik 
        liDOM.innerHTML = task.value
        taskDOM.value = ""

        liDOM.onclick = check;
        let closeBtn = document.createElement("span")
        closeBtn.textContent = "\u00D7";
        closeBtn.classList.add("close");  
        closeBtn.onclick = removeButton;
        liDOM.append(closeBtn)
        listDOM.append(liDOM)
        inputElement.value = ""

    }
    
}

