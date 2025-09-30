'use client';

import UploadWidget from '@/components/features/imageupload/upload-widget';
import RichTextEditor from '@/components/features/text-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function CreatePage() {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <section className='mx-auto py-20 max-w-6xl'>
      <div className='mb-6'>
        <Link href={`/`}>
          <Button variant='outline' size='sm'>
            <ArrowLeft className='mr-2 w-4 h-4' />
            Back
          </Button>
        </Link>
      </div>
      <h1 className='mb-8 font-bold text-3xl'>Create New Post</h1>
      <form className='space-y-6 max-w-3xl' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <Label htmlFor='title'>Title</Label>
          <Input
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter post title'
            className='bg-slate-50'
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='title'>Description</Label>
          <Input
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter post description'
            className='bg-slate-50'
            required
          />
        </div>
        <div className='space-y-2'>
          <Label>Upload Blog Thumbnail </Label>
          <UploadWidget onUploadComplete={setImageUrl} />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='content'>Content</Label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Post'}
        </Button>
      </form>
    </section>
  );
}
