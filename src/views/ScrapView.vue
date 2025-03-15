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
            <!-- 買取品目 -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8">買取品目</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- 銅・真鍮・砲金系 -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '1' } }" :key="'1'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/1-01.jpg" alt="銅・真鍮・砲金" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-coins mr-2"></i>銅・真鍮・砲金系
                            </h3>
                        </div>
                    </router-link>

                    <!-- 電線系 -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '2' } }" :key="'2'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/2-01.jpg" alt="電線" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-bolt mr-2"></i>電線系
                            </h3>
                        </div>
                    </router-link>

                    <!-- アルミ・ステンレス系 -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '3' } }" :key="'3'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/3-07.jpg" alt="アルミ・ステンレス"
                                class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-layer-group mr-2"></i>アルミ・ステンレス系
                            </h3>
                        </div>
                    </router-link>

                    <!-- 鉛・亜鉛・バッテリー系 -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '4' } }" :key="'4'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/4-01.jpg" alt="鉛・亜鉛・バッテリー"
                                class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-car-battery mr-2"></i>鉛・亜鉛・バッテリー系
                            </h3>
                        </div>
                    </router-link>

                    <!-- 雑品系 -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '5' } }" :key="'5'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/5-01.jpg" alt="雑品" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-box-open mr-2"></i>雑品系
                            </h3>
                        </div>
                    </router-link>

                    <!-- モーター・トランス系 -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '6' } }" :key="'6'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/6-01.jpg" alt="モーター・トランス"
                                class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-cogs mr-2"></i>モーター・トランス系
                            </h3>
                        </div>
                    </router-link>

                    <!-- 鉄くず -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '7' } }" :key="'7'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/7-01.jpg" alt="鉄くず" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-industry mr-2"></i>鉄くず
                            </h3>
                        </div>
                    </router-link>

                    <!-- PC・基板系 -->
                    <router-link :to="{ name: 'scrap-detail', params: { categoryId: '8' } }" :key="'8'"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-64">
                            <img src="@/assets/img/scraps/8-01.jpg" alt="PC・基板" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                            <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white">
                                <i class="fas fa-microchip mr-2"></i>PC・基板系
                            </h3>
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
export default {
    name: 'ScrapView'
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>