import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { ImageUploader as component } from '../../components/ImageUploader/ImageUploader.view';

export default meta({
  title: 'Components/ImageUploader',
  component,
});

const Template = CreateTemplate(component);

export const ImageUploader = Template.bind({});
ImageUploader.args = {

};
