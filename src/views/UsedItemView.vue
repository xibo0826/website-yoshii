<template>
    <div class="min-h-screen bg-gray-50">
        
        <!-- ヘッダーセクション -->
        <div class="relative h-[400px] md:h-[600px] mb-16 rounded-lg overflow-hidden">
            <img src="@/assets/img/used-items-header.jpg" alt="中古品買取" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div class="container mx-auto px-8">
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">中古品買取</h1>
                    <p class="text-xl text-white max-w-2xl">
                        建設機械・重機・フォークリフトなどの中古品を
                        適正価格で買取いたします。査定は無料です。
                    </p>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">

            <!-- 買取品目 -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8">買取品目</h2>
                <!-- ローディング表示 -->
                <div v-if="loading" class="flex justify-center items-center py-12">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2E7D32]"></div>
                </div>
                <!-- エラー表示 -->
                <div v-else-if="error" class="bg-red-50 p-4 rounded-lg">
                    <p class="text-red-600">{{ error }}</p>
                </div>
                <!-- 品目一覧 -->
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <router-link v-for="type in usedItemTypes" 
                        :key="type.id"
                        :to="{ name: 'used-item-detail', params: { categoryId: type.id.toString() } }"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img :src="require(`@/assets/${type.image}`)" :alt="type.name" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                                <div class="flex justify-between items-center">
                                    <h3 class="text-xl font-bold text-white">
                                        
                                    </h3>
                                    <span class="text-[#81C784] hover:text-[#A5D6A7] transition-colors duration-300">
                                        詳細を見る →
                                    </span>
                                </div>
                            </div>
                        </div>
                    </router-link>
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

            <!-- 注意事項 -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8">買取に関する注意事項</h2>
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <ul class="space-y-4 text-gray-600">
                        <li class="flex items-start">
                            <i class="fas fa-exclamation-circle text-[#2E7D32] mt-1 mr-3"></i>
                            <span>買取には車検証や登録書類など、所有を証明する書類が必要です。</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-exclamation-circle text-[#2E7D32] mt-1 mr-3"></i>
                            <span>機械の状態や年式により、買取価格が変動する場合がございます。</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-exclamation-circle text-[#2E7D32] mt-1 mr-3"></i>
                            <span>盗品や違法な物品の買取は一切行っておりません。</span>
                        </li>
                    </ul>
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
    </div>
</template>

<script>
import { getUsedItemTypes } from '@/api/used';

export default {
    name: 'UsedItemView',
    data() {
        return {
            loading: true,
            error: null,
            usedItemTypes: [],
            apiBaseUrl: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8000'
        };
    },
    computed: {
    },
    methods: {
        async fetchUsedItemTypes() {
            try {
                this.loading = true;
                this.error = null;
                const response = await getUsedItemTypes();
                console.log('API Response:', response);
                
                if (response && response.code === 1) {
                    this.usedItemTypes = response.data || [];
                    if (this.usedItemTypes.length === 0) {
                        this.error = '買取品目が見つかりませんでした';
                    }
                } else {
                    this.error = response?.message || '買取品目の取得に失敗しました';
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
    },
    created() {
        window.scrollTo(0, 0);
        this.fetchUsedItemTypes();
    }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 