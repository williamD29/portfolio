<template>
    <div class="py-16 flex flex-wrap">
        <div class="lg:w-1/2 text-xl font-bold">
            <p>
                Hello, je suis actuellement étudiant en 2
                <sup>ème</sup> année de
                <a class="link" href>DUT Informatique</a> à l'
                <a class="link" href>IUT de Lannion</a>
            </p>
            <p class="mt-8">Bienvenue sur mon site perso !</p>
            <BaseButton button-class="text-lg px-6 mt-16">Mon CV</BaseButton>
        </div>
        <div class="lg:w-1/2 flex justify-end">
            <h1 id="title" class="font-black leading-none">
                <div>{{name}}</div>
                <div class="ml-20">
                    {{firstname}}
                    <span class="text-teal-600 -ml-4">.</span>
                </div>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			name: 'William',
			firstname: 'Donval'
		}
	}
}
</script>

<style scoped>
#title {
	font-size: 8em;
}
</style>