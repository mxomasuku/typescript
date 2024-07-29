import { House } from "../../DataModels/model";

interface Props {
  houses: House[],
  setHouses: React.Dispatch<React.SetStateAction<House[]>>;
}

const AvailableHouses = ({ houses, setHouses }: Props) => {
  return (
    <div>
      {houses.map((house: House) => ( 
        
        <div key={house.id}>
          {house.house}</div> 
      ))}
    </div>
  );
};

export default AvailableHouses;
