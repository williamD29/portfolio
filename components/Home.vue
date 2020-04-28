<template>
    <div class="container mx-auto h-screen">
        <div class="py-16 flex flex-wrap-reverse content-center items-center h-full">
            <div
                class="lg:w-1/2 md:text-left text-center w-full text-2xl font-bold lg:pr-32 lg:mx-0 mx-8"
            >
                <p>
                    Hello, je suis actuellement étudiant en 2
                    <sup>ème</sup> année de
                    <a class="link" href>DUT Informatique</a> à l'
                    <a class="link" href>IUT de Lannion</a>
                </p>
                <p class="mt-8">Bienvenue sur mon site perso !</p>
                <a
                    target="_blank"
                    class="rounded-md px-4 py-2 border border-transparent bg-teal-600 text-white text-base inline-flex justify-center text-center font-semibold tracking-wide hover:bg-teal-500 focus:outline-none focus:shadow-outline-teal focus:border-teal-700 active:bg-teal-700 transition duration-150 ease-in-out text-lg px-6 mt-16"
                    href="cv.pdf"
                >Mon CV</a>
            </div>
            <div class="lg:w-1/2 flex justify-end w-full">
                <h1 id="title" class="font-black leading-none md:w-full mx-auto">
                    <div>{{ name }}</div>
                    <div>&nbsp;&nbsp;&nbsp;{{ firstname }}</div>
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
