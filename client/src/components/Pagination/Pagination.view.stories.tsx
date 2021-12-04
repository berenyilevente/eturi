import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { Pagination as component } from '../../components/Pagination/Pagination.view';

export default meta({
  title: 'Components/Pagination',
  component,
});

const Template = CreateTemplate(component);

export const Pagination = Template.bind({});
Pagination.args = {

};
