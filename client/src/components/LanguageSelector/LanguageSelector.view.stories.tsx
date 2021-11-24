import '../../styles/index.scss';
import { CreateTemplate, meta } from '@/storybook/utils';
import { LanguageSelector as component } from '../../components/LanguageSelector/LanguageSelector.view';

export default meta({
  title: 'Components/LanguageSelector',
  component,
});

const Template = CreateTemplate(component);

export const LanguageSelector = Template.bind({});
LanguageSelector.args = {

};
