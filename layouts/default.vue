<template>
    <div>
        <Back v-if="$nuxt.$route.path !== '/'" />
        <Menu />
        <transition name="fade">
            <nuxt />
        </transition>
        <Footer />
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Back from '@/components/Back.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Menu,
		Back,
		Footer
	}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
