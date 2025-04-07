<template>
    <div class="min-h-screen bg-gray-50">
        <!-- ヘッダー画像 -->
        <div class="relative h-[400px] md:h-[600px] bg-black">
            <img src="@/assets/img/visit-header.png" alt="出張買取" class="w-full h-full object-cover opacity-70">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                    <h1 class="text-5xl font-bold mb-4">出張買取サービス</h1>
                    <p class="text-xl">お客様のもとへ直接お伺いし、その場で査定・買取いたします</p>
                </div>
            </div>
        </div>

        <!-- 出張買取の流れ -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">出張買取の流れ</h2>
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="bg-[#E8F5E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-phone text-[#2E7D32] text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">1. お問い合わせ</h3>
                        <p class="text-gray-600">お電話またはメールにて買取希望の品物をお知らせください</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-[#E8F5E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-calendar-alt text-[#2E7D32] text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">2. 日時の調整</h3>
                        <p class="text-gray-600">ご都合の良い日時をお選びいただき、訪問日を決定します</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-[#E8F5E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-search-dollar text-[#2E7D32] text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">3. 査定・見積り</h3>
                        <p class="text-gray-600">専門スタッフが訪問し、その場で査定・お見積りを提示します</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-[#E8F5E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-hand-holding-usd text-[#2E7D32] text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">4. 買取成立</h3>
                        <p class="text-gray-600">ご承諾いただけましたら、その場で現金でお支払いいたします</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 対応エリア -->
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">対応エリア</h2>
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h4 class="text-xl font-bold mb-4 text-[#2E7D32]">対応地域</h4>
                            <ul class="space-y-2 text-gray-600">
                                <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>大阪府全域</li>
                                <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>京都府全域</li>
                                <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>兵庫県全域</li>
                                <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>奈良県全域</li>
                                <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>滋賀県全域</li>
                                <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>和歌山県全域</li>
                            </ul>
                            <div class="mt-6">
                                <h4 class="text-xl font-bold mb-4 text-[#2E7D32]">出張費用</h4>
                                <p class="text-gray-600 mb-4">出張費用はお問い合わせください。</p>
                                <p class="text-gray-600">※その他のエリアについてはお問い合わせください。</p>
                            </div>
                        </div>
                        <div class="relative h-[400px]">
                            <img src="@/assets/img/visit.png" alt="対応エリアマップ" class="w-full h-full object-contain">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 注意事項 -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">注意事項</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-[#E8F5E9] rounded-lg p-6">
                        <h3 class="text-xl font-bold mb-4 text-[#2E7D32]">必要書類</h3>
                        <ul class="space-y-2 text-gray-700">
                            <li><i class="fas fa-circle text-[#2E7D32] text-xs mr-2"></i>本人確認書類（運転免許証、パスポートなど）</li>
                            <li><i class="fas fa-circle text-[#2E7D32] text-xs mr-2"></i>法人の場合は会社の登記簿謄本</li>
                            <li><i class="fas fa-circle text-[#2E7D32] text-xs mr-2"></i>買取品の所有を証明できる書類（必要な場合）</li>
                        </ul>
                    </div>
                    <div class="bg-[#E8F5E9] rounded-lg p-6">
                        <h3 class="text-xl font-bold mb-4 text-[#2E7D32]">その他の注意点</h3>
                        <ul class="space-y-2 text-gray-700">
                            <li><i class="fas fa-circle text-[#2E7D32] text-xs mr-2"></i>買取品は事前に整理・分別をお願いします</li>
                            <li><i class="fas fa-circle text-[#2E7D32] text-xs mr-2"></i>重量物の場合は、搬出経路の確保をお願いします</li>
                            <li><i class="fas fa-circle text-[#2E7D32] text-xs mr-2"></i>買取不可品目もございますので、事前にご確認ください</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- お問い合わせ -->
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
                <div class="max-w-2xl mx-auto">
                    <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                        <div class="mb-8">
                            <h3 class="text-2xl font-bold text-[#2E7D32] mb-4">お電話でのお問い合わせ</h3>
                            <a href="tel:07-2160-6917" class="text-3xl font-bold hover:text-[#2E7D32]">
                                <i class="fas fa-phone mr-2"></i>07-2160-6917
                            </a>
                            <p class="text-gray-600 mt-2">受付時間：9:00～18:00（年中無休）</p>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-[#2E7D32] mb-4">メールでのお問い合わせ</h3>
                            <a href="mailto:info@example.com" class="inline-block bg-[#2E7D32] text-white px-8 py-3 rounded-lg hover:bg-[#1B5E20] transition-colors duration-300">
                                <i class="fas fa-envelope mr-2"></i>メールフォームへ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'VisitPurchaseView',
    created() {
        window.scrollTo(0, 0);
    }
};
</script> 