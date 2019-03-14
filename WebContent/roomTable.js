function TableListComponent(options) {
  return ( <li><input type="checkbox" id={options.id} /><label htmlFor={options.id}>{options.tileInfo}</label></li> );
}

/*var app = (
  <div>
    <ul className="table">
      <TableListComponent id="grid-opt-1" tileInfo="" />
      <TableListComponent id="grid-opt-2" tileInfo="" />
      <TableListComponent id="grid-opt-3" tileInfo="Date Created" />
      <TableListComponent id="grid-opt-4" tileInfo="Date Completed" />
      <TableListComponent id="grid-opt-5" tileInfo="Order Number" />
      <TableListComponent id="grid-opt-6" tileInfo="Item Number" />
      <TableListComponent id="grid-opt-7" tileInfo="Quantity" />
      <TableListComponent id="grid-opt-8" tileInfo="Price" />
      <TableListComponent id="grid-opt-9" tileInfo="Shipping Address" />
      <TableListComponent id="grid-opt-10" tileInfo="Item Total" />
      <TableListComponent id="grid-opt-11" tileInfo="Shipping Total" />
      <TableListComponent id="grid-opt-12" tileInfo="Subtotal" />
      <TableListComponent id="grid-opt-13" tileInfo="Tax" />
      <TableListComponent id="grid-opt-14" tileInfo="Discounts" />
      <TableListComponent id="grid-opt-15" tileInfo="Total" />
    </ul>
  </div>
);*/

ReactDOM.render(app, document.querySelector('#app'));