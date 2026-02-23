// CW Kosmetikatelier Configuration
// Ihre Wohlfühladresse in Heilbronn

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "CW Kosmetikatelier",
    tagline: "Ihre Wohlfühladresse in Heilbronn",
    description: "Erfahrung trifft auf moderne Technik. Seit über 12 Jahren bieten wir professionelle Kosmetikbehandlungen mit exklusiven Produkten von Monteil, Smetic's und Klapp.",
    foundingYear: 2012,
    yearsExperience: 12,
    satisfiedClients: "2.000+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "07131-2 79 94 83",
    phoneLink: "tel:+49713127994 83",
    mobile: "01590-6051435",
    mobileLink: "tel:+4915906051435",
    email: "info@cw-kosmetikatelier.de",
    whatsapp: "+49 1590 6051435",
    whatsappLink: "https://wa.me/4915906051435",
    address: {
      street: "Bottwarbahnstr. 64",
      city: "Heilbronn",
      district: "Sontheim",
      zip: "74081",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sBottwarbahnstr.%2064%2C%2074081%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Bottwarbahnstr.+64,+74081+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/cw_kosmetikatelier/",
    facebook: "https://www.facebook.com/cwkosmetikatelier/",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Sa nach Vereinbarung",
    saturday: "nach Vereinbarung",
    sunday: "Geschlossen",
    note: "Termine nach telefonischer Vereinbarung",
    display: "Mo-Sa nach Vereinbarung",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 5.0,
    count: "50+",
    googleReviewLink: "https://g.page/cw-kosmetikatelier/review",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Claudia",
    fullName: "Claudia Wickenhäuser",
    image: "/beauty/frau.jpg",
    bio: [
      "Als Inhaberin des CW Kosmetikateliers bringe ich über 12 Jahre Erfahrung in der professionellen Kosmetik mit. Meine Ausbildung als staatlich geprüfte Kosmetikerin mit CIDESCO-Diplom bildet das Fundament meiner Arbeit.",
      "In meinem gemütlichen Atelier in der Bottwarbahnstraße biete ich Ihnen ein umfassendes Spektrum an apparativen und klassischen Behandlungen. Von HydroCare über Mikroneedling bis hin zur luxuriösen 24 Karat Gold Behandlung.",
      "Ich arbeite ausschließlich mit hochwertigen Produkten von Monteil, Smetic's und Klapp. Jede Behandlung wird individuell auf Ihre Hautbedürfnisse abgestimmt.",
    ],
    certifications: [
      { label: "CIDESCO-Diplom", icon: "shield" },
      { label: "12+ Jahre Erfahrung", icon: "star" },
      { label: "Staatlich geprüft", icon: "award" },
      { label: "Anti-Aging Spezialistin", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Sabine M.",
      rating: 5,
      text: "Frau Wickenhäuser ist eine absolute Expertin! Die HydroCare Behandlung hat meine Haut komplett verwandelt. Sehr professionell und einfühlsam.",
      service: "HydroCare Behandlung",
      date: "vor 2 Wochen",
    },
    {
      name: "Christine K.",
      rating: 5,
      text: "Das NanoGlow 3D Treatment war unglaublich. Meine Haut strahlt wie nie zuvor. Die gemütliche Atmosphäre und kompetente Beratung haben mich überzeugt.",
      service: "NanoGlow 3D",
      date: "vor 1 Monat",
    },
    {
      name: "Petra W.",
      rating: 5,
      text: "Die 24 Karat Gold Behandlung ist jeden Cent wert. Absolute Luxusbehandlung mit sichtbaren Ergebnissen. Komme immer wieder gerne!",
      service: "24 Karat Gold Luxus",
      date: "vor 3 Wochen",
    },
    {
      name: "Monika H.",
      rating: 5,
      text: "Endlich ein Studio, das auf meine Hautbedürfnisse eingeht. Das Mikroneedling hat meine Falten sichtbar reduziert. Absolute Empfehlung!",
      service: "Mikroneedling",
      date: "vor 1 Woche",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "HydroCare Behandlung",
      description: "Tiefenreinigung auf Wasser- und Hyaluronsäurebasis. Die Aquabrasion-Methode sorgt für eine intensive Hydration und einen sofortigen Glow-Effekt.",
      price: "130€",
      image: "/beauty/face.jpg",
      benefits: ["Tiefenreinigung", "Sofort-Glow"],
    },
    {
      title: "NanoGlow 3D",
      description: "Innovative Kombination aus Mesotherapie, Radiofrequenz und Elektrostimulation. Für maximale Anti-Aging Ergebnisse in einer Behandlung.",
      price: "ab 165€",
      image: "/beauty/hero%20main.webp",
      benefits: ["3-fach Wirkung", "Anti-Aging"],
    },
    {
      title: "Mikroneedling",
      description: "Kleine, präzise Nadelstiche perforieren die oberste Hautschicht und aktivieren die hauteigene Kollagenproduktion für ein strafferes Hautbild.",
      price: "150€",
      image: "/beauty/microneedling.jpg",
      benefits: ["Kollagenaufbau", "Hautstraffung"],
    },
    {
      title: "Mesoporation",
      description: "Wirkstoff-Cocktail dringt mittels patentierter Elektroporationsmethode schmerzfrei in tiefliegende Hautschichten ein.",
      price: "105€",
      image: "/beauty/face2.jpg",
      benefits: ["Schmerzfrei", "Tiefenwirkung"],
    },
    {
      title: "24 Karat Gold Luxus",
      description: "Stimuliert die Zellerneuerung, verlangsamt den Kollagenabbau und reduziert Falten für einen frischeren, jugendlicheren Teint.",
      price: "130€",
      image: "/beauty/behandlung%203.png",
      benefits: ["Luxusbehandlung", "Zellerneuerung"],
    },
    {
      title: "Collagen Vliesmasken",
      description: "Aus nativem Kollagen hergestellte Vliesmasken durchfeuchten intensiv die Haut. Inklusive Reinigung, Peeling, Massage und Pflege.",
      price: "115€",
      image: "/beauty/kopfmassage.png",
      benefits: ["Intensive Hydration", "60 Min"],
    },
    {
      title: "Dauerhafte Haarentfernung",
      description: "Modernste Diodenlaser-Methode (SHR/SPTL) für dauerhafte Haarreduktion. Für alle Hauttypen geeignet.",
      price: "ab 30€",
      image: "/beauty/behandlung%202.webp",
      benefits: ["Dauerhaft", "Schmerzarm"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Professionelle Wimpernverlängerung für einen natürlichen bis glamourösen Look. Verschiedene Styles verfügbar.",
      price: "auf Anfrage",
      image: "/beauty/wimpern.png",
      benefits: ["Natürlicher Look", "Langanhaltend"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Apparative Behandlungen",
      items: [
        { name: "Mesoporation Behandlung (50 Min)", price: "105€" },
        { name: "HydroCare Behandlung (50 Min)", price: "130€" },
        { name: "HydroCare + Hals & Dekolleté", price: "150€" },
        { name: "Mikroneedling (60 Min)", price: "150€" },
        { name: "Mikroneedling + Hals", price: "165€" },
        { name: "Mikroneedling + Hals & Dekolleté", price: "190€" },
        { name: "NanoGlow 3D (60 Min)", price: "165€" },
        { name: "NanoGlow 3D mit Massage (70 Min)", price: "175€" },
      ],
    },
    {
      category: "Klassische Behandlungen",
      items: [
        { name: "Collagen Vliesmasken Behandlung (60 Min)", price: "115€" },
        { name: "24 Karat Gold Luxus Behandlung (60 Min)", price: "130€" },
      ],
    },
    {
      category: "Dauerhafte Haarentfernung (Damen)",
      items: [
        { name: "Oberlippe", price: "30€" },
        { name: "Kinn", price: "35€" },
        { name: "Wangen", price: "50€" },
        { name: "Achseln", price: "50€" },
        { name: "Bikinizone", price: "50€" },
        { name: "Intimbereich", price: "70€" },
        { name: "Komplette Arme", price: "110€" },
        { name: "Komplette Beine", price: "130€" },
      ],
    },
    {
      category: "Dauerhafte Haarentfernung (Herren)",
      items: [
        { name: "Nacken", price: "50€" },
        { name: "Schultern", price: "100€" },
        { name: "Brust", price: "90€" },
        { name: "Bauch", price: "90€" },
        { name: "Kompletter Rücken", price: "155€" },
        { name: "Komplette Beine", price: "130€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Professionelle Kosmetikbehandlung im CW Kosmetikatelier Heilbronn",
    hygiene: "/beauty/contact.png",
    gallery: [
      { url: "/beauty/face.jpg", category: "Behandlung" },
      { url: "/beauty/face2.jpg", category: "Behandlung" },
      { url: "/beauty/microneedling.jpg", category: "Behandlung" },
      { url: "/beauty/behandlung%202.webp", category: "Behandlung" },
      { url: "/beauty/behandlung%203.png", category: "Behandlung" },
      { url: "/beauty/hero%20main.webp", category: "Behandlung" },
      { url: "/beauty/wimpern.png", category: "Augen" },
      { url: "/beauty/wimpern%20(2).webp", category: "Augen" },
      { url: "/beauty/eyebrow-after.png", category: "Augen" },
      { url: "/beauty/kopfmassage.png", category: "Wellness" },
      { url: "/beauty/klangschale.jpg", category: "Wellness" },
      { url: "/beauty/maniküre%20neu.png", category: "Pflege" },
      { url: "/beauty/maniküre%203.png", category: "Pflege" },
      { url: "/beauty/pedicure.webp", category: "Pflege" },
      { url: "/beauty/acne-after.png", category: "Ergebnisse" },
      { url: "/beauty/contact.png", category: "Studio" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Elegant pink from website
  // ============================================
  colors: {
    primary: "#D4A5A5", // Soft dusty rose
    primaryRgb: "212, 165, 165",
    dark: "#1A1A1A",
    light: "#FAF8F8",
    lightAlt: "#F5EEEE",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Qualität & Erfahrung",
    description: "Ihr Wohlbefinden und Ihre Sicherheit stehen bei uns an erster Stelle. Alle Behandlungen werden unter strengsten Hygienestandards durchgeführt.",
    features: [
      {
        icon: "shield",
        title: "CIDESCO-Diplom",
        description: "International anerkannte Qualifikation für höchste Standards in der Kosmetik.",
      },
      {
        icon: "check",
        title: "Premium Marken",
        description: "Exklusive Produkte von Monteil, Smetic's und Klapp für optimale Ergebnisse.",
      },
      {
        icon: "award",
        title: "12+ Jahre Erfahrung",
        description: "Langjährige Expertise in apparativen und klassischen Behandlungen.",
      },
      {
        icon: "star",
        title: "Modernste Technik",
        description: "Innovative Behandlungsmethoden wie NanoGlow 3D und HydroCare.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "CW Kosmetikatelier Heilbronn Logo",
  },
};

export type Config = typeof config;
