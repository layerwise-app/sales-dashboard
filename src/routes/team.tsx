import { createFileRoute } from '@tanstack/react-router';
import { Award, Target, TrendingUp, Users } from 'lucide-react';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { PageHeader, SalesShell } from '~/components/sales-shell';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { cn } from '~/lib/utils';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/team')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Team',
        description: 'Monitor sales rep performance and monthly targets.'
      })
    ]
  }),
  component: TeamPage
});

const teamStats = [
  { label: 'Team members', value: '12', icon: Users, color: '#60a5fa' },
  { label: 'Quota attainment', value: '86%', icon: Target, color: '#34d399' },
  { label: 'Closed this month', value: '$1.8M', icon: TrendingUp, color: '#a78bfa' },
  { label: 'Top performer', value: 'Sarah Chen', icon: Award, color: '#fbbf24' }
];

const reps = [
  { initials: 'SC', name: 'Sarah Chen', role: 'Account Executive', quota: 92, closed: '$487,500', change: '+18%' },
  { initials: 'MJ', name: 'Mike Johnson', role: 'Account Executive', quota: 84, closed: '$356,200', change: '+12%' },
  { initials: 'ED', name: 'Emily Davis', role: 'Sales Representative', quota: 78, closed: '$312,800', change: '+11%' },
  { initials: 'JW', name: 'James Wilson', role: 'Sales Manager', quota: 91, closed: '$428,000', change: '+15%' },
  { initials: 'LP', name: 'Lisa Park', role: 'Sales Representative', quota: 73, closed: '$289,600', change: '+9%' }
];

function TeamPage() {
  return (
    <SalesShell currentPath='/team'>
      <PageHeader
        eyebrow='Insights'
        title='Team'
        description='Track performance, quota attainment, and deal activity.'
        actions={
          <Badge variant='outline' className='rounded-full border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300'>
            September 2026
          </Badge>
        }
      />

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {teamStats.map((stat) => (
          <Card key={stat.label} className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-5 ring-0'>
            <CardContent className='px-5'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-sm text-zinc-400'>{stat.label}</p>
                  <p className='mt-2 text-2xl font-semibold tracking-tight text-zinc-50'>{stat.value}</p>
                </div>
                <div className='flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/70'>
                  <stat.icon className='size-4' style={{ color: stat.color }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
        <CardHeader className='border-b border-zinc-800/70 px-5 py-4'>
          <CardTitle className='text-base font-medium text-zinc-50'>Rep performance</CardTitle>
          <CardDescription className='text-zinc-500'>Closed revenue and quota attainment this month</CardDescription>
        </CardHeader>
        <CardContent className='px-0'>
          <Table>
            <TableHeader>
              <TableRow className='border-zinc-800/70 hover:bg-transparent'>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Member</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Role</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Quota</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Closed revenue</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reps.map((rep) => (
                <TableRow key={rep.name} className='border-zinc-800/60 hover:bg-zinc-800/30'>
                  <TableCell className='px-5 py-4'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-8'>
                        <AvatarFallback className='bg-zinc-800 text-xs text-zinc-300'>{rep.initials}</AvatarFallback>
                      </Avatar>
                      <span className='font-medium text-zinc-200'>{rep.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{rep.role}</TableCell>
                  <TableCell className='px-5 py-4'>
                    <div className='flex items-center gap-2'>
                      <div className='h-1.5 w-20 overflow-hidden rounded-full bg-zinc-800'>
                        <div
                          className={cn(
                            'h-full rounded-full',
                            rep.quota >= 85 ? 'bg-emerald-400' : rep.quota >= 75 ? 'bg-yellow-400' : 'bg-rose-400'
                          )}
                          style={{ width: `${rep.quota}%` }}
                        />
                      </div>
                      <span className='text-sm text-zinc-400'>{rep.quota}%</span>
                    </div>
                  </TableCell>
                  <TableCell className='px-5 py-4 font-medium text-zinc-200'>{rep.closed}</TableCell>
                  <TableCell className='px-5 py-4 font-medium text-emerald-400'>{rep.change}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </SalesShell>
  );
}
