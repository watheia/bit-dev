import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { MultiCompiler } from './index';

export const BasicMultiCompiler = () => {
  return (
    <ThemeCompositions>
      <MDXLayout>
        <MultiCompiler />
      </MDXLayout>
    </ThemeCompositions>
  );
};
