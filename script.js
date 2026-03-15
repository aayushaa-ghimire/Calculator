
    let topcalc = document.getElementById("topcalc");
    let para = document.getElementById("para");
    let bottomcalc = document.getElementById("bottomcalc");
    let bn1 = document.getElementById("bn1");
    let bn2 = document.getElementById("bn2");
    let bn3 = document.getElementById("bn3");
    let bn4 = document.getElementById("bn4");
    let bn5 = document.getElementById("bn5");
    let bn6 = document.getElementById("bn6");
    let bn7 = document.getElementById("bn7");
    let bn8 = document.getElementById("bn8");
    let bn9 = document.getElementById("bn9");
    let bn0 = document.getElementById("bn0");
    let bna = document.getElementById("bna");
    let bns = document.getElementById("bns");
    let bnm = document.getElementById("bnm");
    let bnd = document.getElementById("bnd");
    let bne = document.getElementById("bne");
    let bnc = document.getElementById("bnc");

    let input = [];

    bn1.addEventListener("click", function(){
        input.push("1");
        para.innerHTML = input.join("");
    })
    bn2.addEventListener("click", function(){
        input.push("2");
        para.innerHTML = input.join("");
    })
    bn3.addEventListener("click", function(){
        input.push("3");
        para.innerHTML = input.join("");
    })
    bn4.addEventListener("click", function(){
        input.push("4");
        para.innerHTML = input.join("");
    })
    bn5.addEventListener("click", function(){
        input.push("5");
        para.innerHTML = input.join("");
    })
    bn6.addEventListener("click", function(){
        input.push("6");
        para.innerHTML = input.join("");
    })
    bn7.addEventListener("click", function(){
        input.push("7");
        para.innerHTML = input.join("");
    })
    bn8.addEventListener("click", function(){
        input.push("8");
        para.innerHTML = input.join("");
    })
    bn9.addEventListener("click", function(){
        input.push("9");
        para.innerHTML = input.join("");
    })
    bn0.addEventListener("click", function(){
        input.push("0");
        para.innerHTML = input.join("");
    })
    bna.addEventListener("click", function(){
        input.push("+");
        para.innerHTML = input.join("");
    })
    bns.addEventListener("click", function(){
        input.push("-");
        para.innerHTML = input.join("");
    })
    bnm.addEventListener("click", function(){
        input.push("*");
        para.innerHTML = input.join("");
    })
    bnd.addEventListener("click", function(){
        input.push("/");
        para.innerHTML = input.join("");
    })

    bne.addEventListener("click", function(){
    let exp = input.join("");
    let ans = eval(exp);
    para.innerHTML = ans;
})

    bnc.addEventListener("click", function() {
        input = [];
        para.innerHTML = "";
    });
