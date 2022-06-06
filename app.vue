<template>
  <div>
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <v-app>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-app>
  </div>
</template>

<style scss>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;700&family=Merriweather:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
.site-container {
  min-height: 90vh;
  width: 100%;
}
</style>
