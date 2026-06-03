import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import PlantCard from "./components/PlantCard";
import PlantForm from "./components/PlantForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    plantName: "",
    scientificName: "",
    category: "",
    lightRequirement: "",
    waterFrequency: "",
    lastWatered: "",
    notes: "",
    image: "",
  });

  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("plants");

    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const plant = {
    id: 1,
    name: "Aloe Vera",
    type: "Succulent",
    days: 7,
    lastWatered: "2026-06-01",
    notes: "Place near window",
  };

  const deletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch =
      plant.plantName.toLowerCase().includes(search.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || plant.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const getStatus = (plant) => {
    const today = new Date();

    const lastWatered = new Date(plant.lastWatered);

    const nextWateringDate = new Date(lastWatered);

    nextWateringDate.setDate(
      nextWateringDate.getDate() + Number(plant.waterFrequency),
    );

    const difference = Math.ceil(
      (nextWateringDate - today) / (1000 * 60 * 60 * 24),
    );

    if (difference < 0) {
      return "🔴 Overdue";
    }

    if (difference <= 1) {
      return "🟡 Water Soon";
    }

    return "🟢 Healthy";
  };

  const totalPlants = plants.length;

  const healthyPlants = plants.filter(
    (plant) => getStatus(plant) === "🟢 Healthy",
  ).length;

  const duePlants = plants.filter(
    (plant) => getStatus(plant) === "🟡 Water Soon",
  ).length;

  const overduePlants = plants.filter(
    (plant) => getStatus(plant) === "🔴 Overdue",
  ).length;

  const getNextWateringDate = (plant) => {
    const lastWatered = new Date(plant.lastWatered);

    const nextDate = new Date(lastWatered);

    nextDate.setDate(nextDate.getDate() + Number(plant.waterFrequency));

    return nextDate.toLocaleDateString();
  };

  const editPlant = (plant) => {
    setFormData({
      plantName: plant.plantName,
      scientificName: plant.scientificName,
      category: plant.category,
      lightRequirement: plant.lightRequirement,
      waterFrequency: plant.waterFrequency,
      lastWatered: plant.lastWatered,
      notes: plant.notes,
      image: plant.image,
    });

    setEditingId(plant.id);
  };

  const addPlant = (e) => {
    e.preventDefault();

    if (editingId) {
      setPlants(
        plants.map((plant) =>
          plant.id === editingId
            ? {
                ...plant,
                ...formData,
              }
            : plant,
        ),
      );

      setEditingId(null);
    } else {
      const newPlant = {
        id: Date.now(),
        ...formData,
      };

      setPlants([...plants, newPlant]);
    }

    setFormData({
      plantName: "",
      scientificName: "",
      category: "",
      lightRequirement: "",
      waterFrequency: "",
      lastWatered: "",
      notes: "",
      image: "",
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`
    min-h-screen
    p-6
    transition-all
    duration-500

    ${
      darkMode
        ? "bg-slate-900 text-white"
        : "bg-gradient-to-br from-green-50 via-emerald-100 to-green-200"
    }
  `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1
            className="
      text-5xl
      font-bold
      text-green-800
      mb-3
      "
          >
            🌱 Plant Care Tracker
          </h1>

          <p
            className="
  text-sm
  text-gray-500
  mt-2
  "
          >
            Built by Ifedolapo Olajide 🌱
          </p>

          <p
            className="
      text-gray-600
      text-lg
      "
          >
            Track watering schedules, plant health and care notes.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
    bg-black
    text-white
    px-5
    py-3
    rounded-xl
    shadow-md
    hover:scale-105
    transition
    "
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <Dashboard
          totalPlants={totalPlants}
          healthyPlants={healthyPlants}
          dueToday={duePlants}
          overduePlants={overduePlants}
        />

        <PlantForm
          formData={formData}
          handleChange={handleChange}
          handleImageUpload={handleImageUpload}
          addPlant={addPlant}
          editingId={editingId}
        />

        <div className="flex gap-2 flex-wrap mb-6">
          <button
            className=" px-5 py-2 rounded-full  bg-green-600  text-white  hover:bg-green-700 transition  "
            onClick={() => setCategoryFilter("All")}
          >
            All
          </button>

          <button onClick={() => setCategoryFilter("Succulent")}>
            Succulents
          </button>

          <button onClick={() => setCategoryFilter("Herb")}>Herbs</button>

          <button onClick={() => setCategoryFilter("Flower")}>Flowers</button>

          <button onClick={() => setCategoryFilter("Tree")}>Trees</button>
        </div>
        <SearchBar search={search} setSearch={setSearch} />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {filteredPlants.length === 0 ? (
            <div
              className="
      col-span-full
      bg-white/80
      backdrop-blur-md
      p-10
      rounded-3xl
      text-center
      shadow-lg
      "
            >
              <h2
                className="
        text-3xl
        font-bold
        text-green-700
        mb-3
        "
              >
                🌱 No Plants Found
              </h2>

              <p className="text-gray-600">
                Add your first plant above to start tracking.
              </p>
            </div>
          ) : (
            filteredPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                deletePlant={deletePlant}
                editPlant={editPlant}
                getStatus={getStatus}
                getNextWateringDate={getNextWateringDate}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
