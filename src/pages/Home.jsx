import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="border mx-2">
      <Card />
      <Card />
    </div>
  );
};
