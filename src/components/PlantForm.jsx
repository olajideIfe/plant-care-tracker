import React from "react";

const PlantForm = ({
  formData,
  handleChange,
  handleImageUpload,
  addPlant,
  editingId,
}) => {
  return (
    <form
      onSubmit={addPlant}
      className="
      bg-white/80
      backdrop-blur-md
      p-8
      rounded-3xl
      shadow-xl
      mb-8
      "
    >
      <h2
        className="
        text-3xl
        font-bold
        text-green-700
        mb-6
        "
      >
        {editingId
          ? "✏️ Update Plant"
          : "🌱 Add New Plant"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="plantName"
          placeholder="Plant Name"
          value={formData.plantName}
          onChange={handleChange}
          className="
          border
          border-gray-300
          p-3
          rounded-xl
          focus:ring-4
          focus:ring-green-200
          outline-none
          "
        />

        <input
          type="text"
          name="scientificName"
          placeholder="Scientific Name"
          value={formData.scientificName}
          onChange={handleChange}
          className="
          border
          border-gray-300
          p-3
          rounded-xl
          focus:ring-4
          focus:ring-green-200
          outline-none
          "
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="
          border
          border-gray-300
          p-3
          rounded-xl
          focus:ring-4
          focus:ring-green-200
          outline-none
          "
        >
          <option value="">Select Category</option>
          <option>Succulent</option>
          <option>Herb</option>
          <option>Flower</option>
          <option>Vegetable</option>
          <option>Tree</option>
        </select>

        <select
          name="lightRequirement"
          value={formData.lightRequirement}
          onChange={handleChange}
          className="
          border
          border-gray-300
          p-3
          rounded-xl
          focus:ring-4
          focus:ring-green-200
          outline-none
          "
        >
          <option value="">Light Requirement</option>
          <option>Full Sun</option>
          <option>Partial Shade</option>
          <option>Full Shade</option>
        </select>

        <input
          type="number"
          name="waterFrequency"
          placeholder="Water Every (Days)"
          value={formData.waterFrequency}
          onChange={handleChange}
          className="
          border
          border-gray-300
          p-3
          rounded-xl
          focus:ring-4
          focus:ring-green-200
          outline-none
          "
        />

        <input
          type="date"
          name="lastWatered"
          value={formData.lastWatered}
          onChange={handleChange}
          className="
          border
          border-gray-300
          p-3
          rounded-xl
          focus:ring-4
          focus:ring-green-200
          outline-none
          "
        />

      </div>

      <div className="mt-6">

        <label className="block mb-2 font-semibold text-green-700">
          📸 Plant Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="
          border
          border-gray-300
          p-3
          rounded-xl
          w-full
          "
        />

      </div>

      {formData.image && (
        <img
          src={formData.image}
          alt="Preview"
          className="
          w-40
          h-40
          object-cover
          rounded-2xl
          mt-4
          shadow-md
          border-4
          border-white
          "
        />
      )}

      <textarea
        name="notes"
        placeholder="Care Notes"
        value={formData.notes}
        onChange={handleChange}
        className="
        border
        border-gray-300
        p-4
        rounded-xl
        w-full
        mt-6
        focus:ring-4
        focus:ring-green-200
        outline-none
        "
        rows="4"
      />

      <button
        type="submit"
        className="
        mt-6
        bg-green-600
        hover:bg-green-700
        text-white
        px-8
        py-3
        rounded-xl
        font-semibold
        transition
        shadow-md
        "
      >
        {editingId
          ? "Update Plant"
          : "Add Plant"}
      </button>

    </form>
  );
};

export default PlantForm;