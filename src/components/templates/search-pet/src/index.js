
import React, { useState } from 'react';
import Form from '../../../molecules/form/src';
import TextInput from '../../../atoms/text-input/src';
import Upload from '../../../atoms/upload/src';
import Button from '../../../atoms/button/src';
import ResultsGrid from '../../../organisms/results-grid/src';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import resultsMock from '../mocks/results-mock';

const SearchPet = (props) => {

    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        setResults(null);
        setDisabled(true);
        if (e.target.zipcode.value !== "" && e.target.file.value !== "") {
            setLoading(true);
            setTimeout(() => {
                let resultsTransform = [];
                resultsMock.result_imgs.forEach((result, index) => {
                    resultsTransform.push({
                        img: result,
                        name: "Adopt-a-pet",
                        details: resultsMock.result_details[index],
                    });
                });
                setResults(resultsTransform);
                setDisabled(false);
            }, 5000);
        } else {
            setDisabled(false);
        }
    };

    return (
        <div className="search-pet">
            <Form onSubmit={handleSubmit} novalidate>
                <TextInput placeholder="Please enter your zipcode" regex="(^\d{5}$)" onChange={() => console.log("Cambió")} name="zipcode" required />
                <Upload name="file" required />
                <Button disabled={disabled}>
                    Good Luck!
                </Button>
            </Form>
            {results && <ResultsGrid results={results} />}
            {!results && loading && <Skeleton className='search-pet--skeleton'><ResultsGrid /></Skeleton>}
        </div>
    );
}

export default SearchPet;
