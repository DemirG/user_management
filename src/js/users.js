const Users = {
    async get(options = {}) {
        // let users = fetch('https://reqres.in/api/users')
        // .then(response => {
        //     return response.json()
        // })
        // .then(data => {
        //     return data.data
        // })
        // return users
        
        // const response = await fetch('https://reqres.in/api/users')
        // const data = await response.json()
        // return data.data
    
        // const data = await (await fetch('https://reqres.in/api/users')).json()
        // return data.data
        let page = options.page || 1
        const response = await axios.get('https://reqres.in/api/users', {params: {page: page}})
        return response.data
    }
}