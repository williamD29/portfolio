<template>
    <div class="bg-gray-200 py-32 relative">
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

        <h2 class="display-1 text-center mb-32">Projets</h2>
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
</style>
