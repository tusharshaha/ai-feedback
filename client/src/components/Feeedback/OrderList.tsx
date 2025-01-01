type OrderedListProps = {
  response: string;
};

const OrderedList: React.FC<OrderedListProps> = ({ response }) => {
  // Split the response into individual points
  const items = response.split(/\d+\.\s+/).filter(item => item.trim() !== "");

  return (
    <ol className="list-decimal pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item.trim()}
        </li>
      ))}
    </ol>
  );
};

export default OrderedList;
