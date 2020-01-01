import {team} from './teamData.js';


let list = document.getElementById("teamMemberList")
list.addEventListener("load", showTeam());


function newDOMElement(type, text) {
  let el = document.createElement(type)
  if(text) {
    const t = document.createTextNode(text)
    el.appendChild(t)
  }
  return el
}

function newMemberEntry(name, tasks, imgUrl) {
  // create a dom part of the following form
  /*
  <li>
      <h3>key</h3>
      <img src="{{ placeholderImg | imgUrl }}" alt="key">
      <p>tasks</p>
  </li>
  */

  let li = newDOMElement("li")

  let img = document.createElement("img")
  img.src = imgUrl

  li.appendChild(newDOMElement("h3", name))
  li.appendChild(img)
  li.appendChild(newDOMElement("p", tasks))

  return li
}

function showTeam() {
  Object.entries(team).map(([key, value]) => {
    // extract name and tasks at CoderDojo and image url from db object
    const name = key
    const tasks = value.tasks
    const placeholderImg = "../assets/img/img.png"
    const imgUrl = (value.imgUrl) = value.imgUrl : placeholderImg

    return newMemberEntry(name, tasks, imgUrl)
  }).forEach(child => list.appendChild(child))
}
