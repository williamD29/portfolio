<template>
    <div class="bg-gray-100 py-32 relative overflow-hidden">
        <svg
            id="svg1"
            width="227"
            height="228"
            viewBox="0 0 227 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M167.432 62.4546L119.646 227.135L0.921953 103.411L167.432 62.4546Z"
                fill="#27303F"
                fill-opacity="0.05"
            />
        </svg>
        <svg
            id="svg2"
            width="634"
            height="634"
            viewBox="0 0 634 634"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="317"
                cy="317"
                r="312"
                stroke="#27303F"
                stroke-opacity="0.05"
                stroke-width="10"
            />
        </svg>

        <h2 class="md:text-6xl font-black text-4xl text-center md:mb-32 mb-16">
            Projets
        </h2>
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

<style scoped>
#svg1 {
    position: absolute;
    top: 20px;
    left: 30px;
}

#svg2 {
    position: absolute;
    bottom: -400px;
    right: -400px;
}
</style>
