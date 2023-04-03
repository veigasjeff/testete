import { useState } from 'react';

const PointsTablePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup} className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Points Table</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0" onClick={togglePopup}>
             Close
            </button>
         
          <table >
            
            <thead >
              <tr >
                <th >POS</th>
                <th>TEAM</th>
                <th>P</th>
                <th>W</th>
                <th>L</th>
                <th>T</th>
                <th>NR</th>
                <th>NRR</th>
                <th>FOR</th>
                <th>AGST</th>
                <th>PTS</th>
                </tr>
            </thead>
            <tbody >
              <tr className="text-center mt-2 text-red-600 text-xl">
                <td>1</td>
                <td>CSK</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>-0.514</td>
                <td>178/20.0</td>
                <td>182/19.2</td>
                <td>0</td>
              </tr>
              <tr  className="text-center mt-2 text-red-600 text-xl">
                <td>2</td>
                <td>DC</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>-2.500</td>
                <td>143/20.0</td>
                <td>193/20.0</td>
                <td>0</td>
              </tr>
              <tr className="text-center mt-2 text-green-600/75 text-xl font-bold">
                <td>3</td>
                <td>GT</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0.514</td>
                <td>182/19.2</td>
                <td>178/20.0</td>
                <td>2</td>
              </tr>
              <tr className="text-center mt-2 text-red-600 text-xl ">
                <td>4</td>
                <td>KKR</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>-0.438</td>
                <td>146/16.0</td>
                <td>153/16.0</td>
                <td>0</td>
              </tr>
              <tr className="text-center mt-2 text-green-600 text-xl font-bold">
                <td>5</td>
                <td>LSG</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>2.500</td>
                <td>193/20.0</td>
                <td>143/20.0</td>
                <td>2</td>
                </tr>
                <tr className="text-center mt-2 text-red-600 text-xl ">
                <td>6</td>
                <td>MI</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>-1.981</td>
                <td>171/20.0</td>
                <td>172/16.2</td>
                <td>0</td>
              </tr>
              <tr className="text-center mt-2 text-green-600 text-xl font-bold">
                <td>7</td>
                <td>PBKS</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0.438</td>
                <td>153/16.0</td>
                <td>146/16.0</td>
                <td>2</td>
              </tr>
              <tr className="text-center mt-2 text-green-600 text-xl font-bold">
                <td>8</td>
                <td>RR</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>3.600</td>
                <td>203/20.0</td>
                <td>131/20.0</td>
                <td>2</td>
              </tr>
              <tr className="text-center mt-2 text-green-600 text-xl font-bold">
                <td>9</td>
                <td>RBC</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1.981</td>
                <td>172/16.2</td>
                <td>171/20.0</td>
                <td>2</td>
              </tr>
              <tr className="text-center mt-2 text-red-600 text-xl ">
                <td>10</td>
                <td>SRH</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>-3.600</td>
                <td>131/20.0</td>
                <td>203/20.0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <style jsx>{`
            .table-container {
              overflow-x: auto;
              max-width: 100%;
            }
            .popup {
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            table {
              border-collapse: collapse;
              width: 100%;
              margin: 0 auto;
              border: 2px solid #020DF9;
              text-align: left;
            }
            
            th, td {
              padding: 8px;
              text-align: left;
            }
            
            tr {
              background-color: #A0A3E5; /* set the new color here */
            }      
            @media screen and (max-width: 767px) {
              table {
                font-size: 14px;
              }
            }
            
            @media screen and (max-width: 480px) {
              table {
                font-size: 12px;
              }
            }

            th {
              background-color: #6369E8;
            }
          `}</style>
        </div>  </div>
      )}
    </div>
  );
};

export default PointsTablePopup;
