import { createFileRoute } from '@tanstack/react-router';
import { Filter, Plus, Search } from 'lucide-react';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { PageHeader, SalesShell } from '~/components/sales-shell';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '~/components/ui/table';
import { cn } from '~/lib/utils';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/leads')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Leads',
        description: 'Manage and qualify incoming sales leads.'
      })
    ]
  }),
  component: LeadsPage
});

const leadStats = [
  { label: 'New leads', value: '892', trend: '+18.3%' },
  { label: 'Qualified', value: '556', trend: '+12.7%' },
  { label: 'Conversion rate', value: '24.8%', trend: '+3.2%' },
  { label: 'Response time', value: '4h 12m', trend: '-18 min' }
];

const leads = [
  { initials: 'AC', name: 'Ava Carter', company: 'Northwind Finance', source: 'LinkedIn', score: 92, status: 'Qualified' },
  { initials: 'ET', name: 'Ethan Torres', company: 'Brightline Retail', source: 'Website', score: 78, status: 'New' },
  { initials: 'ML', name: 'Maya Lewis', company: 'Kepler Health', source: 'Referral', score: 84, status: 'Qualified' },
  { initials: 'OR', name: 'Owen Reed', company: 'Atlas Logistics', source: 'Event', score: 64, status: 'New' },
  { initials: 'LH', name: 'Lena Hughes', company: 'Orbit Media', source: 'Website', score: 71, status: 'Nurturing' }
];

function LeadsPage() {
  return (
    <SalesShell currentPath='/leads'>
      <PageHeader
        eyebrow='Sales'
        title='Leads'
        description='Capture, score, and qualify every incoming lead.'
        actions={
          <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>
            <Plus className='size-4' />
            Add lead
          </Button>
        }
      />

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {leadStats.map((stat) => (
          <Card key={stat.label} className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-5 ring-0'>
            <CardContent className='px-5'>
              <p className='text-sm text-zinc-400'>{stat.label}</p>
              <p className='mt-2 text-2xl font-semibold tracking-tight text-zinc-50'>{stat.value}</p>
              <p className='mt-2 text-xs font-medium text-emerald-400'>{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
        <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <CardTitle className='text-base font-medium text-zinc-50'>Lead queue</CardTitle>
            <CardDescription className='text-zinc-500'>Prioritized by lead score and source</CardDescription>
          </div>
          <div className='flex items-center gap-2'>
            <div className='relative w-full sm:w-64'>
              <Search className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-500' />
              <Input className='border-zinc-800 bg-zinc-950 pl-9 text-zinc-300' placeholder='Search leads...' />
            </div>
            <Button variant='outline' size='icon-sm' className='border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-100'>
              <Filter className='size-4' />
            </Button>
          </div>
        </CardHeader>
        <CardContent className='px-0'>
          <Table>
            <TableHeader>
              <TableRow className='border-zinc-800/70 hover:bg-transparent'>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Lead</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Company</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Source</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Score</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.name} className='border-zinc-800/60 hover:bg-zinc-800/30'>
                  <TableCell className='px-5 py-4'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-8'>
                        <AvatarFallback className='bg-zinc-800 text-xs text-zinc-300'>{lead.initials}</AvatarFallback>
                      </Avatar>
                      <span className='font-medium text-zinc-200'>{lead.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{lead.company}</TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{lead.source}</TableCell>
                  <TableCell className='px-5 py-4'>
                    <span
                      className={cn(
                        'font-medium',
                        lead.score >= 80 ? 'text-emerald-400' : lead.score >= 70 ? 'text-yellow-400' : 'text-zinc-400'
                      )}
                    >
                      {lead.score}
                    </span>
                  </TableCell>
                  <TableCell className='px-5 py-4'>
                    <Badge variant='outline' className='rounded-full border-zinc-700 bg-transparent text-zinc-300'>
                      {lead.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </SalesShell>
  );
}
