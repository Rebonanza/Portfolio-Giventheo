import type { Project } from '@type/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'CRM (Internal System)',
    description:
      'A comprehensive Customer Relationship Management system designed for internal operations. Features advanced project tracking, company management dashboard with multiple user roles, and streamlined workflow management for technical teams.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    imageUrl: '/images/project1.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
    category: 'Internal Management System',
  },
  {
    id: '2',
    title: 'PMB Website - APTA Yogyakarta',
    description:
      'Official New Student Admission (Penerimaan Mahasiswa Baru) website for Akademi Pertanian Yogyakarta. Features online registration system, program study information, fee details, contact portal, and institutional gallery.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/project2.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
    category: 'Educational Platform',
  },
  {
    id: '3',
    title: 'POS System',
    description:
      'A comprehensive Point of Sale system featuring detailed data dashboard for retail and stock management. Includes sales tracking, purchase management, stock transfers, expense tracking, stock opname, net profit reporting, and multi-store management.',
    technologies: ['Laravel', 'MySQL', 'Vue.js', 'Chart.js'],
    imageUrl: '/images/project3.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
    category: 'Retail Management',
  },
  {
    id: '4',
    title: 'JAFF Market',
    description:
      'Official website for "The Biggest Film Market & Exhibition in Indonesia" as part of the JAFF Filmfest ecosystem. Features event registration, exhibition details, and financial partner integration (Powered by Amar Bank).',
    technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
    imageUrl: '/images/project4.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
    category: 'Event Portal',
  },
  {
    id: '5',
    title: 'Website Resmi Bapenda Halbar',
    description:
      'Official government portal for the Regional Revenue Agency (Badan Pendapatan Daerah) of Halmahera Barat Regency. Features public information management, departmental data publication, news system, and secure login portal for official use.',
    technologies: ['Laravel', 'Bootstrap', 'MySQL', 'PHP'],
    imageUrl: '/images/project5.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
    category: 'Government Portal',
  },
  {
    id: '6',
    title: 'Nihonggo with Titachi',
    description:
      'Educational platform and landing page for learning Japanese language. Features level-based learning modules with focus on JLPT N3 certification, discussion-based learning approach, and options for exclusive or private classes.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/project6.jpg',
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
    category: 'Educational Platform',
  },
];
