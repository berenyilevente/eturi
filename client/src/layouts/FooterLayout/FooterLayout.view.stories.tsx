
import '@/styles/index.scss'
import { CreateTemplate, meta } from '@/storybook/utils';
import { FooterLayout as component } from '@/layouts/FooterLayout/FooterLayout.view'
export default meta({
  title: 'Layouts/FooterLayout',
  component,
});

const Template = CreateTemplate(component);

export const FooterLayout = Template.bind({});
FooterLayout.args = {

};
