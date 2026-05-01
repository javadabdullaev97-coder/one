import type { LocalizedArticle } from "../publications";

const article: Record<string, LocalizedArticle> = {
  en: {
    subtitle: "Your guide to personal income tax benefits and refunds for education, mortgages, and more in Uzbekistan.",
    author: "Advizen Tax Practice",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "In Uzbekistan, individuals with official salaries typically have Personal Income Tax (PIT) withheld at a rate of 12% each month. However, certain income categories are fully or partially exempt from this tax. Even better, if the tax has already been paid on these amounts, you can legally claim a portion of it back.",
      },
      { type: "h2", text: "Key PIT Exemptions and Benefits" },
      {
        type: "ul",
        items: [
          "Education expenses: tuition fees for yourself, spouse, or children (up to 26 years old) at higher education institutions in Uzbekistan, including educational loans and their interest",
          "Private schools and kindergartens: parents or adoptive parents can exempt up to 3 million UZS per month per child for educational services at non-state preschools and schools",
          "Mortgage interest: amounts paid towards mortgage loans and their accrued interest, up to 80 times the Minimum Rate of Old-Age Pension (MROT) annually, where the property was acquired with a budget subsidy",
          "Pension savings: salary amounts voluntarily directed to Individual Accumulative Pension Accounts (INPS) at the People's Bank",
          "Investment accounts: salary directed to individual investment accounts for purchasing shares, up to 100 times the MROT annually (funds locked for 12 months)",
          "Employer-provided benefits: certain material assistance, medical compensation, children's camp vouchers, and non-cash gifts within prescribed limits",
        ],
      },
      { type: "h2", text: "How to Claim Your PIT Refund" },
      {
        type: "p",
        text: "There are two primary ways to utilise these benefits: either through a direct exemption via a tripartite agreement with your employer, or by claiming an annual refund for overpaid PIT. The annual refund process can be completed entirely online.",
      },
      { type: "h3", text: "Step 1: Submit Your Annual Income Declaration" },
      {
        type: "ul",
        items: [
          "When: by April 1st of the year following the reporting year (e.g., for 2024 income, declare by April 1, 2025)",
          "Where: electronically via my3.soliq.uz using your Electronic Digital Signature (EDS)",
          "Required: income statements from all workplaces, scanned copies of relevant contracts (university, private school, or mortgage agreement), and payment receipts",
          "In the \"Tax benefits\" section, select the appropriate benefit category and attach supporting documents — the system will automatically calculate your refundable amount",
        ],
      },
      { type: "h3", text: "Step 2: Submit Your Refund Application" },
      {
        type: "ul",
        items: [
          "When: after your declaration has been successfully submitted and processed",
          "Where: via my3.soliq.uz or my.soliq.uz",
          "Enter your bank card number, transit account, and bank MFO for the refund transfer",
          "Your refund will typically be transferred to your specified bank card within 15 days",
        ],
      },
      {
        type: "blockquote",
        text: "Navigating tax benefits can be complex, but understanding these exemptions can lead to significant savings. If you need assistance with preparing your declaration, understanding your eligibility, or ensuring compliance, Advizen's experts are here to help.",
      },
    ],
  },
  ru: {
    subtitle: "Ваш гид по льготам и возвратам НДФЛ за образование, ипотеку и другие категории в Узбекистане.",
    author: "Налоговая практика Advizen",
    readTime: "7 мин чтения",
    content: [
      {
        type: "p",
        text: "В Узбекистане у физических лиц с официальной заработной платой обычно ежемесячно удерживается НДФЛ по ставке 12%. Однако отдельные категории доходов полностью или частично освобождаются от этого налога. Более того, если налог уже был уплачен с этих сумм, его часть можно законно вернуть.",
      },
      { type: "h2", text: "Ключевые освобождения и льготы по НДФЛ" },
      {
        type: "ul",
        items: [
          "Расходы на образование: оплата обучения за себя, супруга или детей (до 26 лет) в высших учебных заведениях Узбекистана, включая образовательные кредиты и проценты по ним",
          "Частные школы и детские сады: родители или усыновители могут получить освобождение до 3 млн сум в месяц на ребёнка за услуги в негосударственных дошкольных учреждениях и школах",
          "Ипотечные проценты: суммы, уплаченные по ипотечным кредитам и начисленные проценты — до 80 минимальных размеров пенсии по возрасту (МРОТ) в год, если жильё приобретено с бюджетной субсидией",
          "Пенсионные накопления: суммы зарплаты, добровольно направленные на индивидуальные накопительные пенсионные счета (ИНПС) в Народном банке",
          "Инвестиционные счета: зарплата, направленная на индивидуальные инвестиционные счета для покупки акций, до 100 МРОТ в год (средства заблокированы на 12 месяцев)",
          "Льготы от работодателя: определённая материальная помощь, медицинские компенсации, путёвки в детские лагеря и неденежные подарки в установленных лимитах",
        ],
      },
      { type: "h2", text: "Как получить возврат НДФЛ" },
      {
        type: "p",
        text: "Существуют два основных способа использовать эти льготы: либо прямое освобождение через трёхстороннее соглашение с работодателем, либо ежегодный возврат переплаты по НДФЛ. Процесс годового возврата можно полностью пройти онлайн.",
      },
      { type: "h3", text: "Шаг 1. Подайте годовую декларацию о доходах" },
      {
        type: "ul",
        items: [
          "Когда: до 1 апреля года, следующего за отчётным (например, по доходам 2024 года — до 1 апреля 2025 года)",
          "Где: электронно через my3.soliq.uz с использованием электронной цифровой подписи (ЭЦП)",
          "Требуется: справки о доходах со всех мест работы, сканы соответствующих договоров (университет, частная школа или ипотечный договор) и платёжные документы",
          "В разделе «Налоговые льготы» выберите соответствующую категорию льготы и приложите подтверждающие документы — система автоматически рассчитает возвращаемую сумму",
        ],
      },
      { type: "h3", text: "Шаг 2. Подайте заявление на возврат" },
      {
        type: "ul",
        items: [
          "Когда: после успешной подачи и обработки декларации",
          "Где: через my3.soliq.uz или my.soliq.uz",
          "Укажите номер банковской карты, транзитный счёт и МФО банка для перевода",
          "Возврат, как правило, поступает на указанную карту в течение 15 дней",
        ],
      },
      {
        type: "blockquote",
        text: "Налоговые льготы могут быть сложными в применении, но понимание этих освобождений приводит к существенной экономии. Если вам нужна помощь с подготовкой декларации, оценкой права на льготу или обеспечением соответствия, эксперты Advizen всегда готовы помочь.",
      },
    ],
  },
  uz: {
    subtitle: "Oʻzbekistonda taʼlim, ipoteka va boshqa toifalar boʻyicha JShDS imtiyozlari va qaytarimlari boʻyicha qoʻllanmangiz.",
    author: "Advizen soliq amaliyoti",
    readTime: "7 daqiqalik oʻqish",
    content: [
      {
        type: "p",
        text: "Oʻzbekistonda rasmiy maoshga ega jismoniy shaxslarning Jismoniy shaxslar daromad soligʻi (JShDS) odatda har oy 12% stavkada ushlab qolinadi. Biroq muayyan daromad toifalari bu soliqdan toʻliq yoki qisman ozod qilinadi. Yana ham yaxshisi, agar bu summalardan soliq allaqachon toʻlangan boʻlsa, uning bir qismini qonuniy ravishda qaytarib olishingiz mumkin.",
      },
      { type: "h2", text: "Asosiy JShDS imtiyozlari va ozod qilishlar" },
      {
        type: "ul",
        items: [
          "Taʼlim xarajatlari: oʻzingiz, turmush oʻrtogʻingiz yoki bolalaringiz (26 yoshgacha) uchun Oʻzbekiston oliy taʼlim muassasalaridagi oʻquv haqi, jumladan taʼlim kreditlari va ularning foizlari",
          "Xususiy maktablar va bogʻchalar: ota-onalar yoki farzandlikka olganlar nodavlat maktabgacha taʼlim muassasalari va maktablar xizmatlari uchun bola boshiga oyiga 3 mln soʻmgacha imtiyoz olishlari mumkin",
          "Ipoteka foizlari: ipoteka kreditlari va hisoblangan foizlarga toʻlangan summalar — yiliga Pensiyaning eng kam miqdori (MROT)ning 80 baravarigacha, agar uy-joy byudjet subsidiyasi bilan olingan boʻlsa",
          "Pensiya jamgʻarmalari: Xalq bankidagi Individual jamgʻarib boriladigan pensiya hisobvaraqlariga (INPS) ixtiyoriy ravishda yoʻnaltirilgan maosh summalari",
          "Investitsiya hisobvaraqlari: aksiyalar sotib olish uchun individual investitsiya hisobvaraqlariga yoʻnaltirilgan maosh, yiliga MROTning 100 baravarigacha (mablagʻlar 12 oyga blokirovka qilinadi)",
          "Ish beruvchi tomonidan beriladigan imtiyozlar: belgilangan limitlar doirasidagi muayyan moddiy yordam, tibbiy kompensatsiya, bolalar lagerlari yoʻllanmalari va naqd boʻlmagan sovgʻalar",
        ],
      },
      { type: "h2", text: "JShDS qaytarimini qanday olish mumkin" },
      {
        type: "p",
        text: "Bu imtiyozlardan foydalanishning ikki asosiy usuli mavjud: ish beruvchi bilan uch tomonlama shartnoma orqali bevosita ozod qilish yoki ortiqcha toʻlangan JShDS uchun yillik qaytarimni soʻrash. Yillik qaytarish jarayonini toʻliq onlayn tarzda yakunlash mumkin.",
      },
      { type: "h3", text: "1-qadam. Yillik daromad deklaratsiyangizni topshiring" },
      {
        type: "ul",
        items: [
          "Qachon: hisobot yilidan keyingi yilning 1 aprelgacha (masalan, 2024 yil daromadi uchun 2025 yil 1 aprelgacha)",
          "Qayerda: my3.soliq.uz orqali elektron tarzda Elektron raqamli imzo (ERI) yordamida",
          "Talab qilinadi: barcha ish joylaridan daromad maʼlumotnomalari, tegishli shartnomalarning skan nusxalari (universitet, xususiy maktab yoki ipoteka shartnomasi) va toʻlov hujjatlari",
          "«Soliq imtiyozlari» boʻlimida tegishli imtiyoz toifasini tanlang va tasdiqlovchi hujjatlarni biriktiring — tizim qaytariladigan summani avtomatik hisoblaydi",
        ],
      },
      { type: "h3", text: "2-qadam. Qaytarish arizasini topshiring" },
      {
        type: "ul",
        items: [
          "Qachon: deklaratsiyangiz muvaffaqiyatli topshirilgandan va qayta ishlangandan soʻng",
          "Qayerda: my3.soliq.uz yoki my.soliq.uz orqali",
          "Qaytarish oʻtkazmasi uchun bank karta raqami, tranzit hisobvaraq va bank MFOsini kiriting",
          "Qaytarish odatda koʻrsatilgan bank kartangizga 15 kun ichida oʻtkaziladi",
        ],
      },
      {
        type: "blockquote",
        text: "Soliq imtiyozlarini ishlatish murakkab boʻlishi mumkin, ammo bu ozod qilishlarni tushunish sezilarli tejashga olib keladi. Deklaratsiyani tayyorlashda, imtiyozga huquq baholashda yoki muvofiqlikni taʼminlashda yordam kerak boʻlsa, Advizen ekspertlari yordam berishga tayyor.",
      },
    ],
  },
};

export default article;
