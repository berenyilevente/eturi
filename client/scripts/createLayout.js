const fs = require("fs");
const path = require("path");
const basepath = path.join(process.cwd(), "/src/layouts/");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (question) => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

function createLayoutFile(folder, name, content) {
  if (!fs.existsSync(`${folder}/${name}`)) {
    fs.writeFileSync(`${folder}/${name}`, content);
    console.log(`Created ${name}.`);
  } else {
    console.log(`"${name} already exists and will not be modified.`);
  }
}

function main() {
  createLayout();
}

function createLayoutStorybookTemplate(name) {
  return `
import '../../styles/index.scss'
import { CreateTemplate, meta } from '../../storybook/utils';
import { ${name} as component } from '../../layouts/${name}/${name}.view'
export default meta({
  title: 'Layouts/${name}',
  component,
});

const Template = CreateTemplate(component);

export const ${name} = Template.bind({});
${name}.args = {

};
`;
}

function createLayoutViewTemplate(name) {
  return `
import '../../layouts/${name}/style.scss';
import { FC, ReactNode } from 'react';
import { cn, CreateScopeCSS } from '../../components/utils';

const scope = CreateScopeCSS('layouts-${cssName(name)}');
const example = scope.and("example")

interface Props {
}

export const ${name}: FC<Props> = ({
}) => (
  <div className={scope}>
    <div>{}</div>
  </div>
);`;
}

function createLayoutExportTemplate(name) {
  return `export { ${name} as default } from '../../layouts/${name}/${name}.view'`;
}

function createLayoutCssTemplate(name) {
  return `
$scope: layouts-${cssName(name)};
//just an example class, tbd
.#{$scope}{
  //define css styles here
  &-example {
    //define css styles here
  }
}
`;
}

//puts dashes before capitalized characters then switches it all to lowercase
function cssName(input) {
  return (
    input[0] + input.slice(1, input.length).replace(/([A-Z])/g, "-$1")
  ).toLowerCase();
}

const createLayout = async () => {
  try {
    let layout = await question("Layout name: ");
    layout = layout[0].toUpperCase() + layout.slice(1);
    folder = basepath + layout;
    try {
      //directory
      fs.mkdirSync(`${folder}`);
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
      console.log("Folder already exists");
    }
    rl.close();
    console.log(`\nCreating layout: ${layout}.`);
    createLayoutFile(
      folder,
      layout + ".view.tsx",
      createLayoutViewTemplate(layout)
    );
    createLayoutFile(folder, "style.scss", createLayoutCssTemplate(layout));
    createLayoutFile(
      folder,
      layout + ".view.stories.tsx",
      createLayoutStorybookTemplate(layout)
    );
    createLayoutFile(folder, "index.tsx", createLayoutExportTemplate(layout));
    console.log(`\n${layout} layout creation complete.`);
  } catch (err) {
    console.error("Question rejected", err);
  }
};

main();
