
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { LoginLayout as component } from '../../layouts/LoginLayout/LoginLayout.view'
export default meta({
  title: 'Layouts/LoginLayout',
  component,
});

const Template = CreateTemplate(component);

export const LoginLayout = Template.bind({});
LoginLayout.args = {

};
