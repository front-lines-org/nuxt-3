<script>
/* eslint-disable vue/no-v-for-template-key */
export default {
  props: {
    news: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <v-container no-gutters>
    <v-row>
      <v-col md="8" sm="12" lg="9" order-sm="2" order-md="1">
        <v-row>
          <v-col md="3" sm="12" class="pt-5">
            <template v-for="item in news.slice(4, 7)" :key="`${item.slug}_divider`">
              <article-thumbnail
                v-if="item"
                :key="item._id"
                :title="item.title"
                :slug="item._path"
                :article-type="item.category"
                :img="item.img"
              />
              <v-divider
                horizontal
                class="mb-2"
              />
            </template>
            <v-divider inset vertical class="d-none d-sm-block" />
          </v-col>
          <v-divider inset vertical class="d-none d-sm-block" />
          <v-col md="9" sm="12">
            <v-col md="12">
              <template v-for="item in news.slice(1, 2)">
                <article-thumbnail
                  v-if="item"
                  :key="item._id"
                  :title="item.title"
                  :slug="item._path"
                  :article-type="item.category"
                  :img="item.img"
                  :author="item.author"
                  :description="item.shortDescription || item.description"
                />
              </template>
            </v-col>
            <v-divider inset horizontal class="d-none d-sm-block" />
            <v-col>
              <template v-for="item in news.slice(2, 5)" :key="`${item._path}_divider`">
                <article-preview
                  v-if="item"
                  :key="item._path"
                  :title="item.title"
                  :slug="item._path"
                  :article-type="item.category"
                  :img="item.img"
                />
                <v-divider

                  horizontal
                  class="my-3"
                />
              </template>
            </v-col>
          </v-col>
          <v-divider inset vertical class="d-none d-sm-block" />
        </v-row>
      </v-col>
      <v-col md="3" sm="12" order-sm="1" order-md="2">
        <v-divider inset vertical class="d-none d-sm-block" />
        <h5 class="text-h5 pa-2">
          Latest News
        </h5>
        <v-divider inset horizontal class="d-none d-sm-block" />
        <template v-for="item in news" :key="`${item.slug}_divider`">
          <small-article-thumbnail
            v-if="item"
            :key="item._id"
            :title="item.title"
            :slug="item._path"
            :article-type="item.category"
            :img="item.img"
            :created-at="item.createdAt"
          />
          <v-divider
            horizontal
            class="d-none d-sm-block my-3"
          />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-divider--inset {
  // max-width: initial !important;
  // max-height: initial !important;
  &:not(.v-divider--vertical) {
    margin-top: -1px !important;
    margin-left: 8px !important;
    margin-right: 8px !important;
  }
  &.v-divider--vertical {
    margin-left: -1px !important;
    margin-bottom: 8px !important;
  }
}

.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  margin-top: -1px !important;
  margin-left: 8px !important;
  margin-right: 8px !important;
}
</style>
