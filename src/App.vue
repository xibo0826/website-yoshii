<template>
  <div id="app">
    <!-- 顶部Logo区域 -->
    <div class="bg-white h-24 md:h-28 flex items-center justify-between px-4 md:px-8">
      <div class="flex items-center">
        <img src="@/assets/img/logo.svg" alt="" class="h-32 md:h-36" />
      </div>
      <!-- Mobile contact buttons and menu -->
      <div class="flex items-center space-x-1 md:hidden">
        <!-- Email button -->
        <a href="mailto:yoshiishirakawa1013@gmail.com"
          class="p-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors duration-200">
          <svg class="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <!-- Phone button -->
        <a href="tel:0721606917"
          class="p-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors duration-200">
          <svg class="h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <!-- Hamburger menu button -->
        <button @click="toggleMenu"
          class="text-gray-600 hover:text-gray-300 focus:outline-none p-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors duration-200">
          <svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Desktop contact info -->
      <div class="hidden md:block text-right">
        <div class="flex items-center justify-end">
          <i class="fas fa-phone-alt text-gray-800 mr-2"></i>
          <span class="text-2xl font-bold text-gray-800">07-2160-6917</span>
        </div>
        <div class="text-gray-600">営業時間：8:00-18:00</div>
        <div class="text-gray-600">メール：yoshiishirakawa1013@gmail.com</div>
      </div>
    </div>

    <!-- PC导航菜单 -->
    <nav class="bg-[#222222] w-full hidden md:block">
      <ul class="flex justify-center items-stretch h-[50px] w-full">
        <li v-for="(item, index) in menuItems" :key="index" class="flex-1">
          <router-link :to="item.path"
            class="text-white border border-gray-600 hover:border-white transition-colors duration-300 h-full flex items-center justify-center font-bold">
            {{ item.name }}</router-link>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
      <div v-if="isMenuOpen" class="md:hidden">
        <!-- Mobile navigation -->
        <nav class="bg-[#222222]">
          <div class="px-2 py-3">
            <router-link v-for="(item, index) in menuItems" :key="index" :to="item.path"
              class="block text-white py-2 px-4 text-base font-medium hover:bg-gray-700 rounded transition-colors duration-200"
              @click="closeMenu">
              {{ item.name }}
            </router-link>
          </div>
        </nav>
      </div>
    </transition>

    <!-- 主页面 -->
    <router-view />

    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white mt-12">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4">嘉溢株式会社</h3>
            <p class="text-gray-400">大阪府富田林市中野町一丁目464番地4</p>
          </div>
          <!-- <div>
            <h3 class="text-xl font-bold mb-4">メニュー</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#news">お知らせ</a></li>
              <li><a href="#price">買取商材・価格</a></li>
              <li><a href="#map">アクセス</a></li>
            </ul>
          </div> -->
          <div>
            <h3 class="text-xl font-bold mb-4">連絡先</h3>
            <ul class="space-y-2 text-gray-400">
              <li>電話：07-2160-6917</li>
              <li>FAX：07-2160-6916</li>
              <li>携帯：080-9125-6888(日本語)</li>
              <li>携帯：090-3942-7888(中国語)</li>
              <li>メール：yoshiishirakawa1013@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">SNS</h3>
            <div class="flex space-x-4">
              <img src="@/assets/img/line.jpg" class="w-[160px]" alt="line">
              <img src="./assets/img/wechat.jpg" class="w-[160px]" alt="wechat">
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8">
          <div class="text-center text-gray-400">
            <p>大阪府公安委員会許可 第62114R07330号</p>
            <p>&copy; Copyright Yoshii Co., Ltd. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { name: 'ホーム', path: '/home' },
        { name: '会社情報', path: '/company' },
        { name: 'ストラップ買取', path: '/strap' },
        { name: '中古買取', path: '/used' },
        { name: '出張買取', path: '/visit' },
        { name: '骨董品買取・片付け', path: '/antique' },
        { name: '会社案内', path: '/guide' },
        { name: '新着情報', path: '/news' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  watch: {
    $route() {
      this.closeMenu();
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.closeMenu();
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  }
};
</script>

<style>
.nav-link {
  transition: all 0.3s ease;
}

.nav-link:hover {
  border-bottom: 2px solid white;
}

/* Add smooth transition for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Prevent scrolling when mobile menu is open */
.menu-open {
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-link {
    padding: 0.75rem 1rem;
  }
}
</style>