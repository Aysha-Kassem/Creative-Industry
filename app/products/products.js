import ppStrapImg from "../../assets/Services/PP strap.JPG";
import ringHolderImg from "../../assets/Services/Ring holder.JPG";
import corePlugImg from "../../assets/Services/Core plug.JPG";
import ppStrapClipImg from "../../assets/Services/PP Strap Clip.JPG";
import petStrapImg from "../../assets/Services/PET strap.JPG";
import stretchFilmImg from "../../assets/Services/Stretch film.JPG";
import strappingToolSetImg from "../../assets/Services/Strapping Tool Set.JPG";
import strapSealingMachineImg from "../../assets/Services/Strap Sealing Machine.JPG";

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
  {
    slug: "pet-strap",
    image: petStrapImg,
    name: {
      ar: "شريط ربط PET (PET Strap)",
      en: "PET Strap",
    },
    summary: {
      ar: "شريط ربط عالي القوة مصنوع من مادة PET، بديل قوي وآمن للشرائط المعدنية.",
      en: "High-strength PET strapping, a safe and durable alternative to steel strapping.",
    },
    details: {
      ar: {
        description:
          "شريط ربط PET هو أحد حلول التغليف والربط عالية الكفاءة، ويُصنع من مادة البولي إيثيلين تيرفثالات (PET) عالية الجودة. يتميز بقوة شد عالية ومتانة ممتازة، مما يجعله مناسبًا لتثبيت وربط مجموعة واسعة من المنتجات والأحمال المتوسطة والثقيلة.",
        description2:
          "يوفر شريط PET بديلاً عمليًا وقويًا للشرائط المعدنية التقليدية، حيث يجمع بين القوة والمرونة وخفة الوزن ومقاومة الصدأ والرطوبة والصدمات. يتوفر لدينا بجميع المقاسات والسماكات والأطوال والألوان وقوى الشد، مع إمكانية تصنيع مقاسات ومواصفات خاصة حسب طلب العميل، ويتم تصنيعه وفق معايير تضمن الجودة وثبات الأداء أثناء الربط والنقل والتخزين.",
        featuresTitle: "أهم المميزات",
        features: [
          "قوة شد عالية وقدرة ممتازة على تحمل الأحمال",
          "احتفاظ ممتاز بقوة الشد أثناء النقل والتخزين",
          "مقاومة عالية للصدمات والتمدد",
          "مقاوم للصدأ والتآكل والرطوبة",
          "خفيف الوزن وسهل الاستخدام والنقل",
          "أكثر أمانًا في التعامل مقارنة بالشرائط المعدنية",
          "مناسب لآلات الربط اليدوية ونصف الأوتوماتيكية والأوتوماتيكية",
          "ثبات ممتاز في الأبعاد والأداء",
          "قابل لإعادة التدوير وصديق للبيئة",
          "مناسب للاستخدام الداخلي والخارجي",
        ],
        usesTitle: "الاستخدامات",
        uses: [
          "المنتجات الحديدية والمعدنية",
          "منتجات الألومنيوم",
          "الأخشاب والألواح",
          "الطوب ومواد البناء",
          "السيراميك والبلاط",
          "الزجاج",
          "الورق والكرتون",
          "البالتات والمنتجات الصناعية",
          "المنتجات والأحمال الثقيلة",
          "تطبيقات التغليف والنقل والتخزين المختلفة",
        ],
      },
      en: {
        description:
          "PET Strap is a high-efficiency packaging and strapping solution made from high-quality polyethylene terephthalate (PET). It offers excellent tensile strength and durability, making it suitable for securing a wide range of medium and heavy-duty loads.",
        description2:
          "PET strap offers a practical, powerful alternative to traditional steel strapping, combining strength, flexibility, light weight, and resistance to rust, moisture, and impact. It is available in all standard sizes, thicknesses, lengths, colors, and tensile strengths, with custom sizes and specifications made to order. It is manufactured to standards that ensure quality and consistent performance during strapping, transport, and storage.",
        featuresTitle: "Key Features",
        features: [
          "High tensile strength and excellent load-bearing capacity",
          "Excellent strength retention during transport and storage",
          "High resistance to impact and elongation",
          "Resistant to rust, corrosion, and moisture",
          "Lightweight and easy to handle and transport",
          "Safer to handle compared to steel strapping",
          "Suitable for manual, semi-automatic, and automatic strapping machines",
          "Excellent dimensional stability and performance",
          "Recyclable and environmentally friendly",
          "Suitable for indoor and outdoor use",
        ],
        usesTitle: "Applications",
        uses: [
          "Iron and metal products",
          "Aluminum products",
          "Timber and boards",
          "Bricks and construction materials",
          "Ceramics and tiles",
          "Glass",
          "Paper and cartons",
          "Pallets and industrial products",
          "Heavy products and loads",
          "Various packaging, transport, and storage applications",
        ],
      },
    },
  },
  {
    slug: "stretch-film",
    image: stretchFilmImg,
    name: {
      ar: "فيلم التغليف والتمدد (Stretch Film)",
      en: "Stretch Film",
    },
    summary: {
      ar: "فيلم تغليف مرن عالي الالتصاق لتثبيت وحماية المنتجات أثناء النقل والتخزين.",
      en: "Flexible, high-cling wrap film for securing and protecting products during transport and storage.",
    },
    details: {
      ar: {
        description:
          "Stretch Film هو أحد أهم حلول التغليف والتعبئة المستخدمة لتثبيت وحماية المنتجات أثناء عمليات التخزين والنقل والشحن. يتميز الفيلم بمرونة عالية وقدرة ممتازة على التمدد والالتصاق، مما يساعد على تثبيت المنتجات بإحكام وحمايتها من الغبار والرطوبة والعوامل الخارجية.",
        description2:
          "يُستخدم Stretch Film على نطاق واسع في المصانع والمخازن ومراكز التوزيع والشحن، ويمكن استخدامه يدويًا أو بواسطة ماكينات التغليف الأوتوماتيكية. يتوفر لدينا بجميع المقاسات والمواصفات القياسية والمخصصة، بمختلف العروض والسماكات والأطوال ونسب التمدد والألوان، ويتم تصنيعه بجودة عالية لضمان القوة والمرونة والثبات والأداء الموثوق أثناء عمليات التغليف والنقل والتخزين.",
        featuresTitle: "أهم المميزات",
        features: [
          "قوة ومتانة عالية",
          "مرونة ممتازة وقدرة عالية على التمدد",
          "قوة التصاق جيدة لضمان ثبات المنتجات",
          "يساعد على حماية المنتجات من الغبار والأتربة والرطوبة",
          "يحافظ على تماسك المنتجات أثناء النقل والتخزين",
          "شفاف ويوفر رؤية واضحة للمنتجات",
          "خفيف الوزن وسهل الاستخدام",
          "يقلل من مخاطر تحرك المنتجات أو سقوطها أثناء النقل",
          "مناسب للتغليف اليدوي والآلي",
          "مناسب للاستخدام في مختلف القطاعات الصناعية والتجارية",
        ],
        usesTitle: "الاستخدامات",
        uses: [
          "البالتات",
          "الكراتين والصناديق",
          "المنتجات الغذائية",
          "المنتجات الصناعية",
          "المنتجات البلاستيكية",
          "الأجهزة والمعدات",
          "الأثاث",
          "مواد البناء",
          "المنتجات الزراعية",
          "الشحنات والمنتجات المعدة للتخزين والنقل",
        ],
      },
      en: {
        description:
          "Stretch Film is one of the most important packaging solutions used to secure and protect products during storage, transport, and shipping. The film offers excellent flexibility, stretch, and cling, helping to hold products firmly in place while protecting them from dust, moisture, and external factors.",
        description2:
          "Stretch Film is widely used in factories, warehouses, and distribution and shipping centers, and can be applied manually or with automatic wrapping machines. It is available in all standard and custom sizes and specifications, with a wide range of widths, thicknesses, lengths, stretch ratios, and colors, manufactured to a high quality standard that ensures strength, flexibility, stability, and reliable performance during wrapping, transport, and storage.",
        featuresTitle: "Key Features",
        features: [
          "High strength and durability",
          "Excellent flexibility and high stretch capability",
          "Good cling strength to keep products secure",
          "Helps protect products from dust and moisture",
          "Keeps products stable during transport and storage",
          "Transparent, providing clear visibility of products",
          "Lightweight and easy to use",
          "Reduces the risk of products shifting or falling during transport",
          "Suitable for manual and automatic wrapping",
          "Suitable for use across various industrial and commercial sectors",
        ],
        usesTitle: "Applications",
        uses: [
          "Pallets",
          "Cartons and boxes",
          "Food products",
          "Industrial products",
          "Plastic products",
          "Devices and equipment",
          "Furniture",
          "Construction materials",
          "Agricultural products",
          "Shipments and products intended for storage and transport",
        ],
      },
    },
  },
  {
    slug: "strapping-tool-set",
    image: strappingToolSetImg,
    name: {
      ar: "طقم أدوات ربط يدوي لشريط PP & PET",
      en: "Manual PP & PET Strapping Tool Set",
    },
    summary: {
      ar: "أدوات يدوية متينة لشد وتثبيت شرائط PP وPET، مناسبة للكراتين والبالتات والمنتجات الصناعية.",
      en: "Durable manual tools for tensioning and sealing PP & PET straps, ideal for cartons, pallets, and industrial products.",
    },
    details: {
      ar: {
        description:
          "أدوات يدوية متينة مصممة لشد وتثبيت شرائط PP وPET، مثالية لتأمين الكراتين والبالتات والمنتجات الصناعية أثناء التخزين والنقل والشحن.",
        featuresTitle: "المميزات",
        features: [
          "مناسبة لشرائط PP وPET",
          "تعمل يدويًا بدون الحاجة لكهرباء",
          "تصنيع معدني قوي ومتين",
          "سهلة الاستخدام والتشغيل",
          "توفر تغليفًا آمنًا وموثوقًا",
          "مناسبة للمصانع والمخازن وعمليات الخدمات اللوجستية",
        ],
        usesTitle: "محتويات الطقم",
        uses: ["أداة شد الشريط (Strapping Tensioner)", "أداة تثبيت الشريط (Strapping Sealer)"],
      },
      en: {
        description:
          "Durable manual tools designed for tensioning and sealing PP & PET straps. Ideal for securing cartons, pallets, and industrial products during storage, transportation, and shipping.",
        featuresTitle: "Features",
        features: [
          "Suitable for PP & PET straps",
          "Manual operation, no electricity required",
          "Strong and durable metal construction",
          "Easy to use and handle",
          "Provides secure and reliable packaging",
          "Suitable for factories, warehouses, and logistics operations",
        ],
        usesTitle: "Set Includes",
        uses: ["Strapping Tensioner", "Strapping Sealer"],
      },
    },
  },
  {
    slug: "strap-sealing-machine",
    image: strapSealingMachineImg,
    name: {
      ar: "ماكينة لحام يدوية لشريط PET/PP",
      en: "Manual PET/PP Strap Sealing Machine",
    },
    summary: {
      ar: "ماكينة لحام يدوية عملية لتثبيت شرائط PET/PP بسرعة وقوة على الكراتين والأحمال الصناعية.",
      en: "Practical manual sealing machine for fast, strong PET/PP strap sealing on cartons and industrial loads.",
    },
    details: {
      ar: {
        description:
          "ماكينة لحام شريط PET اليدوية هي حل عملي وفعال لتثبيت وربط المنتجات والكراتين باستخدام شريط التغليف البلاستيكي. سهلة التشغيل وتوفر لحامًا سريعًا وقويًا، مما يجعلها مناسبة لمختلف تطبيقات التغليف.",
        description2:
          "نوفر الماكينة بمواصفات ومقاسات مختلفة تناسب أنواع وأحجام الشرائط المتعددة، مع حلول تغليف مناسبة حسب متطلبات كل تطبيق.",
        featuresTitle: "المميزات",
        features: [
          "مناسبة لشريط PET وشريط PP حسب الموديل",
          "لحام قوي وآمن للشريط",
          "تصميم عملي وسهولة في التشغيل",
          "مناسبة للمصانع والمخازن وخطوط التعبئة والتغليف",
          "تساعد على تقليل وقت وجهد التغليف",
          "خفيفة الوزن وسهلة النقل والاستخدام في أماكن عمل مختلفة",
          "متوفرة بمقاسات ومواصفات مختلفة لتلبية متطلبات العملاء",
        ],
        usesTitle: "الاستخدامات",
        uses: [
          "الكراتين",
          "البالات",
          "المنتجات الصناعية",
          "مواد البناء",
          "المنتجات الغذائية",
          "مختلف الأحمال التي تحتاج لتثبيت آمن وموثوق أثناء التخزين أو النقل",
        ],
      },
      en: {
        description:
          "The Manual PET Strap Sealing Machine is a practical and efficient solution for securing and bundling products and cartons using plastic strapping. It is easy to operate and provides fast and strong sealing, making it suitable for various packaging applications.",
        description2:
          "We provide the machine in different specifications and sizes to suit various strap types and sizes, with suitable packaging solutions based on the application requirements.",
        featuresTitle: "Features",
        features: [
          "Suitable for PET Strap and PP Strap, depending on the model",
          "Strong and secure strap sealing",
          "Practical design and easy operation",
          "Suitable for factories, warehouses, and packaging lines",
          "Helps reduce packaging time and effort",
          "Lightweight and easy to move and use in different work areas",
          "Available in different sizes and specifications to meet customer requirements",
        ],
        usesTitle: "Applications",
        uses: [
          "Cartons",
          "Bales",
          "Industrial products",
          "Building materials",
          "Food products",
          "Various loads requiring safe and reliable fastening during storage or transport",
        ],
      },
    },
  },
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);
