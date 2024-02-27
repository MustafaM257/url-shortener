<script setup lang="ts">
const supabaseAuth = useSupabaseClient();

const handleGithubLogin = () => {
  supabaseAuth.auth.signInWithOAuth({
    provider: "github",
  });
};
</script>
<template>
  <div class="h-screen grid place-content-center">
    <div class="container">
      <div class="card">
        <div class="flex justify-center">
          <div
            class="flex justify-center w-20 h-20 items-center rounded-full border shadow-xl border-white/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
        </div>
        <button
          class="btn-primary py-3 w-full rounded-full mt-5"
          @click="handleGithubLogin"
        >
          Continue with github
        </button>

        <hr class="border-white/10 my-8" />
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="input"
              placeholder="mustafa.m257@proton.me"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="input"
              placeholder="supersecret"
            />
          </div>
          <button class="btn-primary py-3 w-full rounded-full mt-6">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
