function rps(x){
    var y = x[0].toLowerCase();
    var a = ["r", "p", "s"];
    var z= (Math.floor(Math.random() * a.length));
    if(y =="r" || y =="p" || y =="s"){
        if(y =="r"){
            if (z=="r"){
                alert("Rock vs Rock ...Tie");
            }else if(z =="p"){
                alert("Rock vs Paper...Loss");
            }else{
                alert("Rock vs Scissors...Win");
            }
        }else if (y =="p"){
            if (z=="r"){
                alert("Paper vs Rock ...Win");
            }else if(z =="p"){
                alert("Paper vs Paper...Tie");
            }else{
                alert("Paper vs Scissors...Loss");
            }
        }else if(y =="s"){
            if (z=="r"){
                alert("Scissors vs Rock ...loss");
            }else if(z =="p"){
                alert("Scissors vs Paper...Win");
            }else{
                alert("Scissors vs Scissors...tie");
            }
        }
    }
}
rps(prompt("R,P,S?",""));

console.log("kevin");
