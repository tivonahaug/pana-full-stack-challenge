import React from 'react';
import Button from '../Button';

export default function FlightSearchPagination() {
  return (
    <div className="m-t-2 m-b-2 d-space-between full-width">
      <Button size="sm">Previous Page</Button>
      <p className="m-t-0 m-b-0">Page 0 of 0</p>
      <Button size="sm">Next Page</Button>
    </div>
  );
}
