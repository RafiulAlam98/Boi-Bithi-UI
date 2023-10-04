import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
      <button className="text-orange-600 py-4">
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
    </Link>
  );
}
