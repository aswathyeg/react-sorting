import "./App.css";
import "./index";
import Articles from "./components/Articles";
import { useEffect, useState } from "react";

const title = "Sorting Articles";
function App({ articles }) {
  const [flag, setFlag] = useState(true);
  const sortedVotes = () => {
    let res;
    articles.sort((a, b) =>
      a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0
    );
    res = articles;
    return res;
  };
  const sortedDates = () => {
    let res;
    articles.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0));
    res = articles;
    return res;
  };
  useEffect(() => {}, [flag]);
  return (
    <div>
      {/* {articles.map((items) => {
        return <span>{items.title}</span>;
      })} */}
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <label className="sort">Sort By</label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => setFlag(true)}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => setFlag(false)}
        >
          Most Recent
        </button>
      </div>

      <Articles articles={flag ? sortedVotes() : sortedDates()} />
    </div>
  );
}

export default App;
