<template>
  <div>
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <v-app>
      <v-container>
        <Navbar />
        <TabBar />
        <NuxtPage />
      </v-container>
    </v-app>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
