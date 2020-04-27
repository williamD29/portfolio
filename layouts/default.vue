<template>
    <div>
        <Back v-if="$nuxt.$route.path !== '/'" />
        <Menu />
        <div class="py-24">
            <nuxt />
        </div>
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

<style></style>
