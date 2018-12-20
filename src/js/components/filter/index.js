import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className="filter p-3">
        <nav aria-controls="HERE THE ID OF FILTER MAIN">
          <form action="#">
            <div className="form-row align-items-center">
              <div className="col-auto">
                <fieldset>
                  <label htmlFor="filter-goto-page" className="sr-only">Go to page</label>
                  <select className="form-control" name="#" id="filter-goto-page">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </fieldset>
              </div>

              <div className="col-auto">
                <fieldset>
                  <button type="button" className="btn btn-light" title="Next" aria-label="Next">&gt;</button>
                  <button type="button" className="btn btn-light" title="End" aria-label="End">&gt;&gt;</button>
                  <button type="button" className="btn btn-light" title="Previous" aria-label="Previous">&lt;</button>
                  <button type="button" className="btn btn-light" title="Begin" aria-label="Begin">&lt;&lt;</button>
                </fieldset>
              </div>

              <div className="col-auto">
                <fieldset>
                  <div className="form-check m-1">
                    <input className="form-check-input" type="checkbox" id="filter-show-all" />
                    <label className="form-check-label" htmlFor="filter-show-all">Show all</label>
                  </div>
                </fieldset>
              </div>

              <div className="col-auto">
                <fieldset>
                  <label htmlFor="filter-number-rows" className="sr-only">Number of rows:</label>
                  <select className="form-control" name="#" title="Number of rows" id="filter-number-rows">
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                </fieldset>
              </div>
            </div>

          </form>
        </nav>
      </div>
    );
  }
}

export default Filter;
