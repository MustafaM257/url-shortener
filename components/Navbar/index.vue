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

const user = useSupabaseUser();
const client = useSupabaseClient();
const handleSignOut = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    console.error("Error in signing out: ", error);
    return;
  }
  useRouter().push("/");
};
</script>

<template>
  <div class="fixed top-0 left-0 right-0 border-white/20 bg-blur z-50">
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
        <li v-if="!user">
          <NuxtLink
            :to="{
              name: 'authentication',
            }"
            class="btn btn-primary"
            >Sign in</NuxtLink
          >
        </li>
        <li v-else>
          <button @click="handleSignOut">Log out</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
