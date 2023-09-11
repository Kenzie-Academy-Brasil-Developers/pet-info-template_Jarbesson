import { renderAllPosts } from "./render.js";
import { createPost } from "./requests.js";

function showUserMenu() {
  const userAction = document.querySelector(".user__image");
  const menu = document.querySelector(".user__logout");
  const button = document.querySelector('.logout__button')

  console.log(userAction, "aaa")
  if (userAction) {

    userAction.addEventListener("click", (e) => {
      menu.classList.toggle("hidden");
    });
  }
  button?.addEventListener('click', () => {
    localStorage.removeItem("@petinfo:token")
    location.replace('../../index.html')
  })
}



function main() {
  // Adiciona os eventos de click ao menu flutuante de logout
  showUserMenu();
  // Renderiza todos os posts no feed (render.js)
  renderAllPosts();
}

main();



export const createModal = (post) => {
  console.log(post)

  const modal = document.querySelector('.modal')
  modal.innerHTML = ""

  const div = document.createElement('div')
  const div2 = document.createElement('div')
  const img = document.createElement('img')
  const titleName = document.createElement('h2')
  const smallDate = document.createElement('small')
  const titlePost = document.createElement('h2')
  const paragraphPost = document.createElement('p')
  const closeX = document.createElement('p')


  img.classList.add('item__image')
  img.src = post.user.avatar

  titleName.classList.add('name__user')
  titleName.innerText = post.user.username

  smallDate.classList.add('small__date')
  smallDate.innerText = post.createdAt

  titlePost.classList.add('title__post')
  titlePost.innerText = post.title

  paragraphPost.classList.add('paragraph__post')
  paragraphPost.innerText = post.content

  closeX.classList.add('close')
  closeX.innerText = 'X'

  div.classList.add('container')
  div2.classList.add('userHeaderinfo')

  div.appendChild(div2)

  div2.appendChild(img)
  div2.appendChild(titleName)
  div2.appendChild(smallDate)

  div.appendChild(titlePost)
  div.appendChild(paragraphPost)
  div.appendChild(closeX)

  modal.appendChild(div)

  modal.showModal()

}



const showPublish = () => {
  const modal = document.querySelector('.modal__second')
  const button = document.querySelector('#user__newpost')

  button?.addEventListener('click', () => {
    modal.showModal()

  })


}
showPublish()



const handlePost = () => {
  const modal = document.querySelector('.modal__second')

  const inputs = document.querySelectorAll('.publish')
  const button = document.querySelector('.buttonToPost')
  const buttonExit = document.querySelector(".cancel")


  button?.addEventListener('click', (e) => {
    e.preventDefault()
    const saveInputs = {}

    inputs.forEach((input) => {
      saveInputs[input.name] = input.value
    })
    createPost(saveInputs)
    modal.close()

  })
  buttonExit.addEventListener('click', () => {
    modal.close()
  })
}
handlePost()







