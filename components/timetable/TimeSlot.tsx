interface TimeSlotClass {
  time: string;
  class: string;
  instructor: string;
  color: string;
}

interface TimeSlotProps {
  time: string;
  classes: TimeSlotClass[];
}

export default function TimeSlot({ time, classes }: TimeSlotProps) {
  if (classes.length === 0) {
    return <div className="h-32 bg-zinc-800/30 rounded"></div>;
  }
  
  const getColorClass = (color: string) => {
    switch (color) {
      case 'muaythai':
        return 'bg-dl-gold/10 border-l-4 border-dl-gold';
      case 'mma':
        return 'bg-blue-900/20 border-l-4 border-blue-500';
      case 'kids':
        return 'bg-green-900/20 border-l-4 border-green-500';
      case 'women':
        return 'bg-pink-900/20 border-l-4 border-pink-500';
      case 'fighters':
        return 'bg-purple-900/20 border-l-4 border-purple-500';
      default:
        return 'bg-gray-900 border-l-4 border-gray-500';
    }
  };
  
  return (
    <div 
      className={`h-32 rounded p-3 flex flex-col justify-center ${getColorClass(classes[0].color)}`}
    >
      <div className="text-lg font-medium line-clamp-2">{classes[0].class}</div>
      <div className="text-sm text-gray-300">Coach: {classes[0].instructor}</div>
    </div>
  );
}