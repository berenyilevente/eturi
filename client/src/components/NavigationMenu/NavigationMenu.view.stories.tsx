import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { NavigationMenu as component } from '../../components/NavigationMenu/NavigationMenu.view';

export default meta({
  title: 'Components/NavigationMenu',
  component,
});

const Template = CreateTemplate(component);

export const NavigationMenu = Template.bind({});
NavigationMenu.args = {

};
