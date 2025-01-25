import { MoreVertical } from 'lucide-react';

export const StatsCard = ({ number, title, subtitle }) => {
  return (
    <div className="bg-purple-50 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{number}</span>
        <MoreVertical className="h-5 w-5 text-purple-600" />
      </div>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
};