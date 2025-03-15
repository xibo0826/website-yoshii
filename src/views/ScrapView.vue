<template>
    <div class="min-h-screen bg-gray-50">
        
            <!-- ヘッダーセクション -->
            <div class="relative h-[400px] md:h-[600px] mb-16 overflow-hidden">
                <img src="@/assets/img/category1.jpg" alt="スクラップ買取" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div class="container mx-auto px-8">
                        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">スクラップ買取</h1>
                        <p class="text-xl text-white max-w-2xl">
                            鉄・非鉄金属スクラップの買取から、産業廃棄物の適正処理まで、
                            環境に配慮した資源リサイクルを推進しています。
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 py-12">
            <h1 class="text-4xl font-bold mb-12">スクラップ買取</h1>

            <!-- 買取品目 -->
            <section class="mb-16">
                <h2 class="text-3xl font-bold mb-8">買取品目</h2>
                <div v-if="loading" class="flex justify-center items-center py-12">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2E7D32]"></div>
                </div>
                <div v-else-if="error" class="bg-red-50 p-4 rounded-lg">
                    <p class="text-red-600">{{ error }}</p>
                </div>
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="type in sortedScrapTypes" :key="type.id" 
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img :src="require(`@/assets/${type.image}`)" :alt="type.name" class="w-full h-48 object-cover" />
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-4">{{ type.name }}</h3>
                            <p class="text-gray-600 mb-4">{{ type.description }}</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <button @click="goToDetail(type.id)"
                                    class="w-full bg-[#E8F5E9] text-[#2E7D32] py-2 rounded-lg hover:bg-[#C8E6C9] transition-colors duration-300">
                                    <i class="fas fa-search mr-2"></i>詳細商材へ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 買取の流れ -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8">買取の流れ</h2>
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-phone text-2xl text-[#2E7D32]"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">1. お問い合わせ</h3>
                            <p class="text-gray-600">お電話またはメールにてご連絡ください</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-calculator text-2xl text-[#2E7D32]"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">2. 無料お見積り</h3>
                            <p class="text-gray-600">品目や数量から概算をご案内</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-truck text-2xl text-[#2E7D32]"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">3. 買取・回収</h3>
                            <p class="text-gray-600">ご指定の場所へお伺いまたは持込</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-yen-sign text-2xl text-[#2E7D32]"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">4. お支払い</h3>
                            <p class="text-gray-600">その場で現金でのお支払い</p>
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
                            <span>相場により価格が変動する場合がございます。実際の買取価格は、ホームページの表記と異なる場合がありますのでご注意ください。</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-exclamation-circle text-[#2E7D32] mt-1 mr-3"></i>
                            <span>買取には身分証明書が必要です。</span>
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
                            <a href="mailto:info@yoshii.co.jp"
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
import { getScrapTypes } from '@/api/scrap';

export default {
    name: 'ScrapView',
    data() {
        return {
            loading: true,
            error: null,
            scrapTypes: []
        };
    },
    computed: {
        sortedScrapTypes() {
            return [...this.scrapTypes].sort((a, b) => a.sort - b.sort);
        }
    },
    methods: {
        async fetchScrapTypes() {
            try {
                this.loading = true;
                this.error = null;
                const response = await getScrapTypes();
                console.log('API Response:', response);
                if (response && response.code === 1) {
                    this.scrapTypes = response.data || [];
                    if (this.scrapTypes.length === 0) {
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
        goToDetail(categoryId) {
            this.$router.push({
                name: 'scrap-detail',
                params: { categoryId: categoryId.toString() }
            });
        }
    },
    created() {
        window.scrollTo(0, 0);
        this.fetchScrapTypes();
    }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>