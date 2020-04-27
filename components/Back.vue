<template>
    <nuxt-link id="btn-back" to="/" class="focus:shadow-outline-teal">
        <div class="relative h-full w-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
            </svg>
        </div>
    </nuxt-link>
</template>

<script>
export default {}
</script>

<style scoped>
#btn-back {
	width: 50px;
	height: 50px;
	position: fixed;
	display: block;
	left: 20px;
	top: 20px;
	z-index: 100;
	background-color: white;
	border-radius: 100%;
	outline: 0;
}

#btn-back svg {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
</style>