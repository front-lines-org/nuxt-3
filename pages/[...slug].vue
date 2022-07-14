<template>
<div> 
  <ContentDoc class="tw-prose tw-prose-gray tw-dark:prose-invert tw-max-w-none">
    <template #default="{ doc: article }">
      <article
        v-if="!article.isIndex"
        class="tw-prose tw-prose-sm tw-sm:prose tw-lg:prose-lg tw-xl:prose-2xl tw-mx-auto tw-mt-9"
      >
        <h3 class="primary-color font-weight-black">
          {{ article.category }}
        </h3>
        <h1 class="h1">
          {{ article.title }}
        </h1>
        <p class="tw-font-bold">
          {{ article.description }}
        </p>
        <author-name
          :author-name="article.author"
          :author-user-name="article.author"
          :article-date="article.createdAt || article.updatedAt"
        />
        <img :src="`/img/${article.img}`" :alt="article.img" class="mb-0" />
        <p class="text-xs font-light mt-0 text-slate-300 tw-not-prose">
          Image: Ukraine ministry of Defense. Troops training
        </p>

          <MarkdownRenderer :value="article" />
      </article>
       <MarkdownRenderer v-else :value="article" />
    </template>

    <!-- Slot if document is not found -->
    <template #not-found>
      <h1 class="text-2xl">Page not found</h1>
    </template>
  </ContentDoc>
  </div>
</template>

<style lang="sass" scoped></style>
