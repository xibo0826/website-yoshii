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
      <!-- 新着情报 -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold">新着情报</h2>
          <router-link to="/news" class="flex items-center text-[#81C784] hover:text-[#2E7D32] transition-colors duration-300">
            <span class="mr-2">More</span>
            <i class="fas fa-chevron-right text-sm"></i>
          </router-link>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <div class="space-y-6">
            <div v-for="(notice, index) in notices" :key="index" class="pb-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <div class="flex items-center mb-2">
                <span class="text-[#81C784] font-semibold">{{ notice.date }}</span>
                <span class="mx-4 text-gray-300">|</span>
                <span class="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-sm">{{ notice.category }}</span>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ notice.title }}</h3>
              <p class="text-gray-600">{{ notice.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 回收品类 -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold">事業内容</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="(category, index) in categories" :key="index" class="rounded-lg overflow-hidden shadow-lg">
            <img :src="category.image" class="w-full h-48 object-cover" :alt="category.name" />
            <div class="p-4 bg-white">
              <h3 class="text-lg font-semibold">{{ category.name }}</h3>
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
import 'swiper/css/swiper.css';

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
  },
  methods: {
  },
  data() {
    return {
      notices: [
        {
          date: '2023-12-28',
          category: 'お知らせ',
          title: '年末年始の営業時間について',
          content: '平素は格別のご高配を賜り、誠にありがとうございます。\n年末年始の営業時間を下記の通りとさせていただきます：\n\n12月30日～1月3日：休業\n1月4日より通常営業\n\n緊急の場合は携帯電話にてご連絡ください。\nご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。'
        },
        {
          date: '2023-12-20',
          category: 'キャンペーン',
          title: '年末大掃除応援キャンペーン実施中',
          content: '年末の大掃除に合わせて、不用品回収の特別キャンペーンを実施いたします。\n\n期間：12月20日～12月29日\n特典：\n・回収料金20%OFF\n・複数個所の回収で追加10%OFF\n・見積り無料\n・即日対応可能\n\nこの機会に是非ご利用ください。'
        },
        {
          date: '2023-12-15',
          category: '新サービス',
          title: '法人向け定期回収サービス開始のお知らせ',
          content: '法人のお客様向けに、定期回収サービスを開始いたしました。\n\n主なサービス内容：\n・毎月定期的な回収\n・回収スケジュールのカスタマイズ\n・専用の回収ボックス提供\n・電子マニフェスト対応\n・優先対応\n\n詳細は営業担当までお問い合わせください。',
        },
      ],
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
      categories: [
        {
          name: 'スクラップ買取',
          image: require('@/assets/img/category1.jpg')
        },
        {
          name: '中古買取',
          image: require('@/assets/img/category2.jpg')
        },
        {
          name: '出張買取',
          image: require('@/assets/img/category4.jpg')
        },
        {
          name: '片付け・遺品整理',
          image: require('@/assets/img/category3.jpg')
        },
      ]
    };
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