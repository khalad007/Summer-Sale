
let total = 0;

function handleClickBody(target) {
    const selectedItemContainer = document.getElementById("selected-item");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.append(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText = total.toFixed(2);

    document.getElementById("grandTotalHtml").innerHTML = total.toFixed(2);

    const purchaseBTN = document.getElementById("purchase-btn2");
    if (total > 0) {
        purchaseBTN.removeAttribute('disabled');
        purchaseBTN.style.backgroundColor = '#E527B2';
        }

        //...................
    const applyBTN = document.getElementById("btn-apply");
    if(total > 200) {
        applyBTN.removeAttribute('disabled');
        applyBTN.style.background = "#E527B2";
    }
}

function handleClickBody2(targets) {
    //eta discount
    const discount2 = targets.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[3].innerText.split(" ")[2];
    

    //eta total 
    
    const cartTotal = targets.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[1].innerText.split(" ")[3];
   // ETA hocche 20% discount
    const discount3 = parseInt(cartTotal) * 0.2; // 20% discount
    document.getElementById("discountHtml").innerText = discount3.toFixed(2);

    const finalPrice = targets.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[5].innerText.split(" ")[2];
    const grandPrice = parseInt(cartTotal) - discount3;
    document.getElementById("grandTotalHtml").innerHTML = grandPrice.toFixed(2);
    
    
    
}