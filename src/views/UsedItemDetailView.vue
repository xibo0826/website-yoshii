<template>
    <div>
        <div class="min-h-screen bg-gray-50" :key="currentCategoryId">
            <!-- パンくずリスト -->
            <div class="bg-white shadow">
                <div class="container mx-auto px-4 py-3">
                    <div class="flex items-center text-sm text-gray-600">
                        <router-link :to="{ name: 'used-items-list' }" class="hover:text-[#2E7D32]">中古品買取</router-link>
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

            <template v-else>
                <div class="container mx-auto px-4 py-12">
                    <!-- 商品一覧 -->
                    <div class="mb-16">
                        <h2 class="text-3xl font-bold mb-8">{{ categoryName }}の買取価格表</h2>
                        <div v-if="items.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="item in items" :key="item.id"
                                class="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div class="relative h-49">
                                    <img :src="require(`@/assets/${item.image}`)" :alt="item.name"
                                        class="w-full h-full object-cover" />
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

                    <!-- 買取の流れ -->
                    <div class="mb-16">
                        <h2 class="text-3xl font-bold mb-8">買取の流れ</h2>
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i class="fas fa-phone text-2xl text-[#2E7D32]"></i>
                                    </div>
                                    <h3 class="text-lg font-bold mb-2">1. お問い合わせ</h3>
                                    <p class="text-gray-600">お電話またはメールにてご連絡ください</p>
                                </div>
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i class="fas fa-search text-2xl text-[#2E7D32]"></i>
                                    </div>
                                    <h3 class="text-lg font-bold mb-2">2. 現地査定</h3>
                                    <p class="text-gray-600">専門スタッフが現地で査定いたします</p>
                                </div>
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i class="fas fa-handshake text-2xl text-[#2E7D32]"></i>
                                    </div>
                                    <h3 class="text-lg font-bold mb-2">3. 買取価格の提示</h3>
                                    <p class="text-gray-600">その場で買取価格をご提示</p>
                                </div>
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i class="fas fa-yen-sign text-2xl text-[#2E7D32]"></i>
                                    </div>
                                    <h3 class="text-lg font-bold mb-2">4. お支払い・引取</h3>
                                    <p class="text-gray-600">書類手続き後、即日現金でお支払い</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- お問い合わせ -->
                    <div class="mb-16">
                        <h2 class="text-3xl font-bold mb-8">お問い合わせ</h2>
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 class="text-xl font-bold mb-4">お電話でのお問い合わせ</h3>
                                    <p class="text-3xl font-bold text-[#2E7D32] mb-2">07-2160-6917</p>
                                    <p class="text-gray-600">
                                        受付時間: 8:00 ～ 18:00<br>
                                        年中無休で対応しております
                                    </p>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold mb-4">メールでのお問い合わせ</h3>
                                    <p class="text-gray-600 mb-4">
                                        下記のメールアドレスまでお気軽にご連絡ください。
                                        24時間受付中です。
                                    </p>
                                    <a href="mailto:yoshiishirakawa1013@gmail.com"
                                        class="text-[#2E7D32] hover:text-[#1B5E20] transition-colors duration-300">
                                        <i class="fas fa-envelope mr-2"></i>yoshiishirakawa1013@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <!-- 商品詳細モーダル -->
        <div v-if="showModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <!-- 背景オーバーレイ -->
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showModal = false"></div>

                <!-- モーダルパネル -->
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-2xl font-bold text-gray-900" id="modal-title">
                                        {{ selectedItem ? selectedItem.name : '' }}
                                    </h3>
                                    <button @click="showModal = false" class="text-gray-400 hover:text-gray-500">
                                        <i class="fas fa-times text-xl"></i>
                                    </button>
                                </div>
                                <div v-if="selectedItem" class="mt-4">
                                    <div class="aspect-w-16 aspect-h-9 mb-6">
                                        <img :src="require(`@/assets/${selectedItem.image}`)" 
                                            :alt="selectedItem.name"
                                            class="w-full h-64 object-cover rounded-lg" />
                                    </div>
                                    <div class="grid grid-cols-1 gap-4">
                                        <div class="border-b pb-4">
                                            <h4 class="text-lg font-semibold mb-2 text-[#2E7D32]">価格</h4>
                                            <p class="text-2xl font-bold text-[#2E7D32]">
                                                ￥{{ formatPrice(selectedItem.price) }}円/{{ selectedItem.unit }}
                                                <span class="text-sm font-normal text-gray-600">（税込）</span>
                                            </p>
                                        </div>
                                        <div class="border-b pb-4">
                                            <h4 class="text-lg font-semibold mb-2 text-[#2E7D32]">取引単位</h4>
                                            <p class="text-gray-700">{{ selectedItem.unit }}</p>
                                        </div>
                                        <div>
                                            <h4 class="text-lg font-semibold mb-2 text-[#2E7D32]">商品説明</h4>
                                            <p class="text-gray-700 whitespace-pre-line">{{ selectedItem.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button @click="showModal = false"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#2E7D32] text-base font-medium text-white hover:bg-[#1B5E20] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E7D32] sm:ml-3 sm:w-auto sm:text-sm">
                            閉じる
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUsedItemList, getUsedItemType } from '@/api/used';

export default {
    name: 'UsedItemDetailView',
    data() {
        return {
            loading: true,
            error: null,
            categoryName: '',
            items: [],
            currentCategoryId: null,
            showModal: false,
            selectedItem: null
        };
    },
    methods: {
        formatPrice(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        showItemDetail(item) {
            this.selectedItem = item;
            this.showModal = true;
        },
        async fetchUsedItemType() {
            try {
                const response = await getUsedItemType(this.currentCategoryId);
                if (response && response.code === 1) {
                    this.categoryName = response.data[0].name;
                } else {
                    throw new Error(response?.message || '品目情報の取得に失敗しました');
                }
            } catch (err) {
                console.error('Failed to fetch used item type:', err);
                this.error = err.message;
                throw err;
            }
        },
        async fetchUsedItemList() {
            try {
                const response = await getUsedItemList(this.currentCategoryId);
                if (response && response.code === 1) {
                    this.items = response.data;
                } else {
                    throw new Error(response?.message || '商品リストの取得に失敗しました');
                }
            } catch (err) {
                console.error('Failed to fetch used item list:', err);
                this.error = err.message;
                throw err;
            }
        },
        async loadPageData() {
            try {
                this.loading = true;
                this.error = null;
                await Promise.all([
                    this.fetchUsedItemType(),
                    this.fetchUsedItemList()
                ]);
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        }
    },
    watch: {
        '$route.params.categoryId': {
            immediate: true,
            handler(newId) {
                this.currentCategoryId = newId;
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