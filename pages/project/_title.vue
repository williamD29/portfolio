<template>
    <div class="container mx-auto py-16">
        <h1 class="text-teal-500 display-1">{{ project.title }}</h1>
        <div class="flex flex-wrap mt-8">
            <div
                class="lg:w-1/3 md:w-1/2 w-full -mx-2 my-8 pr-12 flex flex-wrap items-start content-start"
            >
                <span
                    v-for="(techno, index) in project.technologies"
                    :key="'techno-' + index"
                    class="m-2"
                    :class="techno.class"
                    >{{ techno.name }}</span
                >
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full my-8">
                <div class="font-bold text-lg mt-2">{{ project.date }}</div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full my-8">
                <div class="font-bold text-lg mb-3 mt-2">Description</div>
                <p
                    v-for="(descriptionLine, index) in project.description"
                    :key="'description-' + index"
                    class="font-bold text-lg text-gray-500 mb-3"
                >
                    {{ descriptionLine }}
                </p>
            </div>
        </div>
        <client-only>
            <tinybox v-model="galleryIndex" :images="images" loop />
        </client-only>
        <div
            v-for="(image, index) in parseInt(project.images[1].number)"
            :key="image + '-' + index"
            class="my-16 shadow-xl"
        >
            <img
                :src="
                    require('@/assets/images/' +
                        project.images[1].name +
                        'Capture' +
                        (index + 1) +
                        '.PNG')
                "
                alt="test"
                @click="galleryIndex = index"
            />
        </div>
    </div>
</template>

<script>
import Tinybox from 'vue-tinybox'
import { mapState } from 'vuex'

export default {
    components: {
        Tinybox
    },
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
    data() {
        return {
            galleryIndex: null
        }
    },
    computed: {
        ...mapState({
            project: (state) => state.projects.project
        }),
        images() {
            const images = []
            for (let i = 1; i <= this.project.images[1].number; i++) {
                images.push(
                    require(`@/assets/images/${this.project.images[1].name}Capture${i}.PNG`)
                )
            }
            return images
        }
    }
}
</script>

<style scoped></style>
