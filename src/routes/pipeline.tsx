import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, CalendarDays, Filter, Search } from 'lucide-react';
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

export const Route = createFileRoute('/pipeline')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Pipeline',
        description: 'Track opportunities across every sales pipeline stage.'
      })
    ]
  }),
  component: PipelinePage
});

const stages = [
  { name: 'Lead', count: 892, value: '$1.4M', color: '#60a5fa' },
  { name: 'Qualified', count: 556, value: '$1.8M', color: '#34d399' },
  { name: 'Proposal', count: 357, value: '$1.1M', color: '#fbbf24' },
  { name: 'Negotiation', count: 179, value: '$640K', color: '#a78bfa' },
  { name: 'Closing', count: 132, value: '$780K', color: '#e879f9' }
];

const opportunities = [
  { company: 'Acme Corp', stage: 'Closing', owner: 'Sarah Chen', value: '$125,000', probability: 90, updated: '2h ago' },
  { company: 'TechStart Inc', stage: 'Negotiation', owner: 'Mike Johnson', value: '$89,500', probability: 75, updated: '5h ago' },
  { company: 'CloudBase Ltd', stage: 'Proposal', owner: 'Emily Davis', value: '$245,000', probability: 60, updated: '1d ago' },
  { company: 'DataSync Solutions', stage: 'Qualified', owner: 'James Wilson', value: '$67,800', probability: 45, updated: '2d ago' },
  { company: 'Nimbus Labs', stage: 'Lead', owner: 'Lisa Park', value: '$178,000', probability: 20, updated: '3d ago' }
];

function PipelinePage() {
  return (
    <SalesShell currentPath='/pipeline'>
      <PageHeader
        eyebrow='Sales'
        title='Pipeline'
        description='Track opportunities from first touch through closing.'
        actions={
          <>
            <div className='flex h-9 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-300'>
              <CalendarDays className='size-4 text-zinc-500' />
              Last 30 days
            </div>
            <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>
              Add opportunity <ArrowRight className='size-4' />
            </Button>
          </>
        }
      />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-5'>
        {stages.map((stage) => (
          <Card key={stage.name} className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-5 ring-0'>
            <CardContent className='px-4'>
              <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-sm text-zinc-400'>
                  <span className='size-2 rounded-full' style={{ backgroundColor: stage.color }} />
                  {stage.name}
                </span>
                <span className='text-sm font-semibold text-zinc-200'>{stage.count}</span>
              </div>
              <p className='mt-4 text-2xl font-semibold tracking-tight text-zinc-50'>{stage.value}</p>
              <div className='mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800'>
                <div
                  className='h-full rounded-full'
                  style={{ width: `${(stage.count / 892) * 100}%`, backgroundColor: stage.color }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
        <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <CardTitle className='text-base font-medium text-zinc-50'>Open opportunities</CardTitle>
            <CardDescription className='text-zinc-500'>Every active deal in your pipeline</CardDescription>
          </div>
          <div className='flex items-center gap-2'>
            <div className='relative w-full sm:w-64'>
              <Search className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-500' />
              <Input className='border-zinc-800 bg-zinc-950 pl-9 text-zinc-300' placeholder='Search pipeline...' />
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
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Opportunity</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Owner</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Value</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Stage</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Probability</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {opportunities.map((item) => (
                <TableRow key={item.company} className='border-zinc-800/60 hover:bg-zinc-800/30'>
                  <TableCell className='px-5 py-4 font-medium text-zinc-200'>{item.company}</TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{item.owner}</TableCell>
                  <TableCell className='px-5 py-4 font-medium text-zinc-200'>{item.value}</TableCell>
                  <TableCell className='px-5 py-4'>
                    <Badge
                      variant='outline'
                      className={cn(
                        'rounded-full border-zinc-700 bg-transparent text-zinc-300',
                        item.stage === 'Closing' && 'border-emerald-400/30 text-emerald-300'
                      )}
                    >
                      {item.stage}
                    </Badge>
                  </TableCell>
                  <TableCell className='px-5 py-4'>
                    <div className='flex items-center gap-2'>
                      <div className='h-1.5 w-16 overflow-hidden rounded-full bg-zinc-800'>
                        <div
                          className='h-full rounded-full bg-emerald-400'
                          style={{ width: `${item.probability}%` }}
                        />
                      </div>
                      <span className='text-sm text-zinc-400'>{item.probability}%</span>
                    </div>
                  </TableCell>
                  <TableCell className='px-5 py-4 text-zinc-500'>{item.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </SalesShell>
  );
}
