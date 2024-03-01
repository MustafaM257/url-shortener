<script setup lang="ts">
import { nanoid } from "nanoid";

import { type Database } from "~/types/supabase";
const form = reactive({
  long_url: "",
  key: "",
});
const client = useSupabaseClient<Database>();

const createShortKey = (len: number = 6): string => {
  return (form.key = nanoid(len));
};
onMounted(() => {
  createShortKey();
});

const handleLinkForm = async () => {
  try {
    const { data, error } = await client.from("links").insert({
      long_url: form.long_url,
      key: form.key,
      user_id: useSupabaseUser().value?.id,
    });
    if (error) {
      alert("An error occurred while shortening the link");
      return;
    }
    console.log(data); // This will help you understand the nature of the data
    alert("Link shortened successfully");
    createShortKey();
    form.long_url = "";
  } catch (error) {
    console.error(error); // This will help you understand the nature of the error
  }
};
</script>
<template>
  <div class="card">
    <form @submit.prevent="handleLinkForm">
      <div class="flex gap-5 items-end">
        <div class="w-5/12">
          <label for="url" class="text-white">URL</label>
          <input
            v-model="form.long_url"
            type="text"
            id="url"
            class="input"
            placeholder="https://linkique.vercel.app"
          />
        </div>
        <div class="w-5/12">
          <label for="title" class="text-white">Short key</label>
          <input
            type="text"
            class="input"
            placeholder="Linkique"
            v-model="form.key"
          />
        </div>
        <button class="w-2/12 btn-primary py-3 rounded-xl">Shorten</button>
      </div>
    </form>
  </div>
</template>
