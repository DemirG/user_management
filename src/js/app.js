const usersDisplay = document.getElementById('users')
let users
const fetchUsers = async (options) => {
    const users = await Users.get(options)
    usersDisplay.innerHTML = null
    displayUsers(users)
    displayPagination(users)
    return null
}

const displayUsers = async (users) => {
    if (Array.isArray(users.data)) {
        users.data.forEach(user => {
            let userNode = document.createElement('div')
            let html = `<h2> ${user.first_name} ${user.last_name}</h2>`
            html += `<p>${user.email}</p>`
            html += `<img src="${user.avatar}" />`
            userNode.innerHTML = html
            usersDisplay.appendChild(userNode)
        })
    }
    return null
}

const displayPagination = async (users) => {
    let {page, total_pages} = users
    let buttonDisplayNode, prevLink, nextLink
    buttonDisplayNode = document.getElementById('buttons')
    if (buttonDisplayNode) {
        buttonDisplayNode.innerHTML = null
    } else {
        buttonDisplayNode = document.createElement('div')
        buttonDisplayNode.id = 'buttons'
    }
    prevLink = `<button disabled onclick="fetchUsers({page: ${page - 1}})">Previous</button>`
    nextLink = `<button disabled onclick="fetchUsers({page: ${page + 1}})">Next</button>`
    prevLink = page !== 1 ? prevLink.replace('disabled', '') : prevLink
    nextLink = page < total_pages ? nextLink.replace('disabled', '') : nextLink

    buttonDisplayNode.innerHTML = prevLink + nextLink
    document.body.appendChild(buttonDisplayNode)
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchUsers()
})