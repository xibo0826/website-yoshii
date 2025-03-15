<template>
    <div class="min-h-screen bg-gray-50">
        <div class="container mx-auto px-4 py-12">
            <!-- ヘッダー -->
            <div class="mb-8">
                <router-link to="/used-items" class="text-[#2E7D32] hover:text-[#1B5E20] mb-4 inline-block">
                    <i class="fas fa-arrow-left mr-2"></i>中古品買取一覧に戻る
                </router-link>
                <h1 class="text-4xl font-bold">{{ categoryTitle }}</h1>
            </div>

            <!-- 商品画像ギャラリー -->
            <div class="mb-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="(image, index) in categoryImages" :key="index"
                        class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img :src="image.src" :alt="image.alt" class="w-full h-64 object-cover" />
                    </div>
                </div>
            </div>

            <!-- 買取品目の説明 -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8">買取対象商品</h2>
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <ul class="space-y-4">
                        <li v-for="(item, index) in categoryItems" :key="index" class="flex items-start">
                            <i class="fas fa-check text-[#2E7D32] mt-1 mr-3"></i>
                            <span class="text-gray-600">{{ item }}</span>
                        </li>
                    </ul>
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
    </div>
</template>

<script>
export default {
    name: 'UsedItemDetailView',
    data() {
        return {
            categories: {
                '1': {
                    title: '建設機械',
                    items: [
                        'ショベルカー・バックホー',
                        'ブルドーザー',
                        'クレーン車',
                        'ダンプトラック',
                        'ホイールローダー',
                        'アスファルトフィニッシャー',
                        'コンクリートミキサー車',
                        'その他建設機械'
                    ],
                    images: [
                        { src: '@/assets/img/used-items/construction-1.jpg', alt: 'ショベルカー' },
                        { src: '@/assets/img/used-items/construction-2.jpg', alt: 'ブルドーザー' },
                        { src: '@/assets/img/used-items/construction-3.jpg', alt: 'クレーン車' }
                    ]
                },
                '2': {
                    title: 'フォークリフト',
                    items: [
                        'カウンターバランス式フォークリフト',
                        'リーチ式フォークリフト',
                        'ハンドリフト',
                        'スタッカー',
                        'バッテリー式フォークリフト',
                        'エンジン式フォークリフト',
                        '中古・故障フォークリフト',
                        'その他フォークリフト関連機器'
                    ],
                    images: [
                        { src: '@/assets/img/used-items/forklift-1.jpg', alt: 'カウンターバランス式フォークリフト' },
                        { src: '@/assets/img/used-items/forklift-2.jpg', alt: 'リーチ式フォークリフト' },
                        { src: '@/assets/img/used-items/forklift-3.jpg', alt: 'ハンドリフト' }
                    ]
                },
                '3': {
                    title: 'その他重機・機械',
                    items: [
                        '発電機',
                        'コンプレッサー',
                        '溶接機',
                        '高所作業車',
                        '産業用ロボット',
                        '工作機械',
                        '農業機械',
                        'その他産業機械'
                    ],
                    images: [
                        { src: '@/assets/img/used-items/machinery-1.jpg', alt: '発電機' },
                        { src: '@/assets/img/used-items/machinery-2.jpg', alt: 'コンプレッサー' },
                        { src: '@/assets/img/used-items/machinery-3.jpg', alt: '溶接機' }
                    ]
                }
            }
        }
    },
    computed: {
        categoryId() {
            return this.$route.params.categoryId
        },
        category() {
            return this.categories[this.categoryId] || {
                title: '不明なカテゴリー',
                items: [],
                images: []
            }
        },
        categoryTitle() {
            return this.category.title
        },
        categoryItems() {
            return this.category.items
        },
        categoryImages() {
            return this.category.images
        }
    }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 