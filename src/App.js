import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import orderBy from 'lodash/orderBy'

import './App.scss';
import { setData } from './actions/setData';
import { sortData } from './actions/sortData';
import { orderData } from './actions/orderData';
import { filterName } from './actions/filterName';
import { filterDistance } from './actions/filterDistance';

import { Sort } from './components/Sort';
import { Pagination } from './components/Pagination';
import { TableView } from './components/TableView';
import { Filter } from './components/Filter';



const sortBy = (items, sortValue, orderValue) => {
  switch (orderValue) {
    case 'increase':
      return orderBy(items, sortValue, 'asc');
    case "decrease":
      return orderBy(items, sortValue, 'desc');
    default: break;
  }
  switch (sortValue) {
    case 'id':
      return orderBy(items, sortValue, 'asc');
    case 'name':
      return orderBy(items, sortValue, 'asc');
    case 'amount':
      return orderBy(items, sortValue, 'asc');
    case 'distance':
      return orderBy(items, sortValue, 'asc');
    default:
      return items;
  }
}
const filterBy = (items, filterNameValue) => items.filter(item => item.name.toLowerCase().indexOf(filterNameValue.toLowerCase()) >= 0);
const searchBy = (items, sortValue, filterNameValue, orderValue) => {
  return sortBy(filterBy(items, filterNameValue), sortValue, orderValue)
}
const App = (props) => {
  const { items, setData, sortData, orderData, filterName,filterDistance } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items && items.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/data.json');
      setData(res.data);
    }
    fetchData();
  }, [setData]);
  const [visibleFilterPopup, setVisibleFilterPopup] = useState(false);
  return (
    <Container maxWidth="sm">
      <div className="app">
        <div className="app-tabs-wrap">
          <Sort sortData={sortData} orderData={orderData} />
          <button className='app__filter-btn' onClick={() => setVisibleFilterPopup(!visibleFilterPopup)}>Фильтровать</button>
        </div>
        <Filter visibleFilterPopup={visibleFilterPopup} filterName={filterName} filterDistance={filterDistance}/>
        <div className="app-content-wrap">
          <TableView items={currentItems} />
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items && items.length}
          paginate={paginate}
        />
      </div>
    </Container>
  );
}

const mapStateToProps = ({ data, sort, order, filter }) => ({
  items: data.items && searchBy(data.items, sort.sortValue, filter.filterNameValue, order.orderValue)
});
export default connect(mapStateToProps, { setData, sortData, orderData, filterName ,filterDistance})(App);