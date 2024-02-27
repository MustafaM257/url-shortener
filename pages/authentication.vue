<script setup lang="ts">
const supabaseAuth = useSupabaseClient();

const isLoggingIn = ref<Boolean>(true);
const form = reactive({
  email: "",
  password: "",
});
const errors = ref("");

const handleGithubLogin = () => {
  supabaseAuth.auth.signInWithOAuth({
    provider: "github",
  });
};
const handleSignup = async () => {
  if (!form.email || !form.password) {
    errors.value = "Please fill in the form";
  }
  try {
    const { data, error } = await supabaseAuth.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      errors.value = error.message;
    }
    console.log({ data });
  } catch (error) {
    errors.value = "Something went wrong";
  }
};
const handleLoginForm = async () => {
  if (!isLoggingIn.value) return await handleSignup();
  if (!form.email || !form.password) {
    errors.value = "Please fill in the form";
  }
  try {
    const { data, error } = await supabaseAuth.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      errors.value = error.message;
    }
    console.log({ data });
  } catch (error) {
    errors.value = "Something went wrong";
  }
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
        <form @submit.prevent="handleLoginForm">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="input"
              placeholder="mustafa.m257@proton.me"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="form.password"
              type="password"
              id="password"
              class="input"
              placeholder="supersecret"
            />
          </div>
          <button
            class="btn-primary py-3 w-full rounded-full mt-6"
            type="submit"
          >
            <template v-if="isLoggingIn"> Login</template>
            <template v-else> Signup</template>
          </button>
          <div class="text-center mt-5">
            <button
              type="button"
              class="text-center"
              @click="isLoggingIn = !isLoggingIn"
            >
              <template v-if="isLoggingIn">
                Don't have an account ? Signup!
              </template>
              <template v-else> Already have an account ? Login!</template>
            </button>
          </div>

          <p class="text-center text-red-500 mt-4">{{ errors }}</p>
        </form>
      </div>
    </div>
  </div>
</template>
