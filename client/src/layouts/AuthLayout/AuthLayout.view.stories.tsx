
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { AuthLayout as component } from '../../layouts/AuthLayout/AuthLayout.view'
export default meta({
  title: 'Layouts/AuthLayout',
  component,
});

const Template = CreateTemplate(component);

export const AuthLayout = Template.bind({});
AuthLayout.args = {

};
