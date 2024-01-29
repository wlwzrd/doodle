
import React from 'react';
import Card from '../../../atoms/card/src';
import Typography from '../../../atoms/typography/src';
import Image from '../../../atoms/image/src';

const CardAction = (props) => {
    const { action, img, text } = props;
    return (
        <Card alignItems="center">
            <Image src={img} />
            <Typography component="h3">{text}</Typography>
            {action}
        </Card>
    );
}

export default CardAction;
