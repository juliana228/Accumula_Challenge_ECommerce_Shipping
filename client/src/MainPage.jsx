import React, { useEffect, useState } from 'react';
import Item from './Item';

export default function MainPage() {
  const [itemElements, setItemElements] = useState([]);
  const [changedShippingDate, setChangedShippingDate] = useState(undefined);
  const [newShippingDate, setNewShippingDate] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((data) => data.json())
      .then((itemData) => {
        //loop through 'itemData' array (array of objects) and create an 'Item'
        //JSX component, push to 'items' array
        const items = [];
        itemData.forEach((item) => {
          items.push(
            <div key={item.productId}>
              <Item
                itemDetails={item}
                changedShippingDate={changedShippingDate}
              />
              <br />
            </div>
          );
        });
        //we will use 'setItemElements' to set this hook to the now filled 'items' array
        setItemElements(items);
      });
    //this should run every time 'changedShippingDate' changes
  }, [changedShippingDate]);

  return (
    <div>
      <div className="titleAndDateForm">
        <h2>Accumula E-commerce Challenge</h2>
        <form>
          <input
            type="date"
            onChange={(e) => setNewShippingDate(e.target.value)}
          ></input>
          <button
            onClick={(e) => {
              setChangedShippingDate(newShippingDate);
              e.preventDefault();
            }}
          >
            change shipping date
          </button>
        </form>
      </div>

      <ul>{itemElements}</ul>
    </div>
  );
}
