'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Content, Theme } from '@carbon/react';
import { ReactNode } from 'react';
import { AppHeader, BrandLogo } from 'enjanga-next-3-components-lib'; // ENJ NPM component library
import { GlobalActions, GlobalNav } from '../components/GlobalMenus';
import { SkipNavigationLink } from '@/components/SkipNavigationLink';
import AppFooter from '../components/AppFooter/AppFooter';
import { AppUseUtility } from '../utils/UtilityContext';

interface RootLayoutProps {
  children: ReactNode;
}

export function Providers({ children }: RootLayoutProps) {
  const { brand } = AppUseUtility();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <SkipNavigationLink destinationId="main-content" />
        <Theme theme="g10">
          <AppHeader
            brandLabel={brand.name}
            brandRoute="/"
            brand={<BrandLogo value={brand.name} />}
            navigation={<GlobalNav />}
            globalBarItems={<GlobalActions />}
          />
        </Theme>
        <main id="main-content">
          <Content>{children}</Content>
        </main>
        <AppFooter />
      </div>
    </QueryClientProvider>
  );
}
