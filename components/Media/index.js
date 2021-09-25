import React from 'react'
import style from "./media_.module.scss"
import {useIsMobile} from "../../hooks/useIsMobile";
import cn from "classnames";

const Media = (props) => {
    const isMobile = useIsMobile();
    const {media} = props;
    return (
        <section className={style.media}>
            <h2 className={style.title}>
                {media.title}
            </h2>
            <div className={style.items}>
                {media.items.map((item, index) => (
                    <a href={item.link} target='_blank' rel='noopener'
                        className={style.item}
                        key={index}
                    >
                        <p className={style.text}>
                            {item.text}
                        </p>
                        <div className={style.bottom}>
                            <div
                                className={cn(
                                    style.img,
                                    style[`img_${item.name}`]
                                )}
                                style={isMobile ? {background: `url(${item.mobileImg}) no-repeat left bottom`}
                                : {background: `url(${item.img}) no-repeat left bottom`}}>
                            </div>
                            <div className={style.date}>
                                {item.date}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Media