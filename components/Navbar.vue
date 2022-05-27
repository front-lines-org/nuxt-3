<template>
  <v-toolbar>
    <v-toolbar-title>
      <OrgLogo />
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-app-bar-nav-icon />
  </v-toolbar>
</template>
<script>
export default {
  props: {
    title: {
      type: Boolean,
      default: false
    },
    onOpenMenu: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
