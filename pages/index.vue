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
                    I am currently open for work.
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
                            <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5 capitalize">Nude detector
                            </h1>
                            <p class="font-normal text-gray-500 text-sm md:text-base">
                                This project is based on my master thesis work, focused on invalid content detection on
                                small datasets.
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
