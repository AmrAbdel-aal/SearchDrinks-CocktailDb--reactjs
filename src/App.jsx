import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import "./App.css";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
} from "./pages";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
const singleCocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const landingLoader = async ({ request }) => {
  const url = new URL(request.url);
  const newSearch = url.searchParams.get("search");

  console.log(newSearch);
  let results;
  if (!newSearch) {
    results = await axios.get(`${SearchUrl}`);
  } else {
    results = await axios.get(`${SearchUrl}${newSearch}`);
  }

  return results.data.drinks;
};
const singleCocktailLoader = async ({ params }) => {
  const { id } = params;
  const results = await axios.get(`${singleCocktailSearchUrl}${id}`);
  return results.data.drinks;
};

const formAction = async ({ request }) => {
  const payload = Object.fromEntries(await request.formData());
  /*
here you can post a requrest to the api (no api available now to do that)
const response = await axios.post('ApiUrl',payload);
*/

  toast.success("Newsletter will be sent to you soon", {
    position: toast.POSITION.TOP_CENTER,
  });
  return redirect("/");
};
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "/newsletter",
        element: <NewsLetter />,
        action: formAction,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        errorElement: <Error />,
        loader: singleCocktailLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
      <ToastContainer />
    </>
  );
}

export default App;
