<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">新着情報</h1>
      
      <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
        <div class="space-y-8">
          <div v-for="(notice, index) in notices" :key="index" class="pb-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <div class="flex items-center mb-3">
              <span class="text-[#81C784] font-semibold">{{ notice.date }}</span>
              <span class="mx-4 text-gray-300">|</span>
              <span class="bg-[#E8F5E9] text-[#2E7D32] px-3 py-1 rounded-full text-sm">{{ notice.category }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ notice.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ notice.content }}</p>
            <!-- <div v-if="notice.image" class="mt-4">
              <img :src="notice.image" :alt="notice.title" class="max-w-full h-auto rounded-lg">
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  data() {
    return {
      notices: [
        {
          date: '2023-12-28',
          category: 'お知らせ',
          title: '年末年始の営業時間について',
          content: '平素は格別のご高配を賜り、誠にありがとうございます。\n年末年始の営業時間を下記の通りとさせていただきます：\n\n12月30日～1月3日：休業\n1月4日より通常営業\n\n緊急の場合は携帯電話にてご連絡ください。\nご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。'
        },
        {
          date: '2023-12-20',
          category: 'キャンペーン',
          title: '年末大掃除応援キャンペーン実施中',
          content: '年末の大掃除に合わせて、不用品回収の特別キャンペーンを実施いたします。\n\n期間：12月20日～12月29日\n特典：\n・回収料金20%OFF\n・複数個所の回収で追加10%OFF\n・見積り無料\n・即日対応可能\n\nこの機会に是非ご利用ください。'
        },
        {
          date: '2023-12-15',
          category: '新サービス',
          title: '法人向け定期回収サービス開始のお知らせ',
          content: '法人のお客様向けに、定期回収サービスを開始いたしました。\n\n主なサービス内容：\n・毎月定期的な回収\n・回収スケジュールのカスタマイズ\n・専用の回収ボックス提供\n・電子マニフェスト対応\n・優先対応\n\n詳細は営業担当までお問い合わせください。',
        },
        {
          date: '2023-12-10',
          category: '実績報告',
          title: '産業廃棄物処理実績報告',
          content: '2023年度上半期（4月～9月）の産業廃棄物処理実績をご報告いたします。\n\n・鉄スクラップ：2,500トン\n・非鉄金属：800トン\n・産業機械：200件\n・電子機器：1,500件\n\n引き続き、環境に配慮した適切な処理を心がけてまいります。'
        },
        {
          date: '2023-12-05',
          category: 'お知らせ',
          title: '新規スタッフ募集のお知らせ',
          content: '事業拡大に伴い、下記の職種で新規スタッフを募集いたします：\n\n募集職種：\n・回収ドライバー（4t、大型免許保持者）\n・リサイクル品の仕分けスタッフ\n・営業スタッフ\n\n詳細は採用担当までお問い合わせください。'
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
</style> 