// function CarCard({ data }) {
//   return (
//     <div className="w-full max-w-xs bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105  transition-all duration-300 cursor-pointer h-[22rem]">
//       {/* Image */}
//       <img
//         src={data.image}
//         alt={data.model}
//         className="w-full h-48 object-cover"
//       />

//       {/* Content */}
//       <div className="p-4">
//         <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
//           {data.model}
//         </h3>

//         <p className="mt-2 text-xl font-bold text-gray-900">
//           ${data.price}
//         </p>
//         <p className="text-sm text-gray-600">
//           {data.millage} mi.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CarCard;

const CarCard = ({ data }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="relative">
        <img
          src={data.image}
          alt={data.model}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />

        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-neutral bg-accent font-bold text-sm">
          ${data.price.toLocaleString()}
        </span>
      </div>

      <div className="px-4 py-6 bg-neutral flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-secondary">
          {data.name} - {data.model}
        </h3>

        <p className="text-sm mt-2 text-gray-600">
          Mileage: {data.millage} MPG
        </p>

        <div className="mt-auto">
          <button className="mt-4 w-full py-2 rounded-lg font-semibold text-neutral bg-primary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
// Usage Example
// <CarCard data={yourCarObject} />
