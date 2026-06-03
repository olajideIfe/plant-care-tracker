const PlantCard = ({
  plant,
  deletePlant,
  editPlant,
  getStatus,
  getNextWateringDate,
}) => {
  return (
    <div
      className="
      bg-white/90
      backdrop-blur-md
      rounded-3xl
      shadow-lg
      overflow-hidden
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {plant.image && (
        <img
          src={plant.image}
          alt={plant.plantName}
          className="
          w-full
          h-56
          object-cover
          "
        />
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2
            className="
            text-2xl
            font-bold
            text-green-700
            "
          >
            🌿 {plant.plantName}
          </h2>

          <span
            className="
            bg-green-100
            text-green-700
            px-3
            py-1
            rounded-full
            text-sm
            font-semibold
            "
          >
            {getStatus(plant)}
          </span>
        </div>

        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Scientific Name:</strong> {plant.scientificName}
          </p>

          <p>
            <strong>Category:</strong> {plant.category}
          </p>

          <p>
            <strong>Light:</strong> {plant.lightRequirement}
          </p>

          <p>
            <strong>Water Every:</strong> {plant.waterFrequency} Days
          </p>

          <p>
            <strong>Last Watered:</strong> {plant.lastWatered}
          </p>

          <p>
            <strong>Next Watering:</strong> {getNextWateringDate(plant)}
          </p>
        </div>

        {plant.notes && (
          <div
            className="
            mt-4
            p-4
            bg-green-50
            rounded-xl
            "
          >
            <p>
              <strong>📝 Notes:</strong>
            </p>

            <p className="text-gray-600">{plant.notes}</p>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => editPlant(plant)}
            className="
            flex-1
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-xl
            transition
            font-semibold
            "
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => {
              const confirmed = window.confirm(
                "Are you sure you want to delete this plant?",
              );

              if (confirmed) {
                deletePlant(plant.id);
              }
            }}
            className="
            flex-1
            bg-red-600
            hover:bg-red-700
            text-white
            py-3
            rounded-xl
            transition
            font-semibold
            "
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
