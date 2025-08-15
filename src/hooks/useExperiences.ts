import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Experience } from '@/types/database';

// Default experiences data
const defaultExperiences: Experience[] = [
  {
  id: '1',
  company: 'AxoryAI',
  position: 'Software Developer Intern',
  duration: 'June 2025 - Present',
  location: 'Remote',
  description: 'Developed and deployed the backend infrastructure for a deepfake detection system, integrating a machine learning model using FastAPI and Python, and ensuring scalability and secure access.',
  technologies: ['FastAPI', 'Python', 'Machine Learning', 'Supabase', 'Docker', 'AWS EC2', 'GPU Instances'],
  achievements: [
    'Designed and implemented RESTful APIs with token-based authentication to serve the ML model',
    'Built a Python SDK enabling seamless client-side integration for third-party developers',
    'Integrated Supabase for user authentication, results storage, and usage analytics',
    'Dockerized the application for smooth deployment and scalability on AWS EC2 with GPU optimization'
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  display_order: 1
},
{
  id: '2',
  company: 'Alkeynes Global Solutions INDIA LLP',
  position: 'Frontend Developer Intern',
  duration: 'May 2024 - July 2024',
  location: 'New Delhi (Hybrid)',
  description: 'Worked on internal prototypes and client-facing web projects, gaining exposure to UI/UX workflows and frontend development.',
  technologies: ['Figma', 'PHP', 'HTML', 'CSS', 'JavaScript'],
  achievements: [
    'Collaborated on UI/UX design workflows using Figma for prototypes and concepts',
    'Implemented frontend adjustments and new features for a client website built with PHP'
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  display_order: 2
},
{
  id: '3',
  company: 'Flaredge',
  position: 'Developer',
  duration: 'August 2024 - Present',
  location: 'Tirupati, India',
  description: 'Developing a personal portfolio and freelancing platform to showcase past web development work and attract clients.',
  technologies: ['React', 'Firebase', 'FastAPI', 'Netlify', 'AWS EC2'],
  achievements: [
    'Designed and developed responsive websites for clients using modern web technologies',
    'Collaborated with clients to understand requirements and deliver tailored solutions',
    'Managed deployment, domain setup, and optimization using Netlify, Firebase Hosting, and AWS EC2'
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  display_order: 3
},
{
  id: '4',
  company: 'Layer Build Private Limited',
  position: 'Software Developer',
  duration: 'Dec 2023 - Feb 2024',
  location: 'IIT Tirupati',
  description: 'Developed a GUI-based application to automate highway material road-test report generation using Qt Designer and C++.',
  technologies: ['Qt Designer', 'C++', 'wkhtmltopdf'],
  achievements: [
    'Automated road-test report generation from multiple highway material test inputs',
    'Integrated wkhtmltopdf for exporting professional-grade PDFs',
    'Streamlined reporting workflows, reducing manual errors and processing time'
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  display_order: 4
}

];

export const useExperiences = () => {
  const [data, setData] = useState<Experience[]>(defaultExperiences);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setIsLoading(true);
        const q = query(collection(db, 'experiences'), orderBy('display_order', 'asc'));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const experiences = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Experience[];
          setData(experiences);
        }
      } catch (err) {
        console.error('Error fetching experiences:', err);
        setError(err as Error);
        // Keep default data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return { data, isLoading, error };
};
