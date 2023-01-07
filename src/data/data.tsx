import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/harshpic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template - Harsh Muriki',
  description: "Example site built with Venkata Harsh Suhith Muriki's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
// const images = [
//   'src/images/harshpic.jpg',
//   'src/images/profilepic.jpg',
//   'src/images/harshpic.jpg',
//   // add more images here
// ];

// const MyImageScroll = () => (
//   <ImageScroll images={images} />
// );

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Harsh Muriki.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student at Georgia Institute Of Technology{' '}
        <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working as a Software Intern
        at <strong className="text-stone-100">Appian</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am interested in the fields of Roboitics and Computer Vision. Check out a few of my current projects and works{' '}
        <strong className="text-stone-100">here!</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/static/Resume_Harsh_Muriki_SWE.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Atlanta, USA', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Computer Vision, Photography, Robotics, Figure Skating', Icon: SparklesIcon},
    {label: 'Study', text: 'Georgia Institute Of Technology', Icon: AcademicCapIcon},
    {label: 'Employment (Summer 2023 Intern)', text: 'Appian', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      //       {
      //         name: 'French',
      //         level: 4,
      //       },
      //       {
      //         name: 'Spanish',
      //         level: 3,
      //       },
    ],
    //   },
    //   {
    //     name: 'Frontend development',
    //     skills: [
    //       {
    //         name: 'React',
    //         level: 9,
    //       },
    //       {
    //         name: 'Typescript',
    //         level: 7,
    //       },
    //       {
    //         name: 'GraphQL',
    //         level: 6,
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Backend development',
    //     skills: [
    //       {
    //         name: 'Node.js',
    //         level: 8,
    //       },
    //       {
    //         name: 'Rust',
    //         level: 5,
    //       },
    //       {
    //         name: 'Golang',
    //         level: 4,
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Mobile development',
    //     skills: [
    //       {
    //         name: 'React Native',
    //         level: 9,
    //       },
    //       {
    //         name: 'Flutter',
    //         level: 4,
    //       },
    //       {
    //         name: 'Swift',
    //         level: 3,
    //       },
    //     ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2024',
    location: 'Georgia Institute Of Technology',
    title: 'Bachelors in Computer Science',
    content: <p>Courses: Algorithms, Data Structures, Research</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2022 - Present',
    location: 'Atlanta, GA',
    title: 'MealPirates',
    content: (
      <p>
        Leading ideation and front-end web development on a team of 4, using Node.js sub-stack to optimize app
        functionality and improve customer experience • Developing a food delivery service that aims to deliver
        restaurant food at prices lower than the current delivery services • Utilizing GIT version control for project
        collaboration and analysis • Selected by Georgia Tech CreateX Startup launch program, offered $400K in seed
        funding to launch the product
      </p>
    ),
  },
  {
    date: 'Sep 2021 - Present',
    location: 'Atlanta, GA',
    title: 'Undergraduate Student Research',
    content: (
      <p>
        Applying Object-Oriented CV algorithms coded in python to accurately position a robot arm for an optimal
        position with respect to the plant • Employing PyTorch and OpenCV python libraries to modify 3D point clouds to
        convert them to volumetric analysis • Utilizing ROS nodes to automate the data collection processes which
        reduced the manual workload by 50% • Using C++ and Python libraries to build an algorithm to enable both manual
        and autonomous control from onsite and remote locations
      </p>
    ),
  },
  {
    date: 'Aug 2020 - Jan 2021',
    location: 'Atlanta, GA',
    title: 'Intern',
    content: (
      <p>
        Led quality assurance process for iOS and Android mobile app platforms • Conducted competitor analysis across
        six companies and identified vital opportunities • Scoped new connectivity features and led a team of designers
        and developers to bring the product to the market
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach me here:',
  items: [
    {
      type: ContactType.Email,
      text: 'harshsuhith@gmail.com',
      href: 'mailto:harshsuhith@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Atlanta, USA',
      href: 'https://goo.gl/maps/BdHtDdso3Tcc9c4s6',
    },
    {
      type: ContactType.Instagram,
      text: '@harshmuriki24',
      href: 'https://www.instagram.com/harshmuriki24/',
    },
    {
      type: ContactType.Github,
      text: 'harshmuriki',
      href: 'https://github.com/harshmuriki',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/harshmuriki'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/venkata-harsh-muriki/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/harshmuriki24/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/harshmuriki'},
];
