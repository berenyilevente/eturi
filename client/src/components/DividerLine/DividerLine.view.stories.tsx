import '../../styles/index.scss';
import { CreateTemplate, meta } from '@/storybook/utils';
import { DividerLine as component } from '../../components/DividerLine/DividerLine.view';

export default meta({
  title: 'Components/DividerLine',
  component,
});

const Template = CreateTemplate(component);

export const DividerLine = Template.bind({});
DividerLine.args = {

};
