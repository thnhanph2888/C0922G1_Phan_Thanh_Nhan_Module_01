function cood() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    if (from == "USD" && to == "VietNam"){
        result = "Result: " +  (amount * 23000) +" VND" ;
    } else if (from == "VietNam" && to == "USD"){
        result = "Result: " + (amount / 23000) +" $";
    } else if (from == "VietNam") {
        result = "Result: " + amount + " VND";
    } else {
        result = "Result: " +  amount + " $"
    }
    document.getElementById("resultt").innerHTML= result;
}