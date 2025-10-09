export const fleetData = [
  {
    id: 1,
    category: "Heavy Trucks",
    vehicles: [
      {
        name: "Hino Ranger Trailer",
        type: "Trailer Truck",
        capacity: "40 Ton",
        year: "2023",
        quantity: 8,
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
        description:
          "Untuk transportasi equipment berat dan long-distance delivery",
        specifications: [
          "Engine: 350 HP",
          "Transmission: Manual 16-speed",
          "Axle: 6x4",
          "Fuel: Solar",
        ],
      },
      {
        name: "Fuso Fighter",
        type: "Medium Truck",
        capacity: "8 Ton",
        year: "2022-2023",
        quantity: 12,
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        description:
          "Truck serbaguna untuk distribusi regional dan city delivery",
        specifications: [
          "Engine: 240 HP",
          "Transmission: Manual 9-speed",
          "Axle: 4x2",
          "Fuel: Solar",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Specialized Vehicles",
    vehicles: [
      {
        name: "Isuzu Giga Crane",
        type: "Mobile Crane",
        capacity: "25 Ton Crane",
        year: "2023",
        quantity: 5,
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        description:
          "Mobile crane untuk instalasi tower dan equipment telekomunikasi",
        specifications: [
          "Crane Capacity: 25 Ton",
          "Boom Length: 35 m",
          "Engine: 350 HP",
          "4x2 Drive",
        ],
      },
      {
        name: "Mitsubishi Canter Aerial",
        type: "Aerial Work Platform",
        capacity: "20 Meter Height",
        year: "2022",
        quantity: 6,
        image:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop",
        description:
          "Platform kerja untuk maintenance tower dan instalasi aerial",
        specifications: [
          "Working Height: 20 m",
          "Platform Capacity: 200 kg",
          "Engine: 130 HP",
          "Hydraulic System",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Support Vehicles",
    vehicles: [
      {
        name: "Toyota Hilux Double Cabin",
        type: "Pickup Truck",
        capacity: "1 Ton",
        year: "2021-2023",
        quantity: 15,
        image:
          "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
        description: "Kendaraan survey, maintenance, dan supervisi lapangan",
        specifications: [
          "Engine: 2.4L Diesel",
          "4WD System",
          "Double Cabin",
          "Payload: 1,000 kg",
        ],
      },
      {
        name: "Suzuki APV Van",
        type: "Personnel Carrier",
        capacity: "8 Passengers",
        year: "2020-2022",
        quantity: 10,
        image:
          "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
        description: "Transportasi tim teknisi dan equipment ringan",
        specifications: [
          "Engine: 1.5L SOHC",
          "Seating: 8 Person",
          "Cargo Space: 1.2 m³",
          "Manual Transmission",
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Warehouse Equipment",
    vehicles: [
      {
        name: "Toyota Forklift",
        type: "Material Handling",
        capacity: "3 Ton",
        year: "2021-2023",
        quantity: 18,
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
        description: "Forklift untuk handling material di warehouse",
        specifications: [
          "Lift Capacity: 3 Ton",
          "Lift Height: 4.5 m",
          "Electric/LPG",
          "Side Shift",
        ],
      },
      {
        name: "Hand Pallet Truck",
        type: "Manual Handling",
        capacity: "2.5 Ton",
        year: "2020-2023",
        quantity: 25,
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
        description: "Hand pallet untuk pergerakan barang di dalam warehouse",
        specifications: [
          "Load Capacity: 2.5 Ton",
          "Fork Length: 1.15 m",
          "Manual Operation",
          "Steel Construction",
        ],
      },
    ],
  },
];

export const fleetStats = {
  totalVehicles: 99,
  categories: 4,
  averageAge: "2.1 years",
  maintenance: "99.2% uptime",
};
