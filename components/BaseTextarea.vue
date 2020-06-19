<template>
    <div class="flex flex-col">
        <label v-if="label" class="block mb-1 font-semibold">{{ label }}</label>
        <textarea
            class="block py-3 px-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out"
            :value="value"
            :class="componentClass"
            v-bind="$attrs"
            @input="updateValue"
            v-on="listeners"
        ></textarea>
    </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js'

export default {
	mixins: [formFieldMixin],
	computed: {
		listeners() {
			return {
				...this.$listeners,
				input: this.updateValue
			}
		}
	}
}
</script>

<style scoped>
.contact-message {
	min-height: 8rem;
}
</style>
