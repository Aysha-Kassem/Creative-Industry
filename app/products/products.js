import ppStrapImg from "../../assets/Services/PP strap.JPG";
import ringHolderImg from "../../assets/Services/Ring holder.JPG";
import corePlugImg from "../../assets/Services/Core plug.JPG";
import ppStrapClipImg from "../../assets/Services/PP Strap Clip.JPG";

export const products = [
  {
    slug: "pp-strap",
    image: ppStrapImg,
    name: {
      ar: "PP strap",
      en: "PP strap",
    },
    summary: {
      ar: "أشرطة بولي بروبلين للتغليف والتثبيت بأحجام متعددة.",
      en: "Polypropylene strapping for packing and securing loads in multiple sizes.",
    },
    details: {
      ar: {
        usage: "مناسبة لأعمال التغليف والتعبئة وربط الشحنات.",
        sizes: ["All size", "9 mm", "12 mm", "15 mm", "19 mm"],
      },
      en: {
        usage: "Suitable for packaging and securing shipments.",
        sizes: ["All size", "9 mm", "12 mm", "15 mm", "19 mm"],
      },
    },
  },
  {
    slug: "ring-holder",
    image: ringHolderImg,
    name: {
      ar: "Ring holder",
      en: "Ring holder",
    },
    summary: {
      ar: "مستخدم لرولات أوراق الكرتون.",
      en: "Used for cardboard paper rolls.",
    },
    details: {
      ar: {
        usage: "يدعم تثبيت رولات أوراق الكرتون أثناء النقل أو التخزين.",
      },
      en: {
        usage: "Supports cardboard paper rolls during transport or storage.",
      },
    },
  },
  {
    slug: "core-plug",
    image: corePlugImg,
    name: {
      ar: "Core plug",
      en: "Core plug",
    },
    summary: {
      ar: "مستخدم لرولات الألومنيوم.",
      en: "Used for aluminum rolls.",
    },
    details: {
      ar: {
        usage: "يساعد في تثبيت رولات الألومنيوم وحماية أطرافها.",
      },
      en: {
        usage: "Helps secure aluminum rolls and protect their edges.",
      },
    },
  },
  {
    slug: "pp-strap-clip",
    image: ppStrapClipImg,
    name: {
      ar: "📦 مشبك ربط شريط PP (PP Strap Clip)",
      en: "PP Strap Clip",
    },
    summary: {
      ar: "مشبك معدني عالي الجودة لتثبيت وربط أشرطة البولي بروبلين بإحكام.",
      en: "High-quality metal clip designed to secure PP straps tightly.",
    },
    details: {
      ar: {
        description:
          "مشبك معدني عالي الجودة مصمم لتثبيت وربط أشرطة البولي بروبلين (PP) بإحكام، يُستخدم في أعمال التغليف والتعبئة لضمان ثبات الشحنات أثناء النقل والتخزين.",
        description2:
          "يتميز المشبك بقوة تحمل عالية وقدرة ممتازة على تثبيت الشريط بعد الكبس، مما يمنع الانزلاق أو الفك، ويضمن حماية المنتجات من التلف أو التفكك.",
        featuresTitle: "المميزات",
        features: [
          "مصنوع من معدن قوي مقاوم للضغط",
          "تصميم عملي يضمن تثبيت محكم للشريط",
          "سهل الاستخدام مع أدوات الكبس (Strapping Tool)",
          "مناسب لمختلف أحجام أشرطة PP",
          "مقاوم للصدأ والتآكل",
        ],
        usesTitle: "الاستخدامات",
        uses: [
          "تغليف الكراتين والبضائع",
          "تأمين الشحنات أثناء النقل",
          "الاستخدام في المصانع والمخازن",
          "ربط البالات والمنتجات الثقيلة والمتوسطة",
        ],
        howTitle: "طريقة الاستخدام",
        how: [
          "يتم لف الشريط حول المنتج",
          "إدخال طرفي الشريط داخل المشبك",
          "استخدام أداة الشد والكبس لتثبيت المشبك بإحكام",
        ],
      },
      en: {
        description:
          "A high-quality metal clip designed to secure polypropylene (PP) straps tightly. It is used in packaging to keep loads stable during transport and storage.",
        description2:
          "Built for strength and reliable gripping after crimping, preventing slip or release and protecting products from damage.",
        featuresTitle: "Features",
        features: [
          "Strong metal construction resistant to pressure",
          "Practical design for firm strap locking",
          "Easy to use with strapping tools",
          "Suitable for various PP strap sizes",
          "Resistant to rust and corrosion",
        ],
        usesTitle: "Applications",
        uses: [
          "Packaging cartons and goods",
          "Securing loads during transport",
          "Factories and warehouses",
          "Bundling medium and heavy products",
        ],
        howTitle: "How to Use",
        how: [
          "Wrap the strap around the product",
          "Insert both strap ends into the clip",
          "Use a strapping tool to tension and crimp the clip",
        ],
      },
    },
  },
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);
