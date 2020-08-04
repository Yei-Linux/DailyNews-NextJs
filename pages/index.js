import MainLayout from "../components/layouts/MainLayout";
import ListTable from "../components/shared/ListTable/ListTable";

import { QUERY_GET_NEWS } from "../graphql/schemas/NewsSchemas";
import { QUERY_GET_TOTAL_ROWS_OF_DOCUMENT } from "../graphql/schemas/DynamicSchema";

export default function Home() {
  return (
    <MainLayout customStyles={{
      padding: "0 50px",
      height: "100%"
    }}>
      <div className="listContainer">
        <ListTable
          pageSize={5}
          model={"New"}
          queryTotalRows={QUERY_GET_TOTAL_ROWS_OF_DOCUMENT}
          queryGetRows={QUERY_GET_NEWS}
          nameQuery={"getNews"}
          itemType={"card"}
          title={"Tech News"} hasButton={false}
        />
      </div>
    </MainLayout>
  );
}
