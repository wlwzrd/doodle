
import React from 'react';
import CardAction from '../../../molecules/card-action/src';
import Button from '../../../atoms/button/src';

const ResultsGrid = (props) => {
    const { results } = props;

    const handleClick = (details) => {
        let anchor = document.createElement('a');
        anchor.href = details;
        anchor.target = '_blank';
        anchor.click();
    };

    return (
        <div className='results-grid'>
            {results && results.map((result, index) => (
                <CardAction
                    key={index}
                    action={<Button onClick={() => handleClick(result.details)}>Details</Button>}
                    img={result.img}
                    text={result.name} />
            ))}
        </div>
    );
}

export default ResultsGrid;
