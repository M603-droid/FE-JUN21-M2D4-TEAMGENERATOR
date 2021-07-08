//adding names of team members 
let names = []
let button = document.getElementById('addbutton')
const appenChild = function (){
    let newChild= document.createElement('li')
    let userInput = document.getElementById('userInput')
    newChild.innerText = userInput.value
    let parent4Input = document.getElementById('names')
    parent4Input.appendChild(newChild)
    names.push(userInput.value)
    userInput.value = ''
}



button.addEventListener('click', appenChild)
let createbutton = document.getElementById('createbtn')

const suffle = function(n){
    let names= document.querySelectorAll('li')
      let myTeam = names[n]
    let teams = document.getElementById('teams')
    let teamsPlace = document.createElement('ol')
    let teamer = document.createElement('li')
teamer.innerText = myTeam.value



    teams.appendChild(teamsPlace).appendChild(teamer)

}

createbutton.addEventListener('click', suffle)
    
