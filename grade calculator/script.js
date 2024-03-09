var marks=0;
var total=0;

let gmarks = document.getElementsByClassName("marks");
let gtotal = document.getElementsByClassName("total");

let button = document.getElementById("button");
let result = document.getElementById("res");

function CalcMarks(){
        for(let i=0;i<6;i++){
                if(gmarks[i].value === "" || gtotal[i].value === "" || parseInt(gmarks[i].value)>parseInt(gtotal[i].value)){
                        result.innerHTML = "Please Input Marks Correctly"
                        return;
                }
                
                marks+=parseInt(gmarks[i].value);
               
                total+= parseInt(gtotal[i].value);
        }
        let res = marks/total * 100 ;

        result.innerHTML = "Yours Percentage is " + Math.round(res) + "%";
}

button.addEventListener("click" , ()=>{
        CalcMarks();
})