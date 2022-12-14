const form = document.getElementById('github-form');//form to submit search

const nameSearch = document.getElementById('search'); //actual search value

const UserResult = document.getElementById('user-list'); // ul for username results

const repoValue = document.getElementById('repos-list'); // ul for repo results


document.addEventListener('DOMContentLoaded', form.addEventListener('submit',usersSearchResult))


//finds users when search is submitted 
function usersSearchResult(e){
    e.preventDefault();

//resets page before new search results are entered
    repoValue.innerHTML=''
    UserResult.innerHTML=''
    fetch(`https://api.github.com/search/users?q=${nameSearch.value}`)
    .then(resp => resp.json())
    .then(data  => {
        
//Incase no user is found matching submitted Username
        if(data.total_count === 0){
            alert(`No users named : ${nameSearch.value}, Try Again`)
        }
        (data.items).forEach(user => {

            const div = document.createElement('li')

            div.classList.add('userName')

            const button = document.createElement('button');

            button.innerText = `Repository`

            div.innerHTML = `
                <h2>${user.login}</h2>
                <img src="${user.avatar_url}" class="sizeImg"></img>
                <p><b>link to page:</b> <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
            `

            div.appendChild(button)



function displayRepos(){ 
   repoValue.innerHTML=''

fetch(`https://api.github.com/users/${user.login}/repos`)
.then(response => response.json())
.then(data => {
data.forEach(repo => {
let divRepo = document.createElement('li')

divRepo.innerHTML = `
                <h3>Repository Name: ${repo.name}</h3>
                <p>Repository details: ${repo.description}</p>
                <p>Click to open Repository<a href=${repo.html_url}>${repo.html_url}</a></p>`

ulRepoResults.append(divRepo)
})
})
}
//end


            button.addEventListener('click', displayRepos)
            UserResult.appendChild(li) 
       
        })

    })
}