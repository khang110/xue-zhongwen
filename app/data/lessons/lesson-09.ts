import type { Lesson } from '../../../types/lesson'

export const lesson09: Lesson = {
  id: 'L9',
  number: 9,
  titleTraditional: '網購時代',
  titleSimplified: '网购时代',
  titlePinyin: 'Wǎnggòu shídài',
  titleVi: 'Thời đại mua sắm trực tuyến',
  status: 'available',

  dialogues: [
    [
      { speaker: '', traditional: '（在表哥家的客廳）', simplified: '（在表哥家的客厅）', pinyin: 'Zài biǎogē jiā de kètīng', english: "(In the cousin's living room)", vietnamese: '(Trong phòng khách nhà anh họ)' },
      { speaker: '表哥', traditional: '你們先喝茶聊天，我上網查一下訂單，把明天要寄給客戶的東西準備好。', simplified: '你们先喝茶聊天，我上网查一下订单，把明天要寄给客户的东西准备好。', pinyin: 'Nǐmen xiān hē chá liáotiān, wǒ shàngwǎng chá yíxià dìngdān, bǎ míngtiān yào jì gěi kèhù de dōngxi zhǔnbèi hǎo.', english: "You guys have some tea and chat for a bit. I'm going to check orders online and prepare the things that I am going to mail to customers tomorrow.", vietnamese: 'Mọi người cứ uống trà nói chuyện trước đi, anh lên mạng kiểm tra đơn hàng, chuẩn bị đồ ngày mai gửi cho khách.' },
      { speaker: '李文彥', traditional: '你以前不是都拿到農夫市集去賣嗎？怎麼現在上網賣了？', simplified: '你以前不是都拿到农夫市集去卖吗？怎么现在上网卖了？', pinyin: 'Nǐ yǐqián bú shì dōu ná dào nóngfū shìjí qù mài ma? Zěnme xiànzài shàngwǎng mài le?', english: "Didn't you used to take it all to the farmer's market to sell? How come you sell online now?", vietnamese: 'Trước đây anh chẳng phải toàn mang ra chợ nông dân bán à? Sao giờ lại bán online rồi?' },
      { speaker: '表哥', traditional: '為了方便客戶訂購，我成立了一個網站，可是現在網路上的客戶不夠多，收入不穩定，所以假日還是到農夫市集去，讓更多的人認識我們的產品。慢慢地，我希望能只靠網路販賣。', simplified: '为了方便客户订购，我成立了一个网站，可是现在网路上的客户不够多，收入不稳定，所以假日还是到农夫市集去，让更多的人认识我们的产品。慢慢地，我希望能只靠网路贩卖。', pinyin: 'Wèile fāngbiàn kèhù dìnggòu, wǒ chénglì le yí ge wǎngzhàn, kěshì xiànzài wǎnglù shàng de kèhù bú gòu duō, shōurù bù wěndìng, suǒyǐ jiàrì háishì dào nóngfū shìjí qù, ràng gèng duō de rén rènshì wǒmen de chǎnpǐn. Mànmàn de, wǒ xīwàng néng zhǐ kào wǎnglù fànmài.', english: "I set up a website to make it easy for customers to order, but earnings are a bit unpredictable because I currently don't have enough online customers, so on holidays I still go to the farmers' market for better product exposure. Gradually, we hope that we can sell exclusively online.", vietnamese: 'Để tiện cho khách đặt mua, anh lập một trang web, nhưng hiện giờ khách trên mạng chưa đủ nhiều, thu nhập không ổn định, nên ngày nghỉ vẫn ra chợ nông dân, để nhiều người biết đến sản phẩm của bọn anh hơn. Từ từ, anh mong có thể chỉ bán qua mạng thôi.' },
      { speaker: '羅珊蒂', traditional: '你的產品種類夠多嗎？一個網站不是得要有很多不同的產品才可以嗎？', simplified: '你的产品种类够多吗？一个网站不是得要有很多不同的产品才可以吗？', pinyin: 'Nǐ de chǎnpǐn zhǒnglèi gòu duō ma? Yí ge wǎngzhàn bú shì děi yào yǒu hěn duō bùtóng de chǎnpǐn cái kěyǐ ma?', english: 'Do you have enough selection of products? You need to have a wide variety of products to run a website, right?', vietnamese: 'Chủng loại sản phẩm của anh đủ nhiều chưa? Một trang web chẳng phải phải có nhiều sản phẩm khác nhau mới được sao?' },
      { speaker: '表哥', traditional: '我認識的一位老阿嬤種了很多蔬菜。以前她只賣給中間商，利潤很低，所以我幫她上網賣。另外，我也找了一些回鄉下種田的年輕人一起經營網站。', simplified: '我认识的一位老阿嬷种了很多蔬菜。以前她只卖给中间商，利润很低，所以我帮她上网卖。另外，我也找了一些回乡下种田的年轻人一起经营网站。', pinyin: 'Wǒ rènshì de yí wèi lǎo āmā zhòng le hěn duō shūcài. Yǐqián tā zhǐ mài gěi zhōngjiānshāng, lìrùn hěn dī, suǒyǐ wǒ bāng tā shàngwǎng mài. Lìngwài, wǒ yě zhǎo le yìxiē huí xiāngxià zhòngtián de niánqīngrén yìqǐ jīngyíng wǎngzhàn.', english: 'I know an older lady who raises all kinds of vegetables. In the past, she used to only sell to resellers. Her profits were low, so I helped her go online to sell her products. In addition, I also got together with some young people who have returned to the countryside to till the land and together, we operate a website.', vietnamese: 'Một bà cụ anh quen trồng rất nhiều rau. Trước đây bà chỉ bán cho thương lái trung gian, lợi nhuận rất thấp, nên anh giúp bà bán trên mạng. Ngoài ra, anh còn tìm thêm vài người trẻ về quê làm ruộng cùng điều hành trang web.' },
      { speaker: '羅珊蒂', traditional: '上網訂購的話，多久可以收到？', simplified: '上网订购的话，多久可以收到？', pinyin: 'Shàngwǎng dìnggòu dehuà, duōjiǔ kěyǐ shōudào?', english: 'If someone orders online, how long can they receive their product?', vietnamese: 'Nếu đặt hàng qua mạng thì bao lâu nhận được?' },
      { speaker: '表哥', traditional: '在台灣宅配很快，一般來說，下訂單24小時後就能收到。客戶能吃到既新鮮又便宜的蔬果。（表哥站起來）不好意思，我得去忙了，你們繼續聊。', simplified: '在台湾宅配很快，一般来说，下订单24小时后就能收到。客户能吃到既新鲜又便宜的蔬果。（表哥站起来）不好意思，我得去忙了，你们继续聊。', pinyin: 'Zài Táiwān zháipèi hěn kuài, yìbān lái shuō, xià dìngdān èrshísì xiǎoshí hòu jiù néng shōudào. Kèhù néng chīdào jì xīnxiān yòu piányí de shūguǒ. (Biǎogē zhàn qǐlái) Bù hǎoyìsi, wǒ děi qù máng le, nǐmen jìxù liáo.', english: 'In Taiwan, express delivery is very quick. Generally, you can get your products within 24 hours of placing your order. Customers can eat produce that is both fresh and inexpensive. (The cousin stands up.) I\'m sorry. I have to get busy. You two continue chatting.', vietnamese: 'Ở Đài Loan giao hàng tận nhà rất nhanh, nói chung, sau khi đặt đơn 24 tiếng là nhận được rồi. Khách có thể ăn được rau quả vừa tươi vừa rẻ. (Anh họ đứng dậy) Xin lỗi nhé, anh phải đi làm việc rồi, mọi người cứ nói chuyện tiếp đi.' },
      { speaker: '安德思', traditional: '網路真的很方便。一天二十四小時，只要你需要，隨時都可以上網訂購。再說，網路商店的商品種類很多，搜尋一下就能找到你要的東西。', simplified: '网路真的很方便。一天二十四小时，只要你需要，随时都可以上网订购。再说，网路商店的商品种类很多，搜寻一下就能找到你要的东西。', pinyin: 'Wǎnglù zhēn de hěn fāngbiàn. Yì tiān èrshísì xiǎoshí, zhǐyào nǐ xūyào, suíshí dōu kěyǐ shàngwǎng dìnggòu. Zài shuō, wǎnglù shāngdiàn de shāngpǐn zhǒnglèi hěn duō, sōuxún yíxià jiù néng zhǎodào nǐ yào de dōngxi.', english: "The internet is really convenient. If you need something, you can go online anytime 24 hours a day to place an order. What's more, online shops have large varieties of products. Simply search and you can find whatever you want.", vietnamese: 'Mạng internet thật sự rất tiện. Một ngày hai mươi bốn tiếng, chỉ cần cậu cần, lúc nào cũng có thể lên mạng đặt mua. Hơn nữa, hàng hóa ở cửa hàng trực tuyến rất nhiều loại, tìm kiếm một chút là thấy được thứ cậu cần.' },
      { speaker: '李文彥', traditional: '我的冰箱就是在網路上買的。我媽常說，「貨比三家不吃虧」。我利用比價網站，很快就找到了，節省了很多跑來跑去的時間。', simplified: '我的冰箱就是在网路上买的。我妈常说，「货比三家不吃亏」。我利用比价网站，很快就找到了，节省了很多跑来跑去的时间。', pinyin: 'Wǒ de bīngxiāng jiùshì zài wǎnglù shàng mǎi de. Wǒ mā cháng shuō, "huò bǐ sān jiā bù chīkuī". Wǒ lìyòng bǐjià wǎngzhàn, hěn kuài jiù zhǎodào le, jiéshěng le hěn duō pǎolái pǎoqù de shíjiān.', english: 'I bought my refrigerator online. My mom likes to say, "Shop around and you won\'t get ripped off". I used a price comparison website and very quickly found one. It saved me a lot of time running around.', vietnamese: 'Tủ lạnh của mình chính là mua trên mạng. Mẹ mình thường nói, "so giá ba nơi không thiệt". Mình dùng trang web so giá, rất nhanh đã tìm được, tiết kiệm nhiều thời gian chạy đi chạy lại.' },
      { speaker: '何雅婷', traditional: '在網路上買東西也有風險。上次我買了一個皮包，沒想到收到以後，發現跟網站上的照片完全不一樣。更讓人生氣的是，我找不到賣家退錢。', simplified: '在网路上买东西也有风险。上次我买了一个皮包，没想到收到以后，发现跟网站上的照片完全不一样。更让人生气的是，我找不到卖家退钱。', pinyin: 'Zài wǎnglù shàng mǎi dōngxi yě yǒu fēngxiǎn. Shàng cì wǒ mǎi le yí ge píbāo, méi xiǎngdào shōudào yǐhòu, fāxiàn gēn wǎngzhàn shàng de zhàopiàn wánquán bù yíyàng. Gèng ràng rén shēngqì de shì, wǒ zhǎo bú dào màijiā tuì qián.', english: "Buying things online also comes with risks. Once, I bought a bag. I never expected that when I got it, the bag looked completely different from the picture on the website. What made me even more angry was, I couldn't find the seller to get a refund.", vietnamese: 'Mua đồ trên mạng cũng có rủi ro. Lần trước mình mua một cái túi xách, không ngờ nhận về rồi mới phát hiện hoàn toàn khác với ảnh trên trang web. Khiến mình tức hơn nữa là, mình không tìm được người bán để đòi tiền lại.' },
      { speaker: '安德思', traditional: '是有這樣的問題。所以網購必須找有信用的網站。這樣的話，萬一不滿意，七天以內還可以退換。而且，一般來說，上網買還是可以便宜一、兩成。', simplified: '是有这样的问题。所以网购必须找有信用的网站。这样的话，万一不满意，七天以内还可以退换。而且，一般来说，上网买还是可以便宜一、两成。', pinyin: 'Shì yǒu zhèyàng de wèntí. Suǒyǐ wǎnggòu bìxū zhǎo yǒu xìnyòng de wǎngzhàn. Zhèyàng dehuà, wànyī bù mǎnyì, qī tiān yǐnèi hái kěyǐ tuìhuàn. Érqiě, yìbān lái shuō, shàngwǎng mǎi háishì kěyǐ piányí yì, liǎng chéng.', english: "These kinds of problems do exist, so when you buy online, you have to find trustworthy sites. That way, if you're not satisfied, you can still make a return within seven days. And usually, buying online you can get things 10 to 20 percent cheaper.", vietnamese: 'Đúng là có vấn đề như vậy. Nên mua online nhất định phải tìm trang web có uy tín. Như vậy thì, lỡ không hài lòng, trong vòng bảy ngày vẫn có thể đổi trả. Hơn nữa, nói chung, mua trên mạng vẫn có thể rẻ hơn một, hai phần mười.' },
      { speaker: '羅珊蒂', traditional: '看起來上網購物越來越普遍。這兩年大家的購物習慣改變了這麼多。將來我開服裝店，還會有客人嗎？', simplified: '看起来上网购物越来越普遍。这两年大家的购物习惯改变了这么多。将来我开服装店，还会有客人吗？', pinyin: 'Kàn qǐlái shàngwǎng gòuwù yuè lái yuè pǔbiàn. Zhè liǎng nián dàjiā de gòuwù xíguàn gǎibiàn le zhème duō. Jiānglái wǒ kāi fúzhuāngdiàn, hái huì yǒu kèrén ma?', english: "It looks like online shopping is becoming increasingly common. Over the past two years, everybody's buying habits have changed so much. Will there still be customers when I open a clothing shop in the future?", vietnamese: 'Có vẻ mua sắm trực tuyến ngày càng phổ biến. Hai năm nay thói quen mua sắm của mọi người thay đổi nhiều như vậy. Sau này mình mở tiệm quần áo, liệu còn có khách không?' },
      { speaker: '何雅婷', traditional: '別擔心，對很多人來說，買東西的時候，最重要的還是能看到、摸到商品，尤其是服裝，一定要試穿。', simplified: '别担心，对很多人来说，买东西的时候，最重要的还是能看到、摸到商品，尤其是服装，一定要试穿。', pinyin: 'Bié dānxīn, duì hěn duō rén lái shuō, mǎi dōngxi de shíhòu, zuì zhòngyào de háishì néng kàndào, mōdào shāngpǐn, yóuqí shì fúzhuāng, yídìng yào shìchuān.', english: 'Don\'t worry. For many people, being able to see and touch products is still the most important thing when shopping. Clothing, in particular, they definitely want to try on.', vietnamese: 'Đừng lo, đối với nhiều người, lúc mua đồ, điều quan trọng nhất vẫn là nhìn thấy, sờ được sản phẩm, nhất là quần áo, nhất định phải mặc thử.' },
      { speaker: '李文彥', traditional: '妳說的沒錯，這兩種購物方式各有好處，大家可以按照自己的習慣跟需要選擇適合的購物方式。', simplified: '妳说的没错，这两种购物方式各有好处，大家可以按照自己的习惯跟需要选择适合的购物方式。', pinyin: 'Nǐ shuō de méi cuò, zhè liǎng zhǒng gòuwù fāngshì gè yǒu hǎochù, dàjiā kěyǐ ànzhào zìjǐ de xíguàn gēn xūyào xuǎnzé shìhé de gòuwù fāngshì.', english: "You're right. Each of these two kinds of shopping methods has its advantages. People can choose the shopping method suited to them based on their own habits and needs.", vietnamese: 'Cậu nói đúng, hai cách mua sắm này đều có cái hay riêng, mọi người có thể tùy theo thói quen và nhu cầu của mình mà chọn cách mua sắm phù hợp.' },
      { speaker: '羅珊蒂', traditional: '聽你這麼說，我就放心了。', simplified: '听你这么说，我就放心了。', pinyin: 'Tīng nǐ zhème shuō, wǒ jiù fàngxīn le.', english: "I'm relieved to hear you say that.", vietnamese: 'Nghe cậu nói vậy, mình yên tâm rồi.' }
    ]
  ],

  shortReading: {
    traditional:
      '鳳梨酥經濟學\n\n　　鳳梨是台灣很重要的農產品，對台灣的經濟發展一直有很大的幫助。台灣出口的鳳梨曾經占世界第二位，可惜後來因為成本太高，在價格上沒有辦法跟別的國家競爭，很多農夫因為種的鳳梨賣不出去，生活很辛苦。\n\n　　鳳梨在閩南語叫「旺來」，意思是可以給人帶來好運，所以用鳳梨做成內餡的甜點一直很受歡迎，不但拿來當做喜餅，也是大家喜愛的茶點，更是過年過節最好的禮物。一方面看到了這個商機，一方面希望能讓大家認識最能代表當地文化的傳統美食，台北市政府從2006年起年年舉辦鳳梨酥文化節，成功地讓鳳梨酥的產值從每年19億提高到現在的200多億。\n\n　　在台灣，早就有很多知名麵包店賣鳳梨酥，但是在2009年出現了第一家只賣鳳梨酥的店。老闆本來經營一家科技公司，因為看見家鄉鄰居和親戚朋友種的鳳梨一斤只能賣一塊半，生活非常不容易。他為了提高家鄉鳳梨農的收入，決定賣鳳梨酥。他找來開麵包店的叔叔，用當地出產的鳳梨研究出新口味，結果大受歡迎。因此，他能用穩定的價格跟鳳梨農購買鳳梨，改善了他們的生活。\n\n　　使用當地的食材，講究品質，並且利用現代的行銷方式，透過網路團購，才一年多這家公司的產品就成為台灣最受歡迎的鳳梨酥，而且在東京、上海開了店，跟Prada當了鄰居。一塊小小的鳳梨酥，因為有了網路才能不靠店面，不靠電視廣告，行銷全世界。',
    simplified:
      '凤梨酥经济学\n\n　　凤梨是台湾很重要的农产品，对台湾的经济发展一直有很大的帮助。台湾出口的凤梨曾经占世界第二位，可惜后来因为成本太高，在价格上没有办法跟别的国家竞争，很多农夫因为种的凤梨卖不出去，生活很辛苦。\n\n　　凤梨在闽南语叫「旺来」，意思是可以给人带来好运，所以用凤梨做成内馅的甜点一直很受欢迎，不但拿来当做喜饼，也是大家喜爱的茶点，更是过年过节最好的礼物。一方面看到了这个商机，一方面希望能让大家认识最能代表当地文化的传统美食，台北市政府从2006年起年年举办凤梨酥文化节，成功地让凤梨酥的产值从每年19亿提高到现在的200多亿。\n\n　　在台湾，早就有很多知名面包店卖凤梨酥，但是在2009年出现了第一家只卖凤梨酥的店。老板本来经营一家科技公司，因为看见家乡邻居和亲戚朋友种的凤梨一斤只能卖一块半，生活非常不容易。他为了提高家乡凤梨农的收入，决定卖凤梨酥。他找来开面包店的叔叔，用当地出产的凤梨研究出新口味，结果大受欢迎。因此，他能用稳定的价格跟凤梨农购买凤梨，改善了他们的生活。\n\n　　使用当地的食材，讲究品质，并且利用现代的行销方式，透过网路团购，才一年多这家公司的产品就成为台湾最受欢迎的凤梨酥，而且在东京、上海开了店，跟Prada当了邻居。一块小小的凤梨酥，因为有了网路才能不靠店面，不靠电视广告，行销全世界。',
    vietnamese:
      'Kinh tế học bánh dứa\n\nDứa là nông sản rất quan trọng của Đài Loan, luôn có đóng góp to lớn cho sự phát triển kinh tế Đài Loan. Dứa xuất khẩu của Đài Loan từng đứng thứ hai thế giới, tiếc là sau đó vì chi phí quá cao, không thể cạnh tranh về giá với các nước khác, rất nhiều nông dân vì dứa trồng ra không bán được mà cuộc sống rất vất vả.\n\nDứa trong tiếng Mân Nam gọi là "旺來" (vượng lai), nghĩa là có thể mang lại may mắn cho người ta, nên các loại bánh ngọt làm nhân từ dứa luôn được ưa chuộng, không chỉ dùng làm bánh báo hỷ, mà còn là món điểm tâm được mọi người yêu thích, càng là món quà tốt nhất dịp Tết lễ. Một mặt nhìn thấy cơ hội kinh doanh này, một mặt mong muốn để mọi người biết đến món ăn truyền thống đại diện nhất cho văn hóa địa phương, chính quyền thành phố Đài Bắc từ năm 2006 hàng năm tổ chức Lễ hội Văn hóa Bánh Dứa, thành công giúp giá trị sản xuất bánh dứa từ 1,9 tỷ mỗi năm tăng lên hơn 20 tỷ hiện nay.\n\nỞ Đài Loan, từ lâu đã có nhiều tiệm bánh mì nổi tiếng bán bánh dứa, nhưng đến năm 2009 mới xuất hiện tiệm đầu tiên chỉ bán bánh dứa. Ông chủ vốn kinh doanh một công ty công nghệ, vì thấy hàng xóm và họ hàng bạn bè ở quê trồng dứa một cân chỉ bán được một đồng rưỡi, cuộc sống rất khó khăn. Anh vì muốn tăng thu nhập cho nông dân trồng dứa ở quê mà quyết định bán bánh dứa. Anh tìm đến người chú mở tiệm bánh mì, dùng dứa sản xuất tại địa phương nghiên cứu ra hương vị mới, kết quả rất được yêu thích. Nhờ đó, anh có thể dùng giá ổn định để mua dứa từ nông dân, cải thiện cuộc sống của họ.\n\nSử dụng nguyên liệu địa phương, chú trọng chất lượng, đồng thời tận dụng phương thức tiếp thị hiện đại, thông qua mua chung trên mạng, chỉ hơn một năm sản phẩm của công ty này đã trở thành bánh dứa được yêu thích nhất Đài Loan, còn mở cửa hàng ở Tokyo, Thượng Hải, làm hàng xóm với Prada. Một chiếc bánh dứa nhỏ bé, nhờ có internet mới có thể không cần mặt bằng cửa hàng, không cần quảng cáo truyền hình, mà tiếp thị ra khắp thế giới.'
  },

  phrases: [
    { phraseTraditional: '網購', phraseSimplified: '网购', pinyin: 'wǎnggòu', meaningVi: 'mua sắm trực tuyến' },
    { phraseTraditional: '貨比三家不吃虧', phraseSimplified: '货比三家不吃亏', pinyin: 'huò bǐ sān jiā bù chīkuī', meaningVi: 'so giá ba nơi không thiệt' },
    { phraseTraditional: '兩成', phraseSimplified: '两成', pinyin: 'liǎng chéng', meaningVi: '20%' },
    { phraseTraditional: '鳳梨酥', phraseSimplified: '凤梨酥', pinyin: 'fènglí sū', meaningVi: 'bánh dứa' },
    { phraseTraditional: '第二位', phraseSimplified: '第二位', pinyin: 'dì èr wèi', meaningVi: 'vị trí thứ hai' },
    { phraseTraditional: '鳳梨農', phraseSimplified: '凤梨农', pinyin: 'fènglí nóng', meaningVi: 'nông dân trồng dứa' },
    { phraseTraditional: '跑來跑去', phraseSimplified: '跑来跑去', pinyin: 'pǎolái pǎoqù', meaningVi: 'chạy đi chạy lại' },
    { phraseTraditional: '試穿', phraseSimplified: '试穿', pinyin: 'shìchuān', meaningVi: 'mặc thử' },
    { phraseTraditional: '按照習慣跟需要', phraseSimplified: '按照习惯跟需要', pinyin: 'ànzhào xíguàn gēn xūyào', meaningVi: 'tùy theo thói quen và nhu cầu' },
    { phraseTraditional: '放心', phraseSimplified: '放心', pinyin: 'fàngxīn', meaningVi: 'yên tâm' },
    { phraseTraditional: '大受歡迎', phraseSimplified: '大受欢迎', pinyin: 'dà shòu huānyíng', meaningVi: 'rất được yêu thích' },
    { phraseTraditional: '當了鄰居', phraseSimplified: '当了邻居', pinyin: 'dāng le línjū', meaningVi: 'trở thành hàng xóm' },
    { phraseTraditional: '行銷全世界', phraseSimplified: '行销全世界', pinyin: 'xíngxiāo quán shìjiè', meaningVi: 'tiếp thị ra khắp thế giới' },
    { phraseTraditional: '收入不穩定', phraseSimplified: '收入不稳定', pinyin: 'shōurù bù wěndìng', meaningVi: 'thu nhập không ổn định' },
    { phraseTraditional: '生活很辛苦', phraseSimplified: '生活很辛苦', pinyin: 'shēnghuó hěn xīnkǔ', meaningVi: 'cuộc sống rất vất vả' }
  ],

  vocab: [
    { id: 'L9-001', lessonId: 'L9', order: 1, group: 'vocab1', traditional: '訂單', simplified: '订单', pinyin: 'dìngdān', wordClass: ['N'], meaningVi: 'đơn hàng', meaningEn: 'an order (trading)', tags: ['mua-sam'], examples: [{ traditional: '我上網查一下訂單。', simplified: '我上网查一下订单。', vietnamese: 'Mình lên mạng kiểm tra đơn hàng.' }] },
    { id: 'L9-002', lessonId: 'L9', order: 2, group: 'vocab1', traditional: '客戶', simplified: '客户', pinyin: 'kèhù', wordClass: ['N'], meaningVi: 'khách hàng', meaningEn: 'customer, client', tags: ['mua-sam'], examples: [{ traditional: '把明天要寄給客戶的東西準備好。', simplified: '把明天要寄给客户的东西准备好。', vietnamese: 'Chuẩn bị đồ ngày mai gửi cho khách.' }] },
    { id: 'L9-003', lessonId: 'L9', order: 3, group: 'vocab1', traditional: '方便', simplified: '方便', pinyin: 'fāngbiàn', wordClass: ['V'], meaningVi: 'tạo thuận tiện', meaningEn: 'to offer convenience', examples: [{ traditional: '為了方便客戶訂購，我成立了一個網站。', simplified: '为了方便客户订购，我成立了一个网站。', vietnamese: 'Để tiện cho khách đặt mua, anh lập một trang web.' }] },
    { id: 'L9-004', lessonId: 'L9', order: 4, group: 'vocab1', traditional: '訂購', simplified: '订购', pinyin: 'dìnggòu', wordClass: ['V'], meaningVi: 'đặt mua', meaningEn: 'to order, to place an order', tags: ['mua-sam'], examples: [{ traditional: '上網訂購的話，多久可以收到？', simplified: '上网订购的话，多久可以收到？', vietnamese: 'Nếu đặt hàng qua mạng thì bao lâu nhận được?' }] },
    { id: 'L9-005', lessonId: 'L9', order: 5, group: 'vocab1', traditional: '成立', simplified: '成立', pinyin: 'chénglì', wordClass: ['V'], meaningVi: 'thành lập', meaningEn: 'to establish, to set up', examples: [{ traditional: '我成立了一個網站。', simplified: '我成立了一个网站。', vietnamese: 'Anh lập một trang web.' }] },
    { id: 'L9-006', lessonId: 'L9', order: 6, group: 'vocab1', traditional: '假日', simplified: '假日', pinyin: 'jiàrì', wordClass: ['N'], meaningVi: 'ngày nghỉ, ngày lễ', meaningEn: 'holiday', examples: [{ traditional: '假日還是到農夫市集去。', simplified: '假日还是到农夫市集去。', vietnamese: 'Ngày nghỉ vẫn ra chợ nông dân.' }] },
    { id: 'L9-007', lessonId: 'L9', order: 7, group: 'vocab1', traditional: '販賣', simplified: '贩卖', pinyin: 'fànmài', wordClass: ['V'], meaningVi: 'bán, tiêu thụ', meaningEn: 'to sell', tags: ['mua-sam'], examples: [{ traditional: '我希望能只靠網路販賣。', simplified: '我希望能只靠网路贩卖。', vietnamese: 'Anh mong có thể chỉ bán qua mạng thôi.' }] },
    { id: 'L9-008', lessonId: 'L9', order: 8, group: 'vocab1', traditional: '阿嬤', simplified: '阿嬷', pinyin: 'āmā', wordClass: ['N'], meaningVi: 'bà, bà cụ', meaningEn: 'grandma, older woman (Taiwanese)', examples: [{ traditional: '我認識的一位老阿嬤種了很多蔬菜。', simplified: '我认识的一位老阿嬷种了很多蔬菜。', vietnamese: 'Một bà cụ anh quen trồng rất nhiều rau.' }] },
    { id: 'L9-009', lessonId: 'L9', order: 9, group: 'vocab1', traditional: '中間商', simplified: '中间商', pinyin: 'zhōngjiānshāng', wordClass: ['N'], meaningVi: 'thương lái trung gian', meaningEn: 'middleman, reseller', examples: [{ traditional: '以前她只賣給中間商，利潤很低。', simplified: '以前她只卖给中间商，利润很低。', vietnamese: 'Trước đây bà chỉ bán cho thương lái trung gian, lợi nhuận rất thấp.' }] },
    { id: 'L9-010', lessonId: 'L9', order: 10, group: 'vocab1', traditional: '經營', simplified: '经营', pinyin: 'jīngyíng', wordClass: ['V'], meaningVi: 'kinh doanh, điều hành', meaningEn: 'to operate, run (a business)', examples: [{ traditional: '我也找了一些年輕人一起經營網站。', simplified: '我也找了一些年轻人一起经营网站。', vietnamese: 'Anh còn tìm thêm vài người trẻ cùng điều hành trang web.' }] },
    { id: 'L9-011', lessonId: 'L9', order: 11, group: 'vocab1', traditional: '宅配', simplified: '宅配', pinyin: 'zháipèi', wordClass: ['Vi'], meaningVi: 'giao hàng tận nhà', meaningEn: 'express delivery', tags: ['mua-sam'], examples: [{ traditional: '在台灣宅配很快。', simplified: '在台湾宅配很快。', vietnamese: 'Ở Đài Loan giao hàng tận nhà rất nhanh.' }] },
    { id: 'L9-012', lessonId: 'L9', order: 12, group: 'vocab1', traditional: '下', simplified: '下', pinyin: 'xià', wordClass: ['V'], meaningVi: 'đặt (đơn hàng)', meaningEn: 'to place (an order)', examples: [{ traditional: '下訂單24小時後就能收到。', simplified: '下订单24小时后就能收到。', vietnamese: 'Sau khi đặt đơn 24 tiếng là nhận được rồi.' }] },
    { id: 'L9-013', lessonId: 'L9', order: 13, group: 'vocab1', traditional: '既', simplified: '既', pinyin: 'jì', wordClass: ['Adv'], meaningVi: 'không chỉ', meaningEn: 'not merely', notes: 'Xem ngữ pháp II: 既…又….', examples: [{ traditional: '客戶能吃到既新鮮又便宜的蔬果。', simplified: '客户能吃到既新鲜又便宜的蔬果。', vietnamese: 'Khách có thể ăn được rau quả vừa tươi vừa rẻ.' }] },
    { id: 'L9-014', lessonId: 'L9', order: 14, group: 'vocab1', traditional: '隨時', simplified: '随时', pinyin: 'suíshí', wordClass: ['Adv'], meaningVi: 'bất cứ lúc nào', meaningEn: 'anytime', examples: [{ traditional: '只要你需要，隨時都可以上網訂購。', simplified: '只要你需要，随时都可以上网订购。', vietnamese: 'Chỉ cần cậu cần, lúc nào cũng có thể lên mạng đặt mua.' }] },
    { id: 'L9-015', lessonId: 'L9', order: 15, group: 'vocab1', traditional: '搜尋', simplified: '搜寻', pinyin: 'sōuxún', wordClass: ['V'], meaningVi: 'tìm kiếm', meaningEn: 'to search', examples: [{ traditional: '搜尋一下就能找到你要的東西。', simplified: '搜寻一下就能找到你要的东西。', vietnamese: 'Tìm kiếm một chút là thấy được thứ cậu cần.' }] },
    { id: 'L9-016', lessonId: 'L9', order: 16, group: 'vocab1', traditional: '冰箱', simplified: '冰箱', pinyin: 'bīngxiāng', wordClass: ['N'], meaningVi: 'tủ lạnh', meaningEn: 'refrigerator (lit. ice box)', examples: [{ traditional: '我的冰箱就是在網路上買的。', simplified: '我的冰箱就是在网路上买的。', vietnamese: 'Tủ lạnh của mình chính là mua trên mạng.' }] },
    { id: 'L9-017', lessonId: 'L9', order: 17, group: 'vocab1', traditional: '吃虧', simplified: '吃亏', pinyin: 'chīkuī', wordClass: ['V-sep'], meaningVi: 'chịu thiệt', meaningEn: 'to suffer a loss', examples: [{ traditional: '貨比三家不吃虧。', simplified: '货比三家不吃亏。', vietnamese: 'So giá ba nơi không thiệt.' }] },
    { id: 'L9-018', lessonId: 'L9', order: 18, group: 'vocab1', traditional: '比價', simplified: '比价', pinyin: 'bǐjià', wordClass: ['V-sep'], meaningVi: 'so giá, khảo giá', meaningEn: 'to compare prices, price comparison', examples: [{ traditional: '我利用比價網站，很快就找到了。', simplified: '我利用比价网站，很快就找到了。', vietnamese: 'Mình dùng trang web so giá, rất nhanh đã tìm được.' }] },
    { id: 'L9-019', lessonId: 'L9', order: 19, group: 'vocab1', traditional: '風險', simplified: '风险', pinyin: 'fēngxiǎn', wordClass: ['N'], meaningVi: 'rủi ro', meaningEn: 'risk', examples: [{ traditional: '在網路上買東西也有風險。', simplified: '在网路上买东西也有风险。', vietnamese: 'Mua đồ trên mạng cũng có rủi ro.' }] },
    { id: 'L9-020', lessonId: 'L9', order: 20, group: 'vocab1', traditional: '賣家', simplified: '卖家', pinyin: 'màijiā', wordClass: ['N'], meaningVi: 'người bán', meaningEn: 'seller', tags: ['mua-sam'], examples: [{ traditional: '我找不到賣家退錢。', simplified: '我找不到卖家退钱。', vietnamese: 'Mình không tìm được người bán để đòi tiền lại.' }] },
    { id: 'L9-021', lessonId: 'L9', order: 21, group: 'vocab1', traditional: '必須', simplified: '必须', pinyin: 'bìxū', wordClass: ['Vaux'], meaningVi: 'phải, nhất định phải', meaningEn: 'must, to have to', examples: [{ traditional: '網購必須找有信用的網站。', simplified: '网购必须找有信用的网站。', vietnamese: 'Mua online nhất định phải tìm trang web có uy tín.' }] },
    { id: 'L9-022', lessonId: 'L9', order: 22, group: 'vocab1', traditional: '信用', simplified: '信用', pinyin: 'xìnyòng', wordClass: ['N'], meaningVi: 'uy tín, tín dụng', meaningEn: 'credibility', tags: ['mua-sam'], examples: [{ traditional: '網購必須找有信用的網站。', simplified: '网购必须找有信用的网站。', vietnamese: 'Mua online nhất định phải tìm trang web có uy tín.' }] },
    { id: 'L9-023', lessonId: 'L9', order: 23, group: 'vocab1', traditional: '萬一', simplified: '万一', pinyin: 'wànyī', wordClass: ['Conj'], meaningVi: 'lỡ như, nhỡ đâu', meaningEn: 'in case', examples: [{ traditional: '萬一不滿意，七天以內還可以退換。', simplified: '万一不满意，七天以内还可以退换。', vietnamese: 'Lỡ không hài lòng, trong vòng bảy ngày vẫn có thể đổi trả.' }] },
    { id: 'L9-024', lessonId: 'L9', order: 24, group: 'vocab1', traditional: '滿意', simplified: '满意', pinyin: 'mǎnyì', wordClass: ['Vst'], meaningVi: 'hài lòng', meaningEn: 'satisfied', examples: [{ traditional: '萬一不滿意，七天以內還可以退換。', simplified: '万一不满意，七天以内还可以退换。', vietnamese: 'Lỡ không hài lòng, trong vòng bảy ngày vẫn có thể đổi trả.' }] },
    { id: 'L9-025', lessonId: 'L9', order: 25, group: 'vocab1', traditional: '以內', simplified: '以内', pinyin: 'yǐnèi', wordClass: ['N'], meaningVi: 'trong vòng', meaningEn: 'within', notes: 'Xem ngữ pháp III: …以內.', examples: [{ traditional: '七天以內還可以退換。', simplified: '七天以内还可以退换。', vietnamese: 'Trong vòng bảy ngày vẫn có thể đổi trả.' }] },
    { id: 'L9-026', lessonId: 'L9', order: 26, group: 'vocab1', traditional: '普遍', simplified: '普遍', pinyin: 'pǔbiàn', wordClass: ['Vs'], meaningVi: 'phổ biến', meaningEn: 'widespread, common', examples: [{ traditional: '上網購物越來越普遍。', simplified: '上网购物越来越普遍。', vietnamese: 'Mua sắm trực tuyến ngày càng phổ biến.' }] },
    { id: 'L9-027', lessonId: 'L9', order: 27, group: 'vocab1', traditional: '選擇', simplified: '选择', pinyin: 'xuǎnzé', wordClass: ['V'], meaningVi: 'lựa chọn', meaningEn: 'to choose', examples: [{ traditional: '大家可以選擇適合的購物方式。', simplified: '大家可以选择适合的购物方式。', vietnamese: 'Mọi người có thể chọn cách mua sắm phù hợp.' }] },
    { id: 'L9-028', lessonId: 'L9', order: 28, group: 'vocab1', traditional: '網購', simplified: '网购', pinyin: 'wǎnggòu', wordClass: ['Other'], meaningVi: 'mua sắm trực tuyến', meaningEn: 'online shopping', tags: ['mua-sam'], examples: [{ traditional: '現在網購真的太方便了。', simplified: '现在网购真的太方便了。', vietnamese: 'Mua online giờ tiện thật.' }] },
    { id: 'L9-029', lessonId: 'L9', order: 29, group: 'vocab1', traditional: '貨比三家不吃虧', simplified: '货比三家不吃亏', pinyin: 'huò bǐ sān jiā bù chīkuī', wordClass: ['Other'], meaningVi: 'so giá ba nơi không thiệt', meaningEn: "shop around and you won't get ripped off", examples: [{ traditional: '我媽常說，「貨比三家不吃虧」。', simplified: '我妈常说，「货比三家不吃亏」。', vietnamese: 'Mẹ mình thường nói, "so giá ba nơi không thiệt".' }] },
    { id: 'L9-030', lessonId: 'L9', order: 30, group: 'vocab1', traditional: '兩成', simplified: '两成', pinyin: 'liǎng chéng', wordClass: ['Other'], meaningVi: '20%', meaningEn: '20%, literally 2/10', examples: [{ traditional: '上網買還是可以便宜一、兩成。', simplified: '上网买还是可以便宜一、两成。', vietnamese: 'Mua trên mạng vẫn có thể rẻ hơn một, hai phần mười.' }] },

    { id: 'L9-031', lessonId: 'L9', order: 1, group: 'vocab2', traditional: '鳳梨', simplified: '凤梨', pinyin: 'fènglí', wordClass: ['N'], meaningVi: 'dứa', meaningEn: 'pineapple', tags: ['am-thuc'], examples: [{ traditional: '鳳梨是台灣很重要的農產品。', simplified: '凤梨是台湾很重要的农产品。', vietnamese: 'Dứa là nông sản rất quan trọng của Đài Loan.' }] },
    { id: 'L9-032', lessonId: 'L9', order: 2, group: 'vocab2', traditional: '農產品', simplified: '农产品', pinyin: 'nóngchǎnpǐn', wordClass: ['N'], meaningVi: 'nông sản', meaningEn: 'agricultural product', tags: ['nong-nghiep'], examples: [{ traditional: '鳳梨是台灣很重要的農產品。', simplified: '凤梨是台湾很重要的农产品。', vietnamese: 'Dứa là nông sản rất quan trọng của Đài Loan.' }] },
    { id: 'L9-033', lessonId: 'L9', order: 3, group: 'vocab2', traditional: '出口', simplified: '出口', pinyin: 'chūkǒu', wordClass: ['V'], meaningVi: 'xuất khẩu', meaningEn: 'to export', examples: [{ traditional: '台灣出口的鳳梨曾經占世界第二位。', simplified: '台湾出口的凤梨曾经占世界第二位。', vietnamese: 'Dứa xuất khẩu của Đài Loan từng đứng thứ hai thế giới.' }] },
    { id: 'L9-034', lessonId: 'L9', order: 4, group: 'vocab2', traditional: '曾經', simplified: '曾经', pinyin: 'céngjīng', wordClass: ['Adv'], meaningVi: 'từng', meaningEn: 'been the case before, once', examples: [{ traditional: '台灣出口的鳳梨曾經占世界第二位。', simplified: '台湾出口的凤梨曾经占世界第二位。', vietnamese: 'Dứa xuất khẩu của Đài Loan từng đứng thứ hai thế giới.' }] },
    { id: 'L9-035', lessonId: 'L9', order: 5, group: 'vocab2', traditional: '占', simplified: '占', pinyin: 'zhàn', wordClass: ['Vst'], meaningVi: 'chiếm', meaningEn: 'to constitute, to account for', notes: 'Xem ngữ pháp IV: 占.', examples: [{ traditional: '台灣出口的鳳梨曾經占世界第二位。', simplified: '台湾出口的凤梨曾经占世界第二位。', vietnamese: 'Dứa xuất khẩu của Đài Loan từng đứng thứ hai thế giới.' }] },
    { id: 'L9-036', lessonId: 'L9', order: 6, group: 'vocab2', traditional: '成本', simplified: '成本', pinyin: 'chéngběn', wordClass: ['N'], meaningVi: 'chi phí, giá thành', meaningEn: 'costs', examples: [{ traditional: '後來因為成本太高，沒辦法跟別的國家競爭。', simplified: '后来因为成本太高，没办法跟别的国家竞争。', vietnamese: 'Sau đó vì chi phí quá cao, không thể cạnh tranh với các nước khác.' }] },
    { id: 'L9-037', lessonId: 'L9', order: 7, group: 'vocab2', traditional: '價格', simplified: '价格', pinyin: 'jiàgé', wordClass: ['N'], meaningVi: 'giá cả', meaningEn: 'price', tags: ['mua-sam'], examples: [{ traditional: '在價格上沒有辦法跟別的國家競爭。', simplified: '在价格上没有办法跟别的国家竞争。', vietnamese: 'Không thể cạnh tranh về giá với các nước khác.' }] },
    { id: 'L9-038', lessonId: 'L9', order: 8, group: 'vocab2', traditional: '競爭', simplified: '竞争', pinyin: 'jìngzhēng', wordClass: ['Vi'], meaningVi: 'cạnh tranh', meaningEn: 'to compete against', examples: [{ traditional: '在價格上沒有辦法跟別的國家競爭。', simplified: '在价格上没有办法跟别的国家竞争。', vietnamese: 'Không thể cạnh tranh về giá với các nước khác.' }] },
    { id: 'L9-039', lessonId: 'L9', order: 9, group: 'vocab2', traditional: '好運', simplified: '好运', pinyin: 'hǎoyùn', wordClass: ['N'], meaningVi: 'may mắn', meaningEn: 'good luck', examples: [{ traditional: '鳳梨可以給人帶來好運。', simplified: '凤梨可以给人带来好运。', vietnamese: 'Dứa có thể mang lại may mắn cho người ta.' }] },
    { id: 'L9-040', lessonId: 'L9', order: 10, group: 'vocab2', traditional: '內餡', simplified: '内馅', pinyin: 'nèixiàn', wordClass: ['N'], meaningVi: 'nhân (bánh)', meaningEn: 'filling (of pastries etc.)', tags: ['am-thuc'], examples: [{ traditional: '用鳳梨做成內餡的甜點一直很受歡迎。', simplified: '用凤梨做成内馅的甜点一直很受欢迎。', vietnamese: 'Các loại bánh ngọt làm nhân từ dứa luôn được ưa chuộng.' }] },
    { id: 'L9-041', lessonId: 'L9', order: 11, group: 'vocab2', traditional: '當做', simplified: '当做', pinyin: 'dāngzuò', wordClass: ['V'], meaningVi: 'coi như, dùng làm', meaningEn: 'to treat as, to serve as', examples: [{ traditional: '不但拿來當做喜餅。', simplified: '不但拿来当做喜饼。', vietnamese: 'Không chỉ dùng làm bánh báo hỷ.' }] },
    { id: 'L9-042', lessonId: 'L9', order: 12, group: 'vocab2', traditional: '喜餅', simplified: '喜饼', pinyin: 'xǐbǐng', wordClass: ['N'], meaningVi: 'bánh báo hỷ', meaningEn: 'wedding-announcement pastries', tags: ['am-thuc'], examples: [{ traditional: '不但拿來當做喜餅。', simplified: '不但拿来当做喜饼。', vietnamese: 'Không chỉ dùng làm bánh báo hỷ.' }] },
    { id: 'L9-043', lessonId: 'L9', order: 13, group: 'vocab2', traditional: '喜愛', simplified: '喜爱', pinyin: 'xǐ\'ài', wordClass: ['Vst'], meaningVi: 'yêu thích', meaningEn: 'fond of', examples: [{ traditional: '也是大家喜愛的茶點。', simplified: '也是大家喜爱的茶点。', vietnamese: 'Cũng là món điểm tâm được mọi người yêu thích.' }] },
    { id: 'L9-044', lessonId: 'L9', order: 14, group: 'vocab2', traditional: '茶點', simplified: '茶点', pinyin: 'chádiǎn', wordClass: ['N'], meaningVi: 'điểm tâm (dùng kèm trà)', meaningEn: 'snacks, dessert (served with tea)', tags: ['am-thuc'], examples: [{ traditional: '也是大家喜愛的茶點。', simplified: '也是大家喜爱的茶点。', vietnamese: 'Cũng là món điểm tâm được mọi người yêu thích.' }] },
    { id: 'L9-045', lessonId: 'L9', order: 15, group: 'vocab2', traditional: '商機', simplified: '商机', pinyin: 'shāngjī', wordClass: ['N'], meaningVi: 'cơ hội kinh doanh', meaningEn: 'business opportunity', examples: [{ traditional: '一方面看到了這個商機。', simplified: '一方面看到了这个商机。', vietnamese: 'Một mặt nhìn thấy cơ hội kinh doanh này.' }] },
    { id: 'L9-046', lessonId: 'L9', order: 16, group: 'vocab2', traditional: '代表', simplified: '代表', pinyin: 'dàibiǎo', wordClass: ['V'], meaningVi: 'đại diện', meaningEn: 'to represent', examples: [{ traditional: '最能代表當地文化的傳統美食。', simplified: '最能代表当地文化的传统美食。', vietnamese: 'Món ăn truyền thống đại diện nhất cho văn hóa địa phương.' }] },
    { id: 'L9-047', lessonId: 'L9', order: 17, group: 'vocab2', traditional: '政府', simplified: '政府', pinyin: 'zhèngfǔ', wordClass: ['N'], meaningVi: 'chính phủ, chính quyền', meaningEn: 'government', examples: [{ traditional: '台北市政府從2006年起年年舉辦鳳梨酥文化節。', simplified: '台北市政府从2006年起年年举办凤梨酥文化节。', vietnamese: 'Chính quyền thành phố Đài Bắc từ năm 2006 hàng năm tổ chức Lễ hội Văn hóa Bánh Dứa.' }] },
    { id: 'L9-048', lessonId: 'L9', order: 18, group: 'vocab2', traditional: '舉辦', simplified: '举办', pinyin: 'jǔbàn', wordClass: ['V'], meaningVi: 'tổ chức', meaningEn: 'to organize, hold', examples: [{ traditional: '台北市政府年年舉辦鳳梨酥文化節。', simplified: '台北市政府年年举办凤梨酥文化节。', vietnamese: 'Chính quyền Đài Bắc hàng năm tổ chức Lễ hội Văn hóa Bánh Dứa.' }] },
    { id: 'L9-049', lessonId: 'L9', order: 19, group: 'vocab2', traditional: '產值', simplified: '产值', pinyin: 'chǎnzhí', wordClass: ['N'], meaningVi: 'giá trị sản xuất', meaningEn: 'production value, output', examples: [{ traditional: '讓鳳梨酥的產值提高到現在的200多億。', simplified: '让凤梨酥的产值提高到现在的200多亿。', vietnamese: 'Giúp giá trị sản xuất bánh dứa tăng lên hơn 20 tỷ hiện nay.' }] },
    { id: 'L9-050', lessonId: 'L9', order: 20, group: 'vocab2', traditional: '提高', simplified: '提高', pinyin: 'tígāo', wordClass: ['V'], meaningVi: 'nâng cao, tăng', meaningEn: 'to increase, to elevate', examples: [{ traditional: '讓鳳梨酥的產值提高到現在的200多億。', simplified: '让凤梨酥的产值提高到现在的200多亿。', vietnamese: 'Giúp giá trị sản xuất bánh dứa tăng lên hơn 20 tỷ hiện nay.' }] },
    { id: 'L9-051', lessonId: 'L9', order: 21, group: 'vocab2', traditional: '知名', simplified: '知名', pinyin: 'zhīmíng', wordClass: ['Vs'], meaningVi: 'nổi tiếng', meaningEn: 'well known, renowned', examples: [{ traditional: '早就有很多知名麵包店賣鳳梨酥。', simplified: '早就有很多知名面包店卖凤梨酥。', vietnamese: 'Từ lâu đã có nhiều tiệm bánh mì nổi tiếng bán bánh dứa.' }] },
    { id: 'L9-052', lessonId: 'L9', order: 22, group: 'vocab2', traditional: '出現', simplified: '出现', pinyin: 'chūxiàn', wordClass: ['Vp'], meaningVi: 'xuất hiện', meaningEn: 'to appear', examples: [{ traditional: '在2009年出現了第一家只賣鳳梨酥的店。', simplified: '在2009年出现了第一家只卖凤梨酥的店。', vietnamese: 'Đến năm 2009 mới xuất hiện tiệm đầu tiên chỉ bán bánh dứa.' }] },
    { id: 'L9-053', lessonId: 'L9', order: 23, group: 'vocab2', traditional: '科技', simplified: '科技', pinyin: 'kējì', wordClass: ['N'], meaningVi: 'công nghệ, khoa học kỹ thuật', meaningEn: 'technology', examples: [{ traditional: '老闆本來經營一家科技公司。', simplified: '老板本来经营一家科技公司。', vietnamese: 'Ông chủ vốn kinh doanh một công ty công nghệ.' }] },
    { id: 'L9-054', lessonId: 'L9', order: 24, group: 'vocab2', traditional: '（台）斤', simplified: '（台）斤', pinyin: '(tái) jīn', wordClass: ['M'], meaningVi: 'cân (đơn vị đo lường Đài Loan, 600g)', meaningEn: 'catty, a unit of measure in Taiwan, equivalent to 600 grams', examples: [{ traditional: '鳳梨一斤只能賣一塊半。', simplified: '凤梨一斤只能卖一块半。', vietnamese: 'Dứa một cân chỉ bán được một đồng rưỡi.' }] },
    { id: 'L9-055', lessonId: 'L9', order: 25, group: 'vocab2', traditional: '叔叔', simplified: '叔叔', pinyin: 'shúshu', wordClass: ['N'], meaningVi: 'chú (em trai của bố)', meaningEn: "uncle (father's younger brother)", tags: ['gia-dinh'], examples: [{ traditional: '他找來開麵包店的叔叔。', simplified: '他找来开面包店的叔叔。', vietnamese: 'Anh tìm đến người chú mở tiệm bánh mì.' }] },
    { id: 'L9-056', lessonId: 'L9', order: 26, group: 'vocab2', traditional: '口味', simplified: '口味', pinyin: 'kǒuwèi', wordClass: ['N'], meaningVi: 'hương vị, khẩu vị', meaningEn: 'flavor', tags: ['am-thuc'], examples: [{ traditional: '用當地出產的鳳梨研究出新口味。', simplified: '用当地出产的凤梨研究出新口味。', vietnamese: 'Dùng dứa sản xuất tại địa phương nghiên cứu ra hương vị mới.' }] },
    { id: 'L9-057', lessonId: 'L9', order: 27, group: 'vocab2', traditional: '結果', simplified: '结果', pinyin: 'jiéguǒ', wordClass: ['Adv'], meaningVi: 'kết quả là', meaningEn: 'as a result', notes: 'Xem ngữ pháp VII: 結果.', examples: [{ traditional: '研究出新口味，結果大受歡迎。', simplified: '研究出新口味，结果大受欢迎。', vietnamese: 'Nghiên cứu ra hương vị mới, kết quả rất được yêu thích.' }] },
    { id: 'L9-058', lessonId: 'L9', order: 28, group: 'vocab2', traditional: '購買', simplified: '购买', pinyin: 'gòumǎi', wordClass: ['V'], meaningVi: 'mua', meaningEn: 'to purchase', tags: ['mua-sam'], examples: [{ traditional: '他能用穩定的價格跟鳳梨農購買鳳梨。', simplified: '他能用稳定的价格跟凤梨农购买凤梨。', vietnamese: 'Anh có thể dùng giá ổn định để mua dứa từ nông dân.' }] },
    { id: 'L9-059', lessonId: 'L9', order: 29, group: 'vocab2', traditional: '改善', simplified: '改善', pinyin: 'gǎishàn', wordClass: ['V'], meaningVi: 'cải thiện', meaningEn: 'to improve', examples: [{ traditional: '改善了他們的生活。', simplified: '改善了他们的生活。', vietnamese: 'Cải thiện cuộc sống của họ.' }] },
    { id: 'L9-060', lessonId: 'L9', order: 30, group: 'vocab2', traditional: '並且', simplified: '并且', pinyin: 'bìngqiě', wordClass: ['Conj'], meaningVi: 'đồng thời, hơn nữa', meaningEn: 'moreover', examples: [{ traditional: '講究品質，並且利用現代的行銷方式。', simplified: '讲究品质，并且利用现代的行销方式。', vietnamese: 'Chú trọng chất lượng, đồng thời tận dụng phương thức tiếp thị hiện đại.' }] },
    { id: 'L9-061', lessonId: 'L9', order: 31, group: 'vocab2', traditional: '行銷', simplified: '行销', pinyin: 'xíngxiāo', wordClass: ['V'], meaningVi: 'tiếp thị', meaningEn: 'to market', tags: ['mua-sam'], examples: [{ traditional: '利用現代的行銷方式。', simplified: '利用现代的行销方式。', vietnamese: 'Tận dụng phương thức tiếp thị hiện đại.' }] },
    { id: 'L9-062', lessonId: 'L9', order: 32, group: 'vocab2', traditional: '團購', simplified: '团购', pinyin: 'tuángòu', wordClass: ['V'], meaningVi: 'mua chung (để được giá rẻ hơn)', meaningEn: 'to group buy (for cheaper prices)', tags: ['mua-sam'], examples: [{ traditional: '透過網路團購。', simplified: '透过网路团购。', vietnamese: 'Thông qua mua chung trên mạng.' }] },
    { id: 'L9-063', lessonId: 'L9', order: 33, group: 'vocab2', traditional: '店面', simplified: '店面', pinyin: 'diànmiàn', wordClass: ['N'], meaningVi: 'mặt bằng cửa hàng', meaningEn: 'storefront', examples: [{ traditional: '因為有了網路才能不靠店面。', simplified: '因为有了网路才能不靠店面。', vietnamese: 'Nhờ có internet mới có thể không cần mặt bằng cửa hàng.' }] },
    { id: 'L9-064', lessonId: 'L9', order: 34, group: 'vocab2', traditional: '全', simplified: '全', pinyin: 'quán', wordClass: ['Det'], meaningVi: 'toàn bộ, cả', meaningEn: 'entire', examples: [{ traditional: '行銷全世界。', simplified: '行销全世界。', vietnamese: 'Tiếp thị ra khắp thế giới.' }] },
    { id: 'L9-065', lessonId: 'L9', order: 35, group: 'vocab2', traditional: '鳳梨酥', simplified: '凤梨酥', pinyin: 'fènglí sū', wordClass: ['Other'], meaningVi: 'bánh dứa', meaningEn: 'pineapple shortcake', tags: ['am-thuc'], examples: [{ traditional: '鳳梨酥經濟學', simplified: '凤梨酥经济学', vietnamese: 'Kinh tế học bánh dứa' }] },
    { id: 'L9-066', lessonId: 'L9', order: 36, group: 'vocab2', traditional: '第二位', simplified: '第二位', pinyin: 'dì èr wèi', wordClass: ['Other'], meaningVi: 'vị trí thứ hai', meaningEn: 'second (place)', examples: [{ traditional: '台灣出口的鳳梨曾經占世界第二位。', simplified: '台湾出口的凤梨曾经占世界第二位。', vietnamese: 'Dứa xuất khẩu của Đài Loan từng đứng thứ hai thế giới.' }] },
    { id: 'L9-067', lessonId: 'L9', order: 37, group: 'vocab2', traditional: '鳳梨農', simplified: '凤梨农', pinyin: 'fènglí nóng', wordClass: ['Other'], meaningVi: 'nông dân trồng dứa', meaningEn: 'pineapple farmer', tags: ['nong-nghiep'], examples: [{ traditional: '他能用穩定的價格跟鳳梨農購買鳳梨。', simplified: '他能用稳定的价格跟凤梨农购买凤梨。', vietnamese: 'Anh có thể dùng giá ổn định để mua dứa từ nông dân trồng dứa.' }] }
  ],

  grammar: [
    {
      id: 'L9-G1', lessonId: 'L9', order: 1, pattern: '靠',
      functionVi: 'Khi là động từ chính, 靠 nghĩa là "dựa vào, nhờ cậy", nhưng khi là động từ thứ nhất trong câu có hai động từ, nghĩa của nó thu hẹp thành "bằng cách, nhờ vào" — 靠 hoạt động giống giới từ hơn.',
      functionEn: "Function: As a main verb, 靠 means 'to rely on', but when it is the first verb in a sentence with two verbs, its meaning is reduced to 'by means of' with 靠 acting more like a preposition.",
      examples: [
        { traditional: '有句話說，「在家靠父母，出外靠朋友」，說明了家人和朋友的重要。', simplified: '有句话说，「在家靠父母，出外靠朋友」，说明了家人和朋友的重要。', english: 'There\'s a saying, "When at home, rely on your parents, when away from home, depend on friends." It underscores the importance of family and friends.', vietnamese: 'Có câu nói, "Ở nhà dựa cha mẹ, ra ngoài dựa bạn bè", nói lên tầm quan trọng của gia đình và bạn bè.' },
        { traditional: '他靠自己的努力賺錢買了這棟房子。', simplified: '他靠自己的努力赚钱买了这栋房子。', english: 'He bought this house with his own hard-earned money.', vietnamese: 'Anh ấy dựa vào nỗ lực của bản thân kiếm tiền mua được căn nhà này.' },
        { traditional: '現在工作非常難找；我是靠朋友幫忙才找到的。', simplified: '现在工作非常难找；我是靠朋友帮忙才找到的。', english: "Jobs are hard to find now. I found mine through friends.", vietnamese: 'Bây giờ việc làm rất khó tìm; tôi là nhờ bạn bè giúp mới tìm được.' },
        { traditional: '他靠打工賺的錢養家，生活過得並不輕鬆。', simplified: '他靠打工赚的钱养家，生活过得并不轻松。', english: "He supports his family with money earned with a part-time job. His life is by no means easy.", vietnamese: 'Anh ấy dựa vào tiền làm thêm để nuôi gia đình, cuộc sống không hề dễ dàng.' },
        { traditional: '張太太的孩子在國外工作，她靠電子郵件跟網路電話了解孩子生活的情況。', simplified: '张太太的孩子在国外工作，她靠电子邮件跟网路电话了解孩子生活的情况。', english: "Mrs. Zhang's children work abroad. She keeps up to date with their lives by means of email and internet phone.", vietnamese: 'Con của bà Trương làm việc ở nước ngoài, bà dựa vào email và điện thoại internet để biết tình hình cuộc sống của con.' }
      ],
      usageNotesVi: '靠 làm động từ chính đứng một mình (câu 1), hoặc làm động từ đầu trong chuỗi hai động từ, lúc đó gần như giới từ, mang nghĩa "bằng cách, nhờ vào" (câu 2-5).',
      exercises: [
        { id: 'L9-G1-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你不是說工作多，壓力很大嗎？怎麼還在玩網路遊戲？（放鬆心情）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['靠聽音樂放鬆心情。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：小農賣的有機蔬菜比較貴，你為什麼還願意買呢？（支持）', textWithBlanks: 'B：小農看天吃飯，收入不穩定，得___。', blanks: [{ index: 0, acceptedAnswers: ['靠大家多支持他們才行。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你每天那麼晚才回家，你養的寵物怎麼辦？誰來照顧？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['靠鄰居幫忙照顧。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：恭喜你畢業了。念研究所花了不少錢吧？（獎學金）', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['靠拿到的獎學金才付得起學費。'] }], targetPattern: 'L9-G1' },
        { id: 'L9-G1-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: 'A：你會不會迷路？要不要我過去接你？（網路地圖）', textWithBlanks: 'B：不用了，謝謝你。我的手機可以上網。___。', blanks: [{ index: 0, acceptedAnswers: ['我靠網路地圖就能找到路了。'] }], targetPattern: 'L9-G1' }
      ]
    },
    {
      id: 'L9-G2', lessonId: 'L9', order: 2, pattern: '既…又…',
      functionVi: 'Cấu trúc này diễn tả chủ ngữ có hai đặc điểm cùng lúc.',
      functionEn: 'Function: This structure indicates that the subject has two qualities at the same time.',
      examples: [
        { traditional: '打工的好處很多。既可以賺錢，又可以交朋友。', simplified: '打工的好处很多。既可以赚钱，又可以交朋友。', english: "Working part time has a lot of advantages. Not only can you make money, but you can also make friends.", vietnamese: 'Đi làm thêm có nhiều cái lợi. Vừa kiếm được tiền, lại vừa kết bạn được.' },
        { traditional: '單親爸爸既要賺錢養家，又要照顧孩子，非常辛苦。', simplified: '单亲爸爸既要赚钱养家，又要照顾孩子，非常辛苦。', english: "Single dads not only have to make money to raise their families, they also have to take care of their kids. It's really tough.", vietnamese: 'Ông bố đơn thân vừa phải kiếm tiền nuôi gia đình, lại vừa phải chăm con, rất vất vả.' },
        { traditional: '廣告上這種最新型的手機，款式既新，功能又多，應該很快就會流行起來。', simplified: '广告上这种最新型的手机，款式既新，功能又多，应该很快就会流行起来。', english: "The latest cell phone being advertised not only comes in a new style, it also has a lot of functions. It's likely going to catch on fast.", vietnamese: 'Loại điện thoại đời mới nhất trong quảng cáo, kiểu dáng vừa mới, chức năng lại nhiều, chắc sẽ nhanh chóng thịnh hành.' },
        { traditional: '她人既長得漂亮，外語能力又強，難怪是學校裡的風雲人物。', simplified: '她人既长得漂亮，外语能力又强，难怪是学校里的风云人物。', english: "She's not only pretty, but her foreign language skills are also very good. It's no wonder she is so well known throughout the school.", vietnamese: 'Cô ấy vừa xinh đẹp, ngoại ngữ lại giỏi, chẳng trách là nhân vật nổi bật trong trường.' },
        { traditional: '張先生對吃特別講究，他吃的東西既要味道好，顏色又要美。', simplified: '张先生对吃特别讲究，他吃的东西既要味道好，颜色又要美。', english: 'Mr. Zhang is especially particular about eating. The food he eats has to be both delicious and colorful.', vietnamese: 'Ông Trương đặc biệt kỹ tính chuyện ăn uống, món ăn ông ấy ăn vừa phải ngon, màu sắc lại phải đẹp.' }
      ],
      usageNotesVi: '1. 既 và 又 đều là phó từ, câu dùng mẫu này thường chỉ có một chủ ngữ. 2. 既…又… gần giống 不但…也… và 又…又…, nhưng khi dùng 既…又… thì phần thêm vào rõ ràng mang tính tăng tiến (cộng dồn). So sánh: 學習外語不但要練習聽和說，也要認字寫字 (hai việc quan trọng ngang nhau) với 學習外語既要練習聽和說，又要認字寫字 (việc phải làm nhiều — nhấn mạnh khối lượng). 3. Các cụm động từ được nối không được thêm phó từ chỉ mức độ (không nói *既很好看，又很漂亮). 4. 既…又… trang trọng và mang tính văn viết hơn 又…又…; vì vậy số âm tiết của động từ/cụm động từ sau 既 và 又 nên bằng nhau hoặc gần bằng nhau, vì tính đối xứng rất quan trọng trong mẫu này. 5. Nghĩa của từ theo sau 既 và 又 phải cùng mang sắc thái tích cực hoặc cùng tiêu cực. Không thể nói *農夫的社會地位既不高，收入又很穩定.',
      exercises: [
        { id: 'L9-G2-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '這件外套___，多花一點錢買也值得。', blanks: [{ index: 0, acceptedAnswers: ['既保暖又好看'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '這個城市___，難怪能吸引那麼多觀光客來玩。', blanks: [{ index: 0, acceptedAnswers: ['既有山又有海'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '使用天然堆肥___，好處很多。', blanks: [{ index: 0, acceptedAnswers: ['既環保又省錢'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '養寵物，___，照顧起來並不輕鬆。', blanks: [{ index: 0, acceptedAnswers: ['既要花錢又要花時間'] }], targetPattern: 'L9-G2' },
        { id: 'L9-G2-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '透過網路賣農產品，___，對農夫來說，幫助很大。', blanks: [{ index: 0, acceptedAnswers: ['既能節省成本又能增加收入'] }], targetPattern: 'L9-G2' }
      ]
    },
    {
      id: 'L9-G3', lessonId: 'L9', order: 3, pattern: '…以內',
      functionVi: 'Đây là cách diễn đạt trang trọng, chỉ "trong phạm vi thời gian, không gian hoặc số lượng".',
      functionEn: "Function: This is a formal expression that indicates 'within a temporal, spatial or quantity range'.",
      examples: [
        { traditional: '他讓我在一個禮拜以內把這份報告寫完。這怎麼可能？', simplified: '他让我在一个礼拜以内把这份报告写完。这怎么可能？', english: "He's having me write this report within a week. How is that even possible?", vietnamese: 'Anh ấy bắt mình viết xong báo cáo này trong vòng một tuần. Sao có thể được chứ?' },
        { traditional: '在台灣宅配很快，一般來說，下訂單以後，24小時以內就能收到商品。', simplified: '在台湾宅配很快，一般来说，下订单以后，24小时以内就能收到商品。', english: 'Home delivery in Taiwan is very fast. Generally, products are received within 24 hours of putting in the order.', vietnamese: 'Ở Đài Loan giao hàng tận nhà rất nhanh, nói chung, sau khi đặt đơn, trong vòng 24 tiếng là nhận được hàng.' },
        { traditional: '外套的價格，只要是在兩千塊以內，我都能接受。', simplified: '外套的价格，只要是在两千块以内，我都能接受。', english: "I can accept a price for the coat as long as it's within NT$2,000.", vietnamese: 'Giá áo khoác, chỉ cần trong vòng hai nghìn đồng là mình chấp nhận được.' },
        { traditional: '他找的房子不但要在捷運站附近，而且離公司坐捷運一定要在十站以內。', simplified: '他找的房子不但要在捷运站附近，而且离公司坐捷运一定要在十站以内。', english: "He's looking for a house that's not only near an MRT station; it has to be within 10 stops to his company.", vietnamese: 'Nhà anh ấy tìm không chỉ phải gần ga tàu điện, mà đi tàu điện đến công ty nhất định phải trong vòng mười trạm.' },
        { traditional: '我的體力還不錯，三千公尺以內，我想我都跑得完。', simplified: '我的体力还不错，三千公尺以内，我想我都跑得完。', english: "I'm in pretty good shape. I think I could run any distance within 3,000 meters.", vietnamese: 'Thể lực mình cũng khá, trong vòng ba nghìn mét, mình nghĩ mình chạy hết nổi.' }
      ],
      usageNotesVi: '以內 có thể dùng để diễn tả số lượng (ví dụ 3), không gian (ví dụ 4, 5), và thời gian (ví dụ 1, 2).',
      exercises: [
        { id: 'L9-G3-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '這個星期結束以前，學校會讓學生知道錄取了沒有。', textWithBlanks: '→ 學校會在___。', blanks: [{ index: 0, acceptedAnswers: ['這個星期以內讓學生知道錄取了沒有。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '房租一萬塊錢還可以；比一萬塊貴的房子我就租不起了。', textWithBlanks: '→ 我只租得起___。', blanks: [{ index: 0, acceptedAnswers: ['一萬塊以內的房子。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '民宿離車站不太遠，最多八百公尺吧，走路就到了。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['民宿在八百公尺以內就到了。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '我希望在35歲以前就買得起房子。（現在30歲）', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['我希望在五年以內就買得起房子。'] }], targetPattern: 'L9-G3' },
        { id: 'L9-G3-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '演唱會的票一上網賣，兩個多鐘頭就賣完了。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['演唱會的票在三個小時以內就賣完了。'] }], targetPattern: 'L9-G3' }
      ]
    },
    {
      id: 'L9-G4', lessonId: 'L9', order: 4, pattern: '占',
      functionVi: 'Động từ 占 dùng để nêu tỷ lệ phần trăm hoặc thứ hạng.',
      functionEn: 'Function: The verb 占 defines percentage or ranking.',
      examples: [
        { traditional: '這次考試的成績，口試、筆試各占一半。', simplified: '这次考试的成绩，口试、笔试各占一半。', english: "For this test, the oral and written tests will each account for one half of the grade.", vietnamese: 'Điểm bài thi lần này, thi nói và thi viết mỗi phần chiếm một nửa.' },
        { traditional: '電子產品的產值占台灣出口商品第一位。', simplified: '电子产品的产值占台湾出口商品第一位。', english: "Electronics hold top position when it comes to production value of Taiwan's exports.", vietnamese: 'Giá trị sản xuất của sản phẩm điện tử chiếm vị trí số một trong hàng xuất khẩu Đài Loan.' },
        { traditional: '我並不是整天都在公司裡上班；我在公司裡的時間只占工作時間的一小部分。', simplified: '我并不是整天都在公司里上班；我在公司里的时间只占工作时间的一小部分。', english: "I don't work all day at the office. My time in the office only accounts for a small percentage of my work day.", vietnamese: 'Mình không phải ngày nào cũng làm ở công ty cả ngày; thời gian ở công ty chỉ chiếm một phần nhỏ thời gian làm việc.' },
        { traditional: '我剛剛給你的資料還不完整；那些只占整份報告的一小部分。', simplified: '我刚刚给你的资料还不完整；那些只占整份报告的一小部分。', english: "I didn't give you the whole information just now. That's just a small part of the entire report.", vietnamese: 'Tài liệu mình vừa đưa cậu còn chưa đầy đủ; nó chỉ chiếm một phần nhỏ của cả báo cáo thôi.' },
        { traditional: '成本包括很多部分。實際上材料成本只占不到一半。', simplified: '成本包括很多部分。实际上材料成本只占不到一半。', english: "Many things contribute to operating costs. (In reality) materials don't even account for half.", vietnamese: 'Chi phí gồm nhiều phần. Thực tế chi phí nguyên liệu chỉ chiếm chưa đến một nửa.' }
      ],
      usageNotesVi: '占 thường đi kèm một con số phần trăm, phân số, hoặc thứ hạng (占第 N 位), và có thể dùng 占了…的… để chỉ rõ cái gì chiếm tỷ lệ của cái gì.',
      exercises: [
        { id: 'L9-G4-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '在你的國家，產值占第一位的農產品是什麼？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['在我的國家，產值占第一位的農產品是稻米。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '你的房租貴嗎？在生活費當中，房租占多少？', textWithBlanks: 'B：___。', blanks: [{ index: 0, acceptedAnswers: ['房租占了生活費的一半左右。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '聽說你去旅行的時候，大部分的時間都在參觀古蹟？', textWithBlanks: 'B：是啊，我對歷史很有興趣，所以___。', blanks: [{ index: 0, acceptedAnswers: ['參觀古蹟占了旅行時間的一大半。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '在台北，24小時營業的商店多嗎？（一小部分）', textWithBlanks: 'B：不太多，其實除了便利商店以外，___。', blanks: [{ index: 0, acceptedAnswers: ['24小時營業的商店只占一小部分。'] }], targetPattern: 'L9-G4' },
        { id: 'L9-G4-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '聽說在台灣，賣得最好的汽車是Benz，真的嗎？', textWithBlanks: 'B：是真的。___。', blanks: [{ index: 0, acceptedAnswers: ['Benz在台灣的市占率占第一位。'] }], targetPattern: 'L9-G4' }
      ]
    },
    {
      id: 'L9-G5', lessonId: 'L9', order: 5, pattern: '（在）NP上',
      functionVi: 'Mẫu câu này áp dụng tính đúng đắn của mệnh đề chính vào phạm vi của NP được nêu.',
      functionEn: 'Function: This pattern applies the validity of the main predicate to the NP in question.',
      examples: [
        { traditional: '有機蔬果在價格上雖然比較貴一點。但是一般來說，它的品質，顧客比較信任。', simplified: '有机蔬果在价格上虽然比较贵一点。但是一般来说，它的品质，顾客比较信任。', english: 'As far as prices go, organic fruits and vegetables are a little more expensive, but generally speaking, customers trust the quality.', vietnamese: 'Rau quả hữu cơ xét về giá tuy đắt hơn một chút. Nhưng nói chung, về chất lượng, khách hàng tin tưởng hơn.' },
        { traditional: '有機蔬果在市場上的價錢雖然很高，但是實際上農夫的利潤並不高。', simplified: '有机蔬果在市场上的价钱虽然很高，但是实际上农夫的利润并不高。', english: "As far as prices on the market go, organic fruits and vegetables are expensive, but farmers don't actually make very high profits.", vietnamese: 'Giá rau quả hữu cơ trên thị trường tuy cao, nhưng thực tế lợi nhuận nông dân không cao.' },
        { traditional: '中國人習慣上都是先吃飯再喝湯。你們呢？', simplified: '中国人习惯上都是先吃饭再喝汤。你们呢？', english: 'In terms of custom, Chinese have soup after eating the main meal. What about you?', vietnamese: 'Về thói quen, người Trung Quốc thường ăn cơm trước rồi mới uống canh. Còn các bạn thì sao?' },
        { traditional: '我跟我最好的朋友在個性上很不一樣，她個性比我急。', simplified: '我跟我最好的朋友在个性上很不一样，她个性比我急。', english: 'My best friend and I are different in terms of personality. She is more impatient.', vietnamese: 'Mình và bạn thân nhất khác nhau về tính cách, cô ấy nóng tính hơn mình.' },
        { traditional: '我來台灣快一年了，生活上都沒問題了，學習上也相當順利，中文進步了不少。', simplified: '我来台湾快一年了，生活上都没问题了，学习上也相当顺利，中文进步了不少。', english: "I've been in Taiwan almost a year. In terms of my life, I have no problems. As far as my studies go, those are going smoothly, too. My Chinese has improved a lot.", vietnamese: 'Mình đến Đài Loan gần một năm rồi, về cuộc sống không còn vấn đề gì, về học tập cũng khá thuận lợi, tiếng Trung tiến bộ nhiều.' }
      ],
      usageNotesVi: '1. Phần lớn trường hợp, giữa 在 và 上 là một danh từ. 2. 在 trong mẫu này có thể lược bỏ, nhưng 上 thì không thể lược bỏ.',
      exercises: [
        { id: 'L9-G5-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '這件事，你雖然沒有法律責任，可是有道德責任。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['這件事，你在法律上雖然沒有責任，可是在道德上有責任。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '夜市的東西雖然品質不是那麼好，不過價錢還可以接受。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['夜市的東西在品質上雖然不是那麼好，不過在價錢上還可以接受。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '按照傳統，參加婚禮，見到新人的時候一定要說一些吉祥話。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['按照傳統，參加婚禮，在言語上一定要說一些吉祥話。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '他從來沒念過企業管理，因此公司的經營管理需要靠別人。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['他在企業管理上從來沒學過，因此公司的經營管理需要靠別人。'] }], targetPattern: 'L9-G5' },
        { id: 'L9-G5-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '我認為一個人只有經濟獨立了才能算是真正的獨立。', textWithBlanks: '→ ___。', blanks: [{ index: 0, acceptedAnswers: ['我認為一個人只有在經濟上獨立了才能算是真正的獨立。'] }], targetPattern: 'L9-G5' }
      ]
    },
    {
      id: 'L9-G6', lessonId: 'L9', order: 6, pattern: '給…帶來',
      functionVi: 'Giới từ 給 giới thiệu đối tượng thụ hưởng của hành động.',
      functionEn: 'Function: The preposition 給 introduces the beneficiary of the action.',
      examples: [
        { traditional: '好的生活習慣能給人帶來健康。', simplified: '好的生活习惯能给人带来健康。', english: 'Good habits in life can bring health to the individual.', vietnamese: 'Thói quen sống tốt có thể mang lại sức khỏe cho con người.' },
        { traditional: '朋友的關心給他帶來溫馨的感覺。', simplified: '朋友的关心给他带来温馨的感觉。', english: "His friends' concern brought him a feeling of warmth.", vietnamese: 'Sự quan tâm của bạn bè mang lại cho anh ấy cảm giác ấm áp.' },
        { traditional: '在天燈上寫下願望給人帶來新的希望。', simplified: '在天灯上写下愿望给人带来新的希望。', english: 'Writing wishes on sky lanterns brings people new hope.', vietnamese: 'Viết điều ước lên đèn trời mang lại hy vọng mới cho con người.' },
        { traditional: '大部分的中國人都認為拜神、祭祖能給家人帶來平安和幸福。', simplified: '大部分的中国人都认为拜神、祭祖能给家人带来平安和幸福。', english: 'Most Chinese believe that honoring gods and ancestors brings peace and happiness to their families.', vietnamese: 'Phần lớn người Trung Quốc cho rằng thờ thần, cúng tổ tiên có thể mang lại bình an và hạnh phúc cho gia đình.' },
        { traditional: '科技發展給我們的生活帶來了很多的便利。', simplified: '科技发展给我们的生活带来了很多的便利。', english: 'Technological developments have brought a lot of convenience to our lives.', vietnamese: 'Sự phát triển khoa học kỹ thuật mang lại rất nhiều tiện lợi cho cuộc sống chúng ta.' }
      ],
      usageNotesVi: 'Cấu trúc: S + 給 + đối tượng thụ hưởng + 帶來 + điều được mang đến (thường là danh từ trừu tượng như sức khỏe, hy vọng, hạnh phúc, tiện lợi…).',
      exercises: [
        { id: 'L9-G6-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '他努力提高自己的外語能力，希望好的語言能力能___。（更多的工作機會）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['給他帶來更多的工作機會'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '他非常喜歡水上活動；每次去海邊玩水，都能___。（很大的快樂）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['給他帶來很大的快樂'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '考上公職___。（穩定的生活）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['給他的生活帶來穩定'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '使用農藥會___。（嚴重的汙染）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['給環境帶來嚴重的汙染'] }], targetPattern: 'L9-G6' },
        { id: 'L9-G6-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', prompt: '鳳梨酥大受歡迎___。（鳳梨農、商機）', textWithBlanks: '___', blanks: [{ index: 0, acceptedAnswers: ['給鳳梨農帶來商機'] }], targetPattern: 'L9-G6' }
      ]
    },
    {
      id: 'L9-G7', lessonId: 'L9', order: 7, pattern: '結果',
      functionVi: '結果 nối mệnh đề thứ hai với mệnh đề đầu. Trong hầu hết trường hợp, mệnh đề thứ hai là một hệ quả không mong muốn.',
      functionEn: 'Function: The 結果 connects the second clause to the first. In most cases, the second clause consists of an undesirable consequence.',
      examples: [
        { traditional: '他每天熬夜打電玩，結果成績不理想，被當了。', simplified: '他每天熬夜打电玩，结果成绩不理想，被当了。', english: 'He stayed up every night playing video games. Consequently, his grades weren\'t ideal, and he failed.', vietnamese: 'Anh ấy ngày nào cũng thức khuya chơi điện tử, kết quả thành tích không như ý, bị đánh rớt.' },
        { traditional: '店員沒把合約的內容解釋清楚，結果害他多花了好幾千塊錢。', simplified: '店员没把合约的内容解释清楚，结果害他多花了好几千块钱。', english: "The store employee didn't explain the content of the contract clearly. As a result, he overpaid by a few thousand NT dollars.", vietnamese: 'Nhân viên cửa hàng không giải thích rõ nội dung hợp đồng, kết quả khiến anh ấy tốn thêm mấy nghìn đồng.' },
        { traditional: '他沒買除濕機，結果雨季的時候，衣服、鞋子都發霉了。', simplified: '他没买除湿机，结果雨季的时候，衣服、鞋子都发霉了。', english: "He didn't buy a dehumidifier. As a result, during the rainy season, his clothes and shoes all mildewed.", vietnamese: 'Anh ấy không mua máy hút ẩm, kết quả mùa mưa quần áo, giày dép đều bị mốc.' },
        { traditional: '他們在媒體上做了不少廣告，結果生意還是不好。', simplified: '他们在媒体上做了不少广告，结果生意还是不好。', english: 'They put a lot of ads in the media, in the end; however, their business was still poor.', vietnamese: 'Họ quảng cáo khá nhiều trên truyền thông, kết quả việc buôn bán vẫn không tốt.' },
        { traditional: '他帶了發票，結果店員還是拒絕讓他退換。', simplified: '他带了发票，结果店员还是拒绝让他退换。', english: 'He brought the receipt. In the end, however, the store employee refused to let him exchange it.', vietnamese: 'Anh ấy mang theo hóa đơn, kết quả nhân viên cửa hàng vẫn từ chối cho đổi trả.' }
      ],
      usageNotesVi: '結果 luôn dùng cho các sự việc liên quan đến quá khứ. Một số (không phải tất cả, không bao gồm các câu loại B) có thể diễn đạt lại bằng 因為…所以….',
      exercises: [
        { id: 'L9-G7-EX1', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他出門沒帶手機，又看不懂中文，結果___。', blanks: [{ index: 0, acceptedAnswers: ['迷路了，找不到回家的路。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX2', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '我們下山的時候，錯過了公車，結果___。', blanks: [{ index: 0, acceptedAnswers: ['走路走了快一個小時才到家。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX3', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '我們原來打算去聽跨年演唱會，沒想到到處都擠滿了人，結果___。', blanks: [{ index: 0, acceptedAnswers: ['我們根本擠不進去，只好在家看轉播。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX4', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他發現撞衫，雖然天氣很冷，還是把新買的外套脫掉，結果___。', blanks: [{ index: 0, acceptedAnswers: ['感冒了，在家躺了三天。'] }], targetPattern: 'L9-G7' },
        { id: 'L9-G7-EX5', lessonId: 'L9', section: 'textbook-practice', type: 'fill-blank', textWithBlanks: '他大學畢業以後，參加過不少次面試，結果___。', blanks: [{ index: 0, acceptedAnswers: ['找到一份很不錯的工作。'] }], targetPattern: 'L9-G7' }
      ]
    }
  ],
  workbookExercises: [
    {
      id: 'L9-WB-pairs-1', lessonId: 'L9', section: 'pairs', type: 'matching',
      prompt: 'Ghép động từ với danh từ thường đi cùng (collocation).',
      pairs: [
        { left: '下', right: '訂單' },
        { left: '帶來', right: '好運' },
        { left: '經營', right: '企業' },
        { left: '透過', right: '中間商販賣' },
        { left: '搜尋', right: '網路資料' },
        { left: '舉辦', right: '活動' },
        { left: '方便', right: '客戶訂購' },
        { left: '改善', right: '生活' }
      ]
    },

    { id: 'L9-WB-fw-1', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '就算他把盤子裡的東西都吃光了，也不___(dàibiǎo)這些菜合他的___(kǒuwèi)。他可能只是客氣。', blanks: [{ index: 0, acceptedAnswers: ['代表'] }, { index: 1, acceptedAnswers: ['口味'] }] },
    { id: 'L9-WB-fw-2', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '要是你回家試穿以後不___(mǎnyì)，七天以內，隨時都可以退換，一定不會___(chīkuī)。', blanks: [{ index: 0, acceptedAnswers: ['滿意'] }, { index: 1, acceptedAnswers: ['吃虧'] }] },
    { id: 'L9-WB-fw-3', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '在網路上購物，不知道賣家的___(xìnyòng)怎麼樣，___(fēngxiǎn)比在店面買高得多。', blanks: [{ index: 0, acceptedAnswers: ['信用'] }, { index: 1, acceptedAnswers: ['風險'] }] },
    { id: 'L9-WB-fw-4', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '如果你___(céngjīng)努力過，就算最後沒有成功，___(jiéguǒ)不是你希望的，也不必覺得遺憾。', blanks: [{ index: 0, acceptedAnswers: ['曾經'] }, { index: 1, acceptedAnswers: ['結果'] }] },
    { id: 'L9-WB-fw-5', lessonId: 'L9', section: 'fill-write', type: 'fill-blank', textWithBlanks: '他說我們應該利用___(jiàrì)到南部去潛水。我是想去，可是___(wànyī)颱風真的來了，怎麼辦？', blanks: [{ index: 0, acceptedAnswers: ['假日'] }, { index: 1, acceptedAnswers: ['萬一'] }] },

    {
      id: 'L9-WB-fb-1', lessonId: 'L9', section: 'fill-bank', type: 'fill-blank',
      prompt: 'Điền từ thích hợp vào đoạn văn (mỗi từ chỉ dùng 1 lần).',
      wordBank: ['冰箱', '必須', '宅配', '農產品', '購買', '全', '訂購', '當做', '普遍', '方便'],
      textWithBlanks: '我的阿嬤今年快八十歲了。她出生在一般家庭1.___都沒有2.___的時代。當時當然也還沒辦法上網3.___蔬菜、水果這一些4.___。大部分的人因為怕食物變酸、變壞，5.___每天去市場買菜。阿嬤的這個習慣，一直都沒有改變。她用的食材6.___都是一早去市場7.___的。\n\n去年阿嬤搬來城市裡跟我們一起住。她鄉下的老鄰居每次一到收成的時候，就會透過8.___，把剛摘下來的新鮮蔬菜寄給我們。阿嬤不但把這些蔬果9.___禮物，送給我們的朋友，而且為了10.___他們做菜，還會先幫大家洗乾淨。在食品安全出了那麼多問題以後，能吃到這些既新鮮又安全的食物，真是太幸福了。',
      blanks: [
        { index: 1, acceptedAnswers: ['普遍'] },
        { index: 2, acceptedAnswers: ['冰箱'] },
        { index: 3, acceptedAnswers: ['訂購'] },
        { index: 4, acceptedAnswers: ['農產品'] },
        { index: 5, acceptedAnswers: ['必須'] },
        { index: 6, acceptedAnswers: ['全'] },
        { index: 7, acceptedAnswers: ['購買'] },
        { index: 8, acceptedAnswers: ['宅配'] },
        { index: 9, acceptedAnswers: ['當做'] },
        { index: 10, acceptedAnswers: ['方便'] }
      ]
    },

    {
      id: 'L9-WB-read-a1', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '文彥：聽說你們社團幫一位單親媽媽推銷她的農產品。買的人多嗎？\n雅婷：結果讓人相當失望呢。',
      question: '雅婷的意思是什麼？',
      options: [{ id: 'a', text: '單親媽媽的農產品賺了不少錢。' }, { id: 'b', text: '單親媽媽的農產品賣不出去。' }, { id: 'c', text: '單親媽媽不願意接受別人的幫助。' }],
      correctOptionId: 'b',
      explanationVi: '"結果讓人相當失望呢" 表示結果不如預期，可見農產品賣得不好。'
    },
    {
      id: 'L9-WB-read-a2', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '文彥：政府舉辦這個活動，對附近的商店幫助大不大？你聽說了嗎？\n雅婷：根據我聽到的消息，這一個禮拜的活動帶來的商機好像不如想像的大，不過多少有點幫助吧。',
      question: '雅婷的意思是什麼？',
      options: [{ id: 'a', text: '這個禮拜的營業收入占整個月的百分之八十。' }, { id: 'b', text: '商店靠這個活動吸引了許多新的顧客。' }, { id: 'c', text: '這個活動對商店的收入幫助不大。' }],
      correctOptionId: 'c',
      explanationVi: '"商機好像不如想像的大，不過多少有點幫助" 表示幫助不大。'
    },
    {
      id: 'L9-WB-read-a3', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '文彥：你看，這是我新買的平板電腦。最新款式，才兩萬五。\n雅婷：平板電腦啊？我只接受一萬塊以內的。',
      question: '根據這個對話，哪一個對？',
      options: [{ id: 'a', text: '雅婷覺得價錢便宜比是不是最新款式重要。' }, { id: 'b', text: '雅婷覺得不應該買新型的，而且兩萬五太貴了。' }, { id: 'c', text: '雅婷很羨慕文彥買了最新款式的電腦。' }],
      correctOptionId: 'a',
      explanationVi: '"我只接受一萬塊以內的" 表示雅婷重視價錢是否便宜，不在意是不是最新款式。'
    },
    {
      id: 'L9-WB-read-a4', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '文彥：你要不要寫信給你父母，報告一下轉系的事？\n雅婷：他們已經口頭上答應讓我自己決定了。',
      question: '雅婷的意思是什麼？',
      options: [{ id: 'a', text: '她現在就給父母發郵件。' }, { id: 'b', text: '父母在信裡面寫得清清楚楚的。' }, { id: 'c', text: '不需要再問父母的意見了。' }],
      correctOptionId: 'c',
      explanationVi: '"他們已經口頭上答應讓我自己決定了" 表示父母已經同意，不需要再寫信問了。'
    },
    {
      id: 'L9-WB-read-a5', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '文彥：你表妹參加轉系考試，通過了嗎？\n雅婷：就差那麼一點。去年370分就錄取了，今年提高了20幾分。',
      question: '表妹的成績可能是幾分？',
      options: [{ id: 'a', text: '360分。' }, { id: 'b', text: '385分。' }, { id: 'c', text: '400分。' }],
      correctOptionId: 'b',
      explanationVi: '今年錄取分數提高了20幾分（約390分），表妹"就差那麼一點"沒通過，所以成績應該接近但略低於390分，385分最合理。'
    },

    {
      id: 'L9-WB-read-b1', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '網路的發展改變了現代人的購物習慣，網路消費也越來越普遍。但是不管網購多便利，不願意上網購物的人還是不少。我的朋友小張就是這樣。我常告訴他，買東西「貨比三家不吃虧」，網路上選擇比商店多得多。只要坐在電腦前面，靠著電腦和手，貨比100家都不是問題。可是他說，買東西比的不只是價錢。商品的功能有可能差不多，但是品質是看不出來的。再說，他很享受逛街、摸摸商品的快樂。走在漂亮的百貨公司裡，總是能讓他放鬆心情。試穿、試用的時間更是不能省。要不然，萬一買回來的商品不滿意，不是還得去退換嗎？另外，他還要我注意，上網刷卡，資料很容易被人偷走，所以現金才是最好的付款方式。',
      question: '小張不喜歡網購，是因為網購沒辦法比價。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'false',
      explanationVi: '文章說"買東西比的不只是價錢"，小張並不是因為沒辦法比價，而是在意其他方面。'
    },
    {
      id: 'L9-WB-read-b2', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '網路的發展改變了現代人的購物習慣，網路消費也越來越普遍。但是不管網購多便利，不願意上網購物的人還是不少。我的朋友小張就是這樣。我常告訴他，買東西「貨比三家不吃虧」，網路上選擇比商店多得多。只要坐在電腦前面，靠著電腦和手，貨比100家都不是問題。可是他說，買東西比的不只是價錢。商品的功能有可能差不多，但是品質是看不出來的。再說，他很享受逛街、摸摸商品的快樂。走在漂亮的百貨公司裡，總是能讓他放鬆心情。試穿、試用的時間更是不能省。要不然，萬一買回來的商品不滿意，不是還得去退換嗎？另外，他還要我注意，上網刷卡，資料很容易被人偷走，所以現金才是最好的付款方式。',
      question: '購物的時候，小張覺得品質比價格重要。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"買東西比的不只是價錢…但是品質是看不出來的"，表示小張很重視品質。'
    },
    {
      id: 'L9-WB-read-b3', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '網路的發展改變了現代人的購物習慣，網路消費也越來越普遍。但是不管網購多便利，不願意上網購物的人還是不少。我的朋友小張就是這樣。我常告訴他，買東西「貨比三家不吃虧」，網路上選擇比商店多得多。只要坐在電腦前面，靠著電腦和手，貨比100家都不是問題。可是他說，買東西比的不只是價錢。商品的功能有可能差不多，但是品質是看不出來的。再說，他很享受逛街、摸摸商品的快樂。走在漂亮的百貨公司裡，總是能讓他放鬆心情。試穿、試用的時間更是不能省。要不然，萬一買回來的商品不滿意，不是還得去退換嗎？另外，他還要我注意，上網刷卡，資料很容易被人偷走，所以現金才是最好的付款方式。',
      question: '小張買東西以前一定會試穿、試用。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"試穿、試用的時間更是不能省".'
    },
    {
      id: 'L9-WB-read-b4', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '網路的發展改變了現代人的購物習慣，網路消費也越來越普遍。但是不管網購多便利，不願意上網購物的人還是不少。我的朋友小張就是這樣。我常告訴他，買東西「貨比三家不吃虧」，網路上選擇比商店多得多。只要坐在電腦前面，靠著電腦和手，貨比100家都不是問題。可是他說，買東西比的不只是價錢。商品的功能有可能差不多，但是品質是看不出來的。再說，他很享受逛街、摸摸商品的快樂。走在漂亮的百貨公司裡，總是能讓他放鬆心情。試穿、試用的時間更是不能省。要不然，萬一買回來的商品不滿意，不是還得去退換嗎？另外，他還要我注意，上網刷卡，資料很容易被人偷走，所以現金才是最好的付款方式。',
      question: '小張喜歡舒服、漂亮的購物環境。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"走在漂亮的百貨公司裡，總是能讓他放鬆心情".'
    },
    {
      id: 'L9-WB-read-b5', lessonId: 'L9', section: 'reading', type: 'multiple-choice',
      prompt: '網路的發展改變了現代人的購物習慣，網路消費也越來越普遍。但是不管網購多便利，不願意上網購物的人還是不少。我的朋友小張就是這樣。我常告訴他，買東西「貨比三家不吃虧」，網路上選擇比商店多得多。只要坐在電腦前面，靠著電腦和手，貨比100家都不是問題。可是他說，買東西比的不只是價錢。商品的功能有可能差不多，但是品質是看不出來的。再說，他很享受逛街、摸摸商品的快樂。走在漂亮的百貨公司裡，總是能讓他放鬆心情。試穿、試用的時間更是不能省。要不然，萬一買回來的商品不滿意，不是還得去退換嗎？另外，他還要我注意，上網刷卡，資料很容易被人偷走，所以現金才是最好的付款方式。',
      question: '網路安全是小張不考慮網購的其中一個原因。',
      options: [{ id: 'true', text: 'Đúng (○)' }, { id: 'false', text: 'Sai (✕)' }],
      correctOptionId: 'true',
      explanationVi: '"上網刷卡，資料很容易被人偷走，所以現金才是最好的付款方式".'
    },

    {
      id: 'L9-WB-dc-1', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G4', turns: [{ speaker: 'A', text: '這一年賣出去的汽車，有百分之多少是A牌子的？', isBlank: false }, { speaker: 'B', text: '（占）', isBlank: true }], sampleAnswer: '有百分之六十四是A牌子的，A牌子占了全年汽車銷售量的六成多。' },
    { id: 'L9-WB-dc-2', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G2', turns: [{ speaker: 'A', text: '寵物照顧起來很麻煩。爺爺為什麼要養寵物呢？', isBlank: false }, { speaker: 'B', text: '（既…又…）', isBlank: true }], sampleAnswer: '養寵物既可以讓爺爺不孤單，又能讓他每天有事做，所以我們支持他養。' },
    { id: 'L9-WB-dc-3', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G5', turns: [{ speaker: 'A', text: '你跟李文彥是怎麼變成好朋友的？你們的個性很不一樣呢。', isBlank: false }, { speaker: 'B', text: '（（在）…上）', isBlank: true }], sampleAnswer: '我們是在興趣上很合得來，雖然個性不一樣，但是喜歡的東西差不多。' },
    { id: 'L9-WB-dc-4', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G7', turns: [{ speaker: 'A', text: '你去上烘焙課。做了蛋糕，怎麼沒請我們吃？', isBlank: false }, { speaker: 'B', text: '（結果）', isBlank: true }], sampleAnswer: '本來想做一個大蛋糕，結果失敗了，所以沒請你們吃。' },
    { id: 'L9-WB-dc-5', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G3', turns: [{ speaker: 'A', text: '演唱會的票那麼貴，你應該節省一點，別去了。', isBlank: false }, { speaker: 'B', text: '（…以內；給…帶來）', isBlank: true }], sampleAnswer: '票錢我會控制在預算以內，而且聽演唱會能給我帶來很大的快樂，所以我還是想去。' },
    { id: 'L9-WB-dc-6', lessonId: 'L9', section: 'dialogue', type: 'dialogue-completion', requiredPattern: 'L9-G1', turns: [{ speaker: 'A', text: '小張常熬夜工作。他上班時不會想睡覺嗎？', isBlank: false }, { speaker: 'B', text: '（靠）', isBlank: true }], sampleAnswer: '他靠喝咖啡提神，才不會想睡覺。' },

    {
      id: 'L9-WB-comp-1', lessonId: 'L9', section: 'composition', type: 'composition',
      topicVi: 'Bạn có hay mua sắm trực tuyến không? Hãy so sánh ưu điểm và nhược điểm của việc mua sắm trực tuyến và mua sắm tại cửa hàng thực tế.',
      requiredWords: ['L9-001', 'L9-002', 'L9-009', 'L9-014', 'L9-015', 'L9-027', 'L9-038', 'L9-041'],
      requiredPatterns: ['L9-G3', 'L9-G1', 'L9-G6', 'L9-G2', 'L9-G5'],
      minLength: 200, maxLength: 250
    },
    {
      id: 'L9-WB-comp-2', lessonId: 'L9', section: 'composition', type: 'composition',
      topicVi: 'Bạn định mở một cửa hàng trực tuyến. Hãy chuẩn bị đầy đủ thông tin cho một sản phẩm bạn sẽ bán, bao gồm hình ảnh, mô tả, giá cả, phương thức giao hàng, rồi "đăng" (giới thiệu) lên trang web.',
      requiredWords: ['L9-004', 'L9-010', 'L9-022', 'L9-037', 'L9-058', 'L9-061', 'L9-062', 'L9-063'],
      requiredPatterns: ['L9-G3', 'L9-G1', 'L9-G6', 'L9-G2', 'L9-G5'],
      minLength: 200, maxLength: 250
    }
  ]
}
