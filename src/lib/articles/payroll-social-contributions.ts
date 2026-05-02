export default {
  en: {
    subtitle: "A practical guide for employers operating in Uzbekistan",
    author: "Advizen HR Practice",
    readTime: "8 min read",
    content: [
      {
        type: "p" as const,
        text: "Uzbekistan's payroll framework has undergone significant reform in recent years, with the government simplifying rates, consolidating social contributions, and introducing digital reporting obligations. For foreign companies employing staff locally — whether through a subsidiary, representative office, or Employer of Record arrangement — understanding these obligations is essential to compliant operations.",
      },
      { type: "h2" as const, text: "Personal Income Tax" },
      {
        type: "p" as const,
        text: "Since January 2023, Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee.",
      },
      {
        type: "ul" as const,
        items: [
          "Flat rate: 12% on gross salary",
          "Withholding: employer obligation, remitted monthly",
          "Non-residents: 12% rate applies equally; no additional surcharge",
          "Dividend income: taxed separately at 5%",
        ],
      },
      { type: "h2" as const, text: "Unified Social Payment (USP)" },
      {
        type: "blockquote" as const,
        text: "The USP is an employer-borne cost, not deducted from the employee's salary. It is calculated on top of gross compensation.",
      },
      {
        type: "ul" as const,
        items: [
          "Standard rate: 12% of gross payroll (employer cost)",
          "Budget organisations and certain SMEs: reduced rates may apply",
          "Paid monthly alongside PIT remittance",
          "Late payment attracts penalties at the Central Bank refinancing rate",
        ],
      },
      { type: "h2" as const, text: "Individual Accumulative Pension Contribution" },
      {
        type: "p" as const,
        text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This deduction is included within the PIT calculation and withheld by the employer as part of the overall income tax remittance.",
      },
      { type: "h2" as const, text: "Reporting Obligations" },
      {
        type: "ul" as const,
        items: [
          "Monthly PIT withholding report — due by the 10th of the following month",
          "Monthly USP declaration — submitted alongside PIT report",
          "Annual payroll reconciliation — due by 1 February",
          "Employee income certificates — issued upon request or termination",
        ],
      },
      { type: "h2" as const, text: "Common Compliance Risks" },
      {
        type: "ul" as const,
        items: [
          "Contractor misclassification — individuals performing employee functions must be on payroll",
          "In-kind benefits (housing, transport, meals) are taxable at market value",
          "Bonuses and one-time payments are subject to PIT at the standard 12% rate",
          "Failure to file monthly reports attracts administrative fines",
        ],
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Summary of Key Rates (2024)" },
      {
        type: "ul" as const,
        items: [
          "Personal Income Tax: 12% (flat, withheld by employer)",
          "Unified Social Payment: 12% (employer cost, on gross payroll)",
          "Accumulative Pension: 0.1% (included in PIT)",
          "Total employer burden: ~24% of gross salary",
        ],
      },
    ],
  },
  ru: {
    subtitle: "Практическое руководство для работодателей, осуществляющих деятельность в Узбекистане",
    author: "Advizen HR Practice",
    readTime: "8 мин чтения",
    content: [
      {
        type: "p" as const,
        text: "Система расчёта заработной платы в Узбекистане претерпела существенные реформы в последние годы: правительство упростило ставки, консолидировало социальные взносы и ввело цифровые обязательства по отчётности. Для иностранных компаний, нанимающих местных сотрудников — будь то через дочернюю структуру, представительство или схему Employer of Record — понимание этих обязательств является обязательным условием ведения законной деятельности.",
      },
      { type: "h2" as const, text: "Налог на доходы физических лиц" },
      {
        type: "p" as const,
        text: "С января 2023 года в Узбекистане применяется единая ставка налога на доходы физических лиц (НДФЛ) в размере 12% на все доходы от трудовой деятельности. Налог удерживается у источника выплаты работодателем и ежемесячно перечисляется в Государственный налоговый комитет.",
      },
      {
        type: "ul" as const,
        items: [
          "Единая ставка: 12% от валовой заработной платы",
          "Удержание: обязанность работодателя, перечисляется ежемесячно",
          "Нерезиденты: ставка 12% применяется в равной мере; дополнительная надбавка не предусмотрена",
          "Дивидендный доход: облагается отдельно по ставке 5%",
        ],
      },
      { type: "h2" as const, text: "Единый социальный платёж (ЕСП)" },
      {
        type: "blockquote" as const,
        text: "ЕСП является расходом работодателя и не вычитается из заработной платы сотрудника. Он рассчитывается сверх совокупного вознаграждения.",
      },
      {
        type: "ul" as const,
        items: [
          "Стандартная ставка: 12% от фонда оплаты труда (расход работодателя)",
          "Бюджетные организации и отдельные МСП: возможно применение пониженных ставок",
          "Уплачивается ежемесячно одновременно с перечислением НДФЛ",
          "Просрочка оплаты влечёт начисление пеней по ставке рефинансирования Центрального банка",
        ],
      },
      { type: "h2" as const, text: "Индивидуальный накопительный пенсионный взнос" },
      {
        type: "p" as const,
        text: "Работники вносят 0,1% от валовой заработной платы на индивидуальный накопительный пенсионный счёт. Этот вычет включается в расчёт НДФЛ и удерживается работодателем в составе общего перечисления подоходного налога.",
      },
      { type: "h2" as const, text: "Обязательства по отчётности" },
      {
        type: "ul" as const,
        items: [
          "Ежемесячный отчёт об удержании НДФЛ — представляется до 10-го числа следующего месяца",
          "Ежемесячная декларация по ЕСП — представляется одновременно с отчётом по НДФЛ",
          "Годовая сверка по заработной плате — представляется до 1 февраля",
          "Справки о доходах сотрудников — выдаются по запросу или при увольнении",
        ],
      },
      { type: "h2" as const, text: "Распространённые риски несоблюдения требований" },
      {
        type: "ul" as const,
        items: [
          "Неправильная классификация подрядчиков — физические лица, выполняющие функции сотрудников, должны быть включены в штат",
          "Неденежные льготы (жильё, транспорт, питание) облагаются налогом по рыночной стоимости",
          "Премии и единовременные выплаты облагаются НДФЛ по стандартной ставке 12%",
          "Непредставление ежемесячных отчётов влечёт административные штрафы",
        ],
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Ключевые ставки (2024)" },
      {
        type: "ul" as const,
        items: [
          "НДФЛ: 12% (единая ставка, удерживается работодателем)",
          "Единый социальный платёж: 12% (расход работодателя, от фонда оплаты труда)",
          "Накопительный пенсионный взнос: 0,1% (включён в НДФЛ)",
          "Общая нагрузка на работодателя: ~24% от валовой заработной платы",
        ],
      },
    ],
  },
  uz: {
    subtitle: "O'zbekistonda faoliyat yurituvchi ish beruvchilar uchun amaliy qo'llanma",
    author: "Advizen HR Practice",
    readTime: "8 daqiqa o'qish",
    content: [
      {
        type: "p" as const,
        text: "O'zbekistonda ish haqi hisoblash tizimi so'nggi yillarda muhim islohotlarga uchradi: hukumat stavkalarni soddalashtirib, ijtimoiy to'lovlarni birlashtirdi va raqamli hisobot majburiyatlarini joriy etdi. Mahalliy xodimlarni yollovchi xorijiy kompaniyalar uchun — sho'ba korxona, vakolatxona yoki Employer of Record sxemasi orqali bo'lishidan qat'i nazar — bu majburiyatlarni tushunish qonuniy faoliyat yuritishning zaruriy shartidir.",
      },
      { type: "h2" as const, text: "Jismoniy shaxslardan daromad solig'i" },
      {
        type: "p" as const,
        text: "2023 yil yanvardan O'zbekiston barcha mehnat daromadlariga 12% miqdorida yagona jismoniy shaxslardan daromad solig'i (JSDS) stavkasini qo'llaydi. Soliq ish beruvchi tomonidan manba bo'yicha ushlab qolinadi va har oy Davlat soliq qo'mitasiga o'tkaziladi.",
      },
      {
        type: "ul" as const,
        items: [
          "Yagona stavka: yalpi ish haqining 12%",
          "Ushlab qolish: ish beruvchining majburiyati, har oy o'tkaziladi",
          "Norezidentlar: 12% stavka bir xil tarzda qo'llaniladi; qo'shimcha ustama yo'q",
          "Dividend daromadi: 5% stavkada alohida soliqqa tortiladi",
        ],
      },
      { type: "h2" as const, text: "Yagona ijtimoiy to'lov (YIT)" },
      {
        type: "blockquote" as const,
        text: "YIT ish beruvchining xarajati bo'lib, xodimning ish haqidan ushlab qolinmaydi. U yalpi ish haqiga qo'shimcha ravishda hisoblanadi.",
      },
      {
        type: "ul" as const,
        items: [
          "Standart stavka: yalpi ish haqi fondining 12% (ish beruvchi xarajati)",
          "Byudjet tashkilotlari va ba'zi kichik biznes sub'ektlari: pasaytirilgan stavkalar qo'llanilishi mumkin",
          "JSDS o'tkazilishi bilan bir vaqtda har oy to'lanadi",
          "Kech to'lash Markaziy bank qayta moliyalash stavkasida penya hisoblashga olib keladi",
        ],
      },
      { type: "h2" as const, text: "Individual jamg'arma pensiya badali" },
      {
        type: "p" as const,
        text: "Xodimlar o'zlarining yalpi ish haqining 0,1% ini individual jamg'arma pensiya hisobiga o'tkazadilar. Bu chegirma JSDS hisobiga kiritiladi va ish beruvchi tomonidan umumiy daromad solig'i o'tkazmasi doirasida ushlab qolinadi.",
      },
      { type: "h2" as const, text: "Hisobot majburiyatlari" },
      {
        type: "ul" as const,
        items: [
          "JSDS ushlab qolish bo'yicha oylik hisobot — keyingi oyning 10-sanasigacha topshiriladi",
          "YIT bo'yicha oylik deklaratsiya — JSDS hisoboti bilan birga topshiriladi",
          "Yillik ish haqi bo'yicha saldo — 1 fevralga qadar topshiriladi",
          "Xodimlar daromadi haqidagi ma'lumotnomalar — so'rov yoki ishdan bo'shatish bo'yicha beriladi",
        ],
      },
      { type: "h2" as const, text: "Keng tarqalgan muvofiqlik risklari" },
      {
        type: "ul" as const,
        items: [
          "Pudratchilarni noto'g'ri tasniflash — xodim vazifalarini bajaradigan jismoniy shaxslar shtatga kiritilishi shart",
          "Natura shaklida berilgan imtiyozlar (uy-joy, transport, ovqat) bozor qiymati bo'yicha soliqqa tortiladi",
          "Mukofotlar va bir martalik to'lovlar standart 12% stavkada JSDS ga tortiladi",
          "Oylik hisobotlarni topshirmaslik ma'muriy jarimaga olib keladi",
        ],
      },
      { type: "divider" as const },
      { type: "h2" as const, text: "Asosiy stavkalar xulosasi (2024)" },
      {
        type: "ul" as const,
        items: [
          "Jismoniy shaxslardan daromad solig'i: 12% (yagona stavka, ish beruvchi ushlab qoladi)",
          "Yagona ijtimoiy to'lov: 12% (ish beruvchi xarajati, yalpi ish haqi fondidan)",
          "Jamg'arma pensiya badali: 0,1% (JSDS ga kiritilgan)",
          "Ish beruvchining umumiy yuki: yalpi ish haqining ~24%",
        ],
      },
    ],
  },
};
