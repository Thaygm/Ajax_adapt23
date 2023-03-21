/*document.addEventListener('DOMContentLoaded', function() {
    const nameTAG = document.querySelector('#name');
    const usernameTAG = document.querySelector('#username');
    const avatarTAG = document.querySelector('#avatar');
    const reposTAG = document.querySelector('#repos');
    const followersTAG = document.querySelector('#followers');
    const followingTAG = document.querySelector('#following');
    const linkTAG = document.querySelector('#link');


    fetch('https://api.github.com/users/Thaygm')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameTAG.innerText = json.name;
        usernameTAG.innerText = json.login;
        reposTAG.innerText = json.public_repository;
        followersTAG.innerText = json.followers;
        followingTAG.innerText = json.following;
        avatarTAG.src = json.avatar_link;
        linkTAG.href = json.html_link;

        
    })
})*/
    

$(document).ready(function() {

        const nameTAG = document.querySelector('#name');
        const usernameTAG = document.querySelector('#username');
        const avatarTAG = document.querySelector('#avatar');
        const reposTAG = document.querySelector('#repos');
        const followersTAG = document.querySelector('#followers');
        const followingTAG = document.querySelector('#following');
        const linkTAG = document.querySelector('#link');

    fetch('https://api.github.com/users/Thaygm')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function (json) {
        nameTAG.innerText = json.name;
        usernameTAG.innerText = json.login;
        reposTAG.innerText = json.public_repos;
        followersTAG.innerText = json.followers;
        followingTAG.innerText = json.following;
        avatarTAG.src = json.avatar_url;
        linkTAG.href = json.html_url;
    })
})

