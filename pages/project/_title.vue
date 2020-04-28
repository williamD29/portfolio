<template>
    <div class="container mx-auto">
        <h1 class="text-teal-500 display-1">{{project[0].title}}</h1>
        <div class="flex flex-wrap mt-8">
            <div
                class="lg:w-1/3 md:w-1/2 w-full -mx-2 my-8 pr-12 flex flex-wrap items-start content-start"
            >
                <span
                    v-for="(techno, index) in project[0].technologies"
                    :key="'techno-'+ index"
                    class="m-2"
                    :class="techno.class"
                >{{techno.name}}</span>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full my-8">
                <div class="font-bold text-lg mt-2">{{project[0].date}}</div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full my-8">
                <div class="font-bold text-lg mb-3 mt-2">Description</div>
                <p
                    v-for="(descriptionLine, index) in project[0].description"
                    :key="'description-'+index"
                    class="font-bold text-lg text-gray-500 mb-3"
                >{{descriptionLine}}</p>
            </div>
        </div>
        <div
            v-for="(image, index) in parseInt(project[0].images[1].number)"
            :key="image + '-' + index"
            class="my-16 shadow-xl"
        >
            <img
                :src="require('@/assets/images/'+ project[0].images[1].name +'Capture' + (index + 1) + '.PNG')"
                alt="test"
            />
        </div>
    </div>
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
