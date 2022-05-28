<template>
  <article-lists-home-page :news="news" />
</template>

<script setup>
// export default {
//   name: 'IndexPage',
//   async asyncData ({ $content, params }) {
//     const news = await $content('articles', params.slug)
//       .only([
//         'title',
//         'shortDescription',
//         'img',
//         'slug',
//         'description',
//         'author',
//         'createdAt',
//         'category'
//       ])
//       .sortBy('createdAt', 'asc')
//       .fetch()

//     console.log(news)

//     return {
//       news
//     }
//   }
// }
const { data: news } = await useAsyncData('equal', () => {
  return queryContent('/articles').only([
    'title',
    'shortDescription',
    'img',
    'slug',
    'description',
    'author',
    'createdAt',
    'category'
  ])
    .sort('createdAt', 'asc')
    .find()
})
</script>
