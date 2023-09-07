
import { toast } from "./toast.js";

export const baseUrl = "http://localhost:3333";
export const green = '#168821'
export const red = '#df1545'

const token = localStorage.getItem("@petinfo:token");

const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

// Informações de usuário logado
export async function getCurrentUserInfo() {
  const request = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: requestHeaders,
  });
  const user = await request.json();

  return user;
}

// Listagem de posts
export async function getAllPosts() {
  const request = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    headers: requestHeaders,
  });
  const posts = await request.json();
  return posts;
}

// Desenvolva as funcionalidades de requisições 


export const login = async (loginBody) => {
  const loginUser = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginBody)

  })
    .then(async (res) => {
      const resConvert = await res.json()

      localStorage.setItem("@petinfo:token", resConvert.token)

      if (res.ok) {
        toast('login realizado com sucesso', green)

        setTimeout(() => {
          location.replace('./src/pages/feed.html')
        }, 1000)

        return resConvert

      } else {
        toast('email ou senha invalida, tente novamente.', red)
      }
    })
  return loginUser
}

export const creatUser = async (cadastro) => {
  console.log(cadastro)
  const user = await fetch(`${baseUrl}/users/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(cadastro)
  })
    .then(async (res) => {
      if (res.ok) {
        const resConvert = await res.json()
        toast('Sua conta foi criada com sucesso!', green)

        setTimeout(() => {
          location.replace('../../index.html')

        }, 1000)

        return resConvert

      } else {
        toast('Dados invalidos', red)
      }
    })
  return user
}

export const creatPost = async (bodyData) => {
  const creat = await fetch(`${baseUrl}/posts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(bodyData)
  }).then((res) => {
    const resConvert = res.json()
    if (res.ok) {
      return resConvert
    } else {
      toast(resConvert.message, red)
    }
    return resConvert
  })
  return creat
}





// const deleteUser = async (id) => {
//   const deleteusers = await fetch(`${baseUrl}/posts/${id}`, {
//     method: 'DELETE'
//   }).then((res) => {
//     const resConvert = res.json()
//     if (res.ok) {
//       return resConvert
//     }
//   })
//   deleteusers
// }