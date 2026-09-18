import { createFileRoute } from '@tanstack/react-router';
import { Bell, Building2, KeyRound, Save, Shield, UserCircle2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { PageHeader, SalesShell } from '~/components/sales-shell';
import { seo } from '~/utils/seo';

export const Route = createFileRoute('/settings')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Settings',
        description: 'Manage your team, workspace, and notification preferences.'
      })
    ]
  }),
  component: SettingsPage
});

const sections = [
  { label: 'Profile', icon: UserCircle2, active: true },
  { label: 'Workspace', icon: Building2 },
  { label: 'Security', icon: Shield },
  { label: 'Notifications', icon: Bell },
  { label: 'API keys', icon: KeyRound }
];

function SettingsPage() {
  return (
    <SalesShell currentPath='/settings'>
      <PageHeader
        eyebrow='Manage'
        title='Settings'
        description='Configure your profile, workspace, and security preferences.'
        actions={
          <Button className='bg-zinc-100 text-zinc-950 hover:bg-white'>
            <Save className='size-4' />
            Save changes
          </Button>
        }
      />

      <div className='grid gap-4 lg:grid-cols-[220px_1fr]'>
        <Card className='h-fit gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
          <CardContent className='p-2'>
            {sections.map((section) => (
              <button
                key={section.label}
                type='button'
                className={[
                  'flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm transition-colors',
                  section.active
                    ? 'bg-zinc-100 font-medium text-zinc-950'
                    : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-100'
                ].join(' ')}
              >
                <section.icon className='size-4' />
                {section.label}
              </button>
            ))}
          </CardContent>
        </Card>

        <div className='space-y-4'>
          <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
            <CardHeader className='border-b border-zinc-800/70 px-5 py-4'>
              <CardTitle className='text-base font-medium text-zinc-50'>Profile</CardTitle>
              <CardDescription className='text-zinc-500'>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className='space-y-5 px-5 py-5'>
              <div className='flex items-center gap-4'>
                <Avatar className='size-14'>
                  <AvatarFallback className='bg-emerald-400 text-base text-emerald-950'>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-sm font-medium text-zinc-200'>Jordan Davis</p>
                  <p className='text-xs text-zinc-500'>Sales Operations Manager</p>
                </div>
                <Button variant='outline' size='sm' className='ml-auto border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-zinc-100'>
                  Change photo
                </Button>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label className='text-sm text-zinc-400'>Full name</Label>
                  <Input className='border-zinc-800 bg-zinc-950 text-zinc-200' defaultValue='Jordan Davis' />
                </div>
                <div className='space-y-2'>
                  <Label className='text-sm text-zinc-400'>Email</Label>
                  <Input className='border-zinc-800 bg-zinc-950 text-zinc-200' defaultValue='jordan@salesops.app' />
                </div>
                <div className='space-y-2'>
                  <Label className='text-sm text-zinc-400'>Phone</Label>
                  <Input className='border-zinc-800 bg-zinc-950 text-zinc-200' defaultValue='+1 415 555 0128' />
                </div>
                <div className='space-y-2'>
                  <Label className='text-sm text-zinc-400'>Timezone</Label>
                  <Input className='border-zinc-800 bg-zinc-950 text-zinc-200' defaultValue='Asia/Shanghai' />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='gap-0 border-zinc-800/80 bg-zinc-900/70 py-0 ring-0'>
            <CardHeader className='border-b border-zinc-800/70 px-5 py-4'>
              <CardTitle className='text-base font-medium text-zinc-50'>Workspace</CardTitle>
              <CardDescription className='text-zinc-500'>SalesOps revenue workspace</CardDescription>
            </CardHeader>
            <CardContent className='space-y-5 px-5 py-5'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label className='text-sm text-zinc-400'>Workspace name</Label>
                  <Input className='border-zinc-800 bg-zinc-950 text-zinc-200' defaultValue='SalesOps' />
                </div>
                <div className='space-y-2'>
                  <Label className='text-sm text-zinc-400'>Currency</Label>
                  <Input className='border-zinc-800 bg-zinc-950 text-zinc-200' defaultValue='USD ($)' />
                </div>
              </div>
              <div className='flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-3'>
                <div>
                  <p className='text-sm font-medium text-zinc-200'>Usage plan</p>
                  <p className='text-xs text-zinc-500'>Growth plan with full reporting</p>
                </div>
                <Badge variant='outline' className='rounded-full border-emerald-400/30 text-emerald-300'>
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SalesShell>
  );
}
