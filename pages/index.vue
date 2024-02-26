<template>
  <section class="h-screen grid place-content-center">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-5xl font-bold heading">
        Unleash the Power of Every Click with Linkique: Shorten, Share, & Shine
      </h1>
      <p class="my-10 text-lg md:w-2/3 mx-auto text-center">
        Transform your links into short, memorable pathways with Linkique.
      </p>
      <NuxtLink to="/dashboard" class="btn btn-primary">Shorten Now</NuxtLink>
    </div>
  </section>
</template>
<style scoped>
.heading {
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 180%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
