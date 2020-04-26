<template>
    <div>{{project[0].title}}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	async fetch({ store, error, params }) {
		try {
			await store.dispatch('projects/fetchProject', params.title)
		} catch (e) {
			error({
				statusCode: 503,
				message: 'Unable to fetch project ' + params.title
			})
		}
	},
	computed: mapState({
		project: (state) => state.projects.project
	})
}
</script>

<style scoped></style>
