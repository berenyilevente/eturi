import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { Badge as component } from '../../components/Badge/Badge.view';

export default meta({
  title: 'Components/Badge',
  component,
});

const Template = CreateTemplate(component);

export const Badge = Template.bind({});
Badge.args = {

};
