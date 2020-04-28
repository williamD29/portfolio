<template>
    <div class="bg-teal-200 relative overflow-x-hidden">
        <svg
            id="svg1"
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="50" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="50" cy="50" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="90" cy="50" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="130" cy="50" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="170" cy="50" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="210" cy="50" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="10" cy="10" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="50" cy="10" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="90" cy="10" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="130" cy="10" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="170" cy="10" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="210" cy="10" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="10" cy="90" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="50" cy="90" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="90" cy="90" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="130" cy="90" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="170" cy="90" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="210" cy="90" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="10" cy="130" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="50" cy="130" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="90" cy="130" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="130" cy="130" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="170" cy="130" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="210" cy="130" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="10" cy="170" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="50" cy="170" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="90" cy="170" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="130" cy="170" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="170" cy="170" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="210" cy="170" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="10" cy="210" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="50" cy="210" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="90" cy="210" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="130" cy="210" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="170" cy="210" r="10" fill="#0F4450" fill-opacity="0.1" />
            <circle cx="210" cy="210" r="10" fill="#0F4450" fill-opacity="0.1" />
        </svg>
        <svg
            id="svg2"
            width="634"
            height="634"
            viewBox="0 0 634 634"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="317"
                cy="317"
                r="297"
                stroke="#0F4450"
                stroke-opacity="0.1"
                stroke-width="40"
            />
        </svg>

        <div class="py-32 container mx-auto">
            <h2 class="md:text-6xl font-black text-4xl text-center lg:mb-24 mb-16">Compétences</h2>
            <div class="flex flex-wrap font-bold text-lg px-8">
                <div class="lg:w-1/4 w-1/2">
                    <h3 class="uppercase font-normal mb-4 mt-8">Langages</h3>
                    <ul>
                        <li>Javascript</li>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div class="lg:w-1/4 w-1/2">
                    <h3 class="uppercase font-normal mb-4 mt-8">Web</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwindcss</li>
                        <li>Bootstrap</li>
                        <li>Wordpress</li>
                        <li>Sass</li>
                    </ul>
                </div>
                <div class="lg:w-1/4 w-1/2">
                    <h3 class="uppercase font-normal mb-4 mt-8">Frameworks</h3>
                    <ul>
                        <li>CodeIgniter</li>
                        <li>Vue.js</li>
                        <li>Nuxt.js</li>
                    </ul>
                </div>
                <div class="lg:w-1/4 w-1/2">
                    <h3 class="uppercase font-normal mb-4 mt-8">Outils</h3>
                    <ul>
                        <li>Git</li>
                        <li>Figma</li>
                        <li>Trello</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
#svg1 {
	position: absolute;
	bottom: 10px;
	left: 10px;
}

#svg2 {
	position: absolute;
	top: -400px;
	right: -400px;
}
</style>
