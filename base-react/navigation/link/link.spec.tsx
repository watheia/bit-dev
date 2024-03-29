import React from 'react';
import { render } from '@testing-library/react';
import { BasicLink, ExternalLink } from './link.composition';

describe('native html link', () => {
  it('should render', () => {
    const { getByText } = render(<BasicLink />);
    const rendered = getByText('bit.dev');
    expect(rendered).toBeInstanceOf(HTMLElement);
  });

  it('should link to target', () => {
    const { getByText } = render(<BasicLink />);
    const rendered = getByText('bit.dev');
    expect(rendered.tagName).toEqual('A');
    expect(rendered).toHaveProperty('href', 'https://bit.dev/')
  });

  it('should open in new tab/window, when external=true', () => {
    const { getByText } = render(<ExternalLink />);
    const rendered = getByText('bit.dev');
    expect(rendered).toHaveProperty('target', '_blank');
    // security - rel='noopener' prevents the opened page to gain any kind of access to the original page.
    expect(rendered).toHaveProperty('rel', 'noopener');
  });
});

