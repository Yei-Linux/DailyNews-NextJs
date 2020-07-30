import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="listContainer">
        <button>
          <a href="http://localhost:4000/daily-news/auth/google">Sign in with Google</a>
        </button>
        <button>
          <a href="http://localhost:4000/daily-news/auth/facebook">Sign in with Facebook</a>
        </button>
      </div>
    </MainLayout>
  );
}
