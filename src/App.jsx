import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import LoadingAnimation from "./components/LoadingAnimation";

const Home = React.lazy(() => import("./components/Home"));
const Projects = React.lazy(() => import("./components/Projects"));
const Experience = React.lazy(() => import("./components/Experience"));
const Contact = React.lazy(() => import("./components/Contact"));
const ContentWrapper = React.lazy(() => import("./components/ContentWrapper"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <ContentWrapper>
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ContentWrapper>
    </BrowserRouter>
  );
};

export default App;
