/* eslint-disable @typescript-eslint/no-explicit-any */
import "./SearchInput.css";

export default function SearchingInput({ setSearchTerm, filterableData }: any) {
  const selectedField = (event: any) => {
    // console.log(event.target.value);
    filterableData(event.target.value);
  };

  return (
    <div className="mb-6">
      <div className="">
        <input
          required
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Book"
          type="text"
          className="input rounded-sm input-accent w-1/2 input-sm "
        />
      </div>
      <div className="mt-4">
        <select
          name="isAvailable"
          className="select select-sm rounded select-info w-1/3 mr-2 "
          onChange={(e) => selectedField(e)}
        >
          <option value="all">All Genres</option>
          <option value="fiction">Fiction</option>
          <option value="novel">Novel</option>
          <option value="memoir">Memoir</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="nystery">Mystery & Thriller</option>
          <option value="historical fiction">Historical Fiction</option>
          <option value="science">Science-Fiction</option>
        </select>

        <select
          name="isAvailable"
          className="select select-sm rounded select-info w-1/3 mr-2 "
          onChange={(e) => selectedField(e)}
        >
          <option value="all">All Years</option>
          <option value="March 1, 2005">2005</option>
        </select>
      </div>
    </div>
  );
}
