import React, { useEffect, useState } from 'react';
import findShipDate from './functions/findShipDate';
import './styles/general.css';

export default function Item({ itemDetails, changedShippingDate }) {
  //use object deconstruction to pull out 'productName', 'inventoryQuantity', 'shipOnWeekends', and
  //'maxBusinessDaysToShip' values from 'itemDetails' prop
  const {
    productName,
    inventoryQuantity,
    shipOnWeekends,
    maxBusinessDaysToShip,
  } = itemDetails;

  const [shippingDate, setShippingDate] = useState(undefined);
  //create a useEffect hook to assign the shippingDate to the result of calling the findShipDate
  //function passing in 'shipOnWeekends', 'maxBusinessDaysToShip' and 'changedShippingDate'
  useEffect(() => {
    setShippingDate(
      findShipDate(shipOnWeekends, maxBusinessDaysToShip, changedShippingDate)
    );
    //this block of code should run every time 'changedShippingDate' hook has changed
  }, [changedShippingDate]);

  return (
    <li>
      <h3 className="productName">{productName ? productName : ''}</h3>
      <div className="inventoryQuantity">
        Items left in stock: {inventoryQuantity ? inventoryQuantity : ''}
      </div>
      <div className="shipDate">
        If ordered now, item will arrive:{' '}
        <b>{shippingDate ? shippingDate : ''}</b>
      </div>
    </li>
  );
}
