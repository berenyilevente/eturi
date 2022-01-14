import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { Illustrations as component } from '../../components/Illustrations/Illustrations.view';

export default meta({
  title: 'Components/Illustrations',
  component,
});

const Template = CreateTemplate(component);

export const Illustrations = Template.bind({});
Illustrations.args = {

};
