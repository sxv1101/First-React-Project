import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

const PizzaOfTheDay = () => {
  const pizzOfTheDay = usePizzaOfTheDay();

  if (!pizzOfTheDay) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="pizza-of-the-day">
      <h2>Pizza Of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzOfTheDay.name}</h3>
          <p className="pizza-of-the-day-price">
            From: {intl.format(pizzOfTheDay.sizes.S)}
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzOfTheDay.image}
          alt={pizzOfTheDay.name}
        />
      </div>
    </div>
  );
};
export default PizzaOfTheDay;
