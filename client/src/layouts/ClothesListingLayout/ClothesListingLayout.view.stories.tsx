
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { ClothesListingLayout as component } from '../../layouts/ClothesListingLayout/ClothesListingLayout.view'
export default meta({
  title: 'Layouts/ClothesListingLayout',
  component,
});

const Template = CreateTemplate(component);

export const ClothesListingLayout = Template.bind({});
ClothesListingLayout.args = {

};
