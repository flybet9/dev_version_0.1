import { Fragment, useState } from 'react';
import './Sst.css';

const Sst = () => {
  const [showTable, setShowTable] = useState(true);

  const toggleView = () => {
    setShowTable(!showTable);
  };

  return (
    <Fragment>
      <div className='sst-content'>
        <h2>Super Stockist Content</h2>
        <button onClick={toggleView} className='add-sst-button'>
          {showTable ? 'Add SST' : 'Back to Table'}
        </button>
        {showTable ? (
          <div className='table-container'>
            <table className='data-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Fix Limit</th>
                  <th>My Share</th>
                  <th>Exposure</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>001</td>
                  <td>johndoe123</td>
                  <td>John Doe</td>
                  <td>$5000</td>
                  <td>$2000</td>
                  <td>30%</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className='form-container'>
            <form>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='username'>Username:</label>
                  <input type='text' id='username' name='username' />
                </div>

                <div className='form-group'>
                  <label htmlFor='firstName'>First Name:</label>
                  <input type='text' id='firstName' name='firstName' />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='lastName'>Last Name:</label>
                  <input type='text' id='lastName' name='lastName' />
                </div>

                <div className='form-group'>
                  <label htmlFor='fixLimit'>Fix Limit:</label>
                  <input type='text' id='fixLimit' name='fixLimit' />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='myMatchShare'>My Match Share:</label>
                  <input type='text' id='myMatchShare' name='myMatchShare' />
                </div>

                <div className='form-group'>
                  <label htmlFor='sstMatchShare'>SST Match Share:</label>
                  <input type='text' id='sstMatchShare' name='sstMatchShare' />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='sstMatchCommission'>SST Match Commission:</label>
                  <input type='text' id='sstMatchCommission' name='sstMatchCommission' />
                </div>

                <div className='form-group'>
                  <label htmlFor='sstSessionCommission'>SST Session Commission:</label>
                  <input type='text' id='sstSessionCommission' name='sstSessionCommission' />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='password'>Password:</label>
                  <input type='password' id='password' name='password' />
                </div>

                <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm Password:</label>
                  <input type='password' id='confirmPassword' name='confirmPassword' />
                </div>
              </div>
              
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Sst;
