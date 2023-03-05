import { html, TemplateResult } from 'lit';
import '../src/card-list.js';

export default {
  title: 'CardList',
  component: 'card-list',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <card-list style="--card-list-background-color: ${backgroundColor}" .title=${title}></card-list>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
