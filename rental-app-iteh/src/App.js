import { useState } from "react";
import history from "./helpers/history";
import { Switch,Router, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Homepage from "./components/homepage/Homepage";

function App() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");
  return(
    <Router history={history}>
      <Navbar history={history} />
      <Switch>
      <Route exact path="/">
          <Homepage
            history={history}
            pageCount={pageCount}
            setFilter={setFilter}
            setSort={setSort}
            setOrder={setOrder}
            search={search}
            setSearch={setSearch}
            page={page}
            setPage={setPage}
          />
        </Route>
      </Switch>
    </Router>
  );;
}

export default App;
