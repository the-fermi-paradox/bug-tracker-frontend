import Header from "./header.js";
import StatsPanel from "./stats_panel.js";
import BugSection from "./bug_section.js";

const Main = ({ currentProduct, callback }) => {
  return (
    <div className="main">
      <Header />
      <StatsPanel />
      <BugSection currentProduct={currentProduct} callback={callback} />
    </div>
  );
};

export default Main;
