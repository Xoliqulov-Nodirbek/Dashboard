import { Routes, Route } from "react-router-dom";
import AgentsPage from "./pages/agents/agents";
import ArticlesPage from "./pages/articles/articles";
import ContactsPage from "./pages/contacts/contacts";
import Error from "./pages/error/error";
import IdeasPage from "./pages/ideas/ideas";
import OverviewPage from "./pages/overviewPage/overviewPage";
import SettingsPage from "./pages/settings/settings";
import SubscriptionPage from "./pages/subscription/subscription";
import TicketsPage from "./pages/tickets/tickets";

// -----> Css
import "./style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
