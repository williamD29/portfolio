<template>
    <swiper class="swiper w-full bg-gray-200" :options="swiperOption">
        <swiper-slide v-for="(project, index) in orderedProjects" :key="index" class="slide">
            <Slide :project="project" />
        </swiper-slide>
        <div
            slot="button-prev"
            class="swiper-button-next rounded-full bg-white shadow-md relative focus:shadow-outline-teal-md"
        ></div>
        <div
            slot="button-next"
            class="swiper-button-prev rounded-full bg-white shadow-md relative focus:shadow-outline-teal-md"
        ></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import orderBy from 'lodash/orderBy'
import Slide from '@/components/Slide.vue'

export default {
	components: {
		Swiper,
		SwiperSlide,
		Slide
	},
	props: {
		projects: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			swiperOption: {
				centeredSlides: true,
				slidesPerView: 'auto',
				spaceBetween: 100,
				freeMode: true,
				lazy: true,
				keyboard: {
					enabled: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	},
	computed: {
		orderedProjects() {
			return orderBy(this.projects, 'id', 'desc')
		}
	}
}
</script>

<style scoped>
.slide {
	width: 300px;
}

@media screen and (max-width: 300px) {
	.slide {
		width: calc(100% - 20px);
		margin-left: 10px;
		margin-right: 10px;
	}
}

.swiper-container {
	@apply py-24;
}

.swiper-wrapper {
	@apply h-full;
}

.swiper-button-prev {
	height: 60px;
	width: 60px;
	margin-left: 15px;
	transition: transform 0.2s cubic-bezier(0, 0.33, 0.74, 1.95);
	outline: 0;
}

.swiper-button-prev:hover {
	transform: scale(1.1);
}

.swiper-button-prev::after {
	content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='15 18 9 12 15 6'></polyline></svg>");
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	height: 78px;
	z-index: 80;
}

.swiper-button-next {
	height: 60px;
	width: 60px;
	margin-right: 15px;
	transition: transform 0.2s cubic-bezier(0, 0.33, 0.74, 1.95);
	outline: 0;
}

.swiper-button-next:hover {
	transform: scale(1.1);
}

.swiper-button-next::after {
	content: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='9 18 15 12 9 6'></polyline></svg>");
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	height: 78px;
	z-index: 80;
}
</style>
