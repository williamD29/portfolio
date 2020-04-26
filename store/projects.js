import ProjectService from '@/services/ProjectService.js'

export const state = () => ({
    projects: [],
    project: {}
})

export const mutations = {
    SET_PROJECTS(state, projects) {
        state.projects = projects
    },
    SET_PROJECT(state, project) {
        state.project = project
    }
}

export const actions = {
    async fetchProjects({ commit }) {
        const response = await ProjectService.getProjects()
        commit('SET_PROJECTS', response.data)
    },
    async fetchProject({ commit }, title) {
        const response = await ProjectService.getProject(title)
        console.log(response.data)
        commit('SET_PROJECT', response.data)
    }
}
