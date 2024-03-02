<template>
  <main class="pt-24">
    <section class="container">
      <DashboardHeader />
    </section>
    <section class="container mt-10">
      <DashboardLinkForm @created="refresh" />
    </section>
    <section class="container mt-10">
      <DashboardLinkDetails
        v-for="(link, index) in data"
        :link="{
          shortKey: link.key,
          longUrl: link.long_url || '',
          id: link.id,
        }"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
import { type Database } from "~/types/supabase";
const user = useSupabaseUser();

const client = useSupabaseClient<Database>();
const { data, refresh } = useAsyncData("link", async () => {
  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("user_id", user.value?.id ?? "")
    .order("created_at", { ascending: false });

  return data;
});

console.log(data);
</script>
