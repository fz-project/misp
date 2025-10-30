export const fleetData = [
  {
    id: 1,
    category: "Support Vehicles",
    vehicles: [
      {
        name: "Suzuki Carry / Daihatsu Grandmax",
        type: "Pick Up",
        capacity: "1–1.5 Ton",
        year: "2015–2020",
        quantity: 6,
        image: "/images/fleet/Pick-Up.jpg",
        description: "Vehicle for transporting and delivering materials",
        specifications: [
          "Passenger Capacity: 2 Persons",
          "Payload Capacity: 1–1.5 Tons",
          "Engine: 1,495 cc, 4-cylinder",
          "Transmission: 5-speed Manual",
          "Maximum Power: 97 PS @ 6000 rpm",
        ],
      },
      {
        name: "Daihatsu Grandmax",
        type: "Pick Up Box",
        capacity: "800 Kg–1 Ton",
        year: "2018",
        quantity: 2,
        image: "/images/fleet/Pickup-Box.jpg",
        description:
          "Vehicle for transporting and delivering materials including battery",
        specifications: [
          "Length: 2,400–3,400 mm",
          "Width: 1,500–1,600 mm",
          "Height: 1,200–1,300 mm",
          "Payload Capacity: Up to 1 Ton",
          "Maximum Power: 96 hp @ 6,000 rpm",
          "Transmission: 5-speed Manual",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Warehouse Equipment",
    vehicles: [
      {
        name: "Forklift",
        type: "Material Handling",
        capacity: "3.5 Ton",
        year: "2019",
        quantity: 3,
        image: "/images/fleet/Forklift.jpg",
        description: "Material handling vehicle for warehouse operations",
        specifications: [
          "Load Capacity: 3.5 Tons",
          "Load Center: 500 mm",
          "Transmission: Powershift (Diesel/Gasoline/LPG models)",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Heavy Trucks",
    vehicles: [
      {
        name: "Truck CDD",
        type: "Medium Truck",
        capacity: "6–7 Ton",
        year: "2010",
        quantity: 3,
        image: "/images/fleet/Truck-Medium.jpg",
        description:
          "Vehicle for transporting and delivering materials to the site",
        specifications: [
          "Length: ±4.5 meters",
          "Width: ±2 meters",
          "Height: ±2 meters",
          "Engine: Diesel",
          "Transmission: Manual (5–6 speeds)",
          "Wheel Configuration: 6 wheels",
        ],
      },
    ],
  },
];

export const fleetStats = (() => {
  const totalVehicles = fleetData.reduce(
    (sum, category) =>
      sum + category.vehicles.reduce((s, v) => s + v.quantity, 0),
    0
  );

  return {
    totalVehicles,
    averageAge: 6.5,
    maintenance: "98%",
  };
})();
