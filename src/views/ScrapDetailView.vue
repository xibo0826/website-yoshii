<template>
    <div class="min-h-screen bg-gray-50" :key="currentCategoryId">
        <!-- パンくずリスト -->
        <div class="bg-white shadow">
            <div class="container mx-auto px-4 py-3">
                <div class="flex items-center text-sm text-gray-600">
                    <router-link :to="{ name: 'scrap-list' }" class="hover:text-[#2E7D32]">スクラップ買取</router-link>
                    <span class="mx-2">/</span>
                    <span class="text-gray-900">{{ categoryName }}</span>
                </div>
            </div>
        </div>

        <!-- ローディング表示 -->
        <div v-if="loading" class="container mx-auto px-4 py-12">
            <div class="flex justify-center items-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2E7D32]"></div>
            </div>
        </div>

        <!-- エラー表示 -->
        <div v-else-if="error" class="container mx-auto px-4 py-12">
            <div class="bg-red-50 p-4 rounded-lg">
                <p class="text-red-600">{{ error }}</p>
            </div>
        </div>

        <!-- メインコンテンツ -->
        <template v-else>
            <!-- 商材详细弹出层 -->
            <div v-if="selectedItem"
                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-full">
                <div class="bg-white rounded-lg w-[1000px] mx-4 overflow-hidden">
                    <!-- 头部标题和关闭按钮 -->
                    <div class="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                        <h2 class="text-xl font-bold text-gray-900">詳細</h2>
                        <button @click="selectedItem = null" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    <div class="flex flex-col md:flex-row h-[500px]">
                        <!-- 图片 -->
                        <div class="w-full md:w-1/2 relative p-4">
                            <div class="relative rounded-lg overflow-hidden h-48 md:h-full">
                                <img :src="require(`@/assets/${selectedItem.image}`)" :alt="selectedItem.name" class="w-full h-full object-cover" @error="handleImageError">
                                <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                            </div>
                        </div>
                        <!-- 内容 -->
                        <div class="w-full md:w-1/2 flex flex-col">
                            <div class="p-6 flex-grow overflow-y-auto">
                                <div class="space-y-4">
                                    <div>
                                        <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedItem.name }}</h3>
                                        <span class="text-[#2E7D32] font-bold text-2xl">￥{{ formatPrice(selectedItem.price) }}円/{{ selectedItem.unit }}</span>
                                    </div>
                                    <div class="flex items-center text-gray-600">
                                        <i class="fas fa-balance-scale mr-2"></i>
                                        <span>取引単位: {{ selectedItem.unit }}</span>
                                    </div>
                                    <div class="flex items-start text-gray-600">
                                        <i class="fas fa-info-circle mr-2 mt-1"></i>
                                        <div class="flex-1">
                                            <h4 class="font-bold mb-2">商品説明</h4>
                                            <p>{{ selectedItem.description || '特記事項はありません。' }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 底部按钮 -->
                    <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div class="max-w-xs mx-auto">
                            <a href="tel:07-2160-6917"
                                class="block w-full bg-[#2E7D32] text-white text-center py-3 rounded-lg hover:bg-[#1B5E20] transition-colors duration-300">
                                <i class="fas fa-phone mr-2"></i>お問い合わせ
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto px-4 py-12">
                <!-- ヘッダー -->
                <div class="mb-12">
                    <h1 class="text-4xl font-bold mb-4">{{ categoryName }}</h1>
                    <p class="text-xl text-gray-600">{{ categoryDescription }}</p>
                </div>

                <!-- 買取商材・価格 -->
                <div class="mb-16">
                    <h2 class="text-2xl font-bold mb-8">買取商材・価格</h2>
                    <div v-if="items && items.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="item in items" :key="item.id"
                            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div class="relative h-48">
                                <img :src="require(`@/assets/${item.image}`)" :alt="item.name" class="w-full h-full object-cover"
                                    @error="handleImageError">
                                <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-lg font-bold text-gray-900">{{ item.name }}</h3>
                                    <span class="text-[#2E7D32] font-bold text-xl">￥{{ formatPrice(item.price) }}円/{{ item.unit }}(税込)</span>
                                </div>
                                <div class="flex items-center text-sm text-gray-600 mb-2">
                                    <i class="fas fa-balance-scale mr-2"></i>
                                    <span>取引単位: {{ item.unit }}</span>
                                </div>
                                <div class="flex items-start text-sm text-gray-600">
                                    <i class="fas fa-info-circle mr-2 mt-1"></i>
                                    <span class="line-clamp-1">{{ item.description }}</span>
                                </div>
                                <div class="mt-4 pt-4 border-t border-gray-100">
                                    <button @click="showItemDetail(item)"
                                        class="w-full bg-[#E8F5E9] text-[#2E7D32] py-2 rounded-lg hover:bg-[#C8E6C9] transition-colors duration-300">
                                        <i class="fas fa-search mr-2"></i>詳細を見る
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-center text-gray-600 py-8">
                        商品情報が見つかりませんでした。
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { getScrapList, getScrapType } from '@/api/scrap';

export default {
    name: 'ScrapDetailView',
    data() {
        return {
            loading: true,
            error: null,
            items: [],
            selectedItem: null,
            categoryInfo: null
        };
    },
    computed: {
        currentCategoryId() {
            return this.$route.params.categoryId || '1';
        },
        categoryName() {
            return this.categoryInfo?.name || '';
        },
        categoryDescription() {
            return this.categoryInfo?.description || '';
        }
    },
    methods: {
        async fetchScrapType() {
            try {
                const response = await getScrapType(this.currentCategoryId);
                if (response && response.code === 1) {
                    this.categoryInfo = response.data[0];
                } else {
                    console.error('Failed to fetch scrap type:', response);
                }
            } catch (err) {
                console.error('Error fetching scrap type:', err);
            }
        },
        async fetchScrapList() {
            try {
                this.loading = true;
                this.error = null;
                const response = await getScrapList(this.currentCategoryId);
                console.log('API Response:', response);
                
                if (response && response.code === 1) {
                    this.items = response.data || [];
                    if (this.items.length === 0) {
                        this.error = '商品情報が見つかりませんでした。';
                    }
                } else {
                    this.error = response?.message || '商品情報の取得に失敗しました。';
                    console.error('API Error Response:', response);
                }
            } catch (err) {
                console.error('Fetch Error Details:', {
                    message: err.message,
                    response: err.response,
                    config: err.config
                });
                
                if (err.response) {
                    this.error = `サーバーエラー: ${err.response.status} ${err.response.statusText}`;
                } else if (err.request) {
                    this.error = 'サーバーからの応答がありません';
                } else {
                    this.error = 'ネットワーク接続に問題があります';
                }
            } finally {
                this.loading = false;
            }
        },
        handleImageError(event) {
            event.target.src = require('@/assets/img/scraps/default.jpg');
        },
        showItemDetail(item) {
            this.selectedItem = { ...item };
        },
        formatPrice(price) {
            if (!price) return '0';
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        async loadPageData() {
            await Promise.all([
                this.fetchScrapType(),
                this.fetchScrapList()
            ]);
        }
    },
    watch: {
        currentCategoryId: {
            immediate: true,
            handler() {
                this.loadPageData();
            }
        }
    },
    created() {
        window.scrollTo(0, 0);
    }
};
</script>

<style>
.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>