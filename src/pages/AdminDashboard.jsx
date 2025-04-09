import React, { useState } from "react";
import { events } from "../data/eventData";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  const [eventList, setEventList] = useState(events);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [errorFields, setErrorFields] = useState({
    title: false,
    date: false,
    location: false,
    description: false,
  });

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostEvent = () => {
    let isError = false;
    const updatedErrorFields = {
      title: false,
      date: false,
      location: false,
      description: false,
    };

    if (!newEvent.title) {
      updatedErrorFields.title = true;
      isError = true;
    }
    if (!newEvent.date) {
      updatedErrorFields.date = true;
      isError = true;
    }
    if (!newEvent.location) {
      updatedErrorFields.location = true;
      isError = true;
    }
    if (!newEvent.description) {
      updatedErrorFields.description = true;
      isError = true;
    }

    if (isError) {
      setError("Please fill out all required fields.");
      setErrorFields(updatedErrorFields);
      return;
    }

    setError("");
    setErrorFields({
      title: false,
      date: false,
      location: false,
      description: false,
    });

    setEventList([...eventList, { ...newEvent, id: eventList.length + 1 }]);
    setNewEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      image: "",
    });
  };

  const handleDeleteEvent = (id) => {
    setEventList(eventList.filter((event) => event.id !== id));
  };

  return (
    <div className="flex  min-h-[calc(100vh-10vh-60px)] bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-6 ml-0 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-2">
            Admin Dashboard
          </h2>
          <p className="text-gray-600 text-center mb-8 text-lg">
            Manage events, users, and all admin-related tasks here.
          </p>

          {/* Post New Event */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">
              Post New Event
            </h3>
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleEventChange}
                className={`w-full p-3 rounded-md border ${
                  errorFields.title ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Event Title"
              />
              <input
                type="text"
                name="date"
                value={newEvent.date}
                onChange={handleEventChange}
                className={`w-full p-3 rounded-md border ${
                  errorFields.date ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Event Date (dd-mm-yyyy)"
              />
              <input
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleEventChange}
                className={`w-full p-3 rounded-md border ${
                  errorFields.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Event Location"
              />
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleEventChange}
                className={`w-full p-3 rounded-md border ${
                  errorFields.description
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Event Description"
              />
              <input
                type="text"
                name="image"
                value={newEvent.image}
                onChange={handleEventChange}
                className="w-full p-3 rounded-md border border-gray-300"
                placeholder="Event Image URL (optional)"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handlePostEvent}
                className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition"
              >
                Post Event
              </button>
            </div>
          </section>

          {/* Manage Events */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-600 mb-6">
              Manage Events
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {eventList.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                >
                  <img
                    src={event.image || "https://via.placeholder.com/400x200"}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex-1 space-y-2">
                    <h4 className="text-xl font-semibold text-purple-700">
                      {event.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {event.date} • {event.location}
                    </p>
                    <p className="text-sm text-gray-700">
                      {event.description.slice(0, 60)}...
                    </p>
                  </div>
                  <div className="p-4 space-y-2">
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                      View Details
                    </button>
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
