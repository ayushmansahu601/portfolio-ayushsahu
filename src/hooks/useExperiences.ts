import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Experience } from '@/types/database';

// Default experiences data
const defaultExperiences: Experience[] = [
  {
    id: '1',
    company: 'Flaredge',
    position: 'Developer',
    duration: 'August 2024 - Present',
    location: 'Tirupati, India',
    description: 'Leading the development of a full-stack web application using React.js and Firebase, creating a platform for mentors and influencers to showcase their profiles to a wider audience.',
    technologies: ['React.js', 'Firebase', 'Firestore', 'Mobile Responsive Design'],
    achievements: [
      'Led development of full-stack web application for mentor/influencer platform',
      'Optimized Firebase Firestore data retrieval performance',
      'Improved mobile responsiveness increasing user engagement'
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
    location: 'New Delhi',
    description: 'Contributed to the development of a full-stack web application using the MERN stack, collaborating with a team of four to design, implement, and test key features to enhance user experience.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
    achievements: [
      'Collaborated with team of 4 to develop MERN stack application',
      'Improved website mobile responsiveness across devices',
      'Enhanced performance and accessibility per Google Web Dev metrics'
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    display_order: 2
  },
  {
    id: '3',
    company: 'Layer Build Private Limited',
    position: 'Software Developer',
    duration: 'Dec. 2023 - Feb. 2024',
    location: 'Remote',
    description: 'Developed a GUI-based application using Qt Designer and C++ to automate road-test report generation by inputting various highway material test data.',
    technologies: ['Qt Designer', 'C++', 'wkhtmltopdf', 'PDF Generation'],
    achievements: [
      'Developed GUI application for automated road-test report generation',
      'Integrated wkhtmltopdf library for professional PDF exports',
      'Streamlined report generation process minimizing manual errors'
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    display_order: 3
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
