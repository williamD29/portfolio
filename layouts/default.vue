<template>
    <div>
        <Back />
        <Menu />
        <nuxt />
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Back from '@/components/Back.vue'

export default {
	components: {
		Menu,
		Back
	}
}
</script>

<style></style>
