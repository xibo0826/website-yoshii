<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">新着情報</h1>
      
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2E7D32]"></div>
      </div>

      <div v-else-if="error" class="bg-red-50 p-4 rounded-lg">
        <p class="text-red-600">{{ error }}</p>
      </div>
      
      <div v-else class="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
        <div class="space-y-8">
          <div v-for="notice in notices" :key="notice.id" class="pb-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <div class="flex items-center mb-3">
              <span class="text-[#81C784] font-semibold">{{ formatDate(notice.date) }}</span>
              <span class="mx-4 text-gray-300">|</span>
              <span class="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-sm">{{ notice.category }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ notice.title }}</h3>
            <p class="text-gray-600 leading-relaxed whitespace-pre-line" v-html="notice.content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/api/news';

export default {
  name: 'NewsView',
  data() {
    return {
      notices: [],
      loading: true,
      error: null
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\//g, '-');
    },
    async fetchNews() {
      try {
        this.loading = true;
        this.error = null;
        const data = await getNewsList();
        this.notices = data;
      } catch (err) {
        this.error = 'ニュースの取得に失敗しました。しばらくしてから再度お試しください。';
        console.error('Failed to fetch news:', err);
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchNews();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
</style> 