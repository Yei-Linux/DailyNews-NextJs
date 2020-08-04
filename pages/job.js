import React from 'react';
import MainLayout from "../components/layouts/MainLayout";

import ListTable from "../components/shared/ListTable/ListTable";

import { QUERY_GET_JOBS } from "../graphql/schemas/JobsSchema";
import { QUERY_GET_TOTAL_ROWS_OF_DOCUMENT } from "../graphql/schemas/DynamicSchema";

const Job = () => {
    return (
        <MainLayout customStyles={{
            padding: "0 50px",
            height: "100%"
          }}>
            <div className="listContainer">
                <ListTable
                pageSize={5}
                model={"Job"}
                queryTotalRows={QUERY_GET_TOTAL_ROWS_OF_DOCUMENT}
                queryGetRows={QUERY_GET_JOBS}
                nameQuery={"getJobs"}
                itemType={"card"}
                title={"Tech Jobs"} hasButton={false}
                />
            </div>
        </MainLayout>
    );
}
 
export default Job;