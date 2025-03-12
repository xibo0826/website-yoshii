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
                            <img :src="selectedItem.image" :alt="selectedItem.name" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                        </div>
                    </div>
                    <!-- 内容 -->
                    <div class="w-full md:w-1/2 flex flex-col">
                        <div class="p-6 flex-grow overflow-y-auto">
                            <div class="space-y-4">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedItem.name }}</h3>
                                    <span class="text-[#2E7D32] font-bold text-2xl">{{ selectedItem.price }}</span>
                                </div>
                                <div class="flex items-center text-gray-600">
                                    <i class="fas fa-balance-scale mr-2"></i>
                                    <span>取引単位: {{ selectedItem.unit }}</span>
                                </div>
                                <div class="flex items-start text-gray-600">
                                    <i class="fas fa-info-circle mr-2 mt-1"></i>
                                    <div class="flex-1">
                                        <h4 class="font-bold mb-2">商品説明</h4>
                                        <p>{{ selectedItem.note || '特記事項はありません。' }}</p>
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
                    <div v-for="(item, index) in items" :key="index"
                        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div class="relative h-48">
                            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover"
                                @error="handleImageError">
                            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-bold text-gray-900">{{ item.name }}</h3>
                                <span class="text-[#2E7D32] font-bold text-xl">{{ item.price }}</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600 mb-2">
                                <i class="fas fa-balance-scale mr-2"></i>
                                <span>取引単位: {{ item.unit }}</span>
                            </div>
                            <div class="flex items-start text-sm text-gray-600">
                                <i class="fas fa-info-circle mr-2 mt-1"></i>
                                <span class="line-clamp-1">{{ item.note }}</span>
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
    </div>
</template>

<script>
const categoryData = {
    'type1': {
        name: '銅・真鍮系',
        description: '銅、真鍮などの非鉄金属を高価買取いたします。建設現場や工場からの発生品など、さまざまな形態での買取に対応しています。',
        items: [
            { name: 'エアコンの真鍮', unit: 'kg', price: '￥550円/kg（税込）', note: '', image: require('../assets/img/scraps/1-01.jpg') },
            { name: 'エアコンパイプ', unit: 'kg', price: '￥650円/kg（税込）', note: 'エアコンの設置の際に使用される被覆銅管が主な買取対象となります。（真鍮付きも買い取り可）', image: require('../assets/img/scraps/1-02.jpg') },
            { name: 'ピカ銅', unit: 'kg', price: '￥1,450円/kg（税込）', note: '単線の断面直径が基本1.6mm以上の銅線で、付き物・表面劣化（変色）・メッキ・エナメル・汚れ・塗装等がないもの', image: require('../assets/img/scraps/1-03.jpg') },
            { name: 'プラ付き真鍮', unit: 'kg', price: '￥750円/kg（税込）', note: '', image: require('../assets/img/scraps/1-04.jpg') },
            { name: '下銅', unit: 'kg', price: '￥1,100円/kg（税込）', note: '', image: require('../assets/img/scraps/1-05.jpg') },
            { name: '並銅', unit: 'kg', price: '￥1,390円/kg（税込）', note: '', image: require('../assets/img/scraps/1-06.jpg') },
            { name: '真鍮', unit: 'kg', price: '￥950円/kg（税込）', note: '', image: require('../assets/img/scraps/1-07.jpg') },
            { name: '砲金', unit: 'kg', price: '￥1,100円/kg（税込）', note: '', image: require('../assets/img/scraps/1-08.jpg') },
            { name: '込銅', unit: 'kg', price: '￥1,350円/kg（税込）', note: '一号銅と同じく銅管等の汚れや塗装がないもので青錆やメッキ、エナメル、溶接部分、少量の真鍮の付き物等あるもの', image: require('../assets/img/scraps/1-09.jpg') }
        ]
    },
    'type2': {
        name: '電線系',
        description: '電線・ケーブル類を種類別に高価買取いたします。被覆の有無や種類によって買取価格が異なります。',
        items: [
            { name: 'VA線(VVFケーブル)', unit: 'kg', price: '￥585円/kg（税込）', note: 'エアコンや照明等の配線に使用されるVVFケーブルでコネクタ除去済みのものが買取対象となります。', image: require('../assets/img/scraps/2-01.jpg') },
            { name: '一本線(銅率80%以上)', unit: 'kg', price: '￥1,110円/kg（税込）', note: '単線の断面直径1.3mm以上及び銅率80％以上の被覆付き銅線が買取対象となります。', image: require('../assets/img/scraps/2-02.jpg') },
            { name: '三本線(銅率65%以上)', unit: 'kg', price: '￥760円/kg（税込）', note: '単線の断面直径1.3mm以上及び銅率60％以上の被覆付き銅線が買取対象となります。', image: require('../assets/img/scraps/2-03.jpg') },
            { name: '雑線(家電線)', unit: 'kg', price: '￥390円/kg（税込）', note: '主に家電製品に使用されている電線でコネクタ除去済みのものが買取対象となります。', image: require('../assets/img/scraps/2-04.jpg') }
        ]
    },
    'type3': {
        name: 'アルミ・ステンレス系',
        description: 'アルミニウムやステンレスなど、各種非鉄金属を買取いたします。形状や純度によって買取価格が変動します。',
        items: [
            { name: 'アルミガラA(付物なし)', unit: 'kg', price: '￥240円/kg（税込）', note: 'アルミ製のフライパンや鍋（持ち手付き含む）、梯子、脚立等が買取対象となります。', image: require('../assets/img/scraps/3-01.jpg') },
            { name: 'アルミガラB(付物あり)', unit: 'kg', price: '￥170円/kg（税込）', note: 'アルミサッシ（アルミの窓枠等に用いる建材）少量の付き物がついているサッシが買取対象となります。', image: require('../assets/img/scraps/3-02.jpg') },
            { name: 'アルミサッシA(付物なし)', unit: 'kg', price: '￥300円/kg（税込）', note: '', image: require('../assets/img/scraps/3-03.jpg') },
            { name: 'アルミサッシB(付物あり）', unit: 'kg', price: '￥270円/kg（税込）', note: '', image: require('../assets/img/scraps/3-04.jpg') },
            { name: 'アルミホイール', unit: 'kg', price: '￥330円/kg（税込）', note: '自動車用のアルミホイールが買取対象となります。', image: require('../assets/img/scraps/3-05.jpg') },
            { name: 'アルミラジエター', unit: 'kg', price: '￥50円/kg（税込）', note: 'フィンとチューブがアルミのものが買取対象となります。', image: require('../assets/img/scraps/3-06.jpg') },
            { name: 'アルミ缶', unit: 'kg', price: '￥262円/kg（税込）', note: '', image: require('../assets/img/scraps/3-07.jpg') },
            { name: 'ステンレス', unit: 'kg', price: '￥180円/kg（税込）', note: '', image: require('../assets/img/scraps/3-08.jpg') },
            { name: 'ホイール付きタイヤ・大', unit: '本', price: '￥2,200円/本（税込）', note: '15インチ以上', image: require('../assets/img/scraps/3-09.jpg') },
            { name: 'ホイール付きタイヤ・小', unit: '本', price: '￥1,200円/本（税込）', note: '13インチ以下', image: require('../assets/img/scraps/3-10.jpg') }
        ]
    },
    'type4': {
        name: '鉛・亜鉛・バッテリー系',
        description: '自動車用バッテリーや産業用バッテリー、各種鉛製品を買取いたします。環境に配慮した適切な処理を行います。',
        items: [
            { name: 'バッテリーA', unit: 'kg', price: '￥110円/kg（税込）', note: '', image: require('../assets/img/scraps/4-01.jpg') },
            { name: 'バッテリーB', unit: 'kg', price: '￥60円/kg（税込）', note: '', image: require('../assets/img/scraps/4-02.jpg') },
            { name: '亜鉛', unit: 'kg', price: '￥130円/kg（税込）', note: '', image: require('../assets/img/scraps/4-03.jpg') },
            { name: '鉛', unit: 'kg', price: '￥100円/kg（税込）', note: '鉛管、鉛板が買取対象となります。', image: require('../assets/img/scraps/4-04.jpg') }
        ]
    },
    'type5': {
        name: '雑品系',
        description: '様々な金属混合物や工場発生材など、多様な金属スクラップの買取に対応いたします。',
        items: [
            { name: 'エアコンラジエター', unit: 'kg', price: '￥680円/kg（税込）', note: '銅管が使用されているものが買取対象となります。', image: require('../assets/img/scraps/5-01.jpg') },
            { name: 'ガスメーター', unit: 'kg', price: '￥60円/kg（税込）', note: 'ガス消費量を測る計量器（アルミ製）が買取対象となります。', image: require('../assets/img/scraps/5-02.jpg') },
            { name: 'ガス給湯器', unit: 'kg', price: '￥280円/kg（税込）', note: '主にガス給湯器が買取対象となります。', image: require('../assets/img/scraps/5-03.jpg') },
            { name: 'ブレーカー', unit: 'kg', price: '￥100円/kg（税込）', note: '', image: require('../assets/img/scraps/5-04.jpg') }
        ]
    }
};

export default {
    name: 'ScrapDetailView',
    data() {
        return {
            categoryName: '',
            categoryDescription: '',
            items: [],
            selectedItem: null
        };
    },
    computed: {
        currentCategoryId() {
            return this.$route.params.categoryId || '1';
        }
    },
    created() {
        console.log(this.$route.params.categoryId);
    },
    methods: {
        loadCategoryData() {
            const category = categoryData[`type${this.currentCategoryId}`];
            if (category) {
                this.categoryName = category.name;
                this.categoryDescription = category.description;
                this.items = category.items;
            } else {
                const defaultCategory = categoryData.type1;
                this.categoryName = defaultCategory.name;
                this.categoryDescription = defaultCategory.description;
                this.items = defaultCategory.items;
            }
        },
        handleImageError(event) {
            event.target.src = require('../assets/img/scraps/default.jpg');
        },
        showItemDetail(item) {
            this.selectedItem = item;
        }
    },
    watch: {
        currentCategoryId: {
            immediate: true,
            handler() {
                this.loadCategoryData();
            }
        }
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