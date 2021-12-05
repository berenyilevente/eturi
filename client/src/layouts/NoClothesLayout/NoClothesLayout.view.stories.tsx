
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { NoClothesLayout as component } from '../../layouts/NoClothesLayout/NoClothesLayout.view'
export default meta({
  title: 'Layouts/NoClothesLayout',
  component,
});

const Template = CreateTemplate(component);

export const NoClothesLayout = Template.bind({});
NoClothesLayout.args = {

};
