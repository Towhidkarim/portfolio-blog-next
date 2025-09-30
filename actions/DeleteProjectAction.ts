'use server';

import { revalidateTag } from 'next/cache';

export async function DeleteProjectAction(id: string) {
  if (!id) return { success: false };

  const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${url}/api/projects/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json().catch(() => null);
    if (data?.statusCode === 200) {
      revalidateTag('projects');
      return { success: true };
    }
  } catch (e) {
    // ignore
    return { success: false };
  }
}
