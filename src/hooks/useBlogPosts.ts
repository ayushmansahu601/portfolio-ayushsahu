import { db } from '@/lib/firebase';
import type { BlogPost } from '@/types/database';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// Default blog posts data
const defaultBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable ML Pipelines with Python and Docker',
    excerpt: 'Learn how to create robust machine learning pipelines that can handle production workloads efficiently.',
    content: '',
    author: 'Ayushman Sahu',
    date: '2024-01-20',
    read_time: '8 min read',
    tags: ['Machine Learning', 'Python', 'Docker', 'DevOps'],
    image_url: '/ayush_side.png',
    featured: true,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    display_order: 1
  },
  // {
  //   id: '2',
  //   title: 'Real-time Object Detection with OpenCV and YOLO',
  //   excerpt: 'A comprehensive guide to implementing real-time object detection using OpenCV and YOLO algorithms.',
  //   content: '',
  //   author: 'Ayushman Sahu',
  //   date: '2024-01-15',
  //   read_time: '12 min read',
  //   tags: ['Computer Vision', 'OpenCV', 'YOLO', 'Python'],
  //   image_url: '/ayush_pic.png',
  //   featured: false,
  //   published: true,
  //   created_at: new Date().toISOString(),
  //   updated_at: new Date().toISOString(),
  //   display_order: 2
  // },
  // {
  //   id: '3',
  //   title: 'Modern React Patterns for Large Scale Applications',
  //   excerpt: 'Explore advanced React patterns and best practices for building maintainable large-scale applications.',
  //   content: '',
  //   author: 'Ayushman Sahu',
  //   date: '2024-01-10',
  //   read_time: '10 min read',
  //   tags: ['React', 'JavaScript', 'Architecture', 'Frontend'],
  //   image_url: '/ayush_pic.png',
  //   featured: false,
  //   published: true,
  //   created_at: new Date().toISOString(),
  //   updated_at: new Date().toISOString(),
  //   display_order: 3
  // }
];

export const useBlogPosts = () => {
  const [data, setData] = useState<BlogPost[]>(defaultBlogPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(db, 'blog_posts'),
          where('published', '==', true),
          orderBy('display_order', 'asc')
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const blogPosts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as BlogPost[];
          setData(blogPosts);
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err as Error);
        // Keep default data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return { data, isLoading, error };
};

export const useFeaturedBlogPost = () => {
  const [data, setData] = useState<BlogPost | null>(defaultBlogPosts.find(p => p.featured) || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFeaturedBlogPost = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(db, 'blog_posts'),
          where('featured', '==', true),
          where('published', '==', true),
          orderBy('display_order', 'asc'),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const blogPost = {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data()
          } as BlogPost;
          setData(blogPost);
        }
      } catch (err) {
        console.error('Error fetching featured blog post:', err);
        setError(err as Error);
        // Keep default data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedBlogPost();
  }, []);

  return { data, isLoading, error };
};

export const useRegularBlogPosts = () => {
  const [data, setData] = useState<BlogPost[]>(defaultBlogPosts.filter(p => !p.featured));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRegularBlogPosts = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(db, 'blog_posts'),
          where('featured', '==', false),
          where('published', '==', true),
          orderBy('display_order', 'asc')
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const blogPosts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as BlogPost[];
          setData(blogPosts);
        }
      } catch (err) {
        console.error('Error fetching regular blog posts:', err);
        setError(err as Error);
        // Keep default data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegularBlogPosts();
  }, []);

  return { data, isLoading, error };
};
