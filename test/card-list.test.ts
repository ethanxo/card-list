import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { CardList } from '../src/card-list.js';
import '../src/card-list.js';

describe('CardList', () => {
  let element: CardList;
  beforeEach(async () => {
    element = await fixture(html`<card-list></card-list>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});