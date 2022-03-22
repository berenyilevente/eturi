import { CreateTemplate, meta } from "storybook";
import { DropdownMenu as component } from "components";

export default meta({
  title: "Components/DropdownMenu",
  component,
});

const Template = CreateTemplate(component);
const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];
export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  items: items,
  content: "Select something",
};
