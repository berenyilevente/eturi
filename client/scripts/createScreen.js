const fs = require("fs");
const path = require("path");
const basepath = path.join(process.cwd(), "/src/screens/");
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

function createScreenFile(folder, name, content) {
  if (!fs.existsSync(`${folder}/${name}`)) {
    fs.writeFileSync(`${folder}/${name}`, content);
    console.log(`Created ${name}.`);
  } else {
    console.log(`"${name} already exists and will not be modified.`);
  }
}

function main() {
  createScreen();
}

function createScreenTemplate(name) {
  return `
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const use${name} = () => { 
const { t } = useTranslation();

return{}
}

const ${name}: FC = () =>{
const {} =  use${name}()

return(<></>)
}
export default ${name}
`;
}

const createScreen = async () => {
  try {
    let layout = await question("Screen name: ");
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
    console.log(`\nCreating screen: ${layout}.`);
    createScreenFile(folder, layout + ".tsx", createScreenTemplate(layout));

    console.log(`\n${layout} screen creation complete.`);
  } catch (err) {
    console.error("Question rejected", err);
  }
};

main();
