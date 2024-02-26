<template>
  <main class="pt-24">
    <section class="container">
      <DashboardHeader />
    </section>
    <section class="container mt-10">
      <DashboardLinkForm />
    </section>
    <section class="container mt-10">
      <DashboardLinkDetails
        v-for="i in 5"
        class="mb-5"
        :link="{
          id: '1',
          shortKey: 'shortKey prop',
          longUrl: 'longUrl prop',
        }"
      />
    </section>
  </main>
</template>
<script setup lang="ts"></script>
