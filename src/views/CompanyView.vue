<template>
    <div class="min-h-screen bg-gray-50">
        <div class="container mx-auto px-4 py-12">
            <!-- 事業紹介 -->
            <div class="mb-16">
                <h1 class="text-3xl font-bold mb-8">事業紹介</h1>
                <div class="bg-white rounded-lg shadow-lg p-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div class="p-4">
                            <p class="text-lg leading-relaxed text-gray-700 mb-8">
                                嘉溢株式会社は、大阪・富田林市にて、鉄くずや非鉄金属、雑品、機械屑など様々な金属スクラップの買取を行っています。
                                <br><br>
                                当社工場へスクラップをお持ち込みいただければ、その場ですぐに現金買取いたします。
                                日々の生活で発生する空きカン・鍋・フライパンなどをはじめ、事業活動で発生する金属くずを1kg単位で査定させていただきます。
                                <br><br>
                                地球温暖化、資源枯渇、廃棄物の蓄積等が世界規模で課題となっている現代社会において、金属リサイクルを通じ人と地球にやさしい会社を目標に、
                                廃棄物を減らして地球環境を守り、資源を有効利用することを目指しております。
                            </p>
                        </div>
                        <div class="relative h-full hidden md:block">
                            <img src="@/assets/img/category2.jpg" alt="事業紹介"
                                class="w-full h-full object-cover rounded-lg" />
                            <div class="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h3 class="text-xl font-bold text-[#2E7D32] mb-4">
                                    <i class="fas fa-recycle mr-2"></i>資源の有効活用
                                </h3>
                                <p class="text-gray-600">
                                    限りある資源を効率的に再利用し、循環型社会の実現に貢献します。スクラップ材の適切な処理と再資源化を通じて、環境負荷の低減に努めています。
                                </p>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h3 class="text-xl font-bold text-[#2E7D32] mb-4">
                                    <i class="fas fa-handshake mr-2"></i>信頼と実績
                                </h3>
                                <p class="text-gray-600">
                                    創業以来、多くのお客様にご信頼いただき、確かな実績を積み重ねてまいりました。専門的な知識と経験を持つスタッフが、丁寧な対応でサポートいたします。
                                </p>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h3 class="text-xl font-bold text-[#2E7D32] mb-4">
                                    <i class="fas fa-truck mr-2"></i>即日対応
                                </h3>
                                <p class="text-gray-600">
                                    お客様のご要望に迅速にお応えするため、即日での出張買取や査定にも対応しております。急なご依頼でも、できる限り柔軟に対応させていただきます。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 会社概要 -->
            <div class="mb-16">
                <h1 class="text-3xl font-bold mb-12">会社概要</h1>
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <table class="w-full">
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">会社名</th>
                                <td class="py-4">嘉溢株式会社</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">設立</th>
                                <td class="py-4">平成29年8月9日</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">資本金</th>
                                <td class="py-4">1,000万円</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">代表取締役</th>
                                <td class="py-4">白川 嘉溢</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">事業内容</th>
                                <td class="py-4">
                                    <ul class="list-disc list-inside space-y-2">
                                        <li>スクラップ買取</li>
                                        <li>中古買取</li>
                                        <li>片付け・遺品整理</li>
                                        <li>出張買取</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">所在地</th>
                                <td class="py-4">
                                    (本社) 〒584-0021 大阪府富田林市中野町1-464-4<br>
                                    (支社) 〒594-1101 大阪府和泉市室堂町４９５−１
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">電話番号</th>
                                <td class="py-4">07-2160-6917</td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <th class="py-4 text-left w-1/4 text-gray-600">FAX</th>
                                <td class="py-4">07-2160-6916</td>
                            </tr>
                            <tr>
                                <th class="py-4 text-left w-1/4 text-gray-600">営業時間</th>
                                <td class="py-4">
                                    8:00 ～ 18:00<br>
                                    全年無休
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- アクセス -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-12">アクセス</h2>
                <div class="mt-8 bg-white rounded-lg shadow-lg p-8">
                    <h3 class="text-xl font-bold mb-4">交通アクセス</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-train text-[#81C784] mt-1 mr-3"></i>
                            <div>
                                <p class="font-semibold">電車でお越しの場合</p>
                                <p class="text-gray-600">近鉄長野線「富田林駅」より徒歩15分</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-car text-[#81C784] mt-1 mr-3"></i>
                            <div>
                                <p class="font-semibold">お車でお越しの場合</p>
                                <p class="text-gray-600">阪和自動車道「美原北インター」より約15分</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                    <div>
                        <img src="@/assets/img/company.jpg" alt="会社外観"
                            class="w-full h-[450px] object-cover rounded-lg shadow-lg" />
                    </div>
                    <div class="h-[450px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.6174475828357!2d135.60511507621968!3d34.512581493282525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600129778f9500fd%3A0x7c3b56a3e1ce3d89!2z5ZiJ5rqi5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1743080250129!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompanyView'
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>