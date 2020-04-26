<template>
    <div>
        <button
            v-bind="$attrs"
            class="rounded-md px-4 py-2 border border-transparent bg-teal-600 text-white inline-flex justify-center text-center font-semibold tracking-wide hover:bg-teal-500 focus:outline-none focus:shadow-outline-teal focus:border-teal-700 active:bg-teal-700 transition duration-150 ease-in-out"
            :class="buttonClass"
            v-on="$listeners"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		buttonClass: {
			type: String,
			default: ''
		}
	}
}
</script>