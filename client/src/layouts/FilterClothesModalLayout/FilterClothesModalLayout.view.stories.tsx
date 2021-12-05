
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { FilterClothesModalLayout as component } from '../../layouts/FilterClothesModalLayout/FilterClothesModalLayout.view'
export default meta({
  title: 'Layouts/FilterClothesModalLayout',
  component,
});

const Template = CreateTemplate(component);

export const FilterClothesModalLayout = Template.bind({});
FilterClothesModalLayout.args = {

};
