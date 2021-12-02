
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { ProfileLayout as component } from '../../layouts/ProfileLayout/ProfileLayout.view'
export default meta({
  title: 'Layouts/ProfileLayout',
  component,
});

const Template = CreateTemplate(component);

export const ProfileLayout = Template.bind({});
ProfileLayout.args = {

};
