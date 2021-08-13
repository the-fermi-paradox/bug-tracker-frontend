import StatsCard from "./stats_card.js";
import useFetch from "../../hooks/useFetch.js";
import url from "../../config.js";

const StatsPanel = () => {
  const { data } = useFetch(`${url}/tickets/`);
  return (
    <div className="stats-panel">
      {data ? (
        <div className="stats-blocks">
          {Object.entries(data).map(([key, value]) => (
            <StatsCard key={key} value={value} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default StatsPanel;
