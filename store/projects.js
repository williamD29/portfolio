// import ProjectService from '@/services/ProjectService.js'

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

/*
export const actions = {
    async fetchProjects({ commit }) {
        const response = await ProjectService.getProjects()
        commit('SET_PROJECTS', response.data)
    },
    async fetchProject({ commit }, title) {
        const response = await ProjectService.getProject(title)
        commit('SET_PROJECT', response.data)
    }
}
*/

export const actions = {
    async fetchProjects({ commit }) {
        const messageRef = this.$fireDb.ref('projects')
        try {
            const snapshot = await messageRef.once('value')
            commit('SET_PROJECTS', snapshot.val())
        } catch (e) {
            global.console.error(e)
        }
    },
    async fetchProject({ commit }, title) {
        const messageRef = this.$fireDb.ref('projects')
        try {
            const snapshot = await messageRef.once('value')
            for (const val of snapshot.val()) {
                if (val.title === title.replace(/-+/g, ' ')) {
                    commit('SET_PROJECT', val)
                }
            }
        } catch (e) {
            global.console.error(e)
        }
    }
}
