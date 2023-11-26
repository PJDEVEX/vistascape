import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import { useColorScheme } from "./hooks/useColorScheme";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";

/**
 * Main application component.
 */
function App() {
  // Get current user and profile ID
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  // Get color scheme for dark mode
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  return (
    // Main container with styling classes
    <div className={`${styles.App} ${darkClass}`}>
      <NavBar /> {/* Navigation bar component */}
      <Container className={`${styles.Main} ${darkClass}`}>
        <Switch>
          {/* Home route */}
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />

          {/* Feed route */}
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />

          {/* Liked posts route */}
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />

          {/* Sign in route */}
          <Route exact path="/signin" render={() => <SignInForm />} />

          {/* Sign up route */}
          <Route exact path="/signup" render={() => <SignUpForm />} />

          {/* Create post route */}
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />

          {/* Single post route */}
          <Route exact path="/posts/:id" render={() => <PostPage />} />

          {/* Edit post route */}
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />

          {/* Profile route */}
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />

          {/* Edit username route */}
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />

          {/* Edit password route */}
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />

          {/* Edit profile route */}
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />

          {/* 404 route */}
          <Route render={() => <NotFound/>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
