<template>
  <div class="min-h-screen">
    <!-- Banner区域 -->
    <div class="relative h-[500px]">
      <swiper :options="swiperOption" class="h-full">
        <swiper-slide v-for="(slide, index) in bannerSlides" :key="index">
          <div class="relative h-full">
            <img :src="slide.image" class="w-full h-full object-cover" alt="banner" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start">
              <div class="container mx-auto px-8">
                <h2 class="text-4xl font-bold text-white mb-4">{{ slide.title }}</h2>
                <p class="text-xl text-white">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="container mx-auto px-4 py-12">
      <!-- 新着情報 -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold">新着情報</h2>
          <router-link to="/news" class="flex items-center text-[#81C784] hover:text-[#2E7D32] transition-colors duration-300">
            <span class="mr-2">More</span>
            <i class="fas fa-chevron-right text-sm"></i>
          </router-link>
        </div>
        <div v-if="newsLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2E7D32]"></div>
        </div>
        <div v-else-if="newsError" class="bg-red-50 p-4 rounded-lg">
          <p class="text-red-600">{{ newsError }}</p>
        </div>
        <div v-else class="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <div class="space-y-6">
            <div v-for="notice in latestNotices" :key="notice.id" class="pb-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <div class="flex items-center mb-2">
                <span class="text-[#81C784] font-semibold">{{ formatDate(notice.date) }}</span>
                <span class="mx-4 text-gray-300">|</span>
                <span class="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-sm">{{ notice.category }}</span>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ notice.title }}</h3>
              <p class="text-gray-600" v-html="notice.content"></p>
            </div>
          </div>
        </div>
      </div>
      <!-- 事業内容 -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold">事業内容</h2>
        </div>
        <div v-if="businessLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2E7D32]"></div>
        </div>
        <div v-else-if="businessError" class="bg-red-50 p-4 rounded-lg">
          <p class="text-red-600">{{ businessError }}</p>
        </div>
        <div v-else class="grid md:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="business in businesses" :key="business.id" class="rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
            <img :src="require(`@/assets/${business.image}`)" class="w-full h-48 object-cover" :alt="business.name" />
            <div class="p-4 bg-white relative">
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-lg font-semibold">{{ business.name }}</h3>
                <router-link 
                  :to="getBusinessRoute(business.name)"
                  class="text-[#81C784] hover:text-[#2E7D32] transition-colors duration-300 flex items-center"
                >
                  <span class="mr-2">詳細</span>
                  <i class="fas fa-chevron-right text-sm"></i>
                </router-link>
              </div>
              <p v-if="business.remark" class="text-gray-600 mt-2">{{ business.remark }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- アクセスマップ -->
      <div class="mb-16">
        <div class="mb-12">
          <h2 class="text-3xl font-bold">アクセスマップ</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="@/assets/img/company.jpg" alt="会社外観" class="w-full h-[450px] object-cover" />
          </div>
          <div>
            <div class="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.9045369291332!2d135.60700867951795!3d34.51256374796242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600129d101c7d1e7%3A0xbac9db9e6c08f1e!2z44CSNTg0LTAwMjEg5aSn6Ziq5bqc5a-M55Sw5p6X5biC5Lit6YeO55S677yR5LiB55uu77yU77yW77yU4oiS77yU!5e0!3m2!1sja!2sjp!4v1737964640672!5m2!1sja!2sjp"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { getNewsList } from '@/api/news';
import { getBusinessList } from '@/api/business';
import 'swiper/css/swiper.css';

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      newsLoading: true,
      newsError: null,
      notices: [],
      businessLoading: true,
      businessError: null,
      businesses: [],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      bannerSlides: [
        {
          image: require('@/assets/img/banner1.jpg'),
          title: '専門的な鑑定、適正価格',
          description: '最高品質のリサイクルサービスを提供'
        },
        {
          image: require('@/assets/img/banner2.jpg'),
          title: '出張買取、即日対応',
          description: 'お客様のご都合に合わせて、スピーディーに対応いたします'
        },
        {
          image: require('@/assets/img/banner3.jpg'),
          title: '安心・信頼のサービス',
          description: '経験豊富なスタッフが丁寧に対応いたします'
        }
      ],
    };
  },
  computed: {
    latestNotices() {
      return this.notices.slice(0, 3);
    }
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
    getBusinessRoute(name) {
      const routeMap = {
        'スクラップ買取': '/scrap',
        '中古買取': '/used',
        '出張買取': '/visit',
        '片付け・遺品整理': '/tidying'
      };
      return routeMap[name] || '/';
    },
    async fetchNews() {
      try {
        this.newsLoading = true;
        this.newsError = null;
        const data = await getNewsList();
        if (Array.isArray(data)) {
          this.notices = data;
        } else {
          console.error('Invalid news data format:', data);
          this.newsError = 'お知らせの取得に失敗しました';
        }
      } catch (err) {
        console.error('Failed to fetch news:', err);
        this.newsError = err.message || 'お知らせの取得に失敗しました';
      } finally {
        this.newsLoading = false;
      }
    },
    async fetchBusinesses() {
      try {
        this.businessLoading = true;
        this.businessError = null;
        const data = await getBusinessList();
        if (Array.isArray(data)) {
          this.businesses = data;
        } else {
          console.error('Invalid business data format:', data);
          this.businessError = '事業内容の取得に失敗しました';
        }
      } catch (err) {
        console.error('Failed to fetch businesses:', err);
        this.businessError = err.message || '事業内容の取得に失敗しました';
      } finally {
        this.businessLoading = false;
      }
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.fetchNews();
    this.fetchBusinesses();
  }
};
</script>
<style scoped>
.swiper-container {
  height: 100%;
  width: 100%;
}

.swiper-pagination-bullet {
  background: white !important;
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  background: white !important;
  opacity: 1;
}

/* Responsive text sizes */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2rem;
  }

  .text-xl {
    font-size: 1.1rem;
  }
}
</style>