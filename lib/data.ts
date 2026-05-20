export const siteConfig = {
  name: "Daniel Lee",
  role: "Senior Full Stack Developer",
  location: "Shanghai, China",
  description:
    "Accomplished Full Stack Developer with expertise in web and mobile applications using React, Next.js, Vue.js, Laravel, Django, Java, .NET, Golang, Ruby, React Native, and Flutter, delivering scalable, high-performance solutions.",
  url: "https://t.me/dragon997700",
  email: "devdaniel223@gmail.com",
  socials: {
    telegram: "https://t.me/dragon997700",
  },
};

export const skills = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Express",
  "Laravel",
  "Django",
  "Python",
  "Ruby on Rails",
  "PHP",
  "Java",
  ".NET",
  "Golang",
  "React Native",
  "Flutter",
  "TypeScript",
  "JavaScript",
  "SQL",
  "NoSQL",
  "GraphQL",
  "REST APIs",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Redis",
  "RabbitMQ",
  "Kafka",
  "gRPC",
  "CI/CD",
];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  year: string;
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    title: "E-Commerce Web & Mobile Platform",
    description:
      "Led full-stack architecture and development for an e-commerce platform with React, Next.js, Vue.js, Laravel, Django, and React Native, integrating RESTful APIs, GraphQL, real-time notifications, and seamless mobile/desktop experience.",
    tags: ["React", "Next.js", "Vue.js", "Laravel", "Django", "React Native", "AWS", "Docker", "Kafka", "RabbitMQ", "gRPC"],
    href: "https://www.parkengage.com/",
    year: "2025",
    images: [
      { src: "/projects/parkengage/01.jpg", alt: "ParkEngage homepage hero — touchless parking" },
      { src: "/projects/parkengage/02.jpg", alt: "ParkEngage product suite overview" },
      { src: "/projects/parkengage/03.jpg", alt: "ParkEngage contact and demo request" },
    ],
  },
  {
    title: "Healthcare Enterprise Application",
    description:
      "Developed dynamic front-end using Angular and React with Laravel/PHP backends, optimized database operations with MySQL and Redis, and implemented GitLab CI/CD pipelines for robust enterprise-scale healthcare solutions.",
    tags: ["Angular", "React", "Laravel", "PHP", "MySQL", "Redis", "GCP", "GitLab CI/CD"],
    href: "https://www.dayforce.com/",
    year: "2024",
    images: [
      { src: "/projects/dayforce/01.jpg", alt: "Dayforce homepage hero — Lighten the load" },
      { src: "/projects/dayforce/02.jpg", alt: "Dayforce AI-powered people platform" },
      { src: "/projects/dayforce/03.jpg", alt: "Dayforce HR feature breakdown" },
    ],
  },
  {
    title: "Job Matching Web Platform",
    description:
      "Built full-stack web application with React, Django, Node.js, and Go, integrating REST APIs, microservices, and third-party services (LinkedIn, Google) to provide real-time job matching and user engagement.",
    tags: ["React", "Django", "Node.js", "Go", "REST APIs", "Bootstrap", "Git"],
    href: "http://www.yahooinc.com",
    year: "2022",
    images: [
      { src: "/projects/yahoo/01.jpg", alt: "Yahoo Inc. homepage — a nice place to stay on the Internet" },
      { src: "/projects/yahoo/02.jpg", alt: "Yahoo core offerings — Ads, DSP, and Search" },
    ],
  },
  {
    title: "Custom Client Web Applications",
    description:
      "Developed responsive user interfaces and backend APIs with Python, PHP, HTML, CSS, JavaScript, and jQuery, ensuring scalability, security, and maintainable architecture for enterprise clients.",
    tags: ["Python", "PHP", "JavaScript", "HTML", "CSS", "jQuery", "REST APIs"],
    href: "http://www.aptean.com",
    year: "2018",
    images: [
      { src: "/projects/aptean/01.jpg", alt: "Aptean AppCentral platform — run your operation in one place" },
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Parkengage",
    period: "10/2024 — 02/2026",
    description:
      "Led architectural design and full-stack implementation of web and mobile e-commerce platform. Integrated React, Next.js, Vue.js frontends with Laravel/Django backends. Managed AWS deployment, CI/CD pipelines, Kafka/RabbitMQ messaging, and gRPC for inter-service communication.",
    stack: ["React", "Next.js", "React Native", "Vue.js", "Laravel", "Django", "AWS", "Docker", "Kafka", "RabbitMQ", "gRPC"],
  },
  {
    role: "Full Stack Developer",
    company: "Ceridian",
    period: "06/2022 — 08/2024",
    description:
      "Built healthcare enterprise applications with Angular, React, and Laravel/PHP backends. Optimized MySQL database and Redis caching. Established GitLab CI/CD pipelines and cloud deployment on GCP, supporting TDD and high availability.",
    stack: ["Angular", "React", "Laravel", "PHP", "MySQL", "Redis", "GCP", "GitLab CI/CD"],
  },
  {
    role: "Web Developer",
    company: "Yahoo",
    period: "10/2018 — 05/2022",
    description:
      "Developed web platform with React, Django, Node.js, Go, Ruby, Bootstrap, and REST APIs. Integrated third-party services (LinkedIn/Google), microservices architecture, and optimized performance and responsive design.",
    stack: ["React", "Django", "Node.js", "Go", "Ruby", "Bootstrap", "REST APIs", "Git"],
  },
  {
    role: "Junior Software Developer",
    company: "Aptean",
    period: "07/2015 — 05/2018",
    description:
      "Implemented full-stack features using Python, PHP, JavaScript, HTML/CSS, jQuery. Built RESTful APIs, responsive UI, caching, security protocols, testing, and cloud deployment for enterprise client applications.",
    stack: ["Python", "PHP", "JavaScript", "HTML", "CSS", "jQuery", "REST APIs"],
  },
];

export type EducationEntry = {
  school: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  description?: string;
};

export const education: EducationEntry[] = [
  {
    school: "Shanghai Jiao Tong University",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    location: "Shanghai, China",
    period: "2011 — 2014",
    description:
      "Studied computer science fundamentals: algorithms, data structures, operating systems, databases, and software engineering. Built early full-stack projects that grew into a career in web and mobile development.",
  },
];