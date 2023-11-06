let upload = document.getElementById("upload");
let img = document.getElementById("img");
let icon = document.getElementById("icon");
let icon2 = document.getElementById("icon2");
let h3 =document.querySelector(".h3")
let dropArea = document.getElementById("drop-area");
let h2Text = document.querySelector(".h2")
let file;
upload.addEventListener("change", function(){
    file = this.files[0];
    showFile();
})
dropArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
dropArea.classList.add("active");
h2Text.textContent="Relese To Upload File or";
})
dropArea.addEventListener("dragleave",()=>{
    dropArea.classList.remove("active");
h2Text.textContent="Drag & Drop Files or ";
})
dropArea.addEventListener("drop",(event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
})
function showFile(){
    let fileType=file.type;
    let validExtensions=["image/jpeg","image/jpg","image/png"];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL =fileReader.result;
            let imgTag =`<img src="${fileURL}"alt="">`;
            dropArea.innerHTML = imgTag
            icon.style.display="none"
            icon2.style.display="none"
            h3.style.display="none"
            img.style.width="250px"
            img.style.height="170px"
        }
        fileReader.readAsDataURL(file)
    }else{
        icon.style.display="none"
        icon2.style.display="block"
        h3.style.display="block"
        img.style.display="none"
        dropArea.classList.remove("active");
    }
}
