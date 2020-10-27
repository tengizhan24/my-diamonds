import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

import Navbar from '../components/Navbar'
import Login from './Login';
import Header from './Header';
import Crad from './Crad'


class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <div>
        <Navbar />
        
        <Container>
            <Route exact path="/">
            <Header/>
            </Route>
          <Switch>
            <Route exact path="/about">
              <Menu />
              <Filter />
              <div>
                <Card.Group itemsPerRow={4}>
                  {!isReady
                    ? 'Загрузка...'
                    : books.map((book, i) => <BookCard key={i} {...book} />)}
                </Card.Group>
              </div>
            </Route>
            <Route exact path="/users">
            <Login />
            {/* <Card.Group itemsPerRow={4}>
                  {!isReady
                    ? 'Загрузка...'
                    : books.map((book, i) => <BookCard key={i} {...book} />)}
                </Card.Group> */}
            </Route>
            <Route Route path="/заказы">
              <Crad/>
            </Route>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
