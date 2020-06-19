<template>
    <div>
        <button
            ref="theButton"
            v-bind="$attrs"
            :class="[
                newBase ? newBase : defaultBase,
                newColor ? newColor : defaultColor,
                newSize ? newSize : defaultSize,
                newText ? newText : defaultText,
                other
            ]"
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
        newBase: {
            type: String,
            default: null
        },
        newColor: {
            type: String,
            default: null
        },
        newSize: {
            type: String,
            default: null
        },
        newText: {
            type: String,
            default: null
        },
        other: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            defaultBase:
                'rounded-md border border-transparent  inline-flex justify-center text-center font-semibold tracking-wide focus:outline-none focus:shadow-outline-teal transition duration-150 ease-in-out',
            defaultColor:
                'bg-teal-600 hover:bg-teal-500 focus:border-teal-700 active:bg-teal-700',
            defaultSize: 'px-4 py-2',
            defaultText: 'text-white text-base'
        }
    }
}
</script>
