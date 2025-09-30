import React from 'react';

import { Card } from '@/components/ui/card';
import { FileText, FolderKanban, Eye, TrendingUp } from 'lucide-react';

export default function page() {
  const stats = [
    {
      name: 'Total Blog Posts',
      value: '24',
      change: '+3 this month',
      icon: FileText,
    },
    {
      name: 'Total Projects',
      value: '12',
      change: '+2 this month',
      icon: FolderKanban,
    },
    {
      name: 'Total Views',
      value: '8,429',
      change: '+12% from last month',
      icon: Eye,
    },
    {
      name: 'Engagement Rate',
      value: '68%',
      change: '+5% from last month',
      icon: TrendingUp,
    },
  ];

  return (
    <div className='p-8'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='mb-2 font-bold text-foreground text-3xl'>Overview</h1>
        <p className='text-muted-foreground'>
          Welcome back! Here's what's happening with your portfolio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8'>
        {stats.map((stat) => (
          <Card key={stat.name} className='bg-card p-6 border-border'>
            <div className='flex justify-between items-center mb-4'>
              <div className='bg-primary/10 p-2 rounded-lg'>
                <stat.icon className='w-5 h-5 text-primary' />
              </div>
            </div>
            <div>
              <p className='mb-1 text-muted-foreground text-sm'>{stat.name}</p>
              <p className='mb-2 font-bold text-foreground text-3xl'>
                {stat.value}
              </p>
              <p className='text-muted-foreground text-xs'>{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className='gap-6 grid grid-cols-1 lg:grid-cols-2'>
        <Card className='bg-card p-6 border-border'>
          <h2 className='mb-4 font-semibold text-foreground text-lg'>
            Recent Blog Posts
          </h2>
          <div className='space-y-4'>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className='flex justify-between items-center py-3 last:border-0 border-b border-border'
              >
                <div>
                  <p className='font-medium text-foreground text-sm'>
                    Blog Post Title {i}
                  </p>
                  <p className='text-muted-foreground text-xs'>
                    Published 2 days ago
                  </p>
                </div>
                <span className='text-muted-foreground text-xs'>245 views</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className='bg-card p-6 border-border'>
          <h2 className='mb-4 font-semibold text-foreground text-lg'>
            Recent Projects
          </h2>
          <div className='space-y-4'>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className='flex justify-between items-center py-3 last:border-0 border-b border-border'
              >
                <div>
                  <p className='font-medium text-foreground text-sm'>
                    Project Name {i}
                  </p>
                  <p className='text-muted-foreground text-xs'>
                    Updated 5 days ago
                  </p>
                </div>
                <span className='text-muted-foreground text-xs'>189 views</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
