import "@/styles/index.scss";
import { CreateTemplate, meta } from "storybook";
import { Card as component } from "components";

export default meta({
  title: "Components/Card",
  component,
});

const Template = CreateTemplate(component);

export const Card = Template.bind({});
Card.args = {
  backgroundColorStyle: "white",
  shadow: true,
  rounded: true,
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio
      beatae, veniam nobis exercitationem aliquam repellat ipsum, totam dolor
      voluptas illo ex quasi dignissimos quos quis autem eligendi saepe eveniet?
      Quo officiis voluptates laudantium asperiores ex nam, neque deserunt,
      inventore animi alias, natus maxime ratione quasi cum vel tempora
      voluptate debitis! Ut quasi totam dolore aliquid assumenda fugiat a illo?
      Odio voluptatem dolorum expedita! Sunt non a necessitatibus reprehenderit
      nostrum suscipit, fuga optio facere nobis inventore maxime pariatur, magni
      laborum excepturi totam qui eum. Reprehenderit modi praesentium ducimus
      fugiat fugit! Totam similique incidunt impedit hic assumenda nesciunt
      magni atque, praesentium iusto. Excepturi ullam quidem dolorum libero at,
      adipisci necessitatibus, nisi quod placeat aut quas consequuntur neque
      totam, similique quae mollitia. Nobis, corrupti omnis, suscipit quam,
      animi quidem commodi quos exercitationem numquam amet qui blanditiis! Nam
      sequi, suscipit qui repudiandae id et omnis nesciunt quisquam, itaque
      accusamus officiis doloribus reprehenderit? Corporis? Inventore nesciunt
      ipsa alias obcaecati necessitatibus incidunt voluptatum est, magnam
      debitis dicta dolorum! Soluta doloribus labore delectus fugiat molestias
      reprehenderit similique tempora quisquam, hic minima vel laudantium!
      Cupiditate, ullam debitis. Esse unde delectus doloremque necessitatibus
      nisi ad autem architecto quos corrupti, accusamus error inventore nihil,
      perferendis odit aspernatur velit illum sequi voluptatem a minima
      molestiae. Odio sunt totam fugiat laboriosam. Quod iure animi ad voluptate
      incidunt cupiditate porro nam, necessitatibus quae. Obcaecati ullam
      placeat aliquam impedit numquam, corporis quis distinctio quisquam
      quibusdam dolore commodi laudantium minus maiores eaque ducimus quia!
    </div>
  ),
};
