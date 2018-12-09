import { Component } from 'inferno';

class Expander extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.tree);
  }

  render() {
    const { databases } = this.props.tree;

    return (
      <div className="c-expander">
        <ul>
          {
            databases.data.map(database => {
              const { stores } = database;

              return (
                <li>
                  <button>{ database.name }</button>
                  <ul>
                    {
                      stores.data.map(store => {
                        const { indexes } = store;

                        return (
                          <li>
                            <button>{ store.name }</button>
                            <ul>
                              {
                                indexes.data.map(index => {
                                  return (
                                    <li>
                                      <button>{ index.name }</button>
                                    </li>
                                  );
                                })
                              }
                            </ul>
                          </li>
                        );
                      })
                    }
                  </ul>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}


export default Expander
