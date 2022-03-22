import { meta } from "storybook";
import { Text as TextComponent } from "components";
import { Meta, Story } from "@storybook/react";
import { ITextProps } from ".";

export default meta({
  title: "Components/Text",
  component: TextComponent,
}) as Meta;

const textTypes = [
  "text-extra-small-dark",
  "text-small-dark",
  "text-medium-dark",
  "text-normal-dark",
  "text-large-dark",
  "text-extra-large-dark",
  "text-extra-small-white",
  "text-small-white",
  "text-medium-white",
  "text-normal-white",
  "text-large-white",
  "text-extra-large-white",
  "errorText",
];

const Template: Story<ITextProps> = (args) => (
  <div>
    Test element:
    <br />
    <br />
    <TextComponent {...args}>Lorem ipsum dolor sit amet</TextComponent>
    <br />
    <br />
    <div className="d-flex ml-3">
      <div>
        {textTypes.map((type: any) => (
          <div key={type}>
            {type}:
            <br />
            <TextComponent {...args} textType={type}>
              Aa Bb Cc Dd 1 2 3 4
            </TextComponent>
            <br />
            <br />
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "black" }}>
        {textTypes.map((type: any) => (
          <div key={type}>
            <span style={{ color: "white" }}>{type}:</span>
            <br />
            <TextComponent {...args} textType={type}>
              Aa Bb Cc Dd 1 2 3 4
            </TextComponent>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Text = Template.bind({});
Text.args = {};
