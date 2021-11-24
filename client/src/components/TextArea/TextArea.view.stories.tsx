import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { TextArea as component } from '../../components/TextArea/TextArea.view';

export default meta({
  title: 'Components/TextArea',
  component,
});

const Template = CreateTemplate(component);

export const TextArea = Template.bind({});
TextArea.args = {

};
