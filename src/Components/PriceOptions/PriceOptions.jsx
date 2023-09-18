import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Cardio Equipment",
        "Strength Training",
        "Group Classes",
        "Personal Training",
        "Sauna",
      ],
      price: 50.0,
    },

    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Cardio Equipment",
        "Strength Training",
        "Yoga Classes",
        "Nutrition Counseling",
      ],
      price: 80,
    },
    {
      id: 3,
      name: "Platinum Membership",
      features: [
        "Cardio Equipment",
        "Strength Training",
        "Indoor Pool",
        "Spa",
        "Childcare",
      ],
      price: 100,
    },
  ];

  return (
    <div>
      <h1 className='text-5xl'>Best Prices in the town</h1>

      <div className='grid md:grid-cols-3 gap-6 m-12'>
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
