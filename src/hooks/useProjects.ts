import { db } from '@/lib/firebase';
import type { Project } from '@/types/database';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// Default projects data
const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Tirutsava Website',
    description: 'Developed for IIT Tirupati\'s annual techno-cultural fest. Full-stack website with event registration system and integrated payment processing using Razorpay.',
    technologies: ['Next.js', 'FastAPI', 'Razorpay', 'Tailwind CSS', 'Docker'],
    image_url: '/ayush_pic.png',
    github_url: '#',
    live_url: '#',
    category: 'fullstack',
    date: '2024-11-01',
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    display_order: 1
  },
  {
    id: '2',
    title: 'Mentor Data Web Crawler',
    description: 'Built a highly efficient web crawler leveraging asynchronous programming with Crawl4AI to scrape mentor data from websites and extract information using LLM.',
    technologies: ['Python', 'Crawl4AI', 'LLM (GROQ)', 'CSV', 'Async Programming'],
    image_url: '/ayush_pic.png',
    github_url: '#',
    live_url: '#',
    category: 'ml',
    date: '2024-03-01',
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    display_order: 2
  },
  {
    id: '3',
    title: 'PatientManager',
    description: 'Hackathon project to streamline patient data entry for hospitals. Features automatic family member prompts for glaucoma patients and WhatsApp notifications.',
    technologies: ['React', 'SQLite', 'Python', 'Flask', 'Bootstrap', 'Twilio'],
    image_url: '/ayush_pic.png',
    github_url: '#',
    live_url: '#',
    category: 'fullstack',
    date: '2024-08-01',
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    display_order: 3
  },
  {
    id: '4',
    title: 'AsapMusic',
    description: 'Music website developed using React and integrated with Spotify API for music streaming and playlist management.',
    technologies: ['React', 'Spotify API', 'JavaScript', 'CSS'],
    image_url: '/ayush_pic.png',
    github_url: '#',
    live_url: '#',
    category: 'web',
    date: '2023-09-01',
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    display_order: 4
  }
];

export const useProjects = () => {
  const [data, setData] = useState<Project[]>(defaultProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const q = query(collection(db, 'projects'), orderBy('display_order', 'asc'));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const projects = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Project[];
          setData(projects);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err as Error);
        // Keep default data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { data, isLoading, error };
};

export const useFeaturedProject = () => {
  const [data, setData] = useState<Project | null>(defaultProjects.find(p => p.featured) || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFeaturedProject = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(db, 'projects'),
          where('featured', '==', true),
          orderBy('display_order', 'asc'),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const project = {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data()
          } as Project;
          setData(project);
        }
      } catch (err) {
        console.error('Error fetching featured project:', err);
        setError(err as Error);
        // Keep default data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedProject();
  }, []);

  return { data, isLoading, error };
};
