import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth";
import { ExpenseTracker} from "./pages/expense-tracker";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  exact element={<Auth />} />
        <Route path="/expense" element={<ExpenseTracker />} />

      </Routes>
    </Router>
  )
}

export default App;