import React from 'react';
import NewsTable from '../NewsTable/NewsTable';

import './NewsContainerStyle.scss';

const NewsContainer = () => {
    return (
        <div className="newsContainer">
            <NewsTable />
        </div>
    );
}
 
export default NewsContainer;