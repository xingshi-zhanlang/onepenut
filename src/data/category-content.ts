// 分类落地页内容
// ---------------------------------------------------------------------------
// ⚠️ 交易数字（MOQ / 打样 / 交期）的**唯一事实来源是 src/data/trade.ts**。
//    本文件的 TRADE_TERMS 从那里取值拼接，因此不要在此处硬编码数字——
//    否则分类页与 B2B 钱页会出现两套互相矛盾的口径，比不写更糟。
// ---------------------------------------------------------------------------
import { COMMERCIAL, LEAD_TIME, MOQ_TIERS, SAMPLING } from './trade';

export interface CategoryContent {
  /** H1（页面主标题，与 SEO title 区分开） */
  h1: string;
  /** SEO title（Layout 会自动追加 " · ONEPENUT"） */
  seoTitle: string;
  /** meta description */
  seoDescription: string;
  /** 分类介绍段落 */
  intro: string[];
  /** 采购关注点 / 品类卖点 */
  highlights: { title: string; desc: string }[];
  /**
   * 使用场景 / 目标人群。
   * 场景词全部来自本品类真实产品名（如 Safe Cycling、Mountain Style、
   * Spine-Protecting、Anti-Pull、Car Safety Belt），用于承接场景型长尾搜索，
   * 不要在此处添加没有产品支撑的场景。
   */
  useCases: { title: string; desc: string }[];
  /** 常见问题（同时输出 FAQPage 结构化数据） */
  faqs: { q: string; a: string }[];
  /**
   * 可选：相关主题内链块（渲染在品类页 FAQ 之前，按数组渲染成卡片栅格）。
   * 用于把「按需求选品」的主题页、以及该类目对应的制造方页与品类页双向连起来——
   * 例如尿垫页同时反链 /senior-pet-care/ 与 /pet-pee-pad-manufacturer/，
   * 让权重在「场景路径」和「采购路径」之间流动。
   */
  related?: { title: string; desc: string; href: string; label: string }[];
  /**
   * 可选：覆盖该品类页的采购条款区块。
   * 默认使用全站共用的 TRADE_TERMS；开发中/尚未定产能的品类可用一份
   * 不含数字的软条款替代，避免在页面里承诺未确认的 MOQ 与交期。
   */
  tradeTermsOverride?: { label: string; value: string; link?: string }[];
}

/** 通用采购条款（所有分类页共用，只在此处维护一份；数字取自 src/data/trade.ts） */
export const TRADE_TERMS: { label: string; value: string; link?: string }[] = [
  {
    label: 'Minimum order',
    value: `${MOQ_TIERS[0].qty} on stock designs, ${MOQ_TIERS[1].qty} once your logo is added and ${MOQ_TIERS[2].qty} for a fully custom product. Per style, per colourway — mixed sizes within a style are always fine.`,
    link: '/moq-and-sampling/',
  },
  {
    label: 'Sampling',
    value: `A physical sample is produced and approved before any bulk production. ${SAMPLING.stockSampleLead} for a stock design, ${SAMPLING.customSampleLead} if it needs developing. ${SAMPLING.sampleFee}`,
    link: '/moq-and-sampling/',
  },
  {
    label: 'Production lead time',
    value: `${LEAD_TIME.production} from the day after we receive your deposit and your approved pre-shipment sample, whichever comes later. Sea freight transit is separate.`,
    link: '/moq-and-sampling/',
  },
  {
    label: 'Customisation',
    value:
      'OEM / ODM across fabric, colour, sizing, logo, hardware and packaging — from sample stage onward. Designs developed for you are not produced for anyone else.',
    link: '/oem-odm/',
  },
  {
    label: 'Packaging',
    value:
      'Polybag, hangtag, colour box or Amazon FBA-ready labelling, with barcodes on request.',
  },
  {
    label: 'Quality control',
    value:
      'Material, in-line and pre-shipment inspection on every order, with reports available on request.',
  },
  {
    label: 'Shipping',
    value:
      'EXW / FOB / CIF by sea, plus air and express. Export documentation handled end to end, including certificate of origin.',
    link: '/wholesale/',
  },
  {
    label: 'Payment',
    value: COMMERCIAL.payment,
    link: '/wholesale/',
  },
  {
    label: 'Testing and compliance',
    value:
      'Tell us which tests your market or your own customer requires, and we will supply what the laboratory needs to run them — layered material samples, same-batch production samples, BOM with layer weights, SDS, TDS and a stamped declaration of conformity. If a result misses, we adjust the formulation and re-test. The testing itself is commissioned by you or by your nominated laboratory, so the report is issued in a name your market accepts.',
    link: '/certifications/',
  },
];

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  'carrier-bags': {
    h1: 'Pet Carrier Bags & Backpacks',
    seoTitle: 'Wholesale Pet Carrier Bags & Backpacks — OEM Supplier',
    seoDescription:
      'Wholesale airline-approved pet carriers, totes, backpacks and travel tents for cats and dogs. OEM / ODM with custom logos, colours and packaging.',
    intro: [
      'Carrier bags are the centre of the ONEPENUT travel collection. We develop airline-friendly totes, soft-sided carriers, structured backpacks and canopy travel tents for cats and small dogs — built to photograph well, survive real journeys and still land at a retail price that works.',
      'Every model is developed in-house from pattern to finished goods, so you are not choosing from a fixed catalogue. Pick the fabric, lining, hardware colour, opening style and packaging, and we build the SKU around your brand.',
    ],
    highlights: [
      {
        title: 'Airline-minded sizing',
        desc: 'Our best-selling carriers are kept within common in-cabin limits so they travel as hand luggage. Tell us your target airline and we will confirm dimensions before you commit to a size.',
      },
      {
        title: 'Structure and ventilation',
        desc: 'Rigid base boards, reinforced side panels and generous mesh keep the bag from collapsing and keep air moving on longer trips.',
      },
      {
        title: 'Carry configurations',
        desc: 'Shoulder strap, top handle, luggage pass-through and backpack straps can be combined per model — useful when one line has to serve several sales channels.',
      },
      {
        title: 'Safety hardware',
        desc: 'Lockable zips, an internal safety tether and load-tested buckles come as standard on travel models.',
      },
      {
        title: 'Fabric programme',
        desc: 'Oxford polyester, RPET recycled fabric, water-repellent nylon and sherpa fleece lining, all available as sampling options.',
      },
      {
        title: 'Branding surfaces',
        desc: 'Woven labels, logo patches, embossed metal tags and custom print can be placed from the sample stage, so what you approve is what you receive.',
      },
    ],
    useCases: [
      {
        title: 'Airline cabin travel',
        desc: 'Tote and tent-backpack formats sized around common in-cabin limits, for owners who fly with cats and small dogs. Confirm your airline before fixing a size.',
      },
      {
        title: 'Car and road trips',
        desc: 'Console bags, armrest carriers and front-seat pads keep a pet secured and visible on short journeys, and double as everyday storage in the car.',
      },
      {
        title: 'Hiking and full days outdoors',
        desc: 'Chest bags and spine-support backpacks spread the load across the shoulders, which is what makes a long walk comfortable for both pet and owner.',
      },
      {
        title: 'Cycling and urban commutes',
        desc: 'Front-mounted and sling formats sit close to the body, so the pet stays stable on a bike, a scooter or in a crowd.',
      },
      {
        title: 'Training and treat handling',
        desc: 'Waist packs and treat pouches keep rewards within reach — a small category that buyers use to round out a walking range.',
      },
    ],
    faqs: [
      {
        q: 'What is your MOQ for pet carriers?',
        a: 'MOQ is set per model and colour and is confirmed together with your quotation. Trial orders are reviewed case by case, so it is always worth asking before you assume a volume.',
      },
      {
        q: 'Can you produce a carrier to our own design?',
        a: 'Yes. Send drawings, a reference sample or even a mood board. Our pattern team will build a sample for your approval before bulk production starts.',
      },
      {
        q: 'Are these carriers suitable for cabin travel?',
        a: 'Most models follow common in-cabin dimensions, but airline rules differ between carriers and routes. We recommend confirming with your target airline before finalising the size.',
      },
      {
        q: 'Can the packaging be Amazon FBA ready?',
        a: 'Yes — polybag, hangtag, colour box, barcode and FBA labelling can all be arranged as part of the order.',
      },
      {
        q: 'Do you arrange testing and certifications for exported carriers?',
        a: 'Yes. Tell us which tests your market or your own customer requires and we will support them end to end — layered material samples, same-batch production samples, BOM, SDS, TDS and a stamped declaration of conformity, with a re-test if a result misses. REACH, CPSIA, AZO and colour fastness are the requests we see most often.',
      },
    ],
    related: [
      {
        title: 'Airline cabin carriers',
        desc: 'Five cabin models with documented footprints of 35 × 28 × 24 cm and 43 × 28 × 25 cm, plus a straight answer on what “airline approved” does and does not mean for a soft bag.',
        href: '/airline-approved-pet-carriers/',
        label: 'Open the cabin range',
      },
      {
        title: 'Backpack carriers',
        desc: 'Thirteen models split between shells that carry the pet inside and wearable harness-backpacks the pet wears, plus zip-out tent versions — so a buyer does not order the wrong structure.',
        href: '/pet-backpack-carriers/',
        label: 'Open the backpack range',
      },
      {
        title: 'Sling & crossbody carriers',
        desc: 'Sixteen hands-free models across four carry positions, for pets from 5 kg to 9 kg — the most compact part of the carrier range and the usual starting point for cat owners.',
        href: '/pet-sling-carriers/',
        label: 'Open the hands-free range',
      },
    ],
  },

  'harnesses-leashes': {
    h1: 'Cat & Dog Harnesses and Leashes',
    seoTitle: 'Wholesale Dog & Cat Harnesses and Leashes — OEM Factory',
    seoDescription:
      'Escape-proof cat harnesses, no-pull dog harnesses, step-in designs and bungee leashes for wholesale and OEM. Reflective options, full size range.',
    intro: [
      'This collection covers walking and training gear for both cats and dogs: escape-proof cat harnesses, no-pull dog harnesses, step-in and H-style designs, matching collars and bungee leashes.',
      'Walk gear is where sizing accuracy decides whether a product gets reordered. Our sample process tests every size on a real fit range, and our size tables are written so end customers can measure their pet and order correctly the first time.',
    ],
    highlights: [
      {
        title: 'Escape-proof construction',
        desc: 'For cats we use a close-fitting adjustable shape with reinforced seams and quick-release buckles positioned away from the chest.',
      },
      {
        title: 'No-pull geometry',
        desc: 'Front-clip and dual-clip dog harnesses spread pressure across the chest instead of the throat, which is the feature buyers ask about most.',
      },
      {
        title: 'Sizing accuracy',
        desc: 'Neck and chest ranges are measured on the finished sample rather than calculated from the pattern, so your published size chart matches what actually ships.',
      },
      {
        title: 'Webbing and hardware',
        desc: 'Nylon, polypropylene and reflective webbing in several widths, with metal D-rings or reinforced plastic hardware depending on your target price point.',
      },
      {
        title: 'Training features',
        desc: 'Bungee sections, side handles, traffic loops and ID tag holders can be added per model without changing the base pattern.',
      },
      {
        title: 'Colour programme',
        desc: 'Core neutrals and seasonal accents can run together, so even a small buyer can offer real variety.',
      },
    ],
    useCases: [
      {
        title: 'Anti-pull and no-pull training',
        desc: 'Front-clip harnesses, head halters and half-P collars redirect pulling without loading the throat — the entry point for most training ranges, and the design most buyers ask for first.',
      },
      {
        title: 'Cat walking',
        desc: 'Close-fitting adjustable cat harnesses with matching leashes, built on a separate pattern from dog gear rather than scaled down from it.',
      },
      {
        title: 'Car travel safety',
        desc: 'Shock-absorbing safety belts and tethers that pair with a harness so a pet is restrained on the road, not loose in the cabin.',
      },
      {
        title: 'Walking two or more dogs',
        desc: 'Couplers and multi-function leashes for owners who walk several dogs at once — a niche that sells well alongside standard leads.',
      },
      {
        title: 'Active and sporting dogs',
        desc: 'Lightweight vest and sports harnesses for running, hiking and high-energy use, where weight and freedom of movement matter more than padding.',
      },
    ],
    faqs: [
      {
        q: 'Can you make harnesses for both cats and dogs?',
        a: 'Yes. Cat and dog harnesses are developed on separate patterns and size ranges so each fits properly, rather than sharing a compromise shape.',
      },
      {
        q: 'Do you provide a size chart?',
        a: 'We supply a measuring guide with neck and chest ranges for every size. It is written for end customers and can be published directly on your product pages.',
      },
      {
        q: 'Can we add reflective stitching?',
        a: 'Yes — reflective thread and reflective webbing are both available, and both are popular for evening-walk ranges.',
      },
      {
        q: 'What hardware options do you offer?',
        a: 'Metal D-rings, aluminium buckles, acetal side-release buckles and welded rings, in several finishes to match your branding.',
      },
      {
        q: 'Can you provide the test reports and certifications we need to import?',
        a: 'We can. Tell us the tests your market or your own customer requires and we will supply what the laboratory needs — layered material samples, same-batch production samples, BOM, SDS and TDS — and adjust the formulation and re-test if a result misses. REACH, CPSIA, AZO and colour fastness are the requests we see most often.',
      },
    ],
  },

  'recovery-collars': {
    h1: 'Soft Recovery Collars & Cone Alternatives',
    seoTitle: 'Wholesale Soft Pet Recovery Collars & Cone Alternatives',
    seoDescription:
      'Soft fabric Elizabethan collars, donut collars and cone alternatives for post-surgery recovery. Wholesale and OEM supply with full size range.',
    intro: [
      'Soft recovery collars are a small category with a very specific job: keep a pet away from a wound without adding stress. We produce fabric Elizabethan collars, donut collars and cone alternatives that pets tolerate far better than rigid plastic.',
      'Because fit is decided by neck circumference, this is a category where a clear size chart and honest measurements do most of the selling. Every size we ship is measured on the finished item, not estimated from a pattern.',
    ],
    highlights: [
      {
        title: 'Neck-based sizing',
        desc: 'Each size is defined by neck circumference with an adjustable closure, which keeps sizing disputes and returns low.',
      },
      {
        title: 'Soft, washable fabric',
        desc: 'Plush, fleece and quilted cotton options, all machine washable — an important selling point for anything used after surgery.',
      },
      {
        title: 'Eating and drinking',
        desc: 'Shallow donut shapes let pets reach a bowl for food and water without the collar being removed.',
      },
      {
        title: 'Secure closures',
        desc: 'Hook-and-loop, drawstring or elasticated toggles, chosen per model and per price point.',
      },
      {
        title: 'Leash attachment',
        desc: 'A reinforced loop lets a leash or collar be attached while the recovery collar is being worn.',
      },
      {
        title: 'Clinic-friendly options',
        desc: 'Neutral colours and unbranded packing suit veterinary clinics and professional distributors.',
      },
    ],
    useCases: [
      {
        title: 'Abdominal and limb recovery',
        desc: 'Donut, petal and flower shapes give a pet a soft barrier in front of the wound while keeping food and water within reach. The usual choice for spay, neuter and orthopaedic recovery.',
      },
      {
        title: 'Head, ear and eye procedures',
        desc: 'Deeper conical and Elizabethan shapes limit how far a pet can turn and reach, which is what these procedures require. Fit is by neck circumference, so the size chart does the work.',
      },
      {
        title: 'Cats and small breeds',
        desc: 'Lighter fabric collars sized for cats and small dogs, who generally tolerate soft construction far better than rigid plastic.',
      },
      {
        title: 'Veterinary clinics and distributors',
        desc: 'Mixed-size clinic packs and neutral, unbranded packing for buyers who supply professional channels rather than retail.',
      },
    ],
    faqs: [
      {
        q: 'How do I choose between a donut collar and an E-collar?',
        a: 'Donut collars suit cats and small dogs recovering from abdominal or limb procedures. Deeper collars are the better choice for head, ear and eye surgery, where the pet must not be able to reach the face.',
      },
      {
        q: 'Are the collars machine washable?',
        a: 'Yes, the soft fabric models are machine washable on a gentle cycle. We recommend removing any hard components before washing.',
      },
      {
        q: 'Can we order a size range rather than a single size?',
        a: 'Yes. Mixed-size orders are common for veterinary and clinic customers and can be quoted as a complete set.',
      },
      {
        q: 'Do you offer packing for clinics?',
        a: 'We can produce multi-size clinic packs, and unbranded neutral packaging if you supply professional channels rather than retail.',
      },
      {
        q: 'Are test reports and certifications available for the collars?',
        a: 'Yes — testing is arranged around the requirements of your market or your own customer. We supply layered material samples, same-batch production samples, BOM, SDS, TDS and a stamped declaration of conformity, and we re-test after any formulation change. Tell us the destination country and product list and we will confirm which reports apply.',
      },
    ],
  },

  'pet-strollers': {
    h1: 'Pet Strollers',
    seoTitle: 'Wholesale Pet Strollers for Dogs and Cats — OEM Manufacturer',
    seoDescription:
      'Lightweight aluminium pet strollers with one-hand fold, swivel wheels and padded liners. Wholesale and OEM supply for senior pets and small dogs.',
    intro: [
      'Our stroller range is deliberately small and deliberately practical: aluminium-framed, one-hand folding designs for senior pets, small dogs and cats who travel further than their legs allow.',
      'Buyers in this category ask the same three questions — how much does it weigh, how small does it fold, and how much can it carry. So we publish all three, and every model is built to the same brief.',
    ],
    highlights: [
      {
        title: 'Weight and fold',
        desc: 'One-hand fold with a compact folded footprint, so the stroller goes into a car boot without a wrestling match.',
      },
      {
        title: 'Frame and wheels',
        desc: 'Aluminium frames with swivel front wheels, rear brakes and puncture-resistant tyres for pavement, park and travel use.',
      },
      {
        title: 'Comfort for the pet',
        desc: 'Padded reversible liners, mesh ventilation on three sides and a removable under-basket for shopping and supplies.',
      },
      {
        title: 'Canopy protection',
        desc: 'Extendable canopies in UPF-rated fabric for sun and light rain, available in your brand colours.',
      },
      {
        title: 'Rider weight range',
        desc: 'Capacity is stated per model and verified on the assembled stroller, not calculated from component ratings.',
      },
      {
        title: 'Travel compatibility',
        desc: 'Folding dimensions are kept within common checked-luggage limits wherever the model allows.',
      },
    ],
    useCases: [
      {
        title: 'Senior pets and recovery walks',
        desc: 'For pets who still want the outing but cannot manage the distance any more — the use case that drives most stroller enquiries.',
      },
      {
        title: 'Small dogs and cats in the city',
        desc: 'Compact one-hand-folding frames for pavement, parks and public transport, where getting the folded stroller onto a train or into a boot matters as much as the ride.',
      },
      {
        title: 'Day trips and travel',
        desc: 'Folding dimensions are kept within common luggage limits wherever the model allows, so the stroller can travel with you rather than stay at home.',
      },
    ],
    faqs: [
      {
        q: 'Do the strollers fold small enough for air travel?',
        a: 'Most models fold within common checked-luggage dimensions. Tell us which model you are considering and we will confirm the exact folded size for you.',
      },
      {
        q: 'Can you produce strollers under our own brand?',
        a: 'Yes. Frame colour, canopy fabric, liner, logo printing and packaging can all be customised to your brand.',
      },
      {
        q: 'What is the weight capacity?',
        a: 'Capacity varies by model and is listed on each product page. It is verified on the assembled stroller rather than estimated from parts.',
      },
      {
        q: 'Do you supply replacement parts?',
        a: 'Wheels, liners and canopies can be supplied as spares — useful for retailers who want to support end customers after the sale.',
      },
      {
        q: 'Can you arrange testing and certification for stroller shipments?',
        a: 'Yes. Tell us the tests your market or your own customer requires and we will supply everything the laboratory needs — layered material samples, same-batch production samples, BOM, SDS, TDS and a stamped declaration of conformity — including the documents your customs broker will ask for.',
      },
    ],
  },

  accessories: {
    h1: 'Pet Accessories & Cat Gear',
    seoTitle: 'Wholesale Pet Accessories & Cat Gear — OEM / ODM Supplier',
    seoDescription:
      'Wholesale pet accessories: car seat belts, recovery suits, beds, bowls, toys and everyday essentials. OEM / ODM with private label packaging.',
    intro: [
      'Everything that completes the journey but does not fit neatly elsewhere: car seat belts and boosters, recovery suits, beds, bowls, toys and everyday essentials.',
      'This is the line that makes a wholesale order economical. Buyers use it to fill containers and reach minimum order values, so we keep the range broad, the packaging light and the price points flexible.',
    ],
    highlights: [
      {
        title: 'Order-filling range',
        desc: 'Small, light items that help you reach container or minimum order targets without over-committing on bulky goods.',
      },
      {
        title: 'Car travel safety',
        desc: 'Seat belt tethers, booster seats and hammock covers designed around common car seat layouts.',
      },
      {
        title: 'Recovery suits',
        desc: 'Soft body suits that cover a wound site while still allowing a pet to move, eat and toilet normally.',
      },
      {
        title: 'Everyday essentials',
        desc: 'Beds, bowls, toys and grooming items kept in the same brand palette as the travel collection.',
      },
      {
        title: 'Mixed cartons',
        desc: 'Assorted models and colours can be packed into mixed cartons, which helps smaller buyers test the market.',
      },
      {
        title: 'Private label ready',
        desc: 'Every item can carry your logo, colour and packaging without changing the underlying product.',
      },
    ],
    useCases: [
      {
        title: 'Car travel safety',
        desc: 'Seat pads, car seat beds and full-surround covers that protect the upholstery and keep the pet in one place on the road.',
      },
      {
        title: 'Grooming and bath time',
        desc: 'Quick-dry towels, anti-dirty bibs and washable mats — the wet half of pet ownership, and a reliable repeat-purchase area for retailers.',
      },
      {
        title: 'Recovery support',
        desc: 'Surgery suits, anti-escape suits and cooling items that sit alongside the recovery collar range as a second purchase.',
      },
      {
        title: 'Feeding at home and away',
        desc: 'Ceramic bowls for the kitchen and folding or silicone travel bowls for the road — two very different feeding situations in one category.',
      },
      {
        title: 'Sleeping and settling',
        desc: 'Semi-enclosed beds, flat washable mats and window-mounted cat beds, so a buyer can cover both dogs that sprawl and cats that burrow.',
      },
      {
        title: 'Cat enrichment and walk cleanup',
        desc: 'Catnip toys for the cat side of the range, and leash clips and poop bag holders that help a small order reach its minimum value.',
      },
    ],
    faqs: [
      {
        q: 'Can we mix different products in one order?',
        a: 'Yes. Mixed orders are normal in this category and are quoted as a combined shipment.',
      },
      {
        q: 'How do you handle packaging for small items?',
        a: 'Polybag, hangtag or colour box, with barcodes included if you supply retail or Amazon FBA channels.',
      },
      {
        q: 'Are these products suitable for private label?',
        a: 'Yes — any item can be branded and re-coloured, and we send artwork proofs for approval before production begins.',
      },
      {
        q: 'Do you supply samples of mixed items?',
        a: 'Yes, single samples or a small sample set can be arranged so you can review quality across the range before committing.',
      },
      {
        q: 'Do you handle testing and certification for these accessories?',
        a: 'Yes — tell us the tests your market or your own customer requires and we will supply what the laboratory needs: layered material samples, same-batch production samples, BOM, SDS, TDS and a stamped declaration of conformity. Send us the destination market and product list and we will confirm which reports apply.',
      },
    ],
  },

  // ⑥ 一次性护理垫 —— 居家防污（消耗品）
  // 参考尺寸来自产线幅宽实测：一次性垫产品宽度上限约 120 cm，183×183 cm 在一次性产线上不可行。
  // 三档均为「参考规格」，页面已声明最终数值以确认样为准，避免与工厂实际大货不一致。
  'pee-pads': {
    h1: 'Disposable Extra-Large Pet Pee Pads & Bed Pads',
    seoTitle: 'Wholesale Disposable Pet Pee Pads & Bed Pads — OEM Supplier',
    seoDescription:
      'Disposable extra-large pet pee pads up to 120 × 180 cm, bed pads and training pads. Custom sizing, four-corner adhesive tabs and private-label packaging for wholesale and OEM.',
    intro: [
      'This range exists because of one problem: a pad that is too small or too thin to protect a bed, a sofa or a car seat. Our disposable pads go up to 120 × 180 cm — bed-sized rather than floor-sized — so an accident never reaches the mattress underneath.',
      'Each pad is a five-layer build: a hot-air non-woven top sheet, a tissue acquisition layer, a fluff pulp and SAP core, a breathable PE backsheet, and four-corner adhesive tabs that hold the pad flat under a bedsheet. Tell us the size, the grammage and the absorbency target and we build the pad around them.',
      'Sizes shown here are reference models. Anything within our production width can be made to order, and every size ships under your own brand.',
    ],
    highlights: [
      {
        title: 'Bed-sized, not floor-sized',
        desc: 'Reference sizes run from 90 × 150 cm up to 120 × 180 cm, and a 90 × 180 cm pad is supplied as a two-pad set that covers a full double bed.',
      },
      {
        title: 'Five-layer absorbent build',
        desc: 'Hot-air non-woven top sheet, tissue acquisition layer, fluff pulp and SAP core, breathable PE backsheet. Layer weights and SAP loading are set to your absorbency target.',
      },
      {
        title: 'Four-corner adhesive tabs',
        desc: 'The one detail that decides whether a pad works under a bedsheet. Without tabs the pad shifts the moment the pet moves, and the protection is gone.',
      },
      {
        title: 'Leak and rewet control',
        desc: 'We work to a reference rewet target of 15 g or less and a leakage target of 1 g or less, so the surface stays dry rather than merely absorbent.',
      },
      {
        title: 'Private label and carton',
        desc: 'Bag format, pad count, printed carton, barcode and multilingual labels are all part of the order, and editable label artwork is supplied so your importer can localise it.',
      },
      {
        title: 'Sample-supported testing',
        desc: 'Testing is commissioned by you or by your nominated laboratory. We supply layered material samples, same-batch production samples, BOM, SDS and TDS so the tests can actually be run.',
      },
    ],
    useCases: [
      {
        title: 'Under the bedsheet',
        desc: 'The use case this range was built around. A 120 × 180 cm pad covers the sleeping area of a single or double bed, and the adhesive tabs keep it in place while the bedding is changed.',
      },
      {
        title: 'Senior and incontinent pets',
        desc: 'Coverage of a whole sleeping area rather than a patch, for pets that cannot reliably last the night.',
      },
      {
        title: 'Whelping and newborns',
        desc: 'Large pads give a litter room to move while keeping the box dry. Here absorbency and surface dryness matter more than size.',
      },
      {
        title: 'Sofa and car seat protection',
        desc: 'The same structure in 90 × 150 cm and 90 × 180 cm for furniture and boots, sold alongside our car seat belt and boot liner range.',
      },
      {
        title: 'Travel and hotel stays',
        desc: 'Flat-packed pads that protect unfamiliar accommodation, for owners travelling with an older pet.',
      },
      {
        title: 'Pet shops and boarding kennels',
        desc: 'Trade packs for groomers, veterinary waiting areas and boarding kennels, where pads are consumed on a fixed cycle.',
      },
    ],
    faqs: [
      {
        q: 'What is the largest pad you can produce?',
        a: 'Production width limits a disposable pad to roughly 120 cm. Our reference sizes are 90 × 150 cm, 90 × 180 cm and 120 × 180 cm. A 183 × 183 cm pad is not achievable on disposable lines — for full-mattress coverage we supply 120 × 180 cm, or two 90 × 180 cm pads laid side by side as a set.',
      },
      {
        q: 'Why do sizes above 90 cm cost more?',
        a: 'Most large-pad lines are built around a 91 cm working width. Anything above that runs on a wider line or needs a dedicated setup, and non-standard sizes carry their own minimum order. 90 × 150 cm is the cheapest reference size and the fastest to sample.',
      },
      {
        q: 'Can the pads be printed and branded?',
        a: 'Yes, this is a private-label range. Print, bag format, pad count, printed carton, barcode and multilingual labels are all produced to your artwork, and we supply editable label files so your importer can localise them.',
      },
      {
        q: 'Who commissions the testing?',
        a: 'You do, or your nominated laboratory, so the report is issued in a name your market accepts. What we supply is everything the laboratory needs to run the tests: layered material samples, same-batch production samples, BOM with layer weights, SDS and TDS. If a result misses, we adjust the formulation and re-test.',
      },
      {
        q: 'What should we put in the enquiry?',
        a: 'Size, grammage, absorbency target, surface material, whether the pad needs adhesive tabs, bag format and pad count, and your destination market. With those six points we can quote against your specification rather than a catalogue.',
      },
    ],
    related: [
      {
        title: 'Pads are one line of a senior pet range',
        desc: 'Buyers assembling products for older dogs and cats usually take bed protection alongside four other groups — support harnesses, recovery collars, strollers and replaceable floor tiles. The senior range guide explains what each one solves, and where the limits are.',
        href: '/senior-pet-care/',
        label: 'Read the senior pet range guide',
      },
      {
        title: 'Buying pads at container volume',
        desc: 'This range is also sold as an OEM line: reference sizes from 90 × 150 cm to 120 × 180 cm, settable grammage and absorbency, adhesive tabs and private-label packaging. The manufacturer page sets out what can be specified and what it costs to change.',
        href: '/pet-pee-pad-manufacturer/',
        label: 'See the pee pad manufacturer page',
      },
    ],
  },

  // ⑦ 可单块拆洗拼接地毯 —— 居家防污（耐用品）
  'carpet-tiles': {
    h1: 'Modular Pet Carpet Tiles & Washable Floor Mats',
    seoTitle: 'Wholesale Modular Pet Carpet Tiles — Washable, Glue-Free, OEM',
    seoDescription:
      'Modular pet carpet tiles that lift out one at a time. Glue-free, PVC-free and trimmable 400 × 400 mm modules for living rooms, crate areas and car boots. OEM and private label.',
    intro: [
      'A pet does not ruin a whole floor. It ruins one patch of it — and that is the entire logic of this range. These are modular carpet tiles you lift out one at a time, so an accident costs you one tile instead of the room.',
      'The reference module is 400 × 400 mm with a cut-pile face over a glue-free backing: no PVC, no bitumen and no fibreglass. The face is solution-dyed nylon by default, because pet owners clean accidents with bleach-based products and a piece-dyed face will not survive that.',
      'Modules can be trimmed on site to fit a car boot, a crate tray or an awkward corner. Module size, pile weight, thickness and colour are all made to order, and the range ships under your own brand.',
    ],
    highlights: [
      {
        title: 'Replace one tile, wash one tile',
        desc: 'Accidents, chewing and scratching are local. Lift the affected module, wash it or swap it, and the floor is back to normal the same day.',
      },
      {
        title: 'Glue-free, PVC-free backing',
        desc: 'No PVC and no bitumen in the backing, and no fibreglass in the construction — the points buyers check first, and the ones that also affect odour and fire performance.',
      },
      {
        title: 'Solution-dyed cut pile',
        desc: 'Solution-dyed nylon holds colour through bleach-based cleaning, and cut pile does not snag or pull yarn the way loop pile does under a pet\u2019s claws.',
      },
      {
        title: 'Trimmable without fraying',
        desc: 'Modules cut to shape on site for a car boot or a crate tray, on a sealed edge that does not unravel. Boot shapes are not standard, which is exactly why a trimmable module fits every vehicle.',
      },
      {
        title: 'Built for a modern home',
        desc: 'Compatible with underfloor heating, and light enough for a robot vacuum to pass over without stalling.',
      },
      {
        title: 'Replacement-part retail logic',
        desc: 'Sell the floor as a system and the module as the spare. It is a different pricing model from square-metre carpet, and it is what makes the category defensible.',
      },
    ],
    useCases: [
      {
        title: 'Living room and pet play area',
        desc: 'A defined area where the pet eats, sleeps and plays, laid over a hard floor. Modules lift for cleaning and go back without adhesive.',
      },
      {
        title: 'Car boot and rear seats',
        desc: 'A trimmable module set shaped to the boot, so sand, mud and hair are caught on a surface you can pull out and hose down.',
      },
      {
        title: 'Crate and pen floors',
        desc: 'A softer, warmer surface inside a crate or pen that comes straight out for washing, instead of a loose blanket that bunches up.',
      },
      {
        title: 'Under food and water bowls',
        desc: 'A washable module around the feeding station catches spills and kibble dust without committing to a permanent floor covering.',
      },
      {
        title: 'Hallways and entryways',
        desc: 'The highest-traffic area in a pet household, where a replaceable module handles mud better than a fixed runner.',
      },
      {
        title: 'Rental and multi-pet households',
        desc: 'No adhesive means nothing to damage in a rented property, and a multi-pet house only replaces the tiles that were actually used.',
      },
    ],
    faqs: [
      {
        q: 'What module size do you recommend?',
        a: '400 × 400 mm is the reference size, and the one most comparable products use. 300 × 300 mm and 500 × 500 mm can be produced for volume programmes.',
      },
      {
        q: 'Are the tiles fixed down with adhesive?',
        a: 'No. The modules rely on tile weight and backing grip rather than glue, so they lift out for cleaning and go back down. No adhesive also means nothing to damage a rented floor.',
      },
      {
        q: 'Can a tile be trimmed to fit a car boot?',
        a: 'Yes, and it is one of the main uses for the range. A module is cut to shape on site on a sealed edge that does not fray. Boot shapes vary by vehicle, which is why a trimmable module outsells a fixed moulded liner.',
      },
      {
        q: 'Who commissions the testing?',
        a: 'You do, or your nominated laboratory, so the report is issued in a name your market accepts. We supply layered material samples, same-batch production samples, backing and filler information, SDS and TDS. If a result misses, we adjust the construction and re-test.',
      },
      {
        q: 'What should we put in the enquiry?',
        a: 'Module size, face fibre, whether the pile must be solution-dyed, pile weight and total thickness, backing type, colour, carton format, and whether the tiles need a fire or VOC test package. Tell us the end use as well — residential retail and contract flooring are specified differently.',
      },
    ],
    related: [
      {
        title: 'Floor protection is one line of a senior pet range',
        desc: 'Where accidents on a floor are the problem rather than the pet, tiles make the damaged area small and replaceable — but they are a replaceable surface, not a liquid barrier. The senior range guide sets out which product holds liquid and which one absorbs it.',
        href: '/senior-pet-care/',
        label: 'Read the senior pet range guide',
      },
      {
        title: 'Need a mat that holds liquid, not one that just replaces?',
        desc: 'These tiles are a replaceable surface and contain no liquid barrier — we do not sell them as one. If the requirement is that liquid must not reach the floor, the washable absorbent mat range is the one to specify: an absorbent core sits on top of a TPU film.',
        href: '/collections/washable-absorbent-mats/',
        label: 'See the washable absorbent mats',
      },
    ],
  },

  // ⑧ 可洗吸水地垫 —— 四层复合，真正阻液（耐用品，与 ⑦ 明确区分）
  'washable-absorbent-mats': {
    h1: 'Washable Absorbent Mats for Pets',
    seoTitle: 'Washable Absorbent Pet Mats — Wholesale & OEM Manufacturer',
    seoDescription:
      'Four-layer washable pet mats that hold liquid in a high-density absorbent core and block it with a TPU film. Knitted face, silicone-grip base, solid colours, sizes to 120 × 180 cm. Wholesale, OEM and private label.',
    intro: [
      'A washable absorbent mat is a floor covering built like a reusable pad. Liquid passes through a knitted face and is held inside a high-density core; a film underneath stops it reaching the floor, and a gripped base keeps the mat where it was put. Because nothing is thrown away, one mat covers an accident, a water bowl spill, a wet dog in from a walk, and a senior pet that does not always make it outside.',
      'This is a different product from our modular carpet tile range. Those tiles are a replaceable surface — an accident means one tile lifts out and is washed — and they contain no liquid barrier, which is why we do not sell them as one. When the requirement is that liquid must not reach the floor, this is the range to specify, and the four-layer build is what makes that possible.',
      'The range is built in solid colours as standard. A solid face avoids print registration, colour matching and strike-off costs on a first order, and it photographs consistently for your own product listings. A printed face is available as an OEM option once there is a design and a volume to justify the tooling.',
    ],
    highlights: [
      {
        title: 'Absorbency per square metre',
        desc: 'How much liquid the core holds before it needs washing is the number that decides the size you stock. We specify it in ml/m² and confirm it on the approved sample rather than quoting a marketing multiple.',
      },
      {
        title: 'The film underneath',
        desc: 'A mat is only useful if liquid stops at the film. Ask for a hydrostatic head figure, not the word waterproof — the failures in this category all come from a film that was too light for the wash cycle.',
      },
      {
        title: 'Wash durability',
        desc: 'The realistic question is how many domestic wash cycles the film and the core survive before performance drops. Ask for the cycle count and the absorbency measured after it, not before.',
      },
      {
        title: 'Grammage and total thickness',
        desc: 'Face grammage, core grammage and total build thickness decide both performance and freight. A heavier build costs more to ship, so the two are specified together.',
      },
      {
        title: 'Face fabric and colour',
        desc: 'A knit face is softer under paw but shows soiling sooner than a flat weave. Solution-dyed yarns hold colour through bleach-based cleaning; stock-dyed yarns are cheaper on a first order.',
      },
      {
        title: 'Edge finish',
        desc: 'A stitched border or a bound edge decides whether the mat survives washing without the core migrating to one corner. It is also the fastest way to tell a sample from a finished product.',
      },
    ],
    useCases: [
      {
        title: 'Senior dogs and cats',
        desc: 'For pets that cannot always hold on until they reach the door, a mat that can be picked up, washed and put back handles the night-time accidents without a consumable to rebuy.',
      },
      {
        title: 'Puppy and kitten training',
        desc: 'A washable mat costs more than a pack of disposables once and less than the pack every week afterwards — the economics only work if the mat survives the wash cycles, which is why we specify the cycle count.',
      },
      {
        title: 'Water bowls and feeding stations',
        desc: 'The everyday spill that ruins a floor finish is water and kibble, not urine. A gripped base and an absorbent core solve it without a trip hazard in the kitchen.',
      },
      {
        title: 'Crates, car boots and travel',
        desc: 'Cut to the crate tray or laid flat in a car boot, and interchangeable between the two. A stitched edge matters more here than in a living room because the mat gets folded.',
      },
      {
        title: 'Doorways and hallways',
        desc: 'Wet paws and muddy feet arrive in the same half metre of floor. A washable mat at the door is the first surface they hit and the one that gets changed most often.',
      },
      {
        title: 'Multi-pet and breeding households',
        desc: 'Where several animals share a floor, a washable mat is the difference between rotating two mats through the wash and replacing a covering. Whelping and kitten-rearing are specified with a larger size and a heavier core.',
      },
    ],
    faqs: [
      {
        q: 'Is the mat machine washable, and how many times?',
        a: 'It is built to be washed, and the number that matters is how many cycles the film and the core survive before absorbency drops. We quote a cycle count and the absorbency measured after those cycles, not the figure off a fresh sample. Domestic washing at the temperature we specify preserves both.',
      },
      {
        q: 'Does liquid go through to the floor?',
        a: 'Not when the film is specified correctly — this is the whole point of the fourth layer. Ask for a hydrostatic head figure in mm H₂O rather than the word waterproof: a mat that fails in this category almost always failed because the film was too light for the wash cycle, not because it was never there.',
      },
      {
        q: 'What sizes can you produce?',
        a: 'The reference build tops out around 120 × 180 cm because of the machine width, with 60 × 90 cm and 90 × 150 cm as the volume sizes. Widths above roughly 160 cm cannot be produced as one piece — a mat that wide would have to be seamed, which we would rather tell you upfront than after a sample.',
      },
      {
        q: 'One large mat, or modular squares?',
        a: 'Both can be produced from the same four-layer material. A single mat is cheaper per square metre and looks more like a rug; modular squares cost more because every piece is edged and cut separately, but a damaged or heavily used piece can be washed or replaced on its own. Tell us the end use and we will say which one we would specify.',
      },
      {
        q: 'Can the face be printed?',
        a: 'Yes, as an OEM option. Solid colours are the standard build because they avoid print registration and colour-matching costs on a first order and photograph consistently for a listing. A printed face needs a design and a volume that justifies the tooling.',
      },
      {
        q: 'Does it need a fire or VOC test package?',
        a: 'That depends on where it is sold and as what. Residential retail in Australia and Southeast Asia is a different specification from contract flooring, and the labelling standard that applies depends on how the product is named. Tell us the market and the end use and we will list the tests that are actually being asked for there.',
      },
      {
        q: 'Who commissions the testing?',
        a: 'You do, or your nominated laboratory, so the report is issued in a name your market accepts. We supply layered material samples, same-batch production samples, film and core information, SDS and TDS, and we adjust the construction and re-test if a result misses.',
      },
    ],
    related: [
      {
        title: 'Liquid held, or just a surface you can replace?',
        desc: 'The two floor ranges solve different problems. Absorbent mats hold liquid in a core over a TPU film; modular tiles are a surface that lifts out and washes. The senior range guide sets out which one fits a senior pet, and where each one stops.',
        href: '/senior-pet-care/',
        label: 'Read the senior pet range guide',
      },
      {
        title: 'Disposable or washable — which does your market buy?',
        desc: 'Disposable pads win on first cost and hygiene; washable mats win on cost per month and on the plastic a buyer does not throw away. Both ranges are made to order, and the enquiry sheet for each one lists the same specification points.',
        href: '/pet-pee-pad-manufacturer/',
        label: 'See how disposable pads are specified',
      },
    ],
    // 开发中品类：产能与 MOQ 未定稿，页面不写具体数字，避免承诺未确认的条款。
    tradeTermsOverride: [
      {
        label: 'Order type',
        value:
          'Wholesale, OEM and private label. This range is made to order, so tell us your target sizes, colours and quantity and we will come back with what we can commit to.',
        link: '/wholesale/',
      },
      {
        label: 'Sampling',
        value:
          'A physical sample is produced and approved before any bulk production. Ask us for the current sample lead time and cost for this four-layer construction.',
        link: '/moq-and-sampling/',
      },
      {
        label: 'Lead time',
        value:
          'Confirmed on enquiry. The build follows your approved sample rather than a published catalogue figure, so the schedule is quoted with your order.',
        link: '/moq-and-sampling/',
      },
      {
        label: 'Customisation',
        value:
          'Face fabric, colour, size, edge finish, grip base, logo label and packaging. Solid colours are standard; a printed face is an OEM option.',
        link: '/oem-odm/',
      },
    ],
  },
};
