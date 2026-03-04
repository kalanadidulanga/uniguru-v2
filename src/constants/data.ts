import type { StudyDestinationDataSet } from "@/components/pages/stydy-destinations/types";

export const NAVBAR_DATA = [
  {
    name: "Study Destinations",
    link: "/study-destinations",
    subOptions: [
      { name: "Study In The UK", link: "/study-destinations/uk" },
      { name: "Study In Canada", link: "/study-destinations/canada" },
      { name: "Study In Australia", link: "/study-destinations/australia" },
      { name: "Study In Netherlands", link: "/study-destinations/netherlands" },
      { name: "Study In Germany", link: "/study-destinations/germany" },
    ],
  },
  {
    name: "Services",
    link: "/services",
    subOptions: [
      { name: "Accommodation", link: "/services/accommodation" },
      { name: "Free IELTS Service", link: "/services/free-ielts-service" },
      { name: "Air Ticketing", link: "/services/air-ticketing" },
      { name: "Financial Help", link: "/services/financial-help" },
    ],
  },
  {
    name: "Company",
    link: "/company",
    subOptions: [
      { name: "About Us", link: "/about-us" },
      { name: "Careers", link: "/careers" },
      { name: "Contact", link: "/contact" },
    ],
  },
];

export const STUDY_DESTINATIONS = [
  {
    name: "Canada",
    src: "/flags/canada.png",
    href: "/study-destinations/canada",
  },
  {
    name: "UK",
    src: "/flags/uk.png",
    href: "/study-destinations/uk",
  },
  {
    name: "Australia",
    src: "/flags/australia.png",
    href: "/study-destinations/australia",
  },
  {
    name: "Netherlands",
    src: "/flags/netherlands.png",
    href: "/study-destinations/netherlands",
  },
  {
    name: "Germany",
    src: "/flags/germany.png",
    href: "/study-destinations/germany",
  },
];

export const STUDY_DESTINATIONS_v2 = [
  {
    name: "Canada",
    src: "/flags/canada.png",
    href: "/study-destinations/canada",
  },
  {
    name: "UK",
    src: "/flags/uk.png",
    href: "/study-destinations/uk",
  },
  {
    name: "Australia",
    src: "/flags/australia.png",
    href: "/study-destinations/australia",
  },
];

export const ACCOMMODATION_DESTINATIONS = [
  {
    country: "canada",
    name: "Canada",
    src: "/flags/canada.png",
    href: "/services/accommodation/canada",
    images: [
      { src: "/images/study_destinations/canada/1.png", alt: "Canada Flag" },
      {
        src: "/images/study_destinations/canada/2.png",
        alt: "Canadian Landscape",
      },
    ],
    accommodations: [
      {
        src: "https://assets.amberstudent.com/inventories/1232408/63c5ac96.jpg?w=400&w=720&h=260&h=480&fit=crop&q=40&q=70&auto=format&trim=auto",
        name: "100 Wellesley Street, Toronto",
        description: "Wellesley St E, Toronto, M4Y 1H5, Canada",
        location: "Toronto",
        price: "CA$275",
      },
      {
        src: "https://assets.amberstudent.com/inventories/189106/96e6f039.jpg?w=400&w=720&h=260&h=480&fit=crop&q=40&q=70&auto=format&trim=auto",
        name: "Sherbourne, Toronto",
        description: "Sherbourne St, Toronto, M4X 0A1, Canada",
        location: "Toronto",
        price: "CA$340",
      },
      {
        src: "https://assets.amberstudent.com/inventories/1109109/5d129aaf.jpg?w=400&w=720&h=260&h=480&fit=crop&q=40&q=70&auto=format&trim=auto",
        name: "1Eleven, Ottawa",
        description: "Cooper St, Ottawa, K2P 2E3, Canada",
        location: "Ottawa",
        price: "CA$950",
      },
      {
        src: "https://assets.amberstudent.com/inventories/227325/fcb2fd24.jpg?w=400&w=720&h=260&h=480&fit=crop&q=40&q=70&auto=format&trim=auto",
        name: "Davisville, Toronto",
        description: "Davisville Ave, Toronto, Canada",
        location: "Toronto",
        price: "CA$205",
      },
      {
        src: "https://assets.amberstudent.com/inventories/1046389/f9bf16c3.jpg?w=400&w=720&h=260&h=480&fit=crop&q=40&q=70&auto=format&trim=auto",
        name: "Pearson Housing 100 Wellesley St, Toronto",
        description: "Wellesley St E, Toronto, M4Y 1H5, Canada",
        location: "Toronto",
        price: "CA$385",
      },
    ],
  },
  {
    country: "uk",
    name: "UK",
    src: "/flags/uk.png",
    href: "/services/accommodation/uk",
    images: [
      { src: "/images/study_destinations/uk/1.jpg", alt: "" },
      { src: "/images/study_destinations/uk/2.jpg", alt: "" },
    ],
    accommodations: [
      {
        src: "https://assets.amberstudent.com/inventories/1276817/3ce30d2a.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Londonist IQ Vega Residence, London",
        description: "Miles St, London, SW8 1RZ, United Kingdom",
        location: "London",
        price: "£430",
      },
      {
        src: "https://assets.amberstudent.com/inventories/221481/7a16f326.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Canvas River Street Tower, Manchestert",
        description: "River St, Manchester, M15 5GQ, United Kingdom",
        location: "Manchestert",
        price: "£218",
      },
      {
        src: "https://assets.amberstudent.com/inventories/140847/dd4685d4.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Collegiate Bagot Street, Birmingham",
        description: "Birmingham, B4 7AY, United Kingdom",
        location: "Birmingham",
        price: "£157",
      },
      {
        src: "https://assets.amberstudent.com/inventories/173017/19641ddd.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Collegiate Clarendon Street, Nottingham",
        description: "Clarendon St, Nottingham, NG1 5NT, United Kingdom",
        location: "Nottingham",
        price: "£159",
      },
      {
        src: "https://assets.amberstudent.com/inventories/177070/8216eaa5.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Unity Square, Liverpool",
        description: "Shaw St, Liverpool, L6 1AA, United Kingdom",
        location: "Liverpool",
        price: "£99",
      },
      {
        src: "https://assets.amberstudent.com/inventories/1084933/d56af95f.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "The Grange, Leicester",
        description: "Grange Ln, Leicester, LE2 7EE, United Kingdom",
        location: "Leicester",
        price: "£131",
      },
    ],
  },
  {
    country: "australia",
    name: "Australia",
    src: "/flags/australia.png",
    href: "/services/accommodation/australia",
    images: [
      { src: "/images/study_destinations/australia/1.jpg", alt: "" },
      { src: "/images/study_destinations/australia/2.jpg", alt: "" },
    ],
    accommodations: [
      {
        src: "https://assets.amberstudent.com/inventories/142782/e6cab7c6.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Scape Queensberry, Melbourne",
        description: "Swanston St, Carlton, 3053, Australia",
        location: "Melbourne",
        price: "AU$379",
      },
      {
        src: "https://assets.amberstudent.com/inventories/138090/408b544e.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Scape Quay, Sydney",
        description: "Quay St, Haymarket, 2000, Australia",
        location: "Sydney",
        price: "AU$719",
      },
      {
        src: "https://assets.amberstudent.com/inventories/207334/c91b58de.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "UniLodge Herston, Brisbane",
        description: "Bramston Terrace, Herston, 4006, Australia",
        location: "Brisbane",
        price: "AU$219",
      },
      {
        src: "https://assets.amberstudent.com/inventories/143111/c11992fe.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Campus Perth, Perth",
        description: "Stirling St, Perth, 6000, Australia",
        location: "Perth",
        price: "AU$266",
      },
      {
        src: "https://assets.amberstudent.com/inventories/227124/bbe1a1c9.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Scape Waymouth, Adelaide",
        description: "Waymouth St, Adelaide, 5000, Australia",
        location: "Adelaide",
        price: "AU$259",
      },
      {
        src: "https://assets.amberstudent.com/inventories/263498/f6235785.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Y Suites on Moore, Canberra",
        description: "Moore St, Canberra, 2601, Australia",
        location: "Canberra",
        price: "AU$349",
      },
    ],
  },
  {
    country: "netherlands",
    name: "Netherlands",
    src: "/flags/netherlands.png",
    href: "/services/accommodation/netherlands",
    images: [
      { src: "/images/study_destinations/netherlands/1.jpg", alt: "" },
      { src: "/images/study_destinations/netherlands/2.jpg", alt: "" },
    ],
    accommodations: [
      {
        src: "/images/services/accommodation/uk/1.png",
        name: "Riverside Retreat",
        description: "123 Avenida da Liberdade, Lisbon",
        location: "Lisbon",
        price: "500€",
      },
      {
        src: "/images/services/accommodation/uk/1.png",
        name: "Riverside Retreat",
        description: "123 Avenida da Liberdade, Lisbon",
        location: "Lisbon",
        price: "500€",
      },
      {
        src: "/images/services/accommodation/uk/1.png",
        name: "Riverside Retreat",
        description: "123 Avenida da Liberdade, Lisbon",
        location: "Lisbon",
        price: "500€",
      },
      {
        src: "/images/services/accommodation/uk/1.png",
        name: "Riverside Retreat",
        description: "123 Avenida da Liberdade, Lisbon",
        location: "Lisbon",
        price: "500€",
      },
      {
        src: "/images/services/accommodation/uk/1.png",
        name: "Riverside Retreat",
        description: "123 Avenida da Liberdade, Lisbon",
        location: "Lisbon",
        price: "500€",
      },
      {
        src: "/images/services/accommodation/uk/1.png",
        name: "Riverside Retreat",
        description: "123 Avenida da Liberdade, Lisbon",
        location: "Lisbon",
        price: "500€",
      },
    ],
  },
  {
    country: "germany",
    name: "Germany",
    src: "/flags/germany.png",
    href: "/services/accommodation/germany",
    images: [
      { src: "/images/study_destinations/germany/1.jpg", alt: "" },
      { src: "/images/study_destinations/germany/2.jpg", alt: "" },
    ],
    accommodations: [
      {
        src: "https://assets.amberstudent.com/inventories/950666/8d8fe1fe.jpeg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Boyenstraße 31, Berlin",
        description: "Boyenstraße, Berlin, 10115, Germany",
        location: "Berlin",
        price: "€830",
      },
      {
        src: "https://assets.amberstudent.com/inventories/969500/1b1bbd16.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Klosterallee 67, Hamburg",
        description: "Klosterallee, Hamburg, 20144, Germany",
        location: "Hamburg",
        price: "€1125",
      },
      {
        src: "https://assets.amberstudent.com/inventories/987951/5311b4f6.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Schmied-Kochel-Straße 1B, Munich",
        description: "Schmied-Kochel-Straße, München, 81371, Germany",
        location: "Munich",
        price: "€1030",
      },
      {
        src: "https://assets.amberstudent.com/inventories/969709/d9f6adfb.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Wallstraße 26, Frankfurt",
        description: "Wallstraße, Frankfurt am Main, 60594, Germany",
        location: "Frankfurt",
        price: "€715",
      },
      {
        src: "https://assets.amberstudent.com/inventories/931766/6865fb98.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Brera Nuremberg, Nuremberg",
        description: "Am Plärrer, Nürnberg, 90429, Germany",
        location: "Nuremberg",
        price: "€1470",
      },
      {
        src: "https://assets.amberstudent.com/inventories/986504/cf7efdea.jpg?w=720&h=480&q=70&auto=format&trim=auto",
        name: "Neue Weyer Straße 5, Cologne",
        description: "Neue Weyerstraße, Köln, 50676, Germany",
        location: "Cologne",
        price: "€1080",
      },
    ],
  },
];

export const HOW_DO_WE_HELP_STUDENTS = [
  {
    name: "Counselling",
    p: "Our counselling sessions will immensely benefit you in making the best academic decision suiting your career choices.",
    link: "/home/1.jpg",
  },
  {
    name: "Scholarships",
    p: "Our global universities have plenty of scholarships on offer and we will help you identify and apply the ones you deserve the most.",
    link: "/home/2.jpg",
  },
  {
    name: "Application & Admission",
    p: "Choose the right intake. Apply timely and smartly in courses and universities that are your right fit and receive admits/offers in no time.",
    link: "/home/4.jpg",
  },
  {
    name: "Internship",
    p: "We know how important internships are to your profile and this our course recommendations are full of options with inbuilt internships.",
    link: "/home/5.jpg",
  },
  {
    name: "Visa Processing",
    p: "Our skilled visa experts will help you prepare and present your visa documents to Embassies and high commissions to ensure a successful visa outcome in minimal time.",
    link: "/home/6.jpg",
  },
  {
    name: "Allied Services",
    p: "Allied services play an important role in helping international students to have a successful study abroad experience and we made it easier by providing services like booking an accommodation, Remittance process, Education loan and forex to make transactions in foreign currencies.",
    link: "/home/7.jpg",
  },
];

export const SOCIAL_LINKS = [
  {
    src: "/icons/fb.png",
    link: "https://facebook.com/uniguruedu/",
  },
  {
    src: "/icons/in.png",
    link: "https://www.linkedin.com/company/uniguru-solutions/",
  },
  {
    src: "/icons/inster.png",
    link: "https://www.instagram.com/uniguruedu/",
  },
  {
    src: "/icons/yt.png",
    link: "https://www.youtube.com/@Uniguru_",
  },
  {
    src: "/icons/tt.png",
    link: "https://www.tiktok.com/@uniguru_",
  },
  {
    src: "/icons/wa.png",
    link: "https://wa.me/447535983436",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Gamini Liyanage",
    title: "Director (Sri Lanka)",
    image: "/images/team/2.jpg",
  },
  {
    name: "Claire Marie",
    title: "Operation Director (EU)",
    image: "/images/team/1.jpg",
  },
  {
    name: "Kasun Liyanage",
    title: "Head of Compliance (London)",
    image: "/images/team/3.jpg",
  },
  {
    name: "Hasitha Manapperuma",
    title: "Head of Global Admissions",
    image: "/images/team/5.jpg",
  },
  {
    name: "Pasan Piyumantha",
    title: "Head of IT",
    image: "/images/team/6.jpg",
  },
  {
    name: "Janaka Rajasekara",
    title: "Regional Marketing Exectutive",
    image: "/images/team/7.jpg",
  },
  {
    name: "Ravidevi Ravindron",
    title: "Student Liaison Manager",
    image: "/images/team/8.jpg",
  },
  {
    name: "Dilini Godakubura",
    title: "Student Liaison Manager",
    image: "/images/team/9.jpg",
  },
  {
    name: "Eeshwaran Raj",
    title: "Student Liaison Manager",
    image: "/images/team/10.jpg",
  },
  {
    name: "Nehha Saravanan",
    title: "Student Liaison Manager",
    image: "/images/team/11.jpg",
  },
  {
    name: "Viraj Sudarshan Vijekumar",
    title: "Partner Sales Executive",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQHRQQCen7vzNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697695547131?e=1735776000&v=beta&t=-9hVAILETjTsWNsK6VNmYU7YHc8ewK_-DxxtkQibx0g",
  },
  {
    name: "Jopiga Sundaralingam",
    title: "Executive - Accounting",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHDzcWO6I0AHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718256409370?e=1735776000&v=beta&t=ul3-SlMyoHRUXFAGqRirfJIWEd-U1FHOlSSzAZPpuS4",
  },
  {
    name: "Sandali Sarathchandra",
    title: "Research Partner",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQFeUjvUlblXTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1648052308204?e=1735776000&v=beta&t=y9GAVusq7ooazDyoumq095gZeWBbi7kJAwXwlTfnRy0",
  },
  {
    name: "Saranya Kajan",
    title: "Senior Administration Executive",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGSPaxCsw-2wQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703704627618?e=1735776000&v=beta&t=fcY9Gtwpialc3TpGqFQ4Q0vWCVzYhRusS4t0xFYPZ0k",
  },
  {
    name: "Arusiya Murasolimaran",
    title: "Partner Executive",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQGm-QOixsyRwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1632979431680?e=1735776000&v=beta&t=oRS0MVPOj_5A2eGTDnq5OOe3OPLF8-_0pyenteRkC0s",
  },
  {
    name: "Subodha Rathnayake",
    title: "Senior Partner Executive",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGh7uvmOwwqxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703675533527?e=1735776000&v=beta&t=hw9VlCTDUWF0gTgihzSJgbwIp_PgTwjzG0-Vkp5j3WY",
  },
];

export const CONTACT_DETAILS = [
  {
    name: "Sri Lanka",
    phone: "+94770578521",
    email: "info@uniguru.co",
    address:
      "835/2B New Parliament Rd, Battaramulla 10120, Sri Lanka,Battaramulla, Sri Lanka",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.995153123264!2d79.92356357463385!3d6.891181993107911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25130bc4390e7%3A0x2a0b2d626fc78733!2sUniguru!5e0!3m2!1sen!2sus!4v1725966083551!5m2!1sen!2sus",
  },
  {
    name: "UK",
    phone: "+447436863011",
    email: "info@uniguru.co",
    address: "128 City Road, London, United Kingdom, EC1V 2NX",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317725.9017158751!2d-0.088823!3d51.527275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671d5df0b%3A0x368e18d29207f698!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sus!4v1725966292445!5m2!1sen!2sus",
  },
  {
    name: "India",
    phone: "+447535983436",
    email: "info@uniguru.co",
    address: "Bandra East, Mumbai, Maharashtra 400051, India",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d482689.22451471846!2d72.946583!3d19.063317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e114fa5045%3A0xab01b3ce8aa92ac7!2sBandra%20East%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1725966711263!5m2!1sen!2sus",
  },
  {
    name: "France",
    phone: "+33534435375",
    email: "info@uniguru.co",
    address: "22 rue de la Touraine , 31100 Toulouse",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d369996.5379631458!2d1.415973!3d43.57326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebbb8495c3363%3A0x325da4b9d0a2e425!2s22%20Rue%20de%20la%20Touraine%2C%2031100%20Toulouse%2C%20France!5e0!3m2!1sen!2sus!4v1725966476501!5m2!1sen!2sus",
  },
];

export const STUDY_DESTINATIONS_FULLDATA: StudyDestinationDataSet[] = [
  {
    destination: "canada",
    hero_section: {
      title: "Study in Canada",
      images: [
        { src: "/images/study_destinations/canada/1.png", alt: "Canada Flag" },
        {
          src: "/images/study_destinations/canada/2.png",
          alt: "Canadian Landscape",
        },
      ],
      description:
        "Because moving countries is a life decision \u2014 you deserve calm, regulated guidance, not pressure. Eligibility-led shortlisting and a compliant plan \u2014 from programme selection to visa-ready evidence.",
    },
    why_choose_section: {
      title: "Why Canada?",
      content:
        "Canada is a strong choice when you want reputable education and clear progression routes \u2014 provided the course choice is credible and the evidence plan is clean.",
      bullets: [
        "Global recognition: qualifications employers understand",
        "Programme breadth: wide options across provinces and subjects",
        "Progression: post-study options may be available depending on route and eligibility",
      ],
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "Study permit fee: CAD $150 (IRCC fee list)",
        "Biometrics fee (individual): CAD $85",
        "Proof of financial support (living expenses, excluding tuition and transportation): CAN$22,895 for 1 applicant (outside Quebec)",
      ],
      note: "Our Approach: Advice is tailored to your profile \u2014 eligibility first, no guesswork.",
    },
    who_is_it_for_section: {
      title: "Who Canada Is For",
      columns: [
        {
          title: "Best fit",
          variant: "best_fit",
          points: [
            "You want a credible programme aligned to your background and outcomes",
            "You can support a realistic budget and evidence plan",
            "You want a structured process (not 'agent promises')",
          ],
        },
        {
          title: "Profile-dependent",
          variant: "profile_dependent",
          points: [
            "City/province flexibility and programme choice",
            "Funding sources and document history",
            "Timeline alignment to intake and processing",
          ],
        },
        {
          title: "Not recommended",
          variant: "not_recommended",
          points: [
            "You want guarantees rather than a credible plan",
            "Your study logic is unclear or inconsistent",
            "You're relying on unrealistic budgets",
          ],
        },
      ],
    },
    uniguru_method_section: {
      title: "A calm process, built for real outcomes",
      intro:
        "We run a structured process that keeps decisions clear, timelines realistic, and paperwork compliant.",
      steps: [
        {
          step: "Step 1",
          title: "Canada Eligibility Check (2 minutes)",
          description: "Destination, intake, WhatsApp. That's it.",
        },
        {
          step: "Step 2",
          title: "Shortlist + Plan (24\u201348 hours)",
          description:
            "A realistic shortlist based on academic fit, budget, and credibility \u2014 with clear next steps.",
        },
        {
          step: "Step 3",
          title: "Offer/Admission \u2192 Evidence plan",
          description:
            "We guide you through what to prepare, how to present it, and what to avoid \u2014 so your submission is clean and consistent.",
        },
        {
          step: "Step 4",
          title: "Pre-departure readiness",
          description:
            "Accommodation and arrival planning support so you land prepared, not panicked.",
        },
      ],
      micro_line:
        "No pressure. No shortcuts. Just a plan that stands up to scrutiny.",
    },
    iaa_section: {
      title: "Immigration Advice Authority (IAA) Regulated Support",
      registration:
        "Regulated by the Immigration Advice Authority (IAA) - Organisation Registration: F202537807",
      description:
        "When immigration advice is required, we provide guidance that's regulated, accountable, and standards-led. That means clear boundaries, proper record-keeping, and advice you can rely on \u2014 not sales talk.",
      benefits_title: "What this means for you",
      benefits: [
        "Accountability: regulated standards and transparent processes",
        "Clarity: eligibility-led guidance, not vague promises",
        "Compliance-first: documentation planning that stands up to scrutiny",
        "Integrity: no shortcuts, no pressure tactics",
      ],
      disclaimer:
        "We do not guarantee outcomes \u2014 we deliver compliant guidance and clear next steps based on your profile.",
    },
    graduate_route_section: {
      title: "Post-Graduation Work Permit (PGWP)",
      content:
        "Some graduates may be eligible for a Post-Graduation Work Permit (PGWP). Eligibility and length depend on your programme, institution, and current requirements.",
      eligibility_note:
        "We confirm what applies once your course and route are clear.",
      micro_line:
        "Rules can change. We advise based on requirements in force at the time of your case.",
    },
    costs_planning_section: {
      title: "Costs and planning (Canada)",
      description:
        "A Canada study plan only works when the finances are realistic and consistent with your overall profile. We help you plan conservatively, document your assumptions, and avoid budgets that look credible on paper but fail in real life.",
      costs_title: "Typical benchmarks and fees (planning guide)",
      cost_items: [
        {
          label:
            "IRCC living-cost benchmark (excluding tuition and transportation)",
          points: ["CAN$22,895/year for 1 applicant (outside Quebec)"],
        },
        {
          label: "Study permit fee",
          points: ["CAD $150"],
        },
        {
          label: "Biometrics fee (individual)",
          points: ["CAD $85 (where required)"],
        },
      ],
      will_wont: {
        title: "What we will do / what we won't do",
        will_do_heading: "What we will do",
        wont_do_heading: "What we won't do",
        rows: [
          {
            will_do:
              "Provide a realistic budget framework tailored to city/province/route",
            wont_do: "Pretend costs are the same everywhere",
          },
          {
            will_do:
              "Confirm current government fees and benchmarks during case review",
            wont_do: "Quote outdated fees as 'guaranteed'",
          },
          {
            will_do:
              "Flag credibility risks early (funding pattern, timelines, consistency)",
            wont_do: "Say 'it will be fine' without evidence",
          },
          {
            will_do:
              "Provide a structured evidence plan aligned to the budget",
            wont_do: "Encourage vague budgets or unexplained funding",
          },
          {
            will_do:
              "Keep advice regulated, accountable, and properly recorded",
            wont_do:
              "Support shortcuts, false documents, or pressure tactics",
          },
        ],
      },
      disclaimer:
        "Final amounts depend on your institution, course level, visa length/route, and current government requirements \u2014 we confirm these during your eligibility review.",
    },
    faq_section: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you guarantee outcomes?",
          answer:
            "No. No credible regulated firm guarantees outcomes. We provide structured, compliant guidance and clear next steps based on your profile.",
        },
        {
          question: "Do I need IELTS/English proof?",
          answer:
            "It depends on the institution and course. We confirm requirements after your eligibility review.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Timelines vary by institution and intake. Shortlists are typically issued within 24\u201348 hours (working days).",
        },
        {
          question: "Can I work while studying?",
          answer:
            "Work permission depends on the route and conditions. We explain what applies once your offer is confirmed.",
        },
        {
          question: "Am I eligible for post-study options?",
          answer:
            "Some applicants may be eligible depending on route and current rules. We confirm once your plan is final.",
        },
      ],
      whatsapp_label: "Ask on WhatsApp",
      whatsapp_link: "https://wa.me/447123456789",
    },
    cta_section: {
      title: "Start with clarity",
      subtitle: "Canada Eligibility Check (2 minutes)",
      fields: ["Destination (Canada)", "Intake", "WhatsApp"],
      button_label: "Get My Canada Shortlist",
      micro_text:
        "Shortlist & next steps typically within 24\u201348 hours (working days).",
      trust_line:
        "Immigration Advice Authority (IAA) Regulated \u2022 Organisation Registration: F202537807 \u2022 128 City Road, London EC1V 2NX \u2022 100+ Google Reviews",
      disclaimer:
        "We provide regulated guidance where required. We do not guarantee outcomes.",
    },
    opportunities_hub_section: {
      title: "Canada Opportunities Hub",
      subline:
        "Curated resources and partner options \u2014 your final shortlist depends on your profile and intake.",
      cards: [
        {
          heading: "Partner institutions (Canada)",
          text: "Explore a curated list of institutions we work with.",
          cta_label: "View Canada partner universities",
          cta_link: "/universities",
        },
        {
          heading: "Scholarships (Canada)",
          text: "A practical overview of common scholarship types and eligibility.",
          cta_label: "Explore scholarships",
          cta_link: "/scholarships",
        },
        {
          heading: "Careers & industry insights",
          text: "Which courses lead to which outcomes \u2014 and what's credible for your profile.",
          cta_label: "See career insights",
          cta_link: "/careers",
        },
      ],
      cta_text:
        "Prefer a tailored recommendation? Get your Canada shortlist in 2 minutes.",
      cta_button_label: "Get My Canada Shortlist",
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "Canada's economy continues to be highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
      images: [
        { src: "/images/study_destinations/carers1.png", alt: "" },
        { src: "/images/study_destinations/carers2.png", alt: "" },
      ],
    },
    cost_of_study_section: {
      title: "Cost of Study in Canada",
      table: [
        {
          education_level: "Tuition Fees (Indicative)",
          cost_range: "CAD 11,000",
        },
        {
          education_level: "Living and Accommodation",
          cost_range: "CAD 12,000",
        },
        { education_level: "Visa Fees", cost_range: "CAD 200" },
        { education_level: "Health Insurance", cost_range: "CAD 800" },
        {
          education_level: "Airfare from Sri Lanka to the Canada",
          cost_range: "CAD 1,800",
        },
      ],
    },
    popular_universities_section: {
      title: "Popular Universities",
      universities: [
        { name: "Our Partner Universities", link: "/universities" },
        { name: "Scholarships in Canada", link: "/scholarships" },
      ],
    },
    popular_courses_section: {
      title: "Popular Courses",
      courses: [
        "Art & Design",
        "Business & Management",
        "Engineering & Information Technology",
        "Media & Communication",
        "Sciences",
      ],
    },
    playlistId: "PL3h6N3QJzuI29ScU3qesSlcj_Z4mqDZNr",
  },
  {
    destination: "uk",
    hero_section: {
      title: "Study in the UK",
      images: [
        { src: "/images/study_destinations/uk/1.jpg", alt: "" },
        { src: "/images/study_destinations/uk/2.jpg", alt: "" },
      ],
      description:
        "With an academic reputation built on centuries-old heritage, the UK is home to some of the world's oldest and most prestigious universities. Known for their consistent high rankings and rich legacy of welcoming international students, UK universities offer an unforgettable student experience, catering well to the needs and aspirations of their students.",
    },
    why_choose_section: {
      title: "Why UK?",
      content:
        "The UK is a strong choice when you want globally recognised qualifications, rigorous academic standards, and clear progression routes. We help you choose options that fit your profile and budget, and we keep the process calm, compliant, and outcome-focused.",
      bullets: [
        "Global recognition: qualifications employers understand",
        "Course depth: strong teaching and industry alignment",
        "Progression: clear routes from study to next steps (where eligible)",
      ],
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "Globally recognised universities and qualifications",
        "Wide range of courses and multiple intakes each year",
        "One-year Master's routes are common in many subjects (course-dependent)",
        "Post-study options may be available depending on route and eligibility",
        "We shortlist based on academic fit, budget fit, and credibility fit",
      ],
      note: "Our approach: Advice is tailored to your profile - eligibility first, no guesswork.",
    },
    who_is_it_for_section: {
      title: "Who The UK Is For",
      columns: [
        {
          title: "Best fit",
          variant: "best_fit",
          points: [
            "You want a recognised UK qualification",
            "You have a clear study/career direction (or want help defining it)",
            "You want structured, compliant guidance",
          ],
        },
        {
          title: "Profile-dependent",
          variant: "profile_dependent",
          points: [
            "You're switching fields",
            "You need flexible entry options",
            "You're balancing budget and city choice",
          ],
        },
        {
          title: "Not recommended",
          variant: "not_recommended",
          points: [
            "You're choosing the UK without credible study logic",
            "You're relying on unrealistic budgets",
            'You want shortcuts or "guarantees"',
          ],
        },
      ],
    },
    intakes_section: {
      intakes: ["January", "May", "September", "November"],
      description:
        "Your best intake depends on readiness, documents, and timelines - we'll advise after eligibility.",
      cta_label: "Free Eligibility Check",
    },
    partner_institutions_section: {
      title: "Selected UK partner institutions",
      partners: [
        { name: "University of Law" },
        { name: "Wrexham University" },
        { name: "University College Birmingham" },
        { name: "Northumbria University London" },
        { name: "Ulster University" },
        { name: "Coventry University" },
      ],
      note: "Final recommendations depend on your profile, budget, and course goals.",
    },
    uniguru_method_section: {
      title: "A calm process, built for real outcomes",
      intro:
        "We run a structured process that keeps decisions clear, timelines realistic, and paperwork compliant.",
      steps: [
        {
          step: "Step 1",
          title: "UK Eligibility Check (2 minutes)",
          description:
            "Destination, intake, WhatsApp. That's it.",
        },
        {
          step: "Step 2",
          title: "Shortlist + Plan (24-48 hours)",
          description:
            "A realistic shortlist based on academic fit, budget, and credibility - with clear next steps.",
        },
        {
          step: "Step 3",
          title: "Offer > CAS > Visa-ready evidence plan",
          description:
            "We guide you through what to prepare, how to present it, and what to avoid - so your submission is clean and consistent.",
        },
        {
          step: "Step 4",
          title: "Pre-departure readiness",
          description:
            "Accommodation and arrival planning support so you land prepared, not panicked.",
        },
      ],
      micro_line:
        "No pressure. No shortcuts. Just a plan that stands up to scrutiny.",
    },
    iaa_section: {
      title: "Immigration Advice Authority (IAA) Regulated Support",
      registration: "Regulated by the Immigration Advice Authority (IAA) - Organisation Registration: F202537807",
      description:
        "When immigration advice is required, we provide guidance that's regulated, accountable, and standards-led. That means clear boundaries, proper record-keeping, and advice you can rely on - not sales talk.",
      benefits_title: "What this means for you",
      benefits: [
        "Accountability: regulated standards and transparent processes",
        "Clarity: eligibility-led guidance, not vague promises",
        "Compliance-first: documentation planning that stands up to scrutiny",
        "Integrity: no shortcuts, no pressure tactics",
      ],
      disclaimer:
        "We do not guarantee outcomes - we deliver compliant guidance and clear next steps based on your profile.",
    },
    graduate_route_section: {
      title: "Graduate Route (Post-Study Permission)",
      content:
        "Some students may be eligible to apply for the Graduate Route after successfully completing an eligible UK qualification with an eligible provider.",
      eligibility_note:
        "Eligibility depends on factors such as your course, institution, and compliance with current requirements. We'll confirm what applies to your profile and explain the correct next steps.",
      micro_line:
        "Rules can change. We advise based on the requirements in force at the time of your case.",
    },
    costs_planning_section: {
      title: "Costs and planning (UK)",
      description:
        "A UK study plan only works when the finances are realistic and consistent with your overall profile. We help you plan conservatively, document your assumptions, and avoid budgets that look credible on paper but fail in real life.",
      costs_title: "Typical cost ranges (planning guide)",
      cost_items: [
        {
          label: "Maintenance (living costs) - UKVI benchmark",
          points: [
            "London: \u00A31,529 per month (up to 9 months)",
            "Outside London: \u00A31,171 per month (up to 9 months)",
          ],
          footnote:
            "These are regulatory benchmark figures for visa financial evidence - not your full lifestyle budget.",
        },
        {
          label: "Student visa application fee",
          points: ["\u00A3524 (Student visa application fee)"],
        },
        {
          label: "Immigration Health Surcharge (IHS)",
          points: [
            "\u00A3776 per year for students (charged based on visa length)",
          ],
        },
        {
          label: "Living costs - practical planning range",
          points: [
            "London: \u00A31,300\u2013\u00A31,400 per month",
            "Rest of the UK: \u00A3900\u2013\u00A31,300 per month",
          ],
          footnote:
            "For practical budgeting (rent + bills + food + transport), the British Council suggests these planning ranges.",
        },
      ],
      will_wont: {
        title: "What we will do / what we won't do",
        will_do_heading: "What we will do",
        wont_do_heading: "What we won't do",
        rows: [
          {
            will_do:
              "Build a realistic budget framework for London vs outside London",
            wont_do:
              "Pretend London costs the same as a cheaper city",
          },
          {
            will_do:
              "Confirm current UK government fees during case review",
            wont_do:
              'Quote outdated fee numbers as "guaranteed"',
          },
          {
            will_do:
              "Flag credibility risks early (funds pattern, timelines, consistency)",
            wont_do:
              'Tell you "it will be fine" without evidence',
          },
          {
            will_do:
              "Provide a clear, structured evidence plan aligned to your budget",
            wont_do:
              "Encourage vague budgets or unexplained funding",
          },
          {
            will_do:
              "Keep advice regulated, accountable, and properly recorded",
            wont_do:
              "Support shortcuts, false documents, or pressure tactics",
          },
        ],
      },
      disclaimer:
        "Final amounts depend on your institution, course level, visa length, and current UK government fees - we confirm these during your eligibility review.",
    },
    faq_section: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you guarantee visa outcomes?",
          answer:
            "No. No credible regulated firm guarantees outcomes. We provide structured, compliant guidance and clear next steps based on your profile.",
        },
        {
          question: "Do I need IELTS?",
          answer:
            "It depends on the institution, course and your background. In some cases an IELTS waiver may be possible. We confirm requirements after your eligibility review.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Timelines vary by institution and intake. After your eligibility check, we provide a realistic plan and next steps. Shortlists are typically issued within 24-48 hours (working days).",
        },
        {
          question: "Can I work in the UK while studying?",
          answer:
            "Work permission depends on your visa conditions and your course/provider. We explain what applies to you after reviewing your offer and route.",
        },
        {
          question: "Am I eligible for the Graduate Route?",
          answer:
            "Some students may be eligible depending on course, provider and current requirements. We'll confirm eligibility and the correct process once your study plan is clear.",
        },
      ],
      whatsapp_label: "Ask on WhatsApp",
      whatsapp_link: "https://wa.me/447123456789",
    },
    cta_section: {
      title: "Start with clarity",
      subtitle: "UK Eligibility Check (2 minutes)",
      fields: ["Destination (UK)", "Intake", "WhatsApp"],
      button_label: "Get My UK Shortlist",
      micro_text:
        "Shortlist & next steps typically within 24-48 hours (working days).",
      trust_line:
        "Immigration Advice Authority (IAA) Regulated \u2022 Organisation Registration: F202537807 \u2022 128 City Road, London EC1V 2NX \u2022 100+ Google Reviews",
      disclaimer:
        "We provide regulated guidance where required. We do not guarantee outcomes.",
    },
    opportunities_hub_section: {
      title: "UK Opportunities Hub",
      subline:
        "Curated resources and partner options - your final shortlist depends on your profile and intake.",
      cards: [
        {
          heading: "Partner universities (UK)",
          text: "Explore a curated list of institutions we work with.",
          cta_label: "View UK partner universities",
          cta_link: "/universities",
        },
        {
          heading: "Scholarships (UK)",
          text: "A practical overview of common scholarship types and eligibility.",
          cta_label: "Explore scholarships",
          cta_link: "/scholarships",
        },
        {
          heading: "Careers & industry insights",
          text: "Which courses lead to which outcomes - and what's credible for your profile.",
          cta_label: "See career insights",
          cta_link: "/careers",
        },
      ],
      cta_text:
        "Prefer a tailored recommendation? Get your UK shortlist in 2 minutes.",
      cta_button_label: "Get My UK Shortlist",
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "The UK's economy is one of the most globalized in the world, comprising England, Scotland, Wales, and Northern Ireland. Dominated by sectors such as services, financial services, higher education, aerospace, pharmaceuticals, and manufacturing, the UK offers a wide range of lucrative career opportunities. Top-paying jobs include roles in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
      images: [
        { src: "/images/study_destinations/carers1.png", alt: "" },
        { src: "/images/study_destinations/carers2.png", alt: "" },
      ],
    },
    cost_of_study_section: {
      title: "Cost of Education in UK",
      table: [
        { education_level: "Tuition Fees (Indicative)", cost_range: "£14,000" },
        { education_level: "Living and Accommodation", cost_range: "£9,207" },
        { education_level: "Visa Fees", cost_range: "£490" },
        { education_level: "Health Insurance", cost_range: "£766" },
        {
          education_level: "Airfare from Sri Lanka to the UK",
          cost_range: "£350",
        },
      ],
    },
    popular_universities_section: {
      title: "Popular Universities",
      universities: [
        { name: "Our Partner Universities", link: "/universities" },
        { name: "Scholarships in UK", link: "/scholarships" },
      ],
    },
    popular_courses_section: {
      title: "Popular Courses",
      courses: [
        "Art & Design",
        "Business & Management",
        "Engineering & Information Technology",
        "Media & Communication",
        "Sciences",
      ],
    },
    playlistId: "PL3h6N3QJzuI09g5itCl_KYgNIrNLKGJ1h",
  },
  {
    destination: "australia",
    hero_section: {
      title: "Study in the Australia",
      images: [
        { src: "/images/study_destinations/australia/1.jpg", alt: "" },
        { src: "/images/study_destinations/australia/2.jpg", alt: "" },
      ],
      description:
        "Because high-scrutiny routes demand high-standard planning \u2014 you deserve clear, regulated guidance, not sales talk. Eligibility-led shortlisting and a compliant plan \u2014 from programme selection to visa-ready evidence.",
    },
    why_choose_section: {
      title: "Why Australia?",
      content:
        "Australia can be a strong option for globally recognised education and graduate outcomes \u2014 when your course choice is credible and your evidence is consistent.",
      bullets: [
        "Programme choice across sectors and levels",
        "Structured admission and compliance requirements",
        "Post-study options may be available depending on eligibility",
      ],
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "Student visa (Subclass 500) application charge: from AUD $2,000 (unless exempt)",
        "Financial capacity requirement: Home Affairs publishes minimum funds expectations and periodically updates them",
      ],
      note: "Our Approach: Advice is tailored to your profile \u2014 eligibility first, no guesswork.",
    },
    who_is_it_for_section: {
      title: "Who Australia Is For",
      columns: [
        {
          title: "Best fit",
          variant: "best_fit",
          points: [
            "You want a credible programme aligned to your background and outcomes",
            "You can support a realistic budget and evidence plan",
            "You want a structured process (not 'agent promises')",
          ],
        },
        {
          title: "Profile-dependent",
          variant: "profile_dependent",
          points: [
            "City/province flexibility and programme choice",
            "Funding sources and document history",
            "Timeline alignment to intake and processing",
          ],
        },
        {
          title: "Not recommended",
          variant: "not_recommended",
          points: [
            "You want guarantees rather than a credible plan",
            "Your study logic is unclear or inconsistent",
            "You're relying on unrealistic budgets",
          ],
        },
      ],
    },
    uniguru_method_section: {
      title: "A calm process, built for real outcomes",
      intro:
        "We run a structured process that keeps decisions clear, timelines realistic, and paperwork compliant.",
      steps: [
        {
          step: "Step 1",
          title: "Australia Eligibility Check (2 minutes)",
          description: "Destination, intake, WhatsApp. That's it.",
        },
        {
          step: "Step 2",
          title: "Shortlist + Plan (24\u201348 hours)",
          description:
            "A realistic shortlist based on academic fit, budget, and credibility \u2014 with clear next steps.",
        },
        {
          step: "Step 3",
          title: "Offer/Admission \u2192 Evidence plan",
          description:
            "We guide you through what to prepare, how to present it, and what to avoid \u2014 so your submission is clean and consistent.",
        },
        {
          step: "Step 4",
          title: "Pre-departure readiness",
          description:
            "Accommodation and arrival planning support so you land prepared, not panicked.",
        },
      ],
      micro_line:
        "No pressure. No shortcuts. Just a plan that stands up to scrutiny.",
    },
    iaa_section: {
      title: "Immigration Advice Authority (IAA) Regulated Support",
      registration:
        "Regulated by the Immigration Advice Authority (IAA) - Organisation Registration: F202537807",
      description:
        "When immigration advice is required, we provide guidance that's regulated, accountable, and standards-led. That means clear boundaries, proper record-keeping, and advice you can rely on \u2014 not sales talk.",
      benefits_title: "What this means for you",
      benefits: [
        "Accountability: regulated standards and transparent processes",
        "Clarity: eligibility-led guidance, not vague promises",
        "Compliance-first: documentation planning that stands up to scrutiny",
        "Integrity: no shortcuts, no pressure tactics",
      ],
      disclaimer:
        "We do not guarantee outcomes \u2014 we deliver compliant guidance and clear next steps based on your profile.",
    },
    graduate_route_section: {
      title: "Temporary Graduate Visa (Subclass 485)",
      content:
        "Eligible graduates may be able to apply for the Temporary Graduate visa (Subclass 485). Streams and durations vary.",
      eligibility_note:
        "We confirm what applies once your course, provider and route are confirmed.",
      micro_line:
        "Rules can change. We advise based on requirements in force at the time of your case.",
    },
    costs_planning_section: {
      title: "Costs and planning (Australia)",
      description:
        "An Australia study plan only works when the finances are realistic and consistent with your overall profile. We help you plan conservatively, document your assumptions, and avoid budgets that look credible on paper but fail in real life.",
      costs_title: "Typical benchmarks and fees (planning guide)",
      cost_items: [
        {
          label: "Student visa (Subclass 500) charge",
          points: ["From AUD $2,000 (unless exempt)"],
        },
        {
          label: "Financial capacity",
          points: [
            "Home Affairs publishes minimum funds expectations and periodically updates them; we confirm the current figure during case review",
          ],
        },
      ],
      will_wont: {
        title: "What we will do / what we won't do",
        will_do_heading: "What we will do",
        wont_do_heading: "What we won't do",
        rows: [
          {
            will_do:
              "Provide a realistic budget framework tailored to city/province/route",
            wont_do: "Pretend costs are the same everywhere",
          },
          {
            will_do:
              "Confirm current government fees and benchmarks during case review",
            wont_do: "Quote outdated fees as 'guaranteed'",
          },
          {
            will_do:
              "Flag credibility risks early (funding pattern, timelines, consistency)",
            wont_do: "Say 'it will be fine' without evidence",
          },
          {
            will_do:
              "Provide a structured evidence plan aligned to the budget",
            wont_do: "Encourage vague budgets or unexplained funding",
          },
          {
            will_do:
              "Keep advice regulated, accountable, and properly recorded",
            wont_do:
              "Support shortcuts, false documents, or pressure tactics",
          },
        ],
      },
      disclaimer:
        "Final amounts depend on your institution, course level, visa length/route, and current government requirements \u2014 we confirm these during your eligibility review.",
    },
    faq_section: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you guarantee outcomes?",
          answer:
            "No. No credible regulated firm guarantees outcomes. We provide structured, compliant guidance and clear next steps based on your profile.",
        },
        {
          question: "Do I need IELTS/English proof?",
          answer:
            "It depends on the institution and course. We confirm requirements after your eligibility review.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Timelines vary by institution and intake. Shortlists are typically issued within 24\u201348 hours (working days).",
        },
        {
          question: "Can I work while studying?",
          answer:
            "Work permission depends on the route and conditions. We explain what applies once your offer is confirmed.",
        },
        {
          question: "Am I eligible for post-study options?",
          answer:
            "Some applicants may be eligible depending on route and current rules. We confirm once your plan is final.",
        },
      ],
      whatsapp_label: "Ask on WhatsApp",
      whatsapp_link: "https://wa.me/447123456789",
    },
    cta_section: {
      title: "Start with clarity",
      subtitle: "Australia Eligibility Check (2 minutes)",
      fields: ["Destination (Australia)", "Intake", "WhatsApp"],
      button_label: "Get My Australia Shortlist",
      micro_text:
        "Shortlist & next steps typically within 24\u201348 hours (working days).",
      trust_line:
        "Immigration Advice Authority (IAA) Regulated \u2022 Organisation Registration: F202537807 \u2022 128 City Road, London EC1V 2NX \u2022 100+ Google Reviews",
      disclaimer:
        "We provide regulated guidance where required. We do not guarantee outcomes.",
    },
    opportunities_hub_section: {
      title: "Australia Opportunities Hub",
      subline:
        "Curated resources and partner options \u2014 your final shortlist depends on your profile and intake.",
      cards: [
        {
          heading: "Partner institutions (Australia)",
          text: "Explore a curated list of institutions we work with.",
          cta_label: "View Australia partner universities",
          cta_link: "/universities",
        },
        {
          heading: "Scholarships (Australia)",
          text: "A practical overview of common scholarship types and eligibility.",
          cta_label: "Explore scholarships",
          cta_link: "/scholarships",
        },
        {
          heading: "Careers & industry insights",
          text: "Which courses lead to which outcomes \u2014 and what's credible for your profile.",
          cta_label: "See career insights",
          cta_link: "/careers",
        },
      ],
      cta_text:
        "Prefer a tailored recommendation? Get your Australia shortlist in 2 minutes.",
      cta_button_label: "Get My Australia Shortlist",
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "Australia's economy remains highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
      images: [
        { src: "/images/study_destinations/carers1.png", alt: "" },
        { src: "/images/study_destinations/carers2.png", alt: "" },
      ],
    },
    cost_of_study_section: {
      title: "Cost of Education in Australia",
      table: [
        {
          education_level: "Tuition Fees (Indicative)",
          cost_range: "AUD 18,000",
        },
        {
          education_level: "Living and Accommodation",
          cost_range: "AUD 19,000",
        },
        { education_level: "Visa Fees", cost_range: "AUD 650" },
        { education_level: "Health Insurance", cost_range: "AUD 700" },
        {
          education_level: "Airfare from Sri Lanka to the Australia",
          cost_range: "AUD 1,200",
        },
      ],
    },
    popular_universities_section: {
      title: "Popular Universities",
      universities: [
        { name: "Our Partner Universities", link: "/universities" },
        { name: "Scholarships in Australia", link: "/scholarships" },
      ],
    },
    popular_courses_section: {
      title: "Popular Courses",
      courses: [
        "Art & Design",
        "Business & Management",
        "Engineering & Information Technology",
        "Media & Communication",
        "Sciences",
      ],
    },
    playlistId: "PL3h6N3QJzuI09g5itCl_KYgNIrNLKGJ1h",
  },
  {
    destination: "netherlands",
    hero_section: {
      title: "Study in the Netherlands",
      images: [
        { src: "/images/study_destinations/netherlands/1.jpg", alt: "" },
        { src: "/images/study_destinations/netherlands/2.jpg", alt: "" },
      ],
      description:
        "Because a credible plan beats generic advice \u2014 you deserve regulated guidance and clear next steps. Eligibility-led shortlisting and a compliant plan \u2014 from programme selection to visa-ready evidence.",
    },
    why_choose_section: {
      title: "Why Netherlands?",
      content:
        "The Netherlands offers strong English-taught options and a structured student residence system \u2014 but the financial and sponsor requirements must be handled precisely.",
      bullets: [
        "Strong English-taught programme availability",
        "Sponsor-led admission/residence permit process",
        "Post-study options may be available depending on eligibility",
      ],
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "IND required amount for study (HBO/university) 2026: EUR 1,130.77 per month",
      ],
      note: "Our Approach: Advice is tailored to your profile \u2014 eligibility first, no guesswork.",
    },
    who_is_it_for_section: {
      title: "Who Netherlands Is For",
      columns: [
        {
          title: "Best fit",
          variant: "best_fit",
          points: [
            "You want a credible programme aligned to your background and outcomes",
            "You can support a realistic budget and evidence plan",
            "You want a structured process (not 'agent promises')",
          ],
        },
        {
          title: "Profile-dependent",
          variant: "profile_dependent",
          points: [
            "City/province flexibility and programme choice",
            "Funding sources and document history",
            "Timeline alignment to intake and processing",
          ],
        },
        {
          title: "Not recommended",
          variant: "not_recommended",
          points: [
            "You want guarantees rather than a credible plan",
            "Your study logic is unclear or inconsistent",
            "You're relying on unrealistic budgets",
          ],
        },
      ],
    },
    uniguru_method_section: {
      title: "A calm process, built for real outcomes",
      intro:
        "We run a structured process that keeps decisions clear, timelines realistic, and paperwork compliant.",
      steps: [
        {
          step: "Step 1",
          title: "Netherlands Eligibility Check (2 minutes)",
          description: "Destination, intake, WhatsApp. That's it.",
        },
        {
          step: "Step 2",
          title: "Shortlist + Plan (24\u201348 hours)",
          description:
            "A realistic shortlist based on academic fit, budget, and credibility \u2014 with clear next steps.",
        },
        {
          step: "Step 3",
          title: "Offer/Admission \u2192 Evidence plan",
          description:
            "We guide you through what to prepare, how to present it, and what to avoid \u2014 so your submission is clean and consistent.",
        },
        {
          step: "Step 4",
          title: "Pre-departure readiness",
          description:
            "Accommodation and arrival planning support so you land prepared, not panicked.",
        },
      ],
      micro_line:
        "No pressure. No shortcuts. Just a plan that stands up to scrutiny.",
    },
    iaa_section: {
      title: "Immigration Advice Authority (IAA) Regulated Support",
      registration:
        "Regulated by the Immigration Advice Authority (IAA) - Organisation Registration: F202537807",
      description:
        "When immigration advice is required, we provide guidance that's regulated, accountable, and standards-led. That means clear boundaries, proper record-keeping, and advice you can rely on \u2014 not sales talk.",
      benefits_title: "What this means for you",
      benefits: [
        "Accountability: regulated standards and transparent processes",
        "Clarity: eligibility-led guidance, not vague promises",
        "Compliance-first: documentation planning that stands up to scrutiny",
        "Integrity: no shortcuts, no pressure tactics",
      ],
      disclaimer:
        "We do not guarantee outcomes \u2014 we deliver compliant guidance and clear next steps based on your profile.",
    },
    graduate_route_section: {
      title: "Orientation Year Residence Permit",
      content:
        "Eligible graduates may be able to apply for an orientation year residence permit after study, subject to conditions and current requirements.",
      eligibility_note:
        "We confirm what applies once your course and provider are confirmed.",
      micro_line:
        "Rules can change. We advise based on requirements in force at the time of your case.",
    },
    costs_planning_section: {
      title: "Costs and planning (Netherlands)",
      description:
        "A Netherlands study plan only works when the finances are realistic and consistent with your overall profile. We help you plan conservatively, document your assumptions, and avoid budgets that look credible on paper but fail in real life.",
      costs_title: "Typical benchmarks and planning notes",
      cost_items: [
        {
          label: "IND study required amount (HBO/university) 2026",
          points: ["EUR 1,130.77 per month"],
        },
        {
          label: "Residence-permit fees and tuition",
          points: [
            "Vary by institution and programme; we confirm the correct category and amounts during case review",
          ],
        },
      ],
      will_wont: {
        title: "What we will do / what we won't do",
        will_do_heading: "What we will do",
        wont_do_heading: "What we won't do",
        rows: [
          {
            will_do:
              "Provide a realistic budget framework tailored to city/province/route",
            wont_do: "Pretend costs are the same everywhere",
          },
          {
            will_do:
              "Confirm current government fees and benchmarks during case review",
            wont_do: "Quote outdated fees as 'guaranteed'",
          },
          {
            will_do:
              "Flag credibility risks early (funding pattern, timelines, consistency)",
            wont_do: "Say 'it will be fine' without evidence",
          },
          {
            will_do:
              "Provide a structured evidence plan aligned to the budget",
            wont_do: "Encourage vague budgets or unexplained funding",
          },
          {
            will_do:
              "Keep advice regulated, accountable, and properly recorded",
            wont_do:
              "Support shortcuts, false documents, or pressure tactics",
          },
        ],
      },
      disclaimer:
        "Final amounts depend on your institution, course level, visa length/route, and current government requirements \u2014 we confirm these during your eligibility review.",
    },
    faq_section: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you guarantee outcomes?",
          answer:
            "No. No credible regulated firm guarantees outcomes. We provide structured, compliant guidance and clear next steps based on your profile.",
        },
        {
          question: "Do I need IELTS/English proof?",
          answer:
            "It depends on the institution and course. We confirm requirements after your eligibility review.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Timelines vary by institution and intake. Shortlists are typically issued within 24\u201348 hours (working days).",
        },
        {
          question: "Can I work while studying?",
          answer:
            "Work permission depends on the route and conditions. We explain what applies once your offer is confirmed.",
        },
        {
          question: "Am I eligible for post-study options?",
          answer:
            "Some applicants may be eligible depending on route and current rules. We confirm once your plan is final.",
        },
      ],
      whatsapp_label: "Ask on WhatsApp",
      whatsapp_link: "https://wa.me/447123456789",
    },
    cta_section: {
      title: "Start with clarity",
      subtitle: "Netherlands Eligibility Check (2 minutes)",
      fields: ["Destination (Netherlands)", "Intake", "WhatsApp"],
      button_label: "Get My Netherlands Shortlist",
      micro_text:
        "Shortlist & next steps typically within 24\u201348 hours (working days).",
      trust_line:
        "Immigration Advice Authority (IAA) Regulated \u2022 Organisation Registration: F202537807 \u2022 128 City Road, London EC1V 2NX \u2022 100+ Google Reviews",
      disclaimer:
        "We provide regulated guidance where required. We do not guarantee outcomes.",
    },
    opportunities_hub_section: {
      title: "Netherlands Opportunities Hub",
      subline:
        "Curated resources and partner options \u2014 your final shortlist depends on your profile and intake.",
      cards: [
        {
          heading: "Partner institutions (Netherlands)",
          text: "Explore a curated list of institutions we work with.",
          cta_label: "View Netherlands partner universities",
          cta_link: "/universities",
        },
        {
          heading: "Scholarships (Netherlands)",
          text: "A practical overview of common scholarship types and eligibility.",
          cta_label: "Explore scholarships",
          cta_link: "/scholarships",
        },
        {
          heading: "Careers & industry insights",
          text: "Which courses lead to which outcomes \u2014 and what's credible for your profile.",
          cta_label: "See career insights",
          cta_link: "/careers",
        },
      ],
      cta_text:
        "Prefer a tailored recommendation? Get your Netherlands shortlist in 2 minutes.",
      cta_button_label: "Get My Netherlands Shortlist",
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "The Netherlands' economy remains highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
      images: [
        { src: "/images/study_destinations/carers1.png", alt: "" },
        { src: "/images/study_destinations/carers2.png", alt: "" },
      ],
    },
    cost_of_study_section: {
      title: "Cost of Education in Netherlands",
      table: [
        {
          education_level: "Tuition Fees (Indicative)",
          cost_range: "EUR 12,000",
        },
        {
          education_level: "Living and Accommodation",
          cost_range: "EUR 12,500",
        },
        { education_level: "Visa Fees", cost_range: "EUR 200" },
        { education_level: "Health Insurance", cost_range: "EUR 700" },
        {
          education_level: "Airfare from Sri Lanka to the Netherlands",
          cost_range: "EUR 800",
        },
      ],
    },
    popular_universities_section: {
      title: "Popular Universities",
      universities: [
        { name: "Our Partner Universities", link: "/universities" },
        { name: "Scholarships in Netherlands", link: "/scholarships" },
      ],
    },
    popular_courses_section: {
      title: "Popular Courses",
      courses: [
        "Art & Design",
        "Business & Management",
        "Engineering & Information Technology",
        "Media & Communication",
        "Sciences",
      ],
    },
    playlistId: "PL3h6N3QJzuI3r8ZqwlAPFTzc4n3E3h9Sd",
  },
  {
    destination: "germany",
    hero_section: {
      title: "Study in the Germany",
      images: [
        { src: "/images/study_destinations/germany/1.jpg", alt: "" },
        { src: "/images/study_destinations/germany/2.jpg", alt: "" },
      ],
      description:
        "Because value destinations still require precision \u2014 you deserve regulated guidance and zero guesswork. Eligibility-led shortlisting and a compliant plan \u2014 from programme selection to visa-ready evidence.",
    },
    why_choose_section: {
      title: "Why Germany?",
      content:
        "Germany is compelling for strong academics and value \u2014 but the evidence plan must be precise, especially around finances and route requirements.",
      bullets: [
        "Academic strength and structured routes",
        "High value in many programmes (route-dependent)",
        "Post-study options may exist depending on conditions",
      ],
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "Blocked account benchmark for 2026 commonly cited: EUR 11,904/year (EUR 992/month)",
        "Prospects after graduation: residence permit up to 18 months to seek qualified employment (conditions apply)",
      ],
      note: "Our Approach: Advice is tailored to your profile \u2014 eligibility first, no guesswork.",
    },
    who_is_it_for_section: {
      title: "Who Germany Is For",
      columns: [
        {
          title: "Best fit",
          variant: "best_fit",
          points: [
            "You want a credible programme aligned to your background and outcomes",
            "You can support a realistic budget and evidence plan",
            "You want a structured process (not 'agent promises')",
          ],
        },
        {
          title: "Profile-dependent",
          variant: "profile_dependent",
          points: [
            "City/province flexibility and programme choice",
            "Funding sources and document history",
            "Timeline alignment to intake and processing",
          ],
        },
        {
          title: "Not recommended",
          variant: "not_recommended",
          points: [
            "You want guarantees rather than a credible plan",
            "Your study logic is unclear or inconsistent",
            "You're relying on unrealistic budgets",
          ],
        },
      ],
    },
    uniguru_method_section: {
      title: "A calm process, built for real outcomes",
      intro:
        "We run a structured process that keeps decisions clear, timelines realistic, and paperwork compliant.",
      steps: [
        {
          step: "Step 1",
          title: "Germany Eligibility Check (2 minutes)",
          description: "Destination, intake, WhatsApp. That's it.",
        },
        {
          step: "Step 2",
          title: "Shortlist + Plan (24\u201348 hours)",
          description:
            "A realistic shortlist based on academic fit, budget, and credibility \u2014 with clear next steps.",
        },
        {
          step: "Step 3",
          title: "Offer/Admission \u2192 Evidence plan",
          description:
            "We guide you through what to prepare, how to present it, and what to avoid \u2014 so your submission is clean and consistent.",
        },
        {
          step: "Step 4",
          title: "Pre-departure readiness",
          description:
            "Accommodation and arrival planning support so you land prepared, not panicked.",
        },
      ],
      micro_line:
        "No pressure. No shortcuts. Just a plan that stands up to scrutiny.",
    },
    iaa_section: {
      title: "Immigration Advice Authority (IAA) Regulated Support",
      registration:
        "Regulated by the Immigration Advice Authority (IAA) - Organisation Registration: F202537807",
      description:
        "When immigration advice is required, we provide guidance that's regulated, accountable, and standards-led. That means clear boundaries, proper record-keeping, and advice you can rely on \u2014 not sales talk.",
      benefits_title: "What this means for you",
      benefits: [
        "Accountability: regulated standards and transparent processes",
        "Clarity: eligibility-led guidance, not vague promises",
        "Compliance-first: documentation planning that stands up to scrutiny",
        "Integrity: no shortcuts, no pressure tactics",
      ],
      disclaimer:
        "We do not guarantee outcomes \u2014 we deliver compliant guidance and clear next steps based on your profile.",
    },
    graduate_route_section: {
      title: "Post-Study Residence Permit (Germany)",
      content:
        "Eligible graduates may have the possibility of obtaining a residence permit valid for up to 18 months to look for qualified employment, subject to conditions.",
      eligibility_note:
        "We confirm what applies based on your route and local requirements.",
      micro_line:
        "Rules can change. We advise based on requirements in force at the time of your case.",
    },
    costs_planning_section: {
      title: "Costs and planning (Germany)",
      description:
        "A Germany study plan only works when the finances are realistic and consistent with your overall profile. We help you plan conservatively, document your assumptions, and avoid budgets that look credible on paper but fail in real life.",
      costs_title: "Typical benchmarks (planning guide)",
      cost_items: [
        {
          label: "Financial proof (blocked account benchmark)",
          points: [
            "EUR 11,904/year (EUR 992/month) is commonly cited for 2026",
          ],
        },
        {
          label: "Living costs and tuition/semester contributions",
          points: [
            "Vary by city, institution and state; we confirm the correct requirements and budget assumptions after eligibility and shortlist",
          ],
        },
      ],
      will_wont: {
        title: "What we will do / what we won't do",
        will_do_heading: "What we will do",
        wont_do_heading: "What we won't do",
        rows: [
          {
            will_do:
              "Provide a realistic budget framework tailored to city/province/route",
            wont_do: "Pretend costs are the same everywhere",
          },
          {
            will_do:
              "Confirm current government fees and benchmarks during case review",
            wont_do: "Quote outdated fees as 'guaranteed'",
          },
          {
            will_do:
              "Flag credibility risks early (funding pattern, timelines, consistency)",
            wont_do: "Say 'it will be fine' without evidence",
          },
          {
            will_do:
              "Provide a structured evidence plan aligned to the budget",
            wont_do: "Encourage vague budgets or unexplained funding",
          },
          {
            will_do:
              "Keep advice regulated, accountable, and properly recorded",
            wont_do:
              "Support shortcuts, false documents, or pressure tactics",
          },
        ],
      },
      disclaimer:
        "Final amounts depend on your institution, course level, visa length/route, and current government requirements \u2014 we confirm these during your eligibility review.",
    },
    faq_section: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you guarantee outcomes?",
          answer:
            "No. No credible regulated firm guarantees outcomes. We provide structured, compliant guidance and clear next steps based on your profile.",
        },
        {
          question: "Do I need IELTS/English proof?",
          answer:
            "It depends on the institution and course. We confirm requirements after your eligibility review.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Timelines vary by institution and intake. Shortlists are typically issued within 24\u201348 hours (working days).",
        },
        {
          question: "Can I work while studying?",
          answer:
            "Work permission depends on the route and conditions. We explain what applies once your offer is confirmed.",
        },
        {
          question: "Am I eligible for post-study options?",
          answer:
            "Some applicants may be eligible depending on route and current rules. We confirm once your plan is final.",
        },
      ],
      whatsapp_label: "Ask on WhatsApp",
      whatsapp_link: "https://wa.me/447123456789",
    },
    cta_section: {
      title: "Start with clarity",
      subtitle: "Germany Eligibility Check (2 minutes)",
      fields: ["Destination (Germany)", "Intake", "WhatsApp"],
      button_label: "Get My Germany Shortlist",
      micro_text:
        "Shortlist & next steps typically within 24\u201348 hours (working days).",
      trust_line:
        "Immigration Advice Authority (IAA) Regulated \u2022 Organisation Registration: F202537807 \u2022 128 City Road, London EC1V 2NX \u2022 100+ Google Reviews",
      disclaimer:
        "We provide regulated guidance where required. We do not guarantee outcomes.",
    },
    opportunities_hub_section: {
      title: "Germany Opportunities Hub",
      subline:
        "Curated resources and partner options \u2014 your final shortlist depends on your profile and intake.",
      cards: [
        {
          heading: "Partner institutions (Germany)",
          text: "Explore a curated list of institutions we work with.",
          cta_label: "View Germany partner universities",
          cta_link: "/universities",
        },
        {
          heading: "Scholarships (Germany)",
          text: "A practical overview of common scholarship types and eligibility.",
          cta_label: "Explore scholarships",
          cta_link: "/scholarships",
        },
        {
          heading: "Careers & industry insights",
          text: "Which courses lead to which outcomes \u2014 and what's credible for your profile.",
          cta_label: "See career insights",
          cta_link: "/careers",
        },
      ],
      cta_text:
        "Prefer a tailored recommendation? Get your Germany shortlist in 2 minutes.",
      cta_button_label: "Get My Germany Shortlist",
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "Germany's economy remains highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
      images: [
        { src: "/images/study_destinations/carers1.png", alt: "" },
        { src: "/images/study_destinations/carers2.png", alt: "" },
      ],
    },
    cost_of_study_section: {
      title: "Cost of Education in Germany",
      table: [
        {
          education_level: "Tuition Fees (Indicative)",
          cost_range: "EUR 3,500",
        },
        {
          education_level: "Living and Accommodation",
          cost_range: "EUR 11,000",
        },
        { education_level: "Visa Fees", cost_range: "EUR 100" },
        { education_level: "Health Insurance", cost_range: "EUR 1,300" },
        {
          education_level: "Airfare from Sri Lanka to the Germany",
          cost_range: "EUR 800",
        },
      ],
    },
    popular_universities_section: {
      title: "Popular Universities",
      universities: [
        { name: "Our Partner Universities", link: "/universities" },
        { name: "Scholarships in Germany", link: "/scholarships" },
      ],
    },
    popular_courses_section: {
      title: "Popular Courses",
      courses: [
        "Art & Design",
        "Business & Management",
        "Engineering & Information Technology",
        "Media & Communication",
        "Sciences",
      ],
    },
    playlistId: "PL3h6N3QJzuI2vFSYfPz-x_gh4JW6gpROV",
  },
];

export const SCHOLARSHIPS = [
  {
    name: "Scholarship to the Canada",
    src: "/flags/canada.png",
    country: "Canada",
  },
  {
    name: "Scholarship to the UK",
    src: "/flags/uk.png",
    country: "UK",
  },
  {
    name: "Scholarship to the Australia",
    src: "/flags/australia.png",
    country: "Australia",
  },
  {
    name: "Scholarship to the Netherlands",
    src: "/flags/netherlands.png",
    country: "Netherlands",
  },
  {
    name: "Scholarship to the Germany",
    src: "/flags/germany.png",
    country: "Germany",
  },
];
