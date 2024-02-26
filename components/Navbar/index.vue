<script setup lang="ts">
const links = ref<
  {
    to: string;
    label: string;
  }[]
>([
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
]);
</script>

<template>
  <div class="fixed top-0 left-0 right-0 border-white/20 bg-blur">
    <nav class="container py-4 flex justify-between">
      <NuxtLink
        class="text-2xl font-bold text-white"
        :to="{
          name: 'index',
        }"
      >
        Linkique
      </NuxtLink>
      <ul class="flex items-center gap-4">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/auth" class="btn btn-primary">Sign in</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
