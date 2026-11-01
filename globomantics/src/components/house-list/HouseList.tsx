type HouseDetail = {
  id: number;
  address: string;
  country: string;
  askingPrice: number;
};

const houseList: HouseDetail[] = [
  {
    id: 0,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    askingPrice: 900000,
  },
  {
    id: 1,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    askingPrice: 500000,
  },
];

function HouseList(): React.JSX.Element {
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houseList.map((house) => (
            <tr key={house.id}>
              <td>{house.address}</td>
              <td>{house.country}</td>
              <td>${house.askingPrice.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default HouseList;
