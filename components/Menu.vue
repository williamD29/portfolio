<template>
    <div>
        <label id="label-btn-menu" class="absolute" for="btn-menu">
            <transition name="slide-up-down" tag="div" mode="out-in">
                <div v-if="!isOpen" key="1">{{labelNameMenu}}</div>
                <div v-else key="2">{{ labelNameClose }}</div>
            </transition>
        </label>
        <button
            id="btn-menu"
            :class="{ opened: isOpen }"
            class="focus:shadow-outline-teal"
            @click.prevent="showMenu"
        >
            <div class="relative">
                <span></span>
                <span></span>
            </div>
        </button>
        <transition name="fade">
            <div v-show="isOpen" id="menu">
                <transition name="scale">
                    <div v-show="isOpen" class="w-full h-full relative md:p-16 p-4">
                        <div class="flex h-full flex-wrap">
                            <div class="lg:w-1/2 lg:h-full w-0"></div>
                            <div
                                class="lg:w-1/2 w-full lg:h-full md:text-right text-center flex flex-col justify-center"
                            >
                                <div>
                                    <a
                                        v-scroll-to="{
                                            el: '#home',
                                            container: 'body',
                                            duration: 500,
                                            easing: 'ease-out',
                                            force: true,
                                            cancelable: true,
                                            x: false,
                                            y: true
                                        }"
                                        href="#"
                                        class="menu-link md:text-6xl text-4xl font-black blend md:my-4 my-2 active"
                                        @click.prevent="showMenuLink"
                                    >Accueil</a>
                                </div>
                                <div>
                                    <a
                                        v-scroll-to="{
                                            el: '#skills',
                                            container: 'body',
                                            duration: 500,
                                            easing: 'ease-out',
                                            force: true,
                                            cancelable: true,
                                            x: false,
                                            y: true
                                        }"
                                        href="#"
                                        class="menu-link md:text-6xl text-4xl font-black blend md:my-4 my-2"
                                        @click.prevent="showMenuLink"
                                    >Compétences</a>
                                </div>
                                <div>
                                    <a
                                        v-scroll-to="{
                                            el: '#projects',
                                            container: 'body',
                                            duration: 500,
                                            easing: 'ease-out',
                                            force: true,
                                            cancelable: true,
                                            x: false,
                                            y: true
                                        }"
                                        href="#"
                                        class="menu-link md:text-6xl text-4xl font-black blend md:my-4 my-2"
                                        @click.prevent="showMenuLink"
                                    >Projets</a>
                                </div>
                                <div>
                                    <a
                                        v-scroll-to="{
                                            el: '#contact',
                                            container: 'body',
                                            duration: 500,
                                            easing: 'ease-out',
                                            force: true,
                                            cancelable: true,
                                            x: false,
                                            y: true
                                        }"
                                        href="#"
                                        class="menu-link md:text-6xl text-4xl font-black blend md:my-4 my-2"
                                        @click.prevent="showMenuLink"
                                    >Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
			labelFixed: 'fixed',
			labelAbsolute: 'absolute',
			labelNameMenu: 'menu',
			labelNameClose: 'fermer'
		}
	},
	computed: {
		onHomePage() {
			if (this.$nuxt.$route.name === 'index') {
				return true
			}
			return false
		}
	},
	methods: {
		showMenu(e) {
			this.isOpen === false ? (this.isOpen = true) : (this.isOpen = false)
			const menuLinks = document.querySelectorAll('.menu-link')
			if (e.target.tagName.toLowerCase() === 'a') {
				menuLinks.forEach((e) => {
					e.classList.remove('active')
				})
				e.target.classList.add('active')
			}
		},
		showMenuLink(e) {
			this.isOpen === false ? (this.isOpen = true) : (this.isOpen = false)
			const menuLinks = document.querySelectorAll('.menu-link')
			if (e.target.tagName.toLowerCase() === 'a') {
				menuLinks.forEach((e) => {
					e.classList.remove('active')
				})
				e.target.classList.add('active')
			}
			if (this.$nuxt.$route.name === 'project-title') {
				this.$nuxt.$router.push('/')
			}
		}
	}
}
</script>

<style scoped>
#label-btn-menu {
	display: flex;
	right: 80px;
	top: 20px;
	height: 50px;
	z-index: 100;
	cursor: pointer;
	vertical-align: middle;
	text-transform: uppercase;
	flex-direction: column;
	justify-content: center;
}

#btn-menu {
	width: 50px;
	height: 50px;
	padding: 15px;
	position: fixed;
	display: block;
	right: 20px;
	top: 20px;
	z-index: 100;
	background-color: white;
	border-radius: 100%;
	transition: width 0.8s ease-in-out;
	outline: 0;
}

#btn-menu div {
	transition: all 0.8s;
}

#btn-menu.opened div {
	transform: scale(0.5);
	opacity: 0;
}

#btn-menu.opened::before {
	transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(1);
	opacity: 1;
}
#btn-menu.opened::after {
	transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(1);
	opacity: 1;
}

#btn-menu span {
	display: block;
	width: 20px;
	height: 3px;
	right: 0;
	position: absolute;
	background-color: #27303f;
	transition: all 0.2s;
}

#btn-menu::before {
	content: '';
	position: absolute;
	width: 3px;
	height: 20px;
	left: 50%;
	background-color: #27303f;
	top: 50%;
	opacity: 0;
	transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(0.5);
	transition: all 0.8s;
}

#btn-menu::after {
	content: '';
	position: absolute;
	width: 20px;
	height: 3px;
	left: 50%;
	background-color: #27303f;
	top: 50%;
	opacity: 0;
	transform: translateX(-50%) translateY(-50%) rotate(45deg) scale(0.5);
	transition: all 0.8s;
}

#btn-menu:hover span:last-child {
	width: 20px;
}

#btn-menu span:first-child {
	top: -5.5px;
}
#btn-menu span:last-child {
	top: 2.5px;
	width: 12px;
}

#menu {
	position: fixed;
	height: 100vh;
	width: 100vw;
	background: white;
	z-index: 90;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.scale-enter {
	transform: scale(0.8);
	opacity: 0;
}

.scale-enter-active {
	transition: transform 0.6s, opacity 0.6s;
}

.scale-enter-to {
	transform: scale(1);
	opacity: 1;
}

.scale-leave {
	transform: scale(1);
	opacity: 1;
}

.scale-leave-active {
	transition: transform 0.6s, opacity 0.6s;
}

.scale-leave-to {
	transform: scale(0.8);
	opacity: 0;
}

.slide-up-down-enter {
	transform: translateY(-0.5em);
	opacity: 0;
}

.slide-up-down-enter-active {
	transition: all 0.4s;
}

.slide-up-down-enter-to {
	transform: translateY(0);
	opacity: 1;
}

.slide-up-down-leave {
	transform: translateY(0);
	opacity: 1;
}

.slide-up-down-leave-active {
	transition: all 0.4s;
}

.slide-up-down-leave-to {
	transform: translateY(0.5em);
	opacity: 0;
}
</style>
