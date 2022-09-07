import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ContentWrapper } from 'common';
import GlobalStyle from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { AuthContextProvider } from 'context/AuthContext';
import { Loading } from 'modules/loading';
import { PrivateRoute, PublicRoute } from 'modules/auth';

const Home = React.lazy(() => import('./pages/App/Home'))
const SignUp = React.lazy(() => import('./pages/Auth/SignUp'))
const Login = React.lazy(() => import('./pages/Auth/Login'))
const Search = React.lazy(() => import('./pages/App/Search'))
const MoviesPage = React.lazy(() => import('./pages/App/Movies'))
const MoviesSearch = React.lazy(() => import('./pages/App/MoviesSearch'))
const SeriesPage = React.lazy(() => import('./pages/App/Series'))
const SeriesSearch = React.lazy(() => import('./pages/App/SeriesSearch'))
const SavedShows = React.lazy(() => import('./pages/App/SavedShows'))
const MyAccount = React.lazy(() => import('./pages/App/Account'))

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
        cacheTime: 1000 * 6 * 10,
        retry: false,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <GlobalStyle />
          <Router>
            <React.Suspense fallback={<Loading />}>
                <ContentWrapper>
                  <Routes>
                    <Route path="sign-up" element={<PublicRoute component={SignUp} />}/>
                    <Route path="/login" element={<PublicRoute component={Login} />} />

                    {/* Private Routes */}
                    <Route path='/' element={<PrivateRoute component={Home} />}/>
                    <Route path='/search' element={<PrivateRoute component={Search} />} />

                    <Route path='/movies' element={<PrivateRoute component={MoviesPage} />} />
                    <Route path='/movies/search' element={<PrivateRoute component={MoviesSearch} />} />

                    <Route path='/series' element={<PrivateRoute component={SeriesPage} />} />
                    <Route path='/series/search' element={<PrivateRoute component={SeriesSearch} />} />

                    <Route path="/saved" element={<PrivateRoute component={SavedShows} />} />
                    <Route path="my-account" element={<PrivateRoute component={MyAccount} />} />
                  </Routes>
                </ContentWrapper>
            </React.Suspense>
          </Router>
        </AuthContextProvider>
      </QueryClientProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
