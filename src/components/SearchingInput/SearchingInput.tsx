/* eslint-disable @typescript-eslint/no-explicit-any */

export default function SearchingInput({ setSearchTerm }: any) {
  return (
    <div className="mb-6">
      <input
        required
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Book"
        type="text"
        className="input rounded-sm input-accent w-1/2 input-sm"
      />
      <button className="mx-auto bg-green-600 p-1 text-white rounded">
        Search
      </button>
    </div>
  );
}
