<template>
    <div class="container mx-auto h-screen">
        <div class="py-16 flex flex-wrap-reverse content-center items-center h-full">
            <div class="xl:w-1/2 md:text-left text-center w-full text-xl font-bold lg:pr-32 mx-8">
                <p>
                    Hello, je suis actuellement étudiant en 2
                    <sup>ème</sup> année de
                    <a class="link" href>DUT Informatique</a> à l'
                    <a class="link" href>IUT de Lannion</a>
                </p>
                <p class="mt-8">Bienvenue sur mon site perso !</p>
                <BaseButton button-class="text-lg px-6 mt-16">Mon CV</BaseButton>
            </div>
            <div class="xl:w-1/2 flex justify-end w-full">
                <h1 id="title" class="font-black leading-none w-full">
                    <div class="flex justify-center md:text-center">{{ name }}</div>
                    <div class="flex justify-center md:ml-20">{{ firstname }}</div>
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
	font-size: 10em;
}

@media screen and (max-width: 1024px) {
	#title {
		font-size: 20vw;
		margin-bottom: 20vw;
	}
}
</style>
