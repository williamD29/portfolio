<template>
    <div class="container mx-auto h-screen">
        <div class="py-16 flex flex-wrap-reverse content-center items-center h-full">
            <div
                class="lg:w-1/2 md:text-left text-center w-full font-semibold text-2xl lg:pr-32 lg:mx-0 mx-8"
            >
                <p>
                    Hello, je suis actuellement étudiant en 2
                    <sup>ème</sup> année de
                    <a
                        class="link"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="http://www.iut-lannion.fr/dut-informatique-contenus"
                    >DUT Informatique</a> à l'
                    <a
                        class="link"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="http://www.iut-lannion.fr/"
                    >IUT de Lannion</a>
                </p>
                <p class="mt-8">Bienvenue sur mon site perso !</p>
                <div class="flex mt-16">
                    <a
                        target="_blank"
                        class="rounded-md px-12 py-3 border border-transparent bg-teal-600 text-white text-base inline-flex justify-center text-center font-semibold tracking-wide hover:bg-teal-500 focus:outline-none focus:shadow-outline-teal focus:border-teal-700 active:bg-teal-700 transition duration-150 ease-in-out text-lg px-6"
                        href="cv.pdf"
                    >Mon CV</a>
                    <BaseButton
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
                        other="ml-4"
                        new-size="px-12 py-3"
                        new-color="bg-teal-100 hover:bg-teal-50 focus:border-teal-300"
                        new-text="text-teal-700 text-lg hover:text-teal-600"
                    >Voir plus</BaseButton>
                </div>
            </div>
            <div class="lg:w-1/2 flex justify-end w-full">
                <h1 id="title" class="font-black leading-none md:w-full mx-auto">
                    <div>{{ name }}</div>
                    <div class="text-teal-600">&nbsp;&nbsp;&nbsp;{{ firstname }}</div>
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			name: 'William',
			firstname: 'Donval.'
		}
	}
}
</script>

<style scoped>
#title {
	font-size: 10rem;
}

@media screen and (max-width: 1460px) {
	#title {
		font-size: 8rem;
	}
}
@media screen and (max-width: 1280px) {
	#title {
		font-size: 6rem;
	}
}
@media screen and (max-width: 1024px) {
	#title {
		font-size: 16vw;
		margin-bottom: 20vw;
	}
}
</style>
