export default function Dashboard() {

  const items = Array.from({ length: 2000 }, (_, i) => `Record ${i+1}`);

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            window.location.href = "/";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded border"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
