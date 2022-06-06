<template>
  <article-lists-home-page :news="news" />
</template>

<script setup>
const { data: news } = await useAsyncData('equal', () => {
  return queryContent('/articles').only([
    'title',
    'shortDescription',
    'img',
    '_path',
    '_id',
    'description',
    'author',
    'createdAt',
    'category'
  ])
    .sort({ createdAt: 0 })
    .find()
})

</script>
