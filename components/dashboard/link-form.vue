<template>
  <div class="card">
    <form>
      <div class="flex gap-5 items-end">
        <div class="w-5/12">
          <label for="url" class="text-white">URL</label>
          <input
            type="text"
            id="url"
            class="input"
            placeholder="https://linkique.vercel.app"
          />
        </div>
        <div class="w-5/12">
          <label for="title" class="text-white">Short key</label>
          <input type="text" class="input" placeholder="Linkique" />
        </div>
        <button class="w-2/12 btn-primary py-3 rounded-xl">Shorten</button>
      </div>
    </form>
  </div>
</template>
