import "./table.css";

const cities = [
  {
    id: "lisbon",
    name: "Lisbon",
    temperature: 21,
    imgSrc: "react/public/sun.png",
    imgAlt: "sun",
  },
  {
    id: "paris",
    name: "Paris",
    temperature: 11,
    imgSrc: "react/public/small-rain-cloud.png",
    imgAlt: "rain cloud",
  },
  {
    id: "belgrade",
    name: "Belgrade",
    temperature: 15,
    imgSrc: "react/public/cloud-under-sun.png",
    imgAlt: "small cloud",
  },
  {
    id: "venice",
    name: "Venice",
    temperature: 21,
    imgSrc: "react/public/cloud-above-sun.png",
    imgAlt: "small cloud",
  },
  {
    id: "tel-avive",
    name: "Tel-avive",
    temperature: 32,
    imgSrc: "react/public/hot-sun.png",
    imgAlt: "hot sun",
  },
  {
    id: "cair",
    name: "Cair",
    temperature: 21,
    imgSrc: "react/public/sun.png",
    imgAlt: "sunny",
  },
  {
    id: "new-york",
    name: "New-York",
    temperature: 17,
    imgSrc: "react/public/thunderstorm-cloud-sun.png",
    imgAlt: "thunderstorm",
  },
  {
    id: "new-delhi",
    name: "New-Delhi",
    temperature: 17,
    imgSrc: "react/public/rain-cloud.png",
    imgAlt: "rainy",
  },
  {
    id: "san-francisco",
    name: "San-Francisco",
    temperature: 15,
    imgSrc: "react/public/sunny.png",
    imgAlt: "sunny",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    temperature: 8,
    imgSrc: "react/public/moon.png",
    imgAlt: "moon",
  },
  {
    id: "sydney",
    name: "Sydney",
    temperature: 8,
    imgSrc: "react/public/moon.png",
    imgAlt: "moon",
  },
];
function Table() {
  return (
    <div className="table-container">
      {cities.map((city) => (
        <div className="city" id={city.id} key={city.id}>
          <div className="item-content">
            <h3 className="city-name">{city.name}</h3>
            <div className="item-content__temp">
              <h3>{city.temperature}&deg;C</h3>
              <img src={city.imgSrc} alt={city.imgAlt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
