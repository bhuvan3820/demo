import { Card } from '../ui/card';

export const ServiceCard = ({ title, description }) => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="text-purple-600 text-sm font-medium">Get started →</button>
    </Card>
  );
};