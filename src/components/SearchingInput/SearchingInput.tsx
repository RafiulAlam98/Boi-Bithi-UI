/* eslint-disable @typescript-eslint/no-explicit-any */

export default function SearchingInput({ setSearchTerm }: any) {
  return (
    <div className="mb-6">
      <h1 className="my-2"> Searching Option Coming Soon...</h1>

      <input
        required
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Book"
        type="text"
        className="input rounded-sm input-accent w-1/2 input-sm"
      />
      <button>Search</button>
    </div>
  );
}
