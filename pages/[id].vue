<script setup lang="ts">
const params = useRoute().params;
// from the params ID, I'll fetch teh data from supabase & redirect to the long URL

if (!params.id) {
  throw createError({
    statusCode: 404,
    message: "Not Found",
  });
}
const client = useSupabaseClient();

const { data } = await useAsyncData("link", async () => {
  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("key", params.id)
    .single();
  if (error) {
    throw error;
  }
  return data;
});
</script>
<template>
  <div>
    <h1>Redirecting...</h1>
  </div>
  <div class="pt-[200px]">
    {{ params }}
    {{ data }}
  </div>
</template>
