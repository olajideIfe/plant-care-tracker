import React from "react";

const Dashboard = ({
  totalPlants,
  healthyPlants,
  dueToday,
  overduePlants,
}) => {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-10">

      <div
        className="
        bg-white/80
        backdrop-blur-md
        p-6
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        "
      >
        <h3 className="text-gray-500 text-sm mb-2">
          🌿 Total Plants
        </h3>

        <p className="text-4xl font-bold text-green-700">
          {totalPlants}
        </p>
      </div>

      <div
        className="
        bg-white/80
        backdrop-blur-md
        p-6
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        "
      >
        <h3 className="text-gray-500 text-sm mb-2">
          🟢 Healthy Plants
        </h3>

        <p className="text-4xl font-bold text-green-600">
          {healthyPlants}
        </p>
      </div>

      <div
        className="
        bg-white/80
        backdrop-blur-md
        p-6
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        "
      >
        <h3 className="text-gray-500 text-sm mb-2">
          🟡 Water Soon
        </h3>

        <p className="text-4xl font-bold text-yellow-500">
          {dueToday}
        </p>
      </div>

      <div
        className="
        bg-white/80
        backdrop-blur-md
        p-6
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        "
      >
        <h3 className="text-gray-500 text-sm mb-2">
          🔴 Overdue
        </h3>

        <p className="text-4xl font-bold text-red-500">
          {overduePlants}
        </p>
      </div>

    </div>
  );
};

export default Dashboard;