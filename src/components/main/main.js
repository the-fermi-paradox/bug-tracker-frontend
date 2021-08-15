import Header from "./header.js";
import StatsPanel from "./stats_panel.js";
import BugSection from "./bug_section.js";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <StatsPanel />
      <BugSection />
    </div>
  );
};

export default Main;
