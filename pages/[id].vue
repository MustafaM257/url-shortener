<script setup lang="ts">
import { type Database } from "~/types/supabase";
import geoip from "geoip-lite";

const params = useRoute().params;
const client = useSupabaseClient<Database>();
const data = ref(null);

// Wrap async operations in a function
async function fetchDataAndRedirect() {
  if (!params.id) {
    throw createError({
      statusCode: 404,
      message: "Not Found",
    });
  }

  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("key", params.id)
    .single();

  if (error) throw error;

  if (data.long_url) {
    const useragent = useAgent();
    console.log({ useragent });
    if (useragent && useragent.ip) {
      const geo = geoip.lookup(useragent.ip);
      console.log({ geo });
    }
    useRedirect(data.long_url, 302);
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
