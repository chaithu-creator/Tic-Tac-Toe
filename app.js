let boxes = document.querySelectorAll(".box")
let turnO=true;
let newbtn=document.querySelector("#new-btn");
let msgcontain=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let reset= document.querySelector("#reset")
let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O"; 
            turnO=false;
        }else{
            box.innerText="X"; 
            turnO=true;
        }
        box.disabled=true;
        checkWin();
    })
})
const rest=()=>{
    turnO=true;
    enableBtn();
    msgcontain.classList.add("hide");

}

const showwinner=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontain.classList.remove("hide");
    disableBtn();
}
const showTie=()=>{
    msg.innerText=`It was a TIE `;
    msgcontain.classList.remove("hide");
    disableBtn();
}
const disableBtn =()=>{
    for(btns of boxes){
        btns.disabled=true;
    }
}

const enableBtn =()=>{
    for(btns of boxes){
        btns.disabled=false;
        btns.innerText="";
    }
}
const checkWin =()=>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 && pos1===pos2 && pos2===pos3){
            console.log(" Congratulations",pos1);
            showwinner(pos1);
            return;
        }
    }

    let boardFilled=true;
    for(let box of boxes){
        if(box.innerText==""){
            boardFilled=false;
            break;
        }
    }

    if(boardFilled){
        showTie();
    }
}

newbtn.addEventListener("click",rest);
reset.addEventListener("click",rest);