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

export const STUDY_DESTINATIONS_FULLDATA = [
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
        "Start your study journey in a global career hub. Our study consultants are here to guide you through every step of the way to help you choose the perfect course, university, and destination suited to your academic and career aspirations.",
    },
    why_choose_section: {
      title: "Why Choose Canada for Higher Education?",
      content:
        "Studying in Canada in 2024 means learning from some of the world’s best academics and experts. Canadian universities are known for their exceptional academic support and state-of-the-art technology. Students benefit from strong industry links, gaining access to placements, internships, and volunteering positions that provide real-world professional experience. Graduates from Canadian universities are highly sought after by employers worldwide.",
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "Canada conducts a significant portion of the world’s scientific research and produces numerous frequently cited papers.",
        "Over 500,000 international students are welcomed each year.",
        "A post-study work visa allows graduates to stay and work in Canada for up to 3 years.",
        "Many top universities and student cities are located in Canada.",
        "Universities of international repute are available.",
        "Admission without IELTS is possible in certain cases.",
        "Masters courses with 1-year work placements are available.",
      ],
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "Canada’s economy continues to be highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
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
        "With an academic reputation built on centuries-old heritage, the UK is home to some of the world’s oldest and most prestigious universities. Known for their consistent high rankings and rich legacy of welcoming international students, UK universities offer an unforgettable student experience, catering well to the needs and aspirations of their students.",
    },
    why_choose_section: {
      title: "Why Choose the UK for Higher Education?",
      content:
        "Studying in the UK means learning from some of the world’s best academics and experts. UK universities are known for their exceptional academic support and state-of-the-art technology. Students benefit from strong industry links, gaining access to placements, internships, and volunteering positions that provide real-world professional experience. Graduates from UK universities are highly sought after by employers worldwide.",
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "The UK conducts 5% of the world’s scientific research and produces 14% of the world’s most frequently cited papers.",
        "Over 400,000 international students are welcomed to the UK each year.",
        "A post-study work visa allows graduates to stay and work in the UK for 2 years.",
        "12 of the world’s top 100 universities are in the UK (QS World Rankings 2023)..",
        "14 of the best student cities in the world are in the UK (QS Best Student Cities 2023).",
        "The UK offers 131 internationally reputed universities.",
        "Admission without IELTS is possible.",
        "Masters courses with 1-year work placements are available.",
      ],
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "The UK’s economy is one of the most globalized in the world, comprising England, Scotland, Wales, and Northern Ireland. Dominated by sectors such as services, financial services, higher education, aerospace, pharmaceuticals, and manufacturing, the UK offers a wide range of lucrative career opportunities. Top-paying jobs include roles in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
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
        "Australia continues to be home to some of the world’s oldest and most prestigious universities. Known for their consistent high rankings and rich legacy of welcoming international students, Australian universities offer an unforgettable student experience, catering well to the needs and aspirations of their students.",
    },
    why_choose_section: {
      title: "Why Choose Australia for Higher Education?",
      content:
        "Studying in Australia in 2024 means learning from some of the world’s best academics and experts. Australian universities are known for their exceptional academic support and state-of-the-art technology. Students benefit from strong industry links, gaining access to placements, internships, and volunteering positions that provide real-world professional experience. Graduates from Australian universities are highly sought after by employers worldwide.",
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "Australia conducts a significant portion of the world’s scientific research and produces numerous frequently cited papers.",
        "Over 450,000 international students are welcomed each year.",
        "A post-study work visa allows graduates to stay and work in Australia for up to 4 years.",
        "Many top universities and student cities are located in Australia.",
        "Universities of international repute are available.",
        "Admission without IELTS is possible in certain cases.",
        "Masters courses with 1-year work placements are available.",
      ],
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "Australia’s economy remains highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
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
        "The Netherlands remains known for its high-quality education system and welcoming attitude towards international students. Dutch universities consistently rank among the best in the world, offering an unforgettable student experience that caters to the needs and aspirations of their students.",
    },
    why_choose_section: {
      title: "Why Choose the Netherlands for Higher Education?",
      content:
        "Studying in the Netherlands in 2024 means learning from some of the world’s best academics and experts. Dutch universities are known for their exceptional academic support and state-of-the-art technology. Students benefit from strong industry links, gaining access to placements, internships, and volunteering positions that provide real-world professional experience. Graduates from Dutch universities are highly sought after by employers worldwide.",
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "The Netherlands conducts a significant portion of the world’s scientific research and produces numerous frequently cited papers.",
        "Over 300,000 international students are welcomed each year.",
        "A post-study work visa allows graduates to stay and work in the Netherlands for up to 2 years.",
        "Many top universities and student cities are located in the Netherlands.",
        "Universities of international repute are available.",
        "Admission without IELTS is possible in certain cases.",
        "Masters courses with 1-year work placements are available.",
      ],
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "The Netherlands’ economy remains highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
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
        "Germany remains renowned for its high-quality education system and welcoming attitude towards international students. German universities consistently rank among the best in the world, offering an unforgettable student experience that caters to the needs and aspirations of their students.",
    },
    why_choose_section: {
      title: "Why Choose Germany for Higher Education?",
      content:
        "Studying in Germany in 2024 means learning from some of the world’s best academics and experts. German universities are known for their exceptional academic support and state-of-the-art technology. Students benefit from strong industry links, gaining access to placements, internships, and volunteering positions that provide real-world professional experience. Graduates from German universities are highly sought after by employers worldwide.",
    },
    quick_facts_section: {
      title: "Quick Facts",
      facts: [
        "Germany conducts a significant portion of the world’s scientific research and produces numerous frequently cited papers.",
        "Over 350,000 international students are welcomed each year.",
        "A post-study work visa allows graduates to stay and work in Germany for up to 18 months.",
        "Many top universities and student cities are located in Germany.",
        "Universities of international repute are available.",
        "Admission without IELTS is possible in certain cases.",
        "Masters courses with 1-year work placements are available.",
      ],
    },
    careers_insights_section: {
      title: "Careers & Industry Insights",
      content:
        "Germany’s economy remains highly globalized and diverse, with leading sectors including service industries, financial services, higher education, aerospace, pharmaceuticals, manufacturing, and production. Top-paying jobs are found in Information Technology, Engineering, Business and Financial Management, Legal professions, Aviation, Higher Education, and Medicine.",
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
