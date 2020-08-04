import MainLayout from "../components/layouts/MainLayout";

export const withAuth = Component => props => {
  return (
    <MainLayout>
      <div className="listContainer">
          <Component {...props} />
      </div>
    </MainLayout>
  );
};
