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
          <a href="#" class="flex items-center text-[#81C784] hover:text-[#2E7D32] transition-colors duration-300">
            <span class="mr-2">更多</span>
            <i class="fas fa-chevron-right text-sm"></i>
          </a>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="space-y-6">
            <div v-for="(notice, index) in notices" :key="index" class="pb-4 border-b border-gray-200 last:border-b-0">
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
          date: '2024-01-15',
          category: '服务通知',
          title: '春节期间回收服务时间调整公告',
          content: '尊敬的客户，为了更好地服务于您，我司春节期间（2024年2月9日至2月17日）将实行特殊工作时间。详情请致电咨询。'
        },
        {
          date: '2024-01-10',
          category: '价格公告',
          title: '1月废旧金属回收价格调整通知',
          content: '因市场行情变动，本月起部分废旧金属回收价格将进行适当调整，具体价格以现场评估为准。'
        },
        {
          date: '2024-01-05',
          category: '活动公告',
          title: '大型企业年度设备更新回收优惠活动',
          content: '即日起至2024年3月31日，针对大型企业的整体设备更新项目，推出专属优惠方案。'
        }
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
          name: '骨董品買取・片付け',
          image: require('@/assets/img/category3.jpg')
        },
        {
          name: '出張買取',
          image: require('@/assets/img/category4.jpg')
        }
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