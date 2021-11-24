import '../../components/ImageUploader/style.scss';
import { FC } from 'react';
import { cn, CreateScopeCSS } from '../../components/utils';

const scope = CreateScopeCSS('components-image-uploader');
const example = scope.and("example")

interface Props {
}

export const ImageUploader: FC<Props> = ({
  children,
  ...Props
}) => (
  <div className={scope} {...Props}>
    {children}
  </div>
);