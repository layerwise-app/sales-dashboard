import { createFileRoute } from '@tanstack/react-router';
import { Search, UserPlus } from 'lucide-react';
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

export const Route = createFileRoute('/customers')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Customers',
        description: 'Explore accounts, contacts, and customer health.'
      })
    ]
  }),
  component: CustomersPage
});

const customerStats = [
  { label: 'Total accounts', value: '1,248' },
  { label: 'Active accounts', value: '986' },
  { label: 'Net revenue retention', value: '118%' },
  { label: 'Churn rate', value: '2.4%' }
];

const customers = [
  { initials: 'AC', name: 'Acme Corp', owner: 'Sarah Chen', plan: 'Enterprise', value: '$310K', health: 'Healthy' },
  { initials: 'TB', name: 'TechStart Inc', owner: 'Mike Johnson', plan: 'Growth', value: '$184K', health: 'Healthy' },
  { initials: 'CB', name: 'CloudBase Ltd', owner: 'Emily Davis', plan: 'Enterprise', value: '$426K', health: 'At risk' },
  { initials: 'DS', name: 'DataSync Solutions', owner: 'James Wilson', plan: 'Starter', value: '$62K', health: 'Healthy' },
  { initials: 'NL', name: 'Nimbus Labs', owner: 'Lisa Park', plan: 'Growth', value: '$148K', health: 'Attention' }
];

function CustomersPage() {
  return (
    <SalesShell currentPath='/customers'>
      <PageHeader
        eyebrow='Sales'
        title='Customers'
        description='Understand account value, ownership, and health at a glance.'
        actions={
          <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>
            <UserPlus className='size-4' />
            Add customer
          </Button>
        }
      />

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {customerStats.map((stat) => (
          <Card key={stat.label} className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-5 ring-0'>
            <CardContent className='px-5'>
              <p className='text-sm text-zinc-400'>{stat.label}</p>
              <p className='mt-2 text-2xl font-semibold tracking-tight text-zinc-50'>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
        <CardHeader className='gap-2 border-b border-zinc-800/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <CardTitle className='text-base font-medium text-zinc-50'>Accounts</CardTitle>
            <CardDescription className='text-zinc-500'>Managed by your sales team</CardDescription>
          </div>
          <div className='relative w-full sm:w-72'>
            <Search className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-500' />
            <Input className='border-zinc-800 bg-zinc-950 pl-9 text-zinc-300' placeholder='Search accounts...' />
          </div>
        </CardHeader>
        <CardContent className='px-0'>
          <Table>
            <TableHeader>
              <TableRow className='border-zinc-800/70 hover:bg-transparent'>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Account</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Owner</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Plan</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>ARR</TableHead>
                <TableHead className='px-5 text-xs font-medium text-zinc-500'>Health</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.name} className='border-zinc-800/60 hover:bg-zinc-800/30'>
                  <TableCell className='px-5 py-4'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-8'>
                        <AvatarFallback className='bg-zinc-800 text-xs text-zinc-300'>{customer.initials}</AvatarFallback>
                      </Avatar>
                      <span className='font-medium text-zinc-200'>{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{customer.owner}</TableCell>
                  <TableCell className='px-5 py-4 text-zinc-400'>{customer.plan}</TableCell>
                  <TableCell className='px-5 py-4 font-medium text-zinc-200'>{customer.value}</TableCell>
                  <TableCell className='px-5 py-4'>
                    <Badge
                      variant='outline'
                      className={cn(
                        'rounded-full border-zinc-700 bg-transparent text-zinc-300',
                        customer.health === 'Healthy' && 'border-emerald-400/30 text-emerald-300',
                        customer.health === 'Attention' && 'border-yellow-400/30 text-yellow-300',
                        customer.health === 'At risk' && 'border-rose-400/30 text-rose-300'
                      )}
                    >
                      {customer.health}
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
