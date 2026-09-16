// 分类落地页内容
// ---------------------------------------------------------------------------
// ⚠️ 发布前请业务确认：TRADE_TERMS 为通用表述，刻意不写具体 MOQ / 交期 / 付款比例
//    等数字，避免与真实报价不一致。若贵司有对外统一的商务口径，请在此处补齐。
// ---------------------------------------------------------------------------

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
}

/** 通用采购条款（所有分类页共用，只在此处维护一份） */
export const TRADE_TERMS: { label: string; value: string }[] = [
  {
    label: 'Minimum order',
    value:
      'Set per model and colour and confirmed together with your quotation. Trial orders are reviewed case by case — always worth asking.',
  },
  {
    label: 'Sampling',
    value:
      'A sample is produced and approved before bulk production. Sample lead time depends on whether stock or custom materials are used.',
  },
  {
    label: 'Customisation',
    value:
      'OEM / ODM across fabric, colour, sizing, logo, hardware and packaging — from sample stage onward.',
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
      'EXW / FOB / DDP by sea, air or express. Export documentation handled end to end.',
  },
  {
    label: 'Payment',
    value: 'Terms are agreed with our sales team when your order is confirmed.',
  },
  {
    label: 'Compliance',
    value:
      'REACH, CPSIA, AZO and colour-fastness testing can be arranged for your destination market.',
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
    ],
  },
};
