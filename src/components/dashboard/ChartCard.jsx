import { Card, CardContent } from '../ui/card';
import { PieChart, Pie, Cell } from 'recharts';

export const ChartCard = ({ title, data, colors }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4">{title}</h3>
        <div className="flex justify-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index] }}></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};