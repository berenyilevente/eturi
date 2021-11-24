import '../../styles/index.scss';
import { CreateTemplate, meta } from '@/storybook/utils';
import { Link as component } from '../../components/Link/Link.view';

export default meta({
  title: 'Components/Link',
  component,
});

const Template = CreateTemplate(component);

export const Link = Template.bind({});
Link.args = {

};
