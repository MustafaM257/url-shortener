<script setup lang="ts">
const params = useRoute().params;
const client = useSupabaseClient();
const data = ref(null);

// Wrap async operations in a function
async function fetchDataAndRedirect() {
  if (!params.id) {
    throw createError({
      statusCode: 404,
      message: "Not Found",
    });
  }

  const { data: linkData, error } = await client
    .from("links")
    .select("*")
    .eq("key", params.id)
    .single();

  if (error) throw error;

  data.value = linkData;

  if (linkData?.long_url) {
    useRedirect(linkData.long_url);
  }
}

onMounted(() => {
  fetchDataAndRedirect().catch((error) => {
    console.error(error);
  });
});
</script>
<template>
  <div>
    <h1>Redirecting...</h1>
    <div class="pt-[200px]">
      {{ params }}
      {{ data }}
    </div>
  </div>
</template>
