import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getProjects() {
        return apiClient.get('/projects')
    },
    getProject(title) {
        return apiClient.get('/projects?title=' + title.replace(/-+/g, '+'))
    }
}
