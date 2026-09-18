import { Link } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import {
  BarChart3,
  Bell,
  ChevronDown,
  ChevronRight,
  GitBranch,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Settings,
  Sparkles,
  UserPlus,
  Users,
  Wallet
} from 'lucide-react';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { cn } from '~/lib/utils';

const navSections = [
  {
    label: 'Overview',
    items: [{ label: 'Dashboard', to: '/', icon: LayoutDashboard }]
  },
  {
    label: 'Sales',
    items: [
      { label: 'Pipeline', to: '/pipeline', icon: GitBranch },
      { label: 'Leads', to: '/leads', icon: UserPlus },
      { label: 'Deals', to: '/deals', icon: Wallet },
      { label: 'Customers', to: '/customers', icon: Users }
    ]
  },
  {
    label: 'Insights',
    items: [
      { label: 'Team', to: '/team', icon: Users },
      { label: 'Reports', to: '/reports', icon: BarChart3 }
    ]
  },
  {
    label: 'Manage',
    items: [{ label: 'Settings', to: '/settings', icon: Settings }]
  }
];

type NavItem = (typeof navSections)[number]['items'][number];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400 font-bold text-emerald-950 shadow-[0_0_28px_rgba(52,211,153,0.28)]'>
        V
      </div>
      {!compact && (
        <div className='min-w-0'>
          <p className='truncate text-sm font-semibold text-zinc-50'>SalesOps</p>
          <p className='truncate text-xs text-zinc-500'>Revenue hub</p>
        </div>
      )}
    </div>
  );
}

function SidebarItem({
  item,
  active,
  collapsed,
  onNavigate
}: {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      to={item.to}
      onClick={onNavigate}
      className={cn(
        'group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm transition-colors',
        active
          ? 'bg-zinc-100 font-medium text-zinc-950'
          : 'text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-100',
        collapsed && 'justify-center px-2'
      )}
      title={item.label}
    >
      <item.icon className='size-4 shrink-0' />
      {!collapsed && <span className='truncate'>{item.label}</span>}
    </Link>
  );
}

function Sidebar({
  collapsed,
  currentPath,
  onNavigate
}: {
  collapsed: boolean;
  currentPath: string;
  onNavigate?: () => void;
}) {
  return (
    <aside
      className={cn(
        'sticky top-0 hidden h-dvh shrink-0 flex-col border-r border-zinc-800/80 bg-zinc-950 transition-[width] duration-200 md:flex',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      <div className='flex h-16 shrink-0 items-center px-4'>
        <BrandMark compact={collapsed} />
      </div>

      <div className='flex-1 space-y-6 overflow-y-auto px-3 pb-4'>
        {navSections.map((section) => (
          <div key={section.label}>
            {!collapsed && (
              <p className='mb-2 px-3 text-xs font-medium text-zinc-600'>{section.label}</p>
            )}
            <div className='space-y-1'>
              {section.items.map((item) => (
                <SidebarItem
                  key={item.label}
                  item={item}
                  active={currentPath === item.to}
                  collapsed={collapsed}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='border-t border-zinc-800/80 p-3'>
        {!collapsed ? (
          <div className='rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-3'>
            <div className='mb-2 flex items-center justify-between'>
              <Sparkles className='size-4 text-emerald-400' />
              <p className='text-xs font-medium text-zinc-100'>Growth plan</p>
              <ChevronDown className='size-3.5 text-zinc-600' />
            </div>
            <p className='text-xs leading-4 text-zinc-500'>
              Turn pipeline activity into next quarter's revenue forecast.
            </p>
            <button
              type='button'
              className='mt-3 flex w-full items-center justify-between rounded-lg bg-zinc-100 px-3 py-2 text-left text-xs font-medium text-zinc-950 transition hover:bg-white'
            >
              View plan <ChevronRight className='size-3.5' />
            </button>
          </div>
        ) : (
          <button
            type='button'
            className='flex h-10 w-full items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100'
            title='Growth plan'
          >
            <Sparkles className='size-4 text-emerald-400' />
          </button>
        )}
      </div>
    </aside>
  );
}

function MobileSidebar({
  open,
  onClose,
  currentPath
}: {
  open: boolean;
  onClose: () => void;
  currentPath: string;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 md:hidden'>
      <button
        type='button'
        className='absolute inset-0 bg-black/60'
        onClick={onClose}
        aria-label='Close navigation'
      />
      <aside className='absolute inset-y-0 left-0 flex w-72 flex-col border-r border-zinc-800 bg-zinc-950 shadow-2xl'>
        <div className='flex h-16 shrink-0 items-center justify-between px-4'>
          <BrandMark />
          <button
            type='button'
            onClick={onClose}
            className='flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100'
            aria-label='Close navigation'
          >
            <PanelLeftClose className='size-4' />
          </button>
        </div>
        <div className='flex-1 space-y-6 overflow-y-auto px-3 pb-4'>
          {navSections.map((section) => (
            <div key={section.label}>
              <p className='mb-2 px-3 text-xs font-medium text-zinc-600'>{section.label}</p>
              <div className='space-y-1'>
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.label}
                    item={item}
                    active={currentPath === item.to}
                    collapsed={false}
                    onNavigate={onClose}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='border-t border-zinc-800/80 p-3'>
          <div className='rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-3'>
            <div className='mb-2 flex items-center justify-between'>
              <Sparkles className='size-4 text-emerald-400' />
              <p className='text-xs font-medium text-zinc-100'>Growth plan</p>
              <ChevronDown className='size-3.5 text-zinc-600' />
            </div>
            <p className='text-xs leading-4 text-zinc-500'>
              Turn pipeline activity into next quarter's revenue forecast.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        {eyebrow && (
          <div className='flex items-center gap-2 text-sm text-zinc-500'>
            <span className='font-medium text-zinc-400'>{eyebrow}</span>
            <span>/</span>
            <span>{title}</span>
          </div>
        )}
        <h1 className='mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl'>
          {title}
        </h1>
        <p className='mt-1 text-sm text-zinc-500'>{description}</p>
      </div>
      {actions && <div className='flex flex-wrap items-center gap-2'>{actions}</div>}
    </div>
  );
}

export function SalesShell({
  currentPath,
  children
}: {
  currentPath: string;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentLabel =
    navSections.flatMap((section) => section.items).find((item) => item.to === currentPath)?.label ??
    'Overview';

  return (
    <div className='dark min-h-screen bg-zinc-950 text-zinc-100'>
      <div className='flex min-h-screen'>
        <Sidebar collapsed={collapsed} currentPath={currentPath} />
        <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} currentPath={currentPath} />

        <div className='min-w-0 flex-1'>
          <header className='sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-zinc-800/80 bg-zinc-950/90 px-4 backdrop-blur lg:px-8'>
            <div className='flex items-center gap-3'>
              <button
                type='button'
                onClick={() => setMobileOpen(true)}
                className='flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100 md:hidden'
                aria-label='Open navigation'
              >
                <PanelLeftOpen className='size-4' />
              </button>
              <button
                type='button'
                onClick={() => setCollapsed((value) => !value)}
                className='hidden h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100 md:flex'
                aria-label='Toggle sidebar'
              >
                {collapsed ? <PanelLeftOpen className='size-4' /> : <PanelLeftClose className='size-4' />}
              </button>
              <div className='flex items-center gap-2 md:hidden'>
                <BrandMark compact />
              </div>
              <span className='hidden text-sm font-medium text-zinc-400 sm:inline'>{currentLabel}</span>
            </div>
            <div className='flex items-center gap-2'>
              <button
                type='button'
                className='hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100 md:flex'
                aria-label='Search'
              >
                <Search className='size-4' />
              </button>
              <button
                type='button'
                className='relative hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-zinc-100 md:flex'
                aria-label='Notifications'
              >
                <Bell className='size-4' />
                <span className='absolute top-1.5 right-1.5 size-1.5 rounded-full bg-emerald-400' />
              </button>
              <button
                type='button'
                className='flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 py-1.5 pr-3 pl-1.5 transition hover:border-zinc-700'
              >
                <Avatar className='size-7'>
                  <AvatarFallback className='bg-emerald-400 text-xs text-emerald-950'>JD</AvatarFallback>
                </Avatar>
                <span className='hidden text-sm font-medium text-zinc-200 sm:inline'>Jordan Davis</span>
                <ChevronDown className='size-3.5 text-zinc-500' />
              </button>
            </div>
          </header>

          <main className='bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.08),transparent_42%)]'>
            <div className='space-y-6 px-4 py-6 lg:px-8'>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
