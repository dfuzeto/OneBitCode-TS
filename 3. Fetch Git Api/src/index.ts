interface GithubUserResponse {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: "Not Found"
}

interface GithubReposResponse {
    name: string
    description: string
    fork: boolean
    stargazes_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await (await response).json()

    if (user.message) {
        console.log(`User not found`)
    } else {
        users.push(user)
		alert(
            `O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`
          )
        }
      }

      async function showUser(username: string) {
        const user = users.find(user => user.login === username)

        if(typeof user === 'undefined') {
          alert(`User not found`)
        } else {
          const response = await fetch(user.repos_url)
          const repos: GithubReposResponse[] = await (await response).json()
          let message = `id: ${user.id}\n` +
          `\nlogin: ${user.login}` +
          `\nNome: ${user.name}` +
          `\nBio: ${user.bio}` +
          `\nRepositorios publicos: ${user.public_repos}`

          repos.forEach(repo => {message += `\nNome: ${repo.name}`})
        }
        
      }