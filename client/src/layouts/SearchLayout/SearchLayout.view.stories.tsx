
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { SearchLayout as component } from '../../layouts/SearchLayout/SearchLayout.view'
export default meta({
  title: 'Layouts/SearchLayout',
  component,
});

const Template = CreateTemplate(component);

export const SearchLayout = Template.bind({});
SearchLayout.args = {

};
