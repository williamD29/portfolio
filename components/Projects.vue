<template>
    <div class="bg-gray-200 pt-16">
        <h2 class="display-1 text-center">Projets</h2>
        <Slider :projects="projects" />
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
    components: {
        Slider
    },
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped></style>
