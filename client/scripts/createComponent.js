const fs = require("fs");
const path = require("path");
const basepath = path.join(process.cwd(), "/src/components/");
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

function main() {
  createComponent();
}

function createFile(folder, name, content) {
  if (!fs.existsSync(`${folder}/${name}`)) {
    fs.writeFileSync(`${folder}/${name}`, content);
    console.log(`Created ${name}.`);
  } else {
    console.log(`"${name} already exists and will not be modified.`);
  }
}

function createViewTemplate(name) {
  return `import '../../components/${name}/style.scss';
import { FC } from 'react';
import { cn, CreateScopeCSS } from '../../components/utils';

const scope = CreateScopeCSS('components-${cssName(name)}');
const example = scope.and("example")

interface Props {
}

export const ${name}: FC<Props> = ({
  children,
  ...Props
}) => (
  <div className={scope} {...Props}>
    {children}
  </div>
);`;
}

function createCssTemplate(name) {
  return `$scope: components-${cssName(name)};
//just an example class, tbd
.#{$scope}{
  //define css styles here
  &-example {
    //define css styles here
  }
}
`;
}

function createStorybookTemplate(name) {
  return `import '../../styles/index.scss';
import { CreateTemplate, meta } from '../../storybook/utils';
import { ${name} as component } from '../../components/${name}/${name}.view';

export default meta({
  title: 'Components/${name}',
  component,
});

const Template = CreateTemplate(component);

export const ${name} = Template.bind({});
${name}.args = {

};
`;
}

function createStoryStyleTemplate(name) {
  return `$scope: components-${cssName(name)}-story;
//just an example class, tbd
.#{$scope}{
  //define css styles here
  &-example {
    //define css styles here
  }
}`;
}

function createStatelessExportTemplate(name) {
  return `export { ${name} as default } from '../../components/${name}/${name}.view';
`;
}

function createStatefulExportTemplate(name) {
  return `export { ${name} as default } from '@/components/${name}/${name}';
export { use${name} } from '@/components/${name}/${name}';
export { ${name} } from '@/components/${name}/${name}.view';
`;
}

function createStatefulTemplate(name) {
  return `import { ComponentHook } from '@/types/ComponentHook';
import { ${name} as View } from '@/components/${name}/${name}.view';
import { FC } from 'react';

interface Props {
}

export const use${name}: ComponentHook<Props, typeof View, { render?: boolean }> = ({
}) => {

  return {
  };
};

export const ${name}: FC<Props> = ({ children, ...props }) => {
  const computedProps = use${name}(props);
  return <View {...computedProps}>{children}</View>;
};`;
}

//puts dashes before capitalized characters then switches it all to lowercase
function cssName(input) {
  return (
    input[0] + input.slice(1, input.length).replace(/([A-Z])/g, "-$1")
  ).toLowerCase();
}

const createComponent = async () => {
  try {
    let component = await question("Component name: ");
    component = component[0].toUpperCase() + component.slice(1);
    folder = basepath + component;
    const stateful = await question("Stateful? y/n: ");
    try {
      //directory
      fs.mkdirSync(`${folder}`);
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
      console.log("Folder already exists");
    }
    rl.close();
    console.log(`\nCreating component: ${component}.`);
    createFile(folder, component + ".view.tsx", createViewTemplate(component));
    createFile(folder, "style.scss", createCssTemplate(component));
    createFile(
      folder,
      component + ".view.stories.tsx",
      createStorybookTemplate(component)
    );
    createFile(folder, "story-style.scss", createStoryStyleTemplate(component));

    if (stateful[0].toUpperCase() == "Y") {
      createFile(folder, component + ".tsx", createStatefulTemplate(component));
      createFile(folder, "index.tsx", createStatefulExportTemplate(component));
    } else {
      createFile(folder, "index.tsx", createStatelessExportTemplate(component));
    }

    console.log(`\n${component} component creation complete.`);
  } catch (err) {
    console.error("Question rejected", err);
  }
};

main();
