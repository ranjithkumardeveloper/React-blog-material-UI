import {
  Container,
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import FeaturePost from "./Components/FeaturePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { featuredPosts, sidebar } from "./Data/Data";
import PostCard from "./Components/PostCard";
import Main from "./Components/Main";
import Sidebar from "./Components/SideBar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturePost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="React 18 is now available on npm!" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="React Blog"
        description="Build amazing website and web apps using React JS"
      />
    </ThemeProvider>
  );
}

export default App;
