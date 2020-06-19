export const formFieldMixin = {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: ''
        },
        componentClass: [String, Object],
        value: [String, Number]
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value)
        }
    }
}
