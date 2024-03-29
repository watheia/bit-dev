import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { CreateComponents } from './index';

export const BasicCreateComponents = () => (
  <ThemeCompositions>
    <MDXLayout>
      <CreateComponents />
    </MDXLayout>
  </ThemeCompositions>
);
