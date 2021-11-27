
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { EditClothesDetailsLayout as component } from '../../layouts/EditClothesDetailsLayout/EditClothesDetailsLayout.view'
export default meta({
  title: 'Layouts/EditClothesDetailsLayout',
  component,
});

const Template = CreateTemplate(component);

export const EditClothesDetailsLayout = Template.bind({});
EditClothesDetailsLayout.args = {

};
