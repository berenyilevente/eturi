
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { UserVerificationLayout as component } from '../../layouts/UserVerificationLayout/UserVerificationLayout.view'
export default meta({
  title: 'Layouts/UserVerificationLayout',
  component,
});

const Template = CreateTemplate(component);

export const UserVerificationLayout = Template.bind({});
UserVerificationLayout.args = {

};
