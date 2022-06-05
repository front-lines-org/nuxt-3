<template>
  <div class="site-container tw-mb-44 mx-auto">
    <article
      class="tw-prose tw-prose-gray tw-dark:prose-invert tw-max-w-none tw-mx-auto tw-mt-9"
    >
      <div class="tw-mx-2">
        <ContentDoc class="tw-prose tw-prose-gray tw-dark:prose-invert tw-max-w-none">
          <template #default="{ doc: article }">
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
            <img :src="article.image" :alt="article.img" class="mb-0">
            <p class="text-xs font-light mt-0 text-slate-300 tw-not-prose">
              Image: Ukraine ministry of Defense. Troops training
            </p>

            <ContentRenderer :value="article" />
          </template>

          <!-- Slot if document is not found -->
          <template #not-found>
            <h1 class="text-2xl">
              Page not found
            </h1>
          </template>
        </ContentDoc>
      </div>
    </article>
  </div>
</template>
