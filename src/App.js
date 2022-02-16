import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log("APP", id);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} hanldeDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
