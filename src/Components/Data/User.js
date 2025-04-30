// src/data/users.js
export const users = [
  {
    id: 1,
    name: "Mr A",
    avatar: "/images/profile.png",
    title: "Co-Founder & CEO @Vertx",
    verified: true,
    tag: "Entrepreneur",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mra",
      twitter: "https://twitter.com/mra",
      email: "mailto:mra@example.com"
    },
    foundedCompanies: [
      {
        id: 1,
        name: "Vertx",
        logo: "/images/vertx-logo.png",
        tag: "Web3",
        foundedYear: "2025",
        industry: "Fintech"
      },
      {
        id: 2,
        name: "Company X",
        logo: "/images/company-logo.png",
        tag: "PROPRIETOR",
        details: "Details/Information",
        acquired: "like acquired/exit/m&a"
      }
    ],
    experience: [
      { id: 1, name: "Company 1", logo: "/images/company1.png" },
      { id: 2, name: "Company 2", logo: "/images/company2.png" },
      { id: 3, name: "Company 3", logo: "/images/company3.png" }
    ]
  },
  {
    id: 2,
    name: "Mr B",
    avatar: "/images/profile.png",
    title: "Founder @Innovate",
    verified: false,
    tag: "Innovator",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mrb",
      twitter: "https://twitter.com/mrb",
      email: "mailto:mrb@example.com"
    },
    foundedCompanies: [
      {
        id: 1,
        name: "Innovate",
        logo: "/images/innovate-logo.png",
        tag: "Tech",
        foundedYear: "2022",
        industry: "Software"
      }
    ],
    experience: [
      { id: 1, name: "Tech Corp", logo: "/images/techcorp.png" },
      { id: 2, name: "NextGen", logo: "/images/nextgen.png" }
    ]
  },
  {
    id: 3,
    name: "Mr C",
    avatar: "/images/profile.png",
    title: "Chief Technology Officer @DevCo",
    verified: true,
    tag: "Tech Leader",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mrc",
      twitter: "https://twitter.com/mrc",
      email: "mailto:mrc@example.com"
    },
    foundedCompanies: [],
    experience: [
      { id: 1, name: "Tech Innovators", logo: "/images/tech-innovators.png" },
      { id: 2, name: "DevWorld", logo: "/images/devworld.png" }
    ]
  },
  {
    id: 4,
    name: "Ms D",
    avatar: "/images/profile.png",
    title: "VP of Marketing @MarketLeaders",
    verified: false,
    tag: "Marketing Expert",
    socialLinks: {
      linkedin: "https://linkedin.com/in/msd",
      twitter: "https://twitter.com/msd",
      email: "mailto:msd@example.com"
    },
    foundedCompanies: [],
    experience: [
      { id: 1, name: "AdVantage", logo: "/images/advantage.png" },
      { id: 2, name: "Brandify", logo: "/images/brandify.png" }
    ]
  },
  {
    id: 5,
    name: "Mr E",
    avatar: "/images/profile.png",
    title: "Founder @GreenTech",
    verified: true,
    tag: "Environmental Advocate",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mre",
      twitter: "https://twitter.com/mre",
      email: "mailto:mre@example.com"
    },
    foundedCompanies: [
      {
        id: 1,
        name: "GreenTech",
        logo: "/images/greentech-logo.png",
        tag: "Sustainability",
        foundedYear: "2020",
        industry: "Green Tech"
      }
    ],
    experience: []
  },
  {
    id: 6,
    name: "Ms F",
    avatar: "/images/profile.png",
    title: "Chief Product Officer @Productify",
    verified: false,
    tag: "Product Manager",
    socialLinks: {
      linkedin: "https://linkedin.com/in/msf",
      twitter: "https://twitter.com/msf",
      email: "mailto:msf@example.com"
    },
    foundedCompanies: [],
    experience: [
      { id: 1, name: "Product Experts", logo: "/images/product-experts.png" }
    ]
  },
  {
    id: 7,
    name: "Mr G",
    avatar: "/images/profile.png",
    title: "Director of Operations @OpCo",
    verified: true,
    tag: "Operations Guru",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mrg",
      twitter: "https://twitter.com/mrg",
      email: "mailto:mrg@example.com"
    },
    foundedCompanies: [],
    experience: [
      { id: 1, name: "Op Solutions", logo: "/images/opsolutions.png" }
    ]
  },
  {
    id: 8,
    name: "Ms H",
    avatar: "/images/profile.png",
    title: "Co-Founder & CEO @HealthTech",
    verified: false,
    tag: "Health Innovator",
    socialLinks: {
      linkedin: "https://linkedin.com/in/msh",
      twitter: "https://twitter.com/msh",
      email: "mailto:msh@example.com"
    },
    foundedCompanies: [
      {
        id: 1,
        name: "HealthTech",
        logo: "/images/healthtech-logo.png",
        tag: "Healthcare",
        foundedYear: "2019",
        industry: "HealthTech"
      }
    ],
    experience: []
  },
  {
    id: 9,
    name: "Mr I",
    avatar: "/images/profile.png",
    title: "Product Lead @Appify",
    verified: true,
    tag: "Product Strategist",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mri",
      twitter: "https://twitter.com/mri",
      email: "mailto:mri@example.com"
    },
    foundedCompanies: [],
    experience: [
      { id: 1, name: "Tech Innovators", logo: "/images/tech-innovators.png" }
    ]
  },
  {
    id: 10,
    name: "Mr J",
    avatar: "/images/profile.png",
    title: "Founder @FinTechX",
    verified: false,
    tag: "FinTech Expert",
    socialLinks: {
      linkedin: "https://linkedin.com/in/mrj",
      twitter: "https://twitter.com/mrj",
      email: "mailto:mrj@example.com"
    },
    foundedCompanies: [
      {
        id: 1,
        name: "FinTechX",
        logo: "/images/fintechx-logo.png",
        tag: "FinTech",
        foundedYear: "2021",
        industry: "FinTech"
      }
    ],
    experience: []
  }
];

export const getUserById = (id) => {
  return users.find(user => user.id === parseInt(id)) || null;
};
