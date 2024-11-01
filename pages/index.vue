<template>
    <div class="container max-w-screen-xl mx-auto px-4 py-16">
        <header class="flex flex-col lg:flex-row justify-between lg:mb-20">
            <div class="text-center md:pr-20 lg:text-left mb-20 lg:mb-0">
                <div class="flex items-center justify-center lg:justify-start gap-2 mb-10">
                    <span class="w-20 h-0.5 bg-gray-500"></span>

                    <p class="font-medium text-gray-500 text-xl">
                        Bouh Ivan
                    </p>
                </div>

                <h1 class="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10 capitalize">
                    Software Engineer <br>
                    AI Researcher
                </h1>

                <p class="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10">
                    Hi, I’m Ivan. Software engineer and AI researcher.
                    Sorry for the poor design, it's an <i class="font-light">"on the go"</i> version of the site. As a
                    detailed oriented
                    perfectionist, I don't usually deploy such but I'm learning to accept that most things:
                    myself, most of my projects, this site are continuous WIP (but it should be far better by the end of
                    this year ;)
                </p>

                <hr class="text-gray-500 mb-5">

                <span class="font-normal text-gray-500 text-sm">
                    I am currently open for research work.
                </span>
            </div>

            <div class="mx-auto lg:mx-0 p-4">
                <img class="max-w-sm h-auto object-cover object-center rounded-lg rotate-3" src="/me.jpg" alt="Image">
            </div>
        </header>
        <div class="container max-w-screen-xl mx-auto px-4 pt-16">
            <div class="flex flex-col lg:flex-row justify-between ">
                <div class="mb-10 lg:mb-0 w-5/12">
                    <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

                    <p class="font-normal text-gray-500 text-xs md:text-base">
                        A few of my Data/AI projects that are worth mentioning with a quick overview and possibly a link
                        to the project.
                    </p>
                </div>

                <div class="space-y-24 w-7/12">
                    <div class="flex space-x-6">
                        <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>
                        <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>
                        <div>
                            <h1
                                class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 capitalize flex items-center">
                                Nude detector
                                <a class="inline-block pl-2 text-gray-300" href="http://nudedetector.ivanange.dev/"
                                    target="_blank" title="Nude detector">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </h1>
                            <p class="font-normal text-gray-500 text-sm md:text-base">
                                This project is based on my master thesis work, aimed at invalid content detection
                                (nudity) on small datasets in a context of low computing resources. We casted our
                                problem to survival analysis and built a survivalSVM model that predicts survival times
                                that express the degree of nudity in the image, then a dynamically calculated threshold
                                based on
                                training set is used to determine if the image is valid. We were able to reach an
                                F-score of <b>0.87</b>.
                                While it's being integrated to YowYob platform, I made a flask API and a web
                                <a class="text-gray-400 underline" href="http://nudedetector.ivanange.dev/"
                                    target="_blank">playground</a>
                                you can tinker with.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container max-w-screen-xl mx-auto px-4 pt-16">
            <div class="flex flex-col lg:flex-row justify-between ">
                <div class="mb-10 lg:mb-0 w-5/12">
                    <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Research</h1>

                    <p class="font-normal text-gray-500 text-xs md:text-base">
                        Reject count, because it matters too.
                    </p>
                </div>

                <div class="space-y-24 w-7/12">
                    <div class="flex space-x-6">
                        <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>
                        <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>
                        <div>
                            <h1
                                class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 capitalize flex items-center">
                                Survival SVM model for adult content detection
                            </h1>
                            <p class="font-normal text-gray-500 text-sm md:text-base">
                                IEEE journal (x1), CRI Conference (x1)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style></style>
