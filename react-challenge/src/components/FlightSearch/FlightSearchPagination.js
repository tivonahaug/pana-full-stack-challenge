import React from 'react';

export default function FlightSearchPagination() {
  return (
    <div className="row">
      <div className="col-xs-6">
        <p className="m-t-0 m-b-0">Page Count: </p>
      </div>
      <div className="col-xs-6">
        <div className="row end-xs">
          <div className="btn btn--sm">Previous Page</div>
          <div className="btn btn--sm">Next Page</div>
        </div>
      </div>
    </div>
  );
}
