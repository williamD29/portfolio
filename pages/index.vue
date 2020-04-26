<template>
    <div>
        <Slider :projects="projects" />
        <BaseButton button-class="text-xl px-5">Mon CV</BaseButton>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Slider from '@/components/Slider.vue'

export default {
	components: {
		Slider
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

<style></style>
