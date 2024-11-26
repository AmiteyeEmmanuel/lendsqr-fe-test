import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessibleRoute from "./services/accessible_route";
import Layout from "./components/auth/layout";

const SignIn = lazy(() => import("./components/auth/login"));
const Dashboard = lazy(() => import("./components/index"));
const UserDetails = lazy(() => import("./components/layout/content/pages/details/index"));

function App() {
  return (
    <>
      <Router>
        <Suspense>
          <Routes>
          <Route path="/" element={<AccessibleRoute><Layout><SignIn /></Layout></AccessibleRoute>} />

          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/details/:id" element={<UserDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
