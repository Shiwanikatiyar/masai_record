// fill in javascript code here
let form = document.querySelector("form")


form.addEventListener("submit", function(event) {
  
    event.preventDefault();

let name = document.getElementById("name");

let employeeID = document.getElementById("employeeID")

let department = document.getElementById("department")

let exp = document.getElementById("exp")

let email = document.getElementById("email")

let mbl = document.getElementById("mbl")

let tableBody = document.querySelector("table>tbody")

 
let record = JSON.parse(localStorage.getItem("record")) || []


function saveRecord(){

    localStorage.setItem("record", JSON.stringify(record));

}


let obj= {
    name : name.value,
    employeeID : employeeID.value,
    department : department.value,
    exp : exp.value,
    email : email.value,
    mbl : mbl.value
}

record.push(obj)

saveRecord()
showRecord(record)

// console.log(record);

})

function showRecord(arr){
    // console.log(arr)
    let tableBody = document.querySelector("table>tbody")
    tableBody.innerHTML = "";

    arr.forEach(function(ele,i){

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML= ele.name

        let td2 = document.createElement("td");
        td2.innerHTML= ele.employeeID

        let td3 = document.createElement("td");
        td3.innerHTML= ele.department

        let td4 = document.createElement("td");
        td4.innerHTML= ele.exp

        let td5 = document.createElement("td");
        td5.innerHTML= ele.email

        let td6 = document.createElement("td");
        td6.innerHTML= ele.mbl

        let td7 = document.createElement("td")
        td7.innerHTML ="Role"
        td7.classList.add("role");
        if(ele.exp>5){
            td7 = "Senior"
        }
        else if(ele.exp>=2 && ele.exp<=5){
            td7 = "Junior"
        }
        else if(ele.exp<=1){
            td7 = "fresher"
        }
        

        let td8 = document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.addEventListener("click", function(){
            handleDelete(i)
        })
        td8.append(btn)


        tr.append(td1, td2, td3, td4, td5, td6, td7, td8)


        tableBody.append(tr)

    })

}


function handleDelete(index){

    // console.log(index)

    record.splice(index,1)

    // record = record.filter(function(ele , i){
    //     return index !== i
    // })


    saveRecord()
    showRecord(record)
}


function saveRecord(){

    localStorage.setItem("record", JSON.stringify(record));

}


function loadRecord(){

    let storedvalue = JSON.parse(localStorage.getItem("record"))

    if(storedvalue){

        record = storedvalue 
        showRecord(record)
    }
    

}

loadRecord()



