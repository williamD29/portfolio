<template>
    <nuxt-link
        :to="'/project/' + project.title.replace(/\s+/g, '-')"
        class="slide-link block rounded-lg bg-white shadow-lg overflow-hidden focus:shadow-outline-teal focus:shadow-outline-teal-lg"
    >
        <div class="overflow-hidden">
            <img
                class="project-preview"
                src="@/assets/images/Comics-slide.png"
                alt="nge"
                height="200"
                @load="isLoaded"
            />
        </div>
        <div class="px-4 py-6">
            <h4 class="display-4 mb-2">{{ project.title }}</h4>
            <div class="-mx-1">
                <span
                    v-for="(tag, index) in project.tags"
                    :key="'tag-' + index"
                    class="badge info mx-1"
                    >{{ tag }}</span
                >
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            loading: true
        }
    },
    methods: {
        isLoaded() {
            this.loading = false
        }
    }
}
</script>

<style scoped>
.project-preview {
    object-fit: cover;
    object-position: center center;
    height: 200px;
    width: 100%;
}

.slide-link {
    outline: 0;
}
</style>
