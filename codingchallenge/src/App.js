import React from 'react';
import logo from './logo.svg';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const query = gql`
      query allDetails {
        allDetails{
          name
          description
          price
        }
      }
    `



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) { return 'loading' }
            if (error) { return 'error' }
            return data.allDetails.map(item => {
              return (
                <div style={{ display: 'flex', width: '25%' }}>
                  <span style={{ flex: 2 }}>{item.name}</span>
                  <span style={{ flex: 1 }}>{item.price}</span>
                </div>
              )
            })
          }}
        </Query>
      </header>
    </div>
  );
}

export default App;
