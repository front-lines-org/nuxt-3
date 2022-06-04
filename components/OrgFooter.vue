<template>
  <div>
    <v-footer padless absolute class="tw-w-full">
      <v-card class="flex tw-w-full" flat tile>
        <v-divider />
        <v-card-title>
          <OrgLogo />
          <strong class="subheading" />

          <v-spacer />

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon flat>Sh
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 text-center">
          {{ new Date().getFullYear() }} —
          <strong>Front Lines Organisation</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>

export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-github',
      'mdi-instagram',
      'mdi-discord'
    ]
  })
}
</script>

<style scoped>
.v-footer .logo {
  transform: scale(0.75);
}
</style>
