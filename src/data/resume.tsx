import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Sanjay M',
  initials: 'SM',
  url: 'https://github.com/SanjayM-2002/SanjayM-2002',
  location: 'Kerala, India',
  locationLink: 'https://maps.app.goo.gl/CK7zWGu7A4XUohUK7',
  description: 'A Passionate Full Stack Developer.',
  summary:
    "A full stack developer with a passion for building scalable and user-friendly web applications. I'm a self-driven, passionate programmer with a deep interest in problem-solving and creating innovative solutions. With a solid foundation in both frontend and backend technologies, I thrive on turning complex challenges into streamlined, efficient applications.",

  avatarUrl: 'Sanjay_Pic.jpg',
  skills: {
    part1: ['C++', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    part2: ['Node.js', 'Express.js', 'React.js', 'Next.js', 'Hono'],
    part3: ['MongoDB', 'PostgreSQL', 'Redis', 'Kafka'],
    part4: ['Git', 'Docker', 'AWS', 'Nginx', 'Prisma'],
  },

  navbar: [{ href: '/#', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: 'sanjaym2202@gmail.com',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/SanjayM-2002',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sanjay-m-74a123240/',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/Sanjayowski',
        icon: Icons.x,
        navbar: true,
      },

      Resume: {
        name: 'Resume',
        url: 'https://drive.google.com/file/d/1Nc-Xptw1HRfiIvS-u7G6gD9NuFYKDLZM/view',
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'Alts Wealth',
      href: '',
      badges: [],
      location: 'Bangalore',
      title: 'Software Developer',
      logoUrl: 'AltsLogo.png',
      start: 'July 2023',
      end: 'Dec 2023',
      points: [
        'Spearheaded the design and development of two fintech applications, including a Digital Will app and a Portfolio Review platform',
        'Developed intuitive screens and forms for user onboarding, personal details, beneficiary information, and asset and liability details, and implemented data visualization features for user portfolio analysis in React Native',
        'Implemented CRUD operations in the user manager service, improving backend functionality and user management',
        'Addressed and resolved 40% of reported bugs promptly, improving application quality and stability',
      ],
      description: '',
    },
  ],

  coursework: [
    {
      course: 'Full Stack + DevOps',
      provider: '100xDevs',
      href: 'https://100xdevs.com/',
      logoUrl: '/100xdevs.jpg',
      description:
        'Comprehensive full-stack development and DevOps course covering advanced topics',
      skills: [
        'TypeScript',
        'Next.js',
        'Serverless',
        'Cloudflare',
        'Kubernetes',
        'Socket.io',
        'WebRTC',
        'tRPC',
        'Redis',
        'Docker',
        'PostgreSQL',
        'Prisma',
        'OpenAPI',
        'DDoS prevention',
        'Rate limiting',
        'PubSub',
        'Kafka',
      ],
      start: 'Jan 2024',
      end: 'Aug 2024',
    },
    {
      course: 'Full Stack Web Development',
      provider: 'PW Skills',
      href: 'https://pwskills.com/',
      logoUrl: '/pwskills.jpg',
      description:
        'In-depth full-stack web development course with emphasis on project building and understanding complex codebases',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Redux',
        'JWT',
        'RESTful APIs',
      ],
      start: 'Feb 2023',
      end: 'Nov 2023',
    },
    {
      course: 'MERN Stack Development',
      provider: 'Coding Shuttle',
      href: 'https://www.codingshuttle.com/',
      logoUrl: '/codingshuttle.png',
      description:
        'Comprehensive MERN stack course covering front-end and back-end technologies',
      skills: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Redux Toolkit',
        'Cloudinary',
        'MVC Architecture',
      ],
      start: 'Nov 2022',
      end: 'March 2023',
    },
  ],
  achievements: [
    {
      key: 1,
      img: '/lcLogo.png',
      description:
        'Secured Global Rank 98 in Leetcode Biweekly Contest 133 among 35000 participants',
    },
    {
      key: 2,
      img: '/lcLogo.png',
      description:
        'Secured Global Rank 550 in Leetcode Biweekly Contest 131 among 30000 participants',
    },
  ],
  projects: [
    {
      title: 'Huddle',
      href: 'https://huddle-nu-ochre.vercel.app/',
      dates: 'May 2024 - June 2024',
      active: false,
      points: [
        'Developed a video conferencing application, providing users with a seamless experience for conducting virtual meetings',
        'Utilized Next.js and TypeScript along with Shadcn and TailwindCSS for responsive and modern UI design',
        'Integrated Clerk for secure user authentication, supporting social sign-in and traditional email/password methods, while managing user access levels and permissions within the platform',
        'Leveraged GetStream SDK for video conferencing and implemented features like instant meetings, scheduled meetings, and viewing past meetings',
      ],
      description: '',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Shadcn UI',
        'Clerk',
        'GetStreamSDK',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://huddle-nu-ochre.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/SanjayM-2002/huddle',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://sanjay-projects.s3.ap-south-1.amazonaws.com/demo-videos/huddle_demo.mp4',
    },
    {
      title: 'Connectify',
      href: 'https://github.com/SanjayM-2002/connectify',
      dates: 'Jan 2024 - Feb 2024',
      active: false,
      points: [
        'Built a full-stack social media platform inspired by Threads, replicating core functionalities and user experience',
        'Utilized a tech stack comprising Node.js and Express.js for the backend, React.js for the frontend, and MongoDB for the database',
        'Implemented key features such as post creation, liking, replying, follow/unfollow, and a feed page',
        'Leveraged Cloudinary for image management, enabling users to share image in posts',
        'Employed Recoil for efficient frontend state management, ensuring optimal data flow and component synchronization',
        'Integrated real-time chat functionality within the application using Socket.IO for seamless communication',
      ],
      description: '',
      technologies: [
        'Node.js',
        'Express.js',
        'React.js',
        'MongoDB',
        'Cloudinary',
        'Socket.IO',
        'Recoil',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/SanjayM-2002/connectify',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://sanjay-projects.s3.ap-south-1.amazonaws.com/demo-videos/connectify_demo.mp4',
    },
    {
      title: 'Chat App',
      href: 'https://github.com/SanjayM-2002/ChatApp',
      dates: 'Feb 2024 - March 2024',
      active: false,
      points: [
        'Developed a scalable real-time chat application',
        'Utilized Node.js and Next.js for the backend and frontend respectively, along with PostgreSQL for data storage',
        'Leveraged Redis to address scalability challenges, facilitating seamless communication between servers by routing incoming messages to a Redis Cluster and utilizing Socket.IO for real-time bidirectional event-based communication, ensuring uninterrupted user interactions across multiple server instances',
        'Integrated Kafka to effectively handle high message volume and user activity, utilizing its capabilities as a message broker to efficiently manage incoming messages, reducing strain on the database and ensuring optimal performance during peak usage periods',
      ],
      description: '',
      technologies: [
        'Node.js',
        'Next.js',
        'PostgreSQL',
        'Redis',
        'Kafka',
        'Socket.IO',
        'Prisma',
        'Turborepo',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/SanjayM-2002/ChatApp',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/chatApp.png',
      video: '',
    },
    {
      title: 'V-Tube',
      href: 'https://github.com/SanjayM-2002/vtube',
      dates: 'July 2024 - Aug 2024',
      active: false,
      points: [
        'Developed a video processing and streaming system with multiple services, handling video upload, transcoding, and delivery efficiently',
        'Built a Next.js client to stream videos and integrated NextAuth to restrict uploads to authenticated users',
        'Developed a Upload Service using Node.js which uploads videos to AWS S3, records metadata in PostgreSQL, and publishes it to a Kafka queue',
        'Designed a Transcode Service which consumes message from Kafka, transcodes video using ffmpeg into multiple HLS resolutions, uploads back to S3 and updates the database',
      ],
      description: '',
      technologies: [
        'Node.js',
        'Next.js',
        'PostgreSQL',
        'Kafka',
        'S3',
        'Prisma',
        'NextAuth',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/SanjayM-2002/vtube',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video:
        'https://sanjay-projects.s3.ap-south-1.amazonaws.com/demo-videos/vtube_demo.mp4',
    },
  ],
};
