<template>
    <div class="min-h-screen bg-gray-50">
        <!-- ヘッダー画像 -->
        <div class="relative h-[400px] md:h-[600px] bg-black">
            <img src="@/assets/img/tidying-header.png" alt="片付け・遺品整理" class="w-full h-full object-cover opacity-70">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                    <h1 class="text-5xl font-bold mb-4">片付け・遺品整理</h1>
                    <p class="text-xl">丁寧・迅速な作業で、大切な思い出の整理をお手伝いいたします</p>
                </div>
            </div>
        </div>

        <!-- サービスの特徴 -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">サービスの特徴</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="bg-[#E8F5E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-heart text-[#2E7D32] text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">思いやりの心</h3>
                        <p class="text-gray-600">故人様とご遺族様の想いに寄り添い、丁寧な作業を心がけています</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-[#E8F5E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-shield-alt text-[#2E7D32] text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">信頼と安心</h3>
                        <p class="text-gray-600">経験豊富なスタッフが、プライバシーに配慮しながら作業を行います</p>
                    </div>
                    <div class="text-center">
                        <div class="bg-[#E8F5E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-recycle text-[#2E7D32] text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">適切な処理</h3>
                        <p class="text-gray-600">リサイクル可能な品物は買取り、環境に配慮した処理を行います</p>
                    </div>
                </div>
                
                <!-- 専門家紹介 -->
                <div class="mt-16">
                    <div class="bg-[#E8F5E9] rounded-lg p-8 max-w-4xl mx-auto">
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-user-tie text-[#2E7D32] text-4xl"></i>
                            </div>
                            <div class="flex-grow text-left">
                                <h3 class="text-2xl font-bold text-[#2E7D32] mb-4">専門家による丁寧な対応</h3>
                                <p class="text-gray-700 mb-4">当社の専門スタッフは、遺品整理や生前整理の豊富な経験を持ち、お客様一人一人の状況に合わせた最適なサービスを提供いたします。</p>
                                <ul class="space-y-2">
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-[#2E7D32] mt-1 mr-2"></i>
                                        <span>整理・片付けの専門資格保有者が在籍</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-[#2E7D32] mt-1 mr-2"></i>
                                        <span>デリケートな案件も細やかな配慮で対応</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fas fa-check text-[#2E7D32] mt-1 mr-2"></i>
                                        <span>24時間365日のサポート体制</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 対応サービス -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">対応サービス</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-[#E8F5E9] rounded-lg p-6">
                        <h3 class="text-xl font-bold mb-4 text-[#2E7D32]">遺品整理</h3>
                        <ul class="space-y-2 text-gray-700">
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>故人様の遺品の仕分け・整理</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>形見分けのお手伝い</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>不用品の買取・処分</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>家財道具の搬出</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>清掃・原状回復</li>
                        </ul>
                    </div>
                    <div class="bg-[#E8F5E9] rounded-lg p-6">
                        <h3 class="text-xl font-bold mb-4 text-[#2E7D32]">生前整理</h3>
                        <ul class="space-y-2 text-gray-700">
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>不用品の整理・処分</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>思い出の品の整理</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>家具・家電の買取</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>部屋の片付け</li>
                            <li><i class="fas fa-check text-[#2E7D32] mr-2"></i>引越し前の整理</li>
                        </ul>
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
                                <p class="text-gray-600 mb-4">上記エリア内であれば、出張費用は一切いただきません。</p>
                                <p class="text-gray-600">※その他のエリアについてはお問い合わせください。</p>
                            </div>
                            <div class="mt-6">
                                <h4 class="text-xl font-bold mb-4 text-[#2E7D32]">作業料金</h4>
                                <p class="text-gray-600 mb-2">作業料金は、お部屋の広さ、作業内容、お品物の量などにより異なります。</p>
                                <p class="text-gray-600 mb-2">現地調査の際に、詳しいお見積りをご提示させていただきます。</p>
                                <p class="text-gray-600">買取可能な品物がある場合は、買取金額を作業料金から相殺することも可能です。</p>
                            </div>
                        </div>
                        <div class="relative h-[400px]">
                            <img src="@/assets/img/visit.png" alt="対応エリアマップ" class="w-full h-full object-contain">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- サービスの流れ -->
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">サービスの流れ</h2>
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="text-center">
                            <div class="bg-[#E8F5E9] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#2E7D32] text-xl font-bold">1</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2">お問い合わせ</h3>
                            <p class="text-gray-600">お電話またはメールにてご相談ください</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="text-center">
                            <div class="bg-[#E8F5E9] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#2E7D32] text-xl font-bold">2</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2">現地調査</h3>
                            <p class="text-gray-600">スタッフが現地を確認し、お見積りを提示</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="text-center">
                            <div class="bg-[#E8F5E9] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#2E7D32] text-xl font-bold">3</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2">作業実施</h3>
                            <p class="text-gray-600">ご要望に応じて丁寧に整理・片付けを実施</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="text-center">
                            <div class="bg-[#E8F5E9] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#2E7D32] text-xl font-bold">4</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2">作業完了</h3>
                            <p class="text-gray-600">最終確認後、買取品の精算と作業費用のお支払い</p>
                        </div>
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
                            <p class="text-gray-600 mt-2">受付時間：8:00～18:00（年中無休）</p>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-[#2E7D32] mb-4">メールでのお問い合わせ</h3>
                            <a href="mailto:yoshiishirakawa1013@gmail.com" class="inline-block bg-[#2E7D32] text-white px-8 py-3 rounded-lg hover:bg-[#1B5E20] transition-colors duration-300">
                                <i class="fas fa-envelope mr-2"></i>メールでのお問い合わせ
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
    name: 'TidyingView',
    created() {
        window.scrollTo(0, 0);
    }
};
</script> 