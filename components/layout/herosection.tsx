import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id='hero'
      className='flex justify-center items-center px-6 pt-20 min-h-screen'
    >
      <div className='mx-auto max-w-4xl container'>
        <div className='space-y-8 text-center'>
          {/* Main heading */}
          <div className='space-y-4'>
            <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl text-balance'>
              <span className='text-foreground'>Towhid Karim</span>
            </h1>
            <p className='font-medium text-muted-foreground text-xl md:text-2xl'>
              Full Stack Engineer
            </p>
          </div>

          {/* Description */}
          <div className='mx-auto max-w-2xl'>
            <p className='text-muted-foreground text-lg md:text-xl text-balance leading-relaxed'>
              I build accessible, pixel-perfect digital experiences for the web.
              My favorite work lies at the intersection of design and
              development, creating experiences that not only look great but are
              meticulously built for performance and usability.
            </p>
          </div>

          {/* Social links */}
          <div className='flex justify-center items-center space-x-6'>
            <Button variant='ghost' size='sm' asChild>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github size={20} />
                <span className='sr-only'>GitHub</span>
              </a>
            </Button>
            <Button variant='ghost' size='sm' asChild>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin size={20} />
                <span className='sr-only'>LinkedIn</span>
              </a>
            </Button>
            <Button variant='ghost' size='sm' asChild>
              <a href='mailto:towhidkarim123@gmail.com'>
                <Mail size={20} />
                <span className='sr-only'>Email</span>
              </a>
            </Button>
          </div>

          {/* CTA buttons */}
          <div className='flex sm:flex-row flex-col justify-center items-center gap-4 pt-4'>
            <Button size='lg' asChild>
              <a href='#projects'>View My Work</a>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <a href='#contact'>Get In Touch</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className='pt-12'>
            <Button variant='ghost' size='sm' asChild>
              <a href='#about' className='animate-bounce'>
                <ArrowDown size={20} />
                <span className='sr-only'>Scroll down</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
