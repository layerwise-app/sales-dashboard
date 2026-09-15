import { createFileRoute } from '@tanstack/react-router';
import { cn } from '~/lib/utils';
import { seo } from '~/utils/seo';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  UserPlus,
  Users,
  Wallet
} from 'lucide-react';
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger
} from '~/components/ui/sidebar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';

const homePageTitle = 'Sales Operations Dashboard';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      ...seo({
        title: homePageTitle,
        description: 'Manage sales pipeline, revenue trends, and team performance.'
      })
    ]
  }),
  component: Home
});

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Leads', icon: UserPlus },
  { label: 'Deals', icon: Wallet },
  { label: 'Customers', icon: Users },
  { label: 'Reports', icon: BarChart3 },
  { label: 'Settings', icon: Settings }
];

const metrics = [
  {
    label: 'Total Revenue',
    value: '$2.4M',
    change: '+12.5%',
    direction: 'up',
    caption: 'vs. last month',
    icon: CircleDollarSign,
    color: '#34d399'
  },
  {
    label: 'Conversion Rate',
    value: '24.8%',
    change: '+3.2%',
    direction: 'up',
    caption: 'vs. last month',
    icon: Target,
    color: '#60a5fa'
  },
  {
    label: 'Active Deals',
    value: '147',
    change: '-5',
    direction: 'down',
    caption: 'vs. last month',
    icon: Target,
    color: '#fbbf24'
  },
  {
    label: 'New Leads',
    value: '892',
    change: '+18.3%',
    direction: 'up',
    caption: 'vs. last month',
    icon: UserPlus,
    color: '#e879f9'
  }
];

const revenueData = [
  { month: 'Jan', revenue: 1.1, target: 0.9 },
  { month: 'Feb', revenue: 1.25, target: 1.05 },
  { month: 'Mar', revenue: 1.4, target: 1.2 },
  { month: 'Apr', revenue: 1.35, target: 1.3 },
  { month: 'May', revenue: 1.55, target: 1.35 },
  { month: 'Jun', revenue: 1.7, target: 1.5 },
  { month: 'Jul', revenue: 1.85, target: 1.6 },
  { month: 'Aug', revenue: 2.05, target: 1.75 },
  { month: 'Sep', revenue: 2.2, target: 1.9 },
  { month: 'Oct', revenue: 2.4, target: 2.05 }
];

const pipelineData = [
  { name: 'Lead', count: 892, percent: 45, color: '#60a5fa' },
  { name: 'Qualified', count: 556, percent: 28, color: '#34d399' },
  { name: 'Proposal', count: 357, percent: 18, color: '#fbbf24' },
  { name: 'Negotiation', count: 179, percent: 9, color: '#a78bfa' }
];

const recentDeals = [
  { company: 'Acme Corp', contact: 'Sarah Chen', time: '2 hours ago', amount: '$125,000', status: 'Pending' },
  { company: 'TechStart Inc', contact: 'Mike Johnson', time: '5 hours ago', amount: '$89,500', status: 'Pending' },
  { company: 'CloudBase Ltd', contact: 'Emily Davis', time: '1 day ago', amount: '$245,000', status: 'Won' },
  { company: 'DataSync Solutions', contact: 'James Wilson', time: '2 days ago', amount: '$67,800', status: 'Won' },
  { company: 'Nimbus Labs', contact: 'Lisa Park', time: '3 days ago', amount: '$178,000', status: 'Pending' }
];

const topPerformers = [
  { rank: 1, initials: 'SC', name: 'Sarah Chen', deals: '24 deals closed', revenue: '$487,500', change: '+15%', color: '#34d399' },
  { rank: 2, initials: 'MJ', name: 'Mike Johnson', deals: '19 deals closed', revenue: '$356,200', change: '+11%', color: '#60a5fa' },
  { rank: 3, initials: 'ED', name: 'Emily Davis', deals: '17 deals closed', revenue: '$312,800', change: '+12%', color: '#fbbf24' }
];

const longNav = navigation.slice(1);

function Home() {
  return (
    <SidebarProvider defaultOpen>
      <div className='dark min-h-screen bg-zinc-950 text-zinc-100'>
        <Sidebar collapsible='icon'>
          <SidebarHeader className='p-4'>
            <div className='flex h-9 items-center gap-3 px-2'>
              <div className='flex size-8 items-center justify-center rounded-lg bg-emerald-400 font-bold text-emerald-950'>
                V
              </div>
              <div className='flex-1'>
                <p className='text-sm font-semibold text-zinc-50'>SalesOps</p>
                <p className='text-xs text-zinc-500'>Revenue hub</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarMenu>
                {navigation.map((item, index) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={index === 0}
                      tooltip={item.label}
                      className={cn(
                        index === 0
                          ? 'bg-zinc-800 text-white hover:bg-zinc-800 hover:text-white'
                          : 'text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100'
                      )}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {longNav.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      className='text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100'
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className='p-4'>
            <div className='rounded-xl border border-zinc-800 bg-zinc-900 p-3'>
              <div className='mb-2 flex items-center justify-between'>
                <Sparkles className='size-4 text-emerald-400' />
                <p className='text-xs font-medium text-zinc-100'>Growth plan</p>
                <ChevronDown className='size-3.5 text-zinc-500' />
              </div>
              <p className='text-xs leading-4 text-zinc-500'>
                Turn pipeline activity into next quarter's revenue forecast.
              </p>
              <button className='mt-3 flex w-full items-center justify-between rounded-lg bg-zinc-100 px-3 py-2 text-left text-xs font-medium text-zinc-950 transition hover:bg-white'>
                View plan <ChevronRight className='size-3.5' />
              </button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className='bg-zinc-950'>
          <div className='flex min-h-screen flex-col bg-zinc-950'>
            <header className='flex h-16 shrink-0 items-center justify-between border-b border-zinc-800/80 px-4 lg:px-8'>
              <div className='flex items-center gap-2'>
                <SidebarTrigger className='text-zinc-400' />
                <span className='text-sm font-medium text-zinc-400'>Overview</span>
              </div>
              <div className='flex items-center gap-2'>
                <button className='hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100 md:flex'>
                  <Search className='size-4' />
                </button>
                <button className='hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100 md:flex'>
                  <Bell className='size-4' />
                  <span className='absolute top-1.5 right-1.5 size-1.5 rounded-full bg-emerald-400' />
                </button>
                <button className='flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 py-1.5 pr-3 pl-1.5 transition hover:border-zinc-700'>
                  <Avatar className='size-7'>
                    <AvatarFallback className='bg-emerald-400 text-xs text-emerald-950'>JD</AvatarFallback>
                  </Avatar>
                  <span className='hidden text-sm font-medium text-zinc-200 sm:inline'>Jordan Davis</span>
                  <ChevronDown className='size-3.5 text-zinc-500' />
                </button>
              </div>
            </header>

            <main className='flex-1 space-y-6 px-4 py-6 lg:px-8'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                  <div className='flex items-center gap-2 text-sm text-zinc-500'>
                    <span className='font-medium text-zinc-500'>Overview</span>
                    <span>/</span>
                    <span>Sales performance</span>
                  </div>
                  <h1 className='mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl'>
                    Sales Operations Dashboard
                  </h1>
                  <p className='mt-1 text-sm text-zinc-500'>Manage your pipeline and team performance.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex h-9 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-300'>
                    <CalendarDays className='size-4 text-zinc-500' />
                    Last 30 days
                  </div>
                  <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>
                    Export <ArrowRight className='size-4' />
                  </Button>
                </div>
              </div>

              <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
                {metrics.map((metric) => (
                  <Card key={metric.label} className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-5 ring-0'>
                    <CardContent className='px-5'>
                      <div className='flex items-start justify-between gap-4'>
                        <div>
                          <p className='text-sm text-zinc-400'>{metric.label}</p>
                          <p className='mt-2 text-2xl font-semibold tracking-tight text-zinc-50'>{metric.value}</p>
                          <div className='mt-2 flex items-center gap-2 text-xs text-zinc-500'>
                            <span className={cn('inline-flex items-center gap-1 font-medium', metric.direction === 'up' ? 'text-emerald-400' : 'text-amber-400')}>
                              {metric.direction === 'up' ? <ArrowUpRight className='size-3.5' /> : <ArrowDownRight className='size-3.5' />}
                              {metric.change}
                            </span>
                            <span>{metric.caption}</span>
                          </div>
                        </div>
                        <div className='flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/70'>
                          <metric.icon className='size-4' style={{ color: metric.color }} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className='grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)]'>
                <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
                  <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
                    <div>
                      <CardTitle className='text-base font-medium text-zinc-50'>Revenue Trend</CardTitle>
                      <CardDescription className='text-zinc-500'>Monthly performance vs target</CardDescription>
                    </div>
                    <div className='flex items-center gap-4 text-xs text-zinc-500'>
                      <span className='flex items-center gap-1.5'>
                        <span className='size-2 rounded-full bg-zinc-400' /> Revenue
                      </span>
                      <span className='flex items-center gap-1.5'>
                        <span className='size-2 rounded-full bg-emerald-400' /> Target
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className='px-3 pt-4 sm:px-4'>
                    <div className='h-[300px] w-full'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <AreaChart data={revenueData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                          <defs>
                            <linearGradient id='revenue' x1='0' y1='0' x2='0' y2='1'>
                              <stop offset='5%' stopColor='#34d399' stopOpacity={0.55} />
                              <stop offset='95%' stopColor='#34d399' stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid vertical={false} stroke='#27272a' strokeDasharray='4 4' />
                          <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={12} tick={{ fill: '#71717a', fontSize: 12 }} />
                          <YAxis tickLine={false} axisLine={false} tick={{ fill: '#71717a', fontSize: 12 }} tickFormatter={(value) => `$${value}M`} />
                          <Tooltip
                            cursor={{ stroke: '#3f3f46' }}
                            wrapperStyle={{ outline: 'none' }}
                            contentStyle={{ borderRadius: 12, border: '1px solid #3f3f46', background: '#18181b', color: '#e4e4e7' }}
                          />
                          <Area type='monotone' dataKey='revenue' stroke='#e4e4e7' strokeWidth={2} fill='url(#revenue)' />
                          <Area type='monotone' dataKey='target' stroke='#34d399' strokeWidth={2} fill='transparent' strokeDasharray='5 5' />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
                  <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4'>
                    <CardTitle className='text-base font-medium text-zinc-50'>Pipeline Stages</CardTitle>
                    <CardDescription className='text-zinc-500'>Distribution by stage</CardDescription>
                  </CardHeader>
                  <CardContent className='px-5 pt-5'>
                    <div className='relative mx-auto h-44 w-44'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <PieChart>
                          <Pie data={pipelineData} dataKey='count' nameKey='name' cx='50%' cy='50%' innerRadius={58} outerRadius={76} paddingAngle={3} stroke='none'>
                            {pipelineData.map((entry) => (
                              <Cell key={entry.name} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            wrapperStyle={{ outline: 'none' }}
                            contentStyle={{ borderRadius: 12, border: '1px solid #3f3f46', background: '#18181b', color: '#e4e4e7' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center'>
                        <span className='text-xs text-zinc-500'>Total pipeline</span>
                        <span className='text-lg font-semibold text-zinc-50'>$4.8M</span>
                      </div>
                    </div>
                    <div className='mt-5 space-y-3'>
                      {pipelineData.map((item) => (
                        <div key={item.name} className='flex items-center justify-between text-sm'>
                          <span className='flex items-center gap-2 text-zinc-400'>
                            <span className='size-2 rounded-full' style={{ backgroundColor: item.color }} />
                            {item.name}
                          </span>
                          <span className='text-zinc-500'>{item.count}</span>
                          <span className='font-medium text-zinc-200'>{item.percent}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className='grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.75fr)]'>
                <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
                  <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
                    <div>
                      <CardTitle className='text-base font-medium text-zinc-50'>Recent Deals</CardTitle>
                      <CardDescription className='text-zinc-500'>Latest activity across your pipeline</CardDescription>
                    </div>
                    <Button variant='ghost' size='sm' className='text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'>
                      View all <ArrowRight className='size-3.5' />
                    </Button>
                  </CardHeader>
                  <CardContent className='px-0'>
                    <Table>
                      <TableHeader>
                        <TableRow className='border-zinc-800/70 hover:bg-transparent'>
                          <TableHead className='px-5 text-xs font-medium text-zinc-500'>Deal</TableHead>
                          <TableHead className='px-5 text-xs font-medium text-zinc-500'>Contact</TableHead>
                          <TableHead className='px-5 text-xs font-medium text-zinc-500'>Amount</TableHead>
                          <TableHead className='px-5 text-xs font-medium text-zinc-500'>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentDeals.map((deal) => (
                          <TableRow key={deal.company} className='border-zinc-800/60 hover:bg-zinc-800/30'>
                            <TableCell className='px-5 py-4'>
                              <span className='font-medium text-zinc-200'>{deal.company}</span>
                            </TableCell>
                            <TableCell className='px-5 py-4'>
                              <span className='block text-sm text-zinc-300'>{deal.contact}</span>
                              <span className='block text-xs text-zinc-600'>{deal.time}</span>
                            </TableCell>
                            <TableCell className='px-5 py-4 font-medium text-zinc-200'>{deal.amount}</TableCell>
                            <TableCell className='px-5 py-4'>
                              <Badge
                                variant='outline'
                                className={cn(
                                  'rounded-full bg-transparent',
                                  deal.status === 'Won'
                                    ? 'border-emerald-400/30 text-emerald-300'
                                    : 'border-zinc-700 text-zinc-400'
                                )}
                              >
                                {deal.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
                  <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4'>
                    <CardTitle className='text-base font-medium text-zinc-50'>Top Performers</CardTitle>
                    <CardDescription className='text-zinc-500'>This month's leaders</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4 px-5 py-5'>
                    {topPerformers.map((person) => (
                      <div key={person.name} className='flex items-start gap-3'>
                        <div className='relative'>
                          <Avatar className='size-10'>
                            <AvatarFallback className='bg-zinc-800 font-medium text-zinc-200'>{person.initials}</AvatarFallback>
                          </Avatar>
                          <span className='absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-zinc-950 text-[10px] font-semibold text-zinc-400 ring-1 ring-zinc-700'>
                            {person.rank}
                          </span>
                        </div>
                        <div className='min-w-0 flex-1'>
                          <div className='flex items-center justify-between gap-2'>
                            <span className='truncate text-sm font-medium text-zinc-200'>{person.name}</span>
                            <span className='text-sm font-semibold text-zinc-50'>{person.revenue}</span>
                          </div>
                          <div className='mt-0.5 flex items-center justify-between gap-2 text-xs text-zinc-500'>
                            <span>{person.deals}</span>
                            <span className='font-medium text-emerald-400'>{person.change}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
