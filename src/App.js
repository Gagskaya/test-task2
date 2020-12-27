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
import { View } from './components/View';
import { Sort } from './components/Sort'
import { Content } from './components/Content';



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
    case 'age':
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
  const { items, setData, sortData, orderData, filterName, filterNameValue } = props;
  const [translate, setTranslate] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/data.json');
      setData(res.data);
    }
    fetchData();
  }, [setData]);

  return (
    <Container maxWidth="sm">
      <div className="app">
        <div className="app-tabs-wrap">
          <Sort sortData={sortData} orderData={orderData} translate={translate} />
          <View translate={translate} />
        </div>
        <div className="app-content-wrap">
          {
            items && items.map(item => <Content  {...item} key={item.id} translate={translate} />)
          }
        </div>
        <input value={filterNameValue} onChange={e => filterName(e.target.value)} type="text" className="app__search-input" placeholder="Введите запрос" />
        <button className="tranlate-btn" onClick={() => setTranslate(!translate)}>{translate ? 'RU' : 'EN'}</button>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ data, sort, order, filter }) => ({
  items: data.items && searchBy(data.items, sort.sortValue, filter.filterNameValue, order.orderValue),
  filterNameValue: filter.filterNameValue
});
export default connect(mapStateToProps, { setData, sortData, orderData, filterName })(App);