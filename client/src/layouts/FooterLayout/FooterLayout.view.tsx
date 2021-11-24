import "../../layouts/FooterLayout/style.scss";
import { FC, ReactNode } from "react";
import { CreateScopeCSS } from "../../components/utils";

const scope = CreateScopeCSS("layouts-footer-layout");
const navigationClass = scope.and("navigation");
const socialClass = scope.and("social");
const languageClass = scope.and("language");

interface Props {
  navigation: ReactNode;
  socialMedia: ReactNode;
  languageSelector: ReactNode;
}

export const FooterLayout: FC<Props> = ({
  navigation,
  socialMedia,
  languageSelector,
}) => (
  <>
    <div className={scope}>
      <div className={navigationClass}>{navigation}</div>
      <div className={socialClass}>{socialMedia}</div>
      <div className={languageClass}>{languageSelector}</div>
    </div>
  </>
);
