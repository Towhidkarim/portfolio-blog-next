'use client';
import { Button } from '@/components/ui/button';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

export default function UploadWidget({
  onUploadComplete,
}: {
  onUploadComplete: (imageUrl: string) => void;
}) {
  const [imageUrl, setImageUrl] = useState('');
  return (
    <>
      <CldUploadWidget
        uploadPreset='next-prisma-blog'
        onSuccess={(result, { widget }) => {
          //@ts-ignore
          setImageUrl(result.info.secure_url);
          onUploadComplete(imageUrl);
          //   if (result?.info) {
          //     // setImageUrl(result.info); // get Cloudinary URL
          //     // console.log('Uploaded image URL:', result.info);
          //   }
        }}
      >
        {({ open }) => <Button onClick={() => open()}>Upload an Image</Button>}
      </CldUploadWidget>
    </>
  );
}
