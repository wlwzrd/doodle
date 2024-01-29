
import React from 'react';
import CardAction from '../../../molecules/card-action/src';
import Button from '../../../atoms/button/src';

const ResultsGrid = (props) => {
    const { results } = props;
    return (
        <div className='results-grid'>
            {results && results.map((result, index) => (
                <CardAction
                    key={index}
                    action={<Button>Details</Button>}
                    img={result.img}
                    text={result.name} />
            ))}
        </div>
    );
}

export default ResultsGrid;
