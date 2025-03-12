<template>
  <div class="min-h-screen">
    <!-- Banner区域 -->
    <div class="relative h-[500px]">
      <swiper class="h-full" :options="swiperOption">
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
      </swiper>
    </div>
    <!-- 主要内容区域 -->
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
          <a href="#" class="flex items-center text-[#81C784] hover:text-[#2E7D32] transition-colors duration-300">
            <span class="mr-2">更多</span>
            <i class="fas fa-chevron-right text-sm"></i>
          </a>
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
      <!-- 公司地图 -->
      <div class="mb-16">
        <div class="mb-12">
          <h2 class="text-3xl font-bold">アクセスマップ</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="https://ai-public.mastergo.com/ai/img_res/86d1173623d27bef23b41054aec45bd2.jpg" alt="公司外观"
              class="w-full h-[400px] object-cover" />
          </div>
          <div>
            <div ref="mapContainer" class="w-full h-[400px]"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 公司信息 -->
          <div>
            <h3 class="text-xl font-bold mb-4">联系我们</h3>
            <p class="mb-2">地址：上海市浦东新区张江高科技园区</p>
            <p class="mb-2">电话：400-888-9999</p>
            <p>邮箱：contact@recycling.com</p>
          </div>
          <!-- 导航链接 -->
          <div>
            <h3 class="text-xl font-bold mb-4">快速导航</h3>
            <ul class="space-y-2">
              <li v-for="(item, index) in navItems" :key="index">
                <a href="#" class="hover:text-[#81C784]">{{ item }}</a>
              </li>
            </ul>
          </div>
          <!-- 社交媒体 -->
          <div>
            <h3 class="text-xl font-bold mb-4">关注我们</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <img src="https://ai-public.mastergo.com/ai/img_res/2d1f1a89ca3eac853cb18da9ddba89a0.jpg" alt="微信二维码"
                  class="w-30 h-30 mx-auto mb-2" />
                <p>微信公众号</p>
              </div>
              <div class="text-center">
                <img src="https://ai-public.mastergo.com/ai/img_res/cfe725bd453eed4174aaa4160242e65a.jpg" alt="LINE二维码"
                  class="w-30 h-30 mx-auto mb-2" />
                <p>LINE</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 环保回收利用. 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
/* global google */
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initializeMap`;
      script.async = true;
      script.defer = true;
      window.initializeMap = () => {
        const location = { lat: 31.203, lng: 121.597 };
        const map = new google.maps.Map(this.$refs.mapContainer, {
          zoom: 15,
          center: location,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#242f3e' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#17263c' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#515c6d' }]
            }
          ]
        });
        new google.maps.Marker({
          position: location,
          map: map,
          title: '环保回收利用'
        });
      };
      document.head.appendChild(script);
    }
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
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      bannerSlides: [
        {
          image: 'https://ai-public.mastergo.com/ai/img_res/c19fa4519c3c1f95de4e224879086ebf.jpg',
          title: '专业资源回收，循环再利用',
          description: '致力于为环境保护贡献力量'
        },
        {
          image: 'https://ai-public.mastergo.com/ai/img_res/d1264701aae4313c8cdb490683b395ab.jpg',
          title: '専門的な鑑定、適正価格',
          description: '最高品質のリサイクルサービスを提供'
        },
        {
          image: 'https://ai-public.mastergo.com/ai/img_res/50583e23a27755218eb65cd25f57733d.jpg',
          title: '绿色环保，可持续发展',
          description: '创造更美好的未来'
        }
      ],
      categories: [
        {
          name: 'スクラップ買取',
          image: 'https://ai-public.mastergo.com/ai/img_res/4a76874909190949d9c0229809e47c8b.jpg'
        },
        {
          name: '中古買取',
          image: 'https://ai-public.mastergo.com/ai/img_res/bfe4d607ddb9db79956ff287fb7bab88.jpg'
        },
        {
          name: '骨董品買取・片付け',
          image: 'https://ai-public.mastergo.com/ai/img_res/c59613c215546e1b3b392452a746ee40.jpg'
        },
        {
          name: '出張買取',
          image: 'https://ai-public.mastergo.com/ai/img_res/5086d82f6b368d2cdebe3848701704ff.jpg'
        }
      ]
    };
  }
};
</script>
<style scoped></style>