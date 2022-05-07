document.querySelector("#newArrivals").addEventListener("click",newArrival);        
document.querySelector("#designers").addEventListener("click",newArrival);
document.querySelector("#clothing").addEventListener("click",newArrival);
document.querySelector("#shoes").addEventListener("click",newArrival);
document.querySelector("#bags").addEventListener("click",newArrival);
document.querySelector("#accessories").addEventListener("click",newArrival);
document.querySelector("#jewellery").addEventListener("click",newArrival);
document.querySelector("#vacation").addEventListener("click",newArrival);
document.querySelector("#sale").addEventListener("click",newArrival);
function newArrival(ele){
    console.log(ele.target.innerText)
 
        window.location.href="newarrivals.html"

}


//category wise data storage




var items=JSON.parse(localStorage.getItem("cartDatas"));
document.querySelector("#cartBagItens").innerText=items.length;
