<script setup lang="ts">
const {
  formatDate
} = useFormatter()

const config = useRuntimeConfig()

const today = new Date();
const fromOneMonthAgo = formatDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()))
const toOneMonthAgo = formatDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate() + 1))

const url = `https://newsapi.org/v2/everything?q=bitcoin&from=${fromOneMonthAgo}&to=${toOneMonthAgo}&sortBy=publishedAt&pageSize=20&apiKey=${config.API_KEY}`

type ArticleRes = {
  articles: {
    author: string
    content: string
    description: string
    publishedAt: string
    title: string
    url: string
    urlToImage: string
  }[]
  status: string
  totalResults: number
}

const {
  data: articleRes
} = await useFetch<ArticleRes>(url)
</script>

<template>
  <nuxt-layout>
    <v-container fluid>
      <v-row>
        <v-col v-for="article in articleRes?.articles">
          <article-card
            :sub-title="article.description"
            :text="article.content"
            :title="article.title"
            :url="article.url"
            :url-to-image="article.urlToImage"
          />
        </v-col>
      </v-row>
    </v-container>
  </nuxt-layout>
</template>
