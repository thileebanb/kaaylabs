import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "./api";

function App() {
  const { data } = useSelector((state) => state.home);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("?per_page=10&page=" + page));
  }, [dispatch, page]);

  const handleSearch = () => {
    dispatch(fetchData("?page=1&per_page=10&beer_name=" + searchInput));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="beer's name"
              aria-label="beer's name"
              aria-describedby="button-addon2"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      src={item.image_url}
                      alt={item.name}
                      height="120"
                      width="60"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pt-4">
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={() => {
                    if (page > 1) {
                      setPage((p) => p - 1);
                    }
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" onClick={() => setPage(1)}>
                  1
                </button>
              </li>
              <li className="page-item">
                <button className="page-link" onClick={() => setPage(2)}>
                  2
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  onClick={() => setPage(3)}
                >
                  3
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => setPage((p) => p + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
