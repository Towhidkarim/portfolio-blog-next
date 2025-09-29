import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    image: '/placeholder.svg?height=300&width=500',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    features: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/placeholder.svg?height=300&width=500',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    features: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using multiple weather APIs.',
    image: '/placeholder.svg?height=300&width=500',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    features: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Mapbox', 'PWA'],
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description:
      'An analytics platform for social media managers to track engagement, growth metrics, and content performance across platforms.',
    image: '/placeholder.svg?height=300&width=500',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    features: ['React', 'D3.js', 'Express', 'PostgreSQL', 'Redis'],
  },
];

export function ProjectsSection() {
  return (
    <section id='projects' className='px-6 py-20'>
      <div className='mx-auto max-w-6xl container'>
        {/* Section header */}
        <div className='mb-16 text-center'>
          <h2 className='mb-4 font-bold text-foreground text-3xl md:text-4xl text-balance'>
            Featured Projects
          </h2>
          <p className='mx-auto max-w-2xl text-muted-foreground text-lg text-balance'>
            A collection of projects that showcase my skills in full-stack
            development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects grid */}
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='group bg-card hover:bg-card/80 border-border overflow-hidden transition-colors duration-300'
            >
              {/* Project image */}
              <div className='relative overflow-hidden'>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={500}
                  height={300}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              <CardHeader>
                <CardTitle className='text-card-foreground text-xl'>
                  {project.title}
                </CardTitle>
                <CardDescription className='text-muted-foreground leading-relaxed'>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-4'>
                {/* Features/Tech stack */}
                <div className='flex flex-wrap gap-2'>
                  {project.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant='secondary'
                      className='text-xs'
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className='flex items-center gap-3 pt-2'>
                  <Button size='sm' asChild>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink size={16} className='mr-2' />
                      Live Site
                    </a>
                  </Button>
                  <Button variant='outline' size='sm' asChild>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github size={16} className='mr-2' />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all projects button */}
        <div className='mt-12 text-center'>
          <Button variant='outline' size='lg' asChild>
            <a href='/projects'>View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
