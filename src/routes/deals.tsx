import { createFileRoute } from '@tanstack/react-router';
import { Download, Plus, Search } from 'lucide-react';
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

export const Route = createFileRoute('/deals')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Deals',
        description: 'Review active deals, win rates, and closed revenue.'
      })
    ]
  }),
  component: DealsPage
});

const dealStats = [
  { label: 'Open deals', value: '147', change: '-5' },
  { label: 'Pipeline value', value: '$4.8M', change: '+12.4%' },
  { label: 'Win rate', value: '28.6%', change: '+4.1%' },
  { label: 'Avg. deal size', value: '$18.6K', change: '-2.3%' }
];

const deals = [
  { company: 'Acme Corp', owner: 'Sarah Chen', value: '$125,000', stage: 'Negotiation', status: 'Open', closed: 'Sep 2026' },
  { company: 'TechStart Inc', owner: 'Mike Johnson', value: '$89,500', stage: 'Proposal', status: 'Open', closed: 'Sep 2026' },
  { company: 'CloudBase Ltd', owner: 'Emily Davis', value: '$245,000', stage: 'Closing', status: 'Won', closed: 'Aug 2026' },
  { company: 'DataSync Solutions', owner: 'James Wilson', value: '$67,800', stage: 'Discovery', status: 'Open', closed: 'Oct 2026' },
  { company: 'Nimbus Labs', owner: 'Lisa Park', value: '$178,000', stage: 'Qualified', status: 'Open', closed: 'Nov 2026' },
  { company: 'Vertex Systems', owner: 'Sarah Chen', value: '$310,000', stage: 'Closing', status: 'Won', closed: 'Jul 2026' }
];

function DealsPage() {
  return (
    <SalesShell currentPath='/deals'>
      <PageHeader
        eyebrow='Sales'
        title='Deals'
        description='Manage every open and closed opportunity across your team.'
        actions={
          <>
            <Button variant='outline' className='border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-zinc-100'>
              <Download className='size-4' />
              Export
            </Button>
            <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>
              <Plus className='size-4' />
              New deal
            </Button>
          </>
        }
      />

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {dealStats.map((stat) => (
          <Card key={stat.label} className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-5 ring-0'>
            <CardContent className='px-5'>
              <p className='text-sm text-zinc-400'>{stat.label}</p>
              <div className='mt-2 flex items-center gap-2'>
                <span className='text-2xl font-semibold tracking-tight text-zinc-50'>{stat.value}</span>
                <span className={cn('text-xs font-medium', stat.change.startsWith('+') ? 'text-emerald-400' : 'text-amber-400')}>
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
        <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <CardTitle className='text-base font-medium text-zinc-50'>Deal list</CardTitle>
            <CardDescription className='text-zinc-500'>Search, stage, and status overview</CardDescription>
          </div>
          <div className='relative w-full sm:w-72'>
            <Search className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-500' />
            <Input className='border-zinc-800 bg-zinc-950 pl-9 text-zinc-300' placeholder='Search deals...' />
          </div>
        </CardHeader>
        <CardContent className='px-0'>
          <Table>
            <TableHeader>
              <TableRow className='border-zinc-800/70 hover:bg-transparent'>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Company</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Owner</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Value</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Stage</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Status</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Expected close</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deals.map((deal) => (
                <TableRow key={deal.company} className='border-zinc-800/60 hover:bg-zinc-800/30'>
                  <TableCell className='px-5 py-4 font-medium text-zinc-200'>{deal.company}</TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{deal.owner}</TableCell>
                  <TableCell className='px-5 py-4 font-medium text-zinc-200'>{deal.value}</TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{deal.stage}</TableCell>
                  <TableCell className='px-5 py-4'>
                    <Badge
                      variant='outline'
                      className={cn(
                        'rounded-full border-zinc-700 bg-transparent text-zinc-300',
                        deal.status === 'Won' && 'border-emerald-400/30 text-emerald-300'
                      )}
                    >
                      {deal.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='px-5 py-4 text-zinc-500'>{deal.closed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </SalesShell>
  );
}
