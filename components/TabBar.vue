<template>
  <v-tabs
    grow
    elevation="0"
    class="tw-border-t tw-border-b sticky top-0"
    :show-arrows="true"
  >
    <ContentNavigation v-slot="{ navigation }">
      <div v-for="link of navigation" :key="link._path">
        <v-tab :to="link._path">{{link.navTitle || link.title }}</v-tab>
      </div>
    </ContentNavigation>
  </v-tabs>
</template>

