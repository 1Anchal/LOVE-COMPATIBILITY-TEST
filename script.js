

function calculateLove() {
    
    var myName = document.getElementById("myName").value;
    var partnersName = document.getElementById("partnersName").value;
    var calculate = document.getElementsByClassName("calculate");
    
    var combinedName = myName.toLowerCase() + partnersName.toLowerCase();
    
    console.log(combinedName);

    
    let a=0;
    for(let i=0;i<combinedName.length;i++){
        if(combinedName[i]==="t"||combinedName[i]==="r"||combinedName[i]==="u"||combinedName[i]==="e"){
            a=a+1;
        }
    }
    let b=0;
    for(let i=0;i<combinedName.length;i++){
        if(combinedName[i]==="l"||combinedName[i]==="o"||combinedName[i]==="v"||combinedName[i]==="e"){
            b=b+1;
        }
    }

    


    let score=a.toString()+b.toString();
    console.log(score);
    var output = document.querySelector(".output");

    // Update the output based on the score
    if (score >= 89|| score <= 11 && score!=0) {
        if(score<=11){
            score=100-score;
        }
        output.innerText = `Your score is ${score}. You both are TRUE LOVERS and made for each other!!`;
        output.style.color = "green";
    } else if (score < 90 && score >= 60) {
        output.innerText = `Your score is ${score}. You both are compatible.`;
        output.style.color = "green";
    } else {
        output.innerText = `Your score is ${score}. You can find someone better.`;
        output.style.color = "red";
    }
}
document.querySelector('.calculate').addEventListener('click', calculateLove);
