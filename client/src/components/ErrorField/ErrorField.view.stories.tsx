import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { ErrorField as component } from '../../components/ErrorField/ErrorField.view';

export default meta({
  title: 'Components/ErrorField',
  component,
});

const Template = CreateTemplate(component);

export const ErrorField = Template.bind({});
ErrorField.args = {

};
