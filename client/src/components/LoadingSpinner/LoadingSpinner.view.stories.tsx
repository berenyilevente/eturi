import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { LoadingSpinner as component } from '../../components/LoadingSpinner/LoadingSpinner.view';

export default meta({
  title: 'Components/LoadingSpinner',
  component,
});

const Template = CreateTemplate(component);

export const LoadingSpinner = Template.bind({});
LoadingSpinner.args = {

};
