#!/usr/bin/env python3
"""
ONEPENUT 产品页内容优化
--------------------------------------------------------------------
解决两个问题：
1. 115 个产品页正文完全同模板（仅产品名不同）→ 近重复/低质内容
2. keywords 字段成批重复，且会作为标签渲染在产品页上 → 每页标签一样

做法：
- 正文改为「产品事实 + 品类级选型/使用/采购说明」结构，
  不再出现跨 115 个页面完全相同的那句
  "{Title} — premium quality, designed for comfort and safety."
- keywords 由产品标题派生，保证每个产品互不相同

重要约束：
- 只使用站点上既有的说法（定制范围、打样流程、质检、出口单证）
- 不新增任何规格、尺寸、认证、MOQ、价格、交期数字
- 移除正文里的中文内部品名行
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
PRODUCTS = ROOT / "src" / "content" / "products"

CAT_NAME = {
    "carrier-bags": "Carrier Bags & Backpacks",
    "harnesses-leashes": "Harnesses & Leashes",
    "recovery-collars": "Recovery Collars",
    "pet-strollers": "Pet Strollers",
    "accessories": "Accessories & Cat Gear",
}

# keywords 里附带的品类通用词（每个品类 2 个）
CAT_TERM = {
    "carrier-bags": ["pet carrier", "wholesale pet carriers"],
    "harnesses-leashes": ["dog harness", "wholesale pet harnesses"],
    "recovery-collars": ["recovery collar", "soft e-collar"],
    "pet-strollers": ["pet stroller", "wholesale pet strollers"],
    "accessories": ["pet accessories", "wholesale pet accessories"],
}

# 品类级说明（只复述站点已有表述，不含新数字）
CAT_SIZING = {
    "carrier-bags": (
        "Carrier sizing is the decision that makes or breaks a model. Our travel "
        "carriers follow common in-cabin dimensions, but airline rules differ by "
        "carrier and route, so confirm your target airline before fixing a size. A "
        "measuring guide is supplied with every range."
    ),
    "harnesses-leashes": (
        "Walk gear lives or dies on fit. Neck and chest ranges are measured on the "
        "finished sample rather than calculated from the pattern, so the size chart "
        "you publish matches what actually ships. Cat and dog harnesses are built on "
        "separate patterns rather than sharing one compromise shape."
    ),
    "recovery-collars": (
        "Fit here is decided by neck circumference, so each size is defined by a neck "
        "range with an adjustable closure. Sizes are measured on the finished item, "
        "not estimated from a pattern."
    ),
    "pet-strollers": (
        "Strollers are matched to the pet's size and to how the stroller will be used, "
        "rather than to a single dimension. Tell us the intended use and we will "
        "confirm the suitable frame and wheel configuration."
    ),
    "accessories": (
        "This collection spans several small categories, so dimensions vary by model. "
        "Confirm the exact measurements you need at sample stage."
    ),
}

CAT_USAGE = {
    "carrier-bags": (
        "The range covers cabin travel, car journeys, daily errands and longer outdoor "
        "trips. Shoulder, crossbody, backpack and canopy-tent formats sit alongside each "
        "other, so a single line can serve several sales channels."
    ),
    "harnesses-leashes": (
        "Everyday walking, training, hiking and multi-dog setups, for both cats and dogs. "
        "Bungee sections, side handles and traffic loops can be added per model without "
        "changing the base pattern."
    ),
    "recovery-collars": (
        "Soft fabric shapes are generally tolerated better than rigid plastic, which is "
        "why this range uses fabric construction throughout. Collars, suits and donut "
        "shapes cover different levels of restriction."
    ),
    "pet-strollers": (
        "Built for pets that tire on longer outings and for travel where carrying is not "
        "practical. Fold behaviour and frame weight are the two points buyers raise most."
    ),
    "accessories": (
        "Car travel, feeding, grooming, play and general comfort — the everyday items "
        "that complete a travel range."
    ),
}

ORDERING = (
    "Every model can be produced to your own specification: fabric, colour, sizing, "
    "logo, hardware and packaging. A sample is produced and approved before bulk "
    "production begins, and export documentation is handled end to end. Exact terms "
    "depend on the model, so confirm them with us before you plan an order."
)


def parse(md: str):
    """拆出 frontmatter 文本与正文。"""
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", md, re.S)
    if not m:
        raise ValueError("frontmatter 解析失败")
    return m.group(1), m.group(2)


def field(fm: str, key: str):
    m = re.search(rf'^{key}:\s*"?(.*?)"?\s*$', fm, re.M)
    return m.group(1) if m else None


def build_keywords(title: str, category: str):
    t = title.lower()
    terms = [
        t,
        f"wholesale {t}",
        f"custom {t}",
        f"{t} manufacturer",
        *CAT_TERM.get(category, []),
    ]
    # 去重并保持顺序
    seen, out = set(), []
    for x in terms:
        if x not in seen:
            seen.add(x)
            out.append(x)
    return out


def replace_keywords(fm: str, values):
    block = "keywords:\n" + "".join(f'  - "{v}"\n' for v in values)
    if re.search(r"^keywords:\s*$", fm, re.M):
        # 替换 keywords: 到下一个顶层键之间的内容
        return re.sub(
            r"^keywords:\n(?:  - .*\n)*",
            block,
            fm,
            count=1,
            flags=re.M,
        )
    return fm.rstrip("\n") + "\n" + block


def extract_features(body: str):
    """保留原文件中产品专属的 Key Features 卖点（这批内容是有价值的，不能丢）。

    注意用 re.I：本脚本自己输出的是 "## Key features"（小写 f），
    原始文件是 "## Key Features"（大写 F）。大小写不敏感才能保证重复执行安全。
    """
    m = re.search(r"^## Key Features\s*\n(.*?)(?=^## |\Z)", body, re.M | re.S | re.I)
    if not m:
        return []
    return [
        line.strip()[2:].strip()
        for line in m.group(1).splitlines()
        if line.strip().startswith("- ")
    ]


def build_body(title: str, category: str, sku: str, features=None):
    cat = CAT_NAME.get(category, "our catalog")
    feature_block = ""
    if features:
        bullets = "".join(f"- {f}\n" for f in features)
        feature_block = f"\n## Key features\n\n{bullets}"
    return f"""
## Product facts

- **Collection**: {cat}
- **SKU**: {sku}
- **Customisation**: fabric, colour, sizing, logo, hardware and packaging can be built to your brand
- **Sampling**: a sample is produced and approved before bulk production begins
- **Order type**: wholesale, OEM and ODM
{feature_block}
## Sizing and fit

{CAT_SIZING.get(category, "")}

## Typical use

{CAT_USAGE.get(category, "")}

## Wholesale and OEM

{ORDERING}
"""


def main():
    changed = 0
    for path in sorted(PRODUCTS.glob("*.md")):
        md = path.read_text(encoding="utf-8")
        fm, body = parse(md)

        title = field(fm, "title")
        category = field(fm, "category")
        sku = field(fm, "sku")
        if not title or not category or not sku:
            print(f"跳过（字段不全）: {path.name}")
            continue

        features = extract_features(body)

        fm = replace_keywords(fm, build_keywords(title, category))
        body = build_body(title, category, sku, features)

        path.write_text(f"---\n{fm.rstrip()}\n---\n{body}", encoding="utf-8")
        changed += 1

    print(f"已更新 {changed} 个产品页")


if __name__ == "__main__":
    main()
