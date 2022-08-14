import styles from './Avatar.module.css';
import {ImgHTMLAttributes} from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;

}


export function Avatar({hasBorder = true, src, alt, title,...rest}: AvatarProps) {
  return (
    <div>
      <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
        src={src} 
        alt= {alt}
        title={title}
        {...rest}
              
      />
    </div>
  )
}