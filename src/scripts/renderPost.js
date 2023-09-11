import { createModal } from "./feed.js";
import { renderPostHeader } from "./render.js";

// Renderiza um post
export async function renderPost(post) {
    const postContainer = document.createElement("article");
    postContainer.classList.add("post");

    const postTitle = document.createElement("h2");
    postTitle.classList.add("post__title", "text1", "bolder");
    postTitle.innerText = post.title;

    const postContent = document.createElement("p");
    postContent.classList.add("post__content", "text3");

    const postHeader = await renderPostHeader(post);

    postContent.classList.add("post__content--feed", "text3");
    postContent.innerText = post.content;

    const openButton = document.createElement("a");
    openButton.classList.add("post__open", "text3", "bold");
    openButton.innerText = "Acessar publicação";
    openButton.dataset.id = post.id;

    openButton.addEventListener('click', () => {
        createModal(post);
    });

    postContainer.append(postHeader, postTitle, postContent, openButton);

    return postContainer;
}
