import { sum } from './components/example';
import Expander from './components/expander';
import { render } from 'inferno';


const tree = {
  databases: {
    data: [
      {
        name: 'DB1',
        stores: {
          data: [
            {
              name: 'Store1',
              indexes: {
                data: [
                  {
                    name: 'index1'
                  }
                ]
              } // indexes
            }
          ]
        } // store
      },
    ]
  } // database
};


render(<Expander tree={tree} />, document.querySelector('[data-expander]'));
