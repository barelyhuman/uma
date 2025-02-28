
export const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};
