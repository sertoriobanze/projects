let open= document.getElementById("contact")
let dialog = document.getElementById("modal")
let close = document.getElementById("close")

open.onclick = function() {
   dialog.showModal();
dialog.classList.toggle("showdialog")
}
close.onclick= function() {
    dialog.close();
 dialog.classList.toggle("showdialog")
 }

