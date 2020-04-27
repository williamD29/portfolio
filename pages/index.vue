<template>
    <div>
        <Home />
        <skills />
        <Projects :projects="projects" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Home from '@/components/Home.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'

export default {
    components: {
        Home,
        Skills,
        Projects
    },
    async asyncData({ store, error }) {
        try {
            await store.dispatch('projects/fetchProjects')
        } catch (e) {
            error({
                statusCode: 503,
                message:
                    'Unable to fetch projects at this time. Please try again.'
            })
        }
    },
    computed: mapState({
        projects: (state) => state.projects.projects
    })
}
</script>

<style scoped></style>
