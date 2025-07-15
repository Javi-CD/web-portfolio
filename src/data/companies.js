export const companies = [
  {
    id: 1,
    name: 'Grupo Dk Soluciones',
    role: 'Backend Developer',
    period: '2025 - Present',
    description:
      'Development of robust and scalable backend applications. Creation of REST APIs, process automation, and database management.',
    technologies: [
      'Python',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Next.js',
      'Flask',
      'FastAPI',
      'SQLite',
      'Git',
      'Vercel',
      'Railway',
    ],
    type: '5 Hours',
    location: 'Barranquilla, Colombia',
    website: 'https://dksoluciones.com.co',
    projects: [
      'WhatsAppBlitz',
      'Notebook-DK',
      'link_shortener',
      'dinamica-apoya-gana',
      'dinamica-dk',
    ],
    achievements: [
      'Development of a personalized mass messaging system',
      'REST API Implementation',
      'Business process automation',
    ],
  },
  //   {
  //     id: 2,
  //     name: '',
  //     role: '',
  //     period: '',
  //     description:''
  //     technologies: [ ],
  //     type: 'Freelance',
  //     location: 'Remote',
  //     website: null,
  //     projects: [ ],
  //     achievements: [ ],
  //   },
];

// Function to obtain companies by type
export const getCompaniesByType = (type) => {
  return companies.filter((company) => company.type === type);
};

// Function to get company by ID
export const getCompanyById = (id) => {
  return companies.find((company) => company.id === id);
};
