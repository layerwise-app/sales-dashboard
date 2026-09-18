import { createFileRoute } from '@tanstack/react-router';
import { BarChart3, Download, FileText, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { PageHeader, SalesShell } from '~/components/sales-shell';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/reports')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Reports',
        description: 'Explore revenue, pipeline, and team reporting.'
      })
    ]
  }),
  component: ReportsPage
});

const reports = [
  {
    icon: TrendingUp,
    color: '#34d399',
    title: 'Revenue by channel',
    description: 'Monthly revenue contribution by acquisition channel.',
    updated: 'Updated 2 hours ago'
  },
  {
    icon: BarChart3,
    color: '#60a5fa',
    title: 'Sales activity',
    description: 'Calls, meetings, and emails logged by each rep.',
    updated: 'Updated 5 hours ago'
  },
  {
    icon: PieChartIcon,
    color: '#a78bfa',
    title: 'Win and loss analysis',
    description: 'Reasons behind won and lost opportunities.',
    updated: 'Updated 1 day ago'
  },
  {
    icon: FileText,
    color: '#fbbf24',
    title: 'Forecast report',
    description: 'Expected revenue by stage and owner for next quarter.',
    updated: 'Updated 3 days ago'
  }
];

function ReportsPage() {
  return (
    <SalesShell currentPath='/reports'>
      <PageHeader
        eyebrow='Insights'
        title='Reports'
        description='Shareable reports and insights across your sales organization.'
        actions={
          <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>
            <Download className='size-4' />
            Export all
          </Button>
        }
      />

      <div className='grid gap-4 md:grid-cols-2'>
        {reports.map((report) => (
          <Card key={report.title} className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
            <CardHeader className='gap-4 border-b border-zinc-800/70 px-5 py-4 sm:flex-row sm:items-center'>
              <div className='flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/70'>
                <report.icon className='size-4' style={{ color: report.color }} />
              </div>
              <div>
                <CardTitle className='text-base font-medium text-zinc-50'>{report.title}</CardTitle>
                <CardDescription className='text-zinc-500'>{report.updated}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className='flex items-center justify-between gap-3 px-5 py-4'>
              <p className='text-sm leading-5 text-zinc-400'>{report.description}</p>
              <Button variant='outline' size='sm' className='border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-zinc-100'>
                Open report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-5 ring-0'>
        <CardContent className='flex flex-col items-center gap-4 px-5 text-center sm:flex-row sm:text-left'>
          <div className='flex size-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400'>
            <BarChart3 className='size-5' />
          </div>
          <div className='flex-1'>
            <p className='text-base font-medium text-zinc-50'>Build a custom report</p>
            <p className='mt-1 text-sm text-zinc-500'>Choose a data source, metric, and date range to create a reusable report.</p>
          </div>
          <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>Create report</Button>
        </CardContent>
      </Card>
    </SalesShell>
  );
}
