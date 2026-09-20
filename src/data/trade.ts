// ---------------------------------------------------------------------------
// B2B 交易条款 —— 单一事实来源（Single Source of Truth）
//
// 业务口径改动时**只改这个文件**，以下 6 个页面会同步更新：
//    /wholesale/                      批发总览
//    /moq-and-sampling/               MOQ、打样与交期
//    /oem-odm/                        OEM / ODM 定制
//    /certifications/                 检测、合规与单证
//    /for-distributors/               经销商与进口商
//    /pet-products-supplier-australia/ 澳洲市场
//    以及 7 个品类落地页共用的条款表
//
// 📐 口径基准（2026-09-20 业务确认）
//   数字来源 = 业务给定的两条（MOQ 可 10 件、量产 1 个月内）
//            + 参照三家同类工厂公开口径补齐全表
//              （junyuanbags.com / portpets.com / greenfield-bag.com：
//                MOQ 500–1000 pcs · 打样 6–15 天 · 量产 35–50 天 · FOB 厦门 · 30/70 T/T）
//   我方取值整体优于此基准，因此页面必须把「低 MOQ」的适用范围讲清楚，
//   否则会被采购方误读为「10 件也能全定制」。
//
// ⚠️ 这些是**典型值，不是承诺值**。业务实情：具体 MOQ 与交期随当期产能变化，
//   由业务在客户询盘时与生产部确认后写入报价单。页面上的数字负责让采购方
//   有锚点、愿意来问；真正生效的数字是报价单上那一版 → 见下方 INDICATIVE。
//   页面必须**主动说明**这一点，不能藏进页脚免责声明（采购方反感的是事后
//   才被告知「以实际为准」，而不是事先就讲清楚）。
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// 「典型值 vs 确认值」口径 —— 6 个 B2B 页面 + 品类页共用的一句话说明
// ---------------------------------------------------------------------------
export const INDICATIVE = {
  /** 用于标题旁、表格下方等短位置 */
  short: 'Typical production figures — we confirm the exact numbers for your order in writing.',
  /** 用于专门的说明块 */
  body:
    'The figures on this page are what our lines run to at the moment, not a fixed tariff. Fabric and freight costs move, and how soon we can take on a new order depends on what is already booked into the production calendar. So when your enquiry comes in, we check your quantity and specification against the live schedule and put the confirmed MOQ, sample time and lead time in writing with your quotation. Those confirmed figures are what your order runs to.',
  whatChanges: [
    'The MOQ for a specific style — custom materials or new tooling can push it above the figures here',
    'Lead time, measured against the production calendar at the moment you order',
    'Freight cost, and the port we quote from',
  ],
  whatDoesNot:
    'What does not change: the three-tier structure, the fact that a stock-design trial order can start at 10 pcs, and that production lead time counts from your deposit and your approved sample — never from the order date.',
} as const;

/** 工厂规模：与 /factory/ 页面已公开的数字保持一致，避免两处口径打架 */
export const FACTORY = {
  floorArea: '1,200+',
  floorAreaUnit: 'sqm',
  workers: '50+',
  monthlyCapacity: '120,000',
  monthlyCapacityUnit: 'pcs / month',
  exportCountries: '30+',
  capacityNote:
    'Capacity covers carrier bags, harnesses, collars, strollers, pee pads and modular carpet tiles across one production calendar.',
} as const;

// ---------------------------------------------------------------------------
// MOQ 三档
// 低 MOQ 是拉新客的钩子，但必须限定适用范围：现货款低门槛、全定制品有起订量，
// 否则买家按「10 件全定制」来谈，工厂无法接。
// ---------------------------------------------------------------------------
export const MOQ_TIERS = [
  {
    tier: 'Trial order',
    qty: '10 pcs',
    /** 业务给定「MOQ 可以 10 件」 */
    scope: 'Stock designs only',
    detail:
      'Existing colourways and sizes, mixed across one or more styles. Ideal for market testing or a buyer sample.',
    custom: 'No customisation',
    lead: 'Ships in 3–7 days',
  },
  {
    tier: 'Logo order',
    qty: '100 pcs',
    /** 参照行业常规值（白标常规 100–200 pcs，取偏低值） */
    scope: 'Stock design + your branding',
    detail:
      'Your logo added to an existing design by woven label, silicone patch or embroidery. Packaging printed to your artwork.',
    custom: 'Logo, label, hangtag, packaging',
    lead: '12–18 days',
  },
  {
    tier: 'Custom / OEM programme',
    qty: '500 pcs',
    /** 与同行公开的 500–1000 pcs 对齐；500 已属同业偏低值 */
    scope: 'New design or full customisation',
    detail:
      'New pattern, custom materials, Pantone colour matching, custom hardware, tooling or retail-ready packaging.',
    custom: 'Everything, from pattern to packaging',
    lead: '25–30 days',
  },
] as const;

// ---------------------------------------------------------------------------
// 打样
// ---------------------------------------------------------------------------
export const SAMPLING = {
  /** 参照同行 6–15 天，现货取偏保守下段 */
  stockSampleLead: '5–7 working days',
  /** 参照同行上限，含开发与修改 */
  customSampleLead: '10–15 working days',
  /** 按项目报价，不写固定金额；可抵扣首单 */
  sampleFee:
    'Quoted per project — it covers materials, labour and courier. Refundable against the first bulk order at or above the applicable MOQ tier.',
  /** 现货样品按单价 + 快递费计 */
  stockSampleFeeNote:
    'Stock samples are charged at unit price plus courier; the sample cost is refunded on your first bulk order.',
  revisions:
    'Two rounds of revisions are included before approval. After that, further rounds are quoted at cost.',
  /** 这份清单是流程要求，属于事实性描述 */
  requiredFromBuyer: [
    'Logo file in vector format (AI, EPS, PDF or SVG) — a flat colour reference is not enough for print or embroidery',
    'Pantone (PMS) references for every colour, if you have them',
    'Packaging artwork and barcode / EAN if the goods ship retail-ready',
    'Target size and, for carriers and harnesses, the pet weight range you need to cover',
    'Your market\'s labelling requirements, in writing, before sampling starts',
  ],
} as const;

// ---------------------------------------------------------------------------
// 交期
// ---------------------------------------------------------------------------
export const LEAD_TIME = {
  /** 业务给定口径：量产 1 个月内 */
  production: '20–30 days',
  productionNote:
    'Production runs 20–30 days, counted from the working day after we receive your deposit and your approved pre-production sample — whichever comes later. Both clocks must have started, otherwise the day count is meaningless. The exact figure for your order is confirmed when we check it against the production calendar; a run booked into a full month can take longer, and we will tell you that before you commit rather than after.',
  /** 加急口径：必须按当期排产核，页面不承诺 */
  productionRush: '15–20 days on request, subject to material stock and line availability',
  qcDays: '2–3 days',
  bookingAndLoading: '3–5 days',
  /** 这些是行业公认的高频延误源，属经验性描述 */
  delayRisks: [
    {
      title: 'Chinese New Year',
      detail:
        'Factories in China typically close for 2–4 weeks around Chinese New Year, and the 3 weeks before it are the most congested period of the year. If your target in-store date is within 8 weeks after CNV, book the order before November.',
    },
    {
      title: 'Peak season (August–November)',
      detail:
        'Everyone is producing for the northern-hemisphere Christmas season at the same time. Line capacity and freight space both tighten, and both add cost.',
    },
    {
      title: 'Artwork approval delays',
      detail:
        'The single most common cause of a late delivery is not production — it is waiting for logo, packaging or label artwork to be approved. Send final artwork with the deposit.',
    },
    {
      title: 'Custom hardware and moulds',
      detail:
        'A new buckle, zipper pull or injected part needs its own tooling lead time on top of the production schedule. Tell us early if your design needs new tooling.',
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// 价格与商务条款
// ---------------------------------------------------------------------------
export const COMMERCIAL = {
  /** 「量大从优」的阶梯 —— 不写具体折扣率，改由报价单给，避免页面数字与报价打架 */
  volumePricing:
    'Unit price falls as quantity rises. We issue the current price-break table with your quotation, because fabric and freight costs move and a printed price on a website goes stale within months.',
  volumeTiers: [
    { qty: '10–99 pcs', note: 'Trial pricing — designed to get goods into your hands, not to be the cheapest unit cost' },
    { qty: '100–499 pcs', note: 'Volume pricing starts here; logo and packaging customisation available' },
    { qty: '500–1,999 pcs', note: 'Full custom programme; price-break band for the core catalogue range' },
    { qty: '2,000 pcs +', note: 'Dedicated production run with a scheduled delivery calendar across the season' },
  ],
  payment: '30% T/T deposit with the order, 70% against the bill of lading copy. L/C at sight accepted for larger orders.',
  paymentSmall:
    'For trial orders below USD 3,000 we usually ask for payment in full, because the bank charges on a two-stage transfer cost more than the margin on the order.',
  /** 出货港随报价单确认（宁波/上海/厦门 视当期航线与舱位） */
  incoterms: 'FOB China main port — quoted as FOB Ningbo, Shanghai or Xiamen, confirmed on your quotation.',
  incotermsAlt:
    'EXW and CIF are also available; tell us which term your customs broker prefers and we will quote accordingly.',
  currency: 'USD as standard; EUR, AUD and SGD by agreement.',
  lcl: 'LCL shipments accepted from 1 CBM, which suits a first order that does not fill a container.',
} as const;

// ---------------------------------------------------------------------------
// 报价所需信息 —— 越完整，报价越快，也更少来回
// ---------------------------------------------------------------------------
export const QUOTE_CHECKLIST = [
  'Product or closest catalogue item, with quantity per style and per size',
  'Your market / destination port',
  'What you need customised: logo, colour, size, hardware, packaging — or nothing at all',
  'Target retail price point, if you have one. It decides material grade far faster than a specification list does.',
  'Your required in-store or on-shelf date, which tells us whether the schedule is realistic',
  'Whether your market requires specific test reports or labelling, and which',
] as const;

// ---------------------------------------------------------------------------
// 品控与单证
// 注意口径：我们**不声称持有**任何第三方证书；只描述我们能配合做的检测与随货单证。
// 若业务后续提供真实证书（SGS / BSCI / ISO 9001 等），再按持有口径改写。
// ---------------------------------------------------------------------------
export const QUALITY = {
  checkpoints: [
    {
      stage: 'Incoming material',
      detail:
        'Fabric, webbing, zippers, buckles and foam are checked against the approved sample and the material specification before they enter production. Non-conforming material is rejected at this gate rather than discovered at the end.',
    },
    {
      stage: 'In-production',
      detail:
        'Line inspection during cutting, sewing and assembly — stitch density, panel alignment, hardware attachment and dimension tolerance. Inspection frequency is set out in the inspection plan agreed with you before the line starts.',
    },
    {
      stage: 'Pre-shipment',
      detail:
        'Random-sampling inspection against the approved sample: appearance, function, labelling, packing and carton drop test. Photo report issued before the goods leave, so you approve what ships. The sampling plan and any acceptance limits your market requires are agreed in writing before production.',
    },
  ],
  /** 随货单证：国际贸易标准文件，属事实性描述 */
  documents: [
    'Commercial invoice and packing list',
    'Bill of lading / airway bill',
    'Certificate of origin (including FTA certificates where the destination market qualifies)',
    'Test reports, when testing has been commissioned for your order',
    'Pre-shipment inspection photo report',
  ],
} as const;

// ---------------------------------------------------------------------------
// 买家分层：不同身份关心的东西不同，页面要分开讲
// ---------------------------------------------------------------------------
export const BUYER_TYPES = [
  {
    type: 'Pet retailers & chain stores',
    need: 'Reliable repeat supply, retail-ready packaging, barcodes, and a range that fills a shelf without gaps.',
    hook: 'Order across all seven categories on one PO and one set of documents.',
  },
  {
    type: 'Importers & distributors',
    need: 'Territory clarity, consistent quality between shipments, and margin that holds after freight and duty.',
    hook: 'Consolidated containers and a fixed catalogue your sales team can quote from.',
  },
  {
    type: 'Private-label brands',
    need: 'A factory that can hold a design brief, protect the IP, and land the sample right the first time.',
    hook: 'OEM and ODM development with patterns built for you and not resold.',
  },
  {
    type: 'E-commerce & Amazon sellers',
    need: 'Small first runs that prove the listing, then fast replenishment once it sells.',
    hook: 'Trial orders from 10 pcs, then 20–30 day replenishment once the listing is proven.',
  },
] as const;
