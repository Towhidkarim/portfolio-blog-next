import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    description:
      'Learn how to structure large React applications using TypeScript, focusing on maintainability, type safety, and developer experience.',
    image: '/placeholder.svg?height=200&width=400',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    slug: 'building-scalable-react-applications-typescript',
  },
  {
    id: '2',
    title: 'The Complete Guide to Next.js App Router',
    description:
      'Explore the new App Router in Next.js 13+, including server components, streaming, and advanced routing patterns.',
    image: '/placeholder.svg?height=200&width=400',
    date: '2024-01-08',
    readTime: '12 min read',
    category: 'Next.js',
    slug: 'complete-guide-nextjs-app-router',
  },
  {
    id: '3',
    title: "Optimizing Web Performance: A Developer's Guide",
    description:
      'Practical techniques for improving web performance, from image optimization to code splitting and caching strategies.',
    image: '/placeholder.svg?height=200&width=400',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'Performance',
    slug: 'optimizing-web-performance-developers-guide',
  },
];

export function BlogSection() {
  return (
    <section id='blog' className='bg-muted/30 px-6 py-20'>
      <div className='mx-auto max-w-6xl container'>
        {/* Section header */}
        <div className='mb-16 text-center'>
          <h2 className='mb-4 font-bold text-foreground text-3xl md:text-4xl text-balance'>
            Latest Blog Posts
          </h2>
          <p className='mx-auto max-w-2xl text-muted-foreground text-lg text-balance'>
            Thoughts on web development, design patterns, and the latest
            technologies I'm exploring.
          </p>
        </div>

        {/* Blog posts grid */}
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className='group bg-card hover:bg-card/80 hover:shadow-lg border-border overflow-hidden transition-all duration-300'
            >
              {/* Blog post image */}
              <div className='relative overflow-hidden'>
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  width={400}
                  height={200}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='top-4 left-4 absolute'>
                  <Badge
                    variant='secondary'
                    className='bg-background/90 text-foreground'
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className='pb-3'>
                <div className='flex items-center gap-2 mb-2 text-muted-foreground text-sm'>
                  <Calendar size={14} />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className='text-card-foreground group-hover:text-primary text-lg leading-tight transition-colors duration-200'>
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className='pt-0'>
                <CardDescription className='mb-4 text-muted-foreground leading-relaxed'>
                  {post.description}
                </CardDescription>

                {/* Read more button */}
                <Button
                  variant='ghost'
                  size='sm'
                  asChild
                  className='group/btn p-0 h-auto font-medium'
                >
                  <a
                    href={`/blog/${post.slug}`}
                    className='flex items-center gap-2'
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className='transition-transform group-hover/btn:translate-x-1 duration-200'
                    />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all posts button */}
        <div className='mt-12 text-center'>
          <Button variant='outline' size='lg' asChild>
            <a href='/blog'>View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
