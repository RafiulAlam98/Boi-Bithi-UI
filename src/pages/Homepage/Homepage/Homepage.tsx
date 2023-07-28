import BookLists from "../BookLists/BookLists";

export default function Homepage() {
  return (
    <div className="bg-[#E7E9EB] py-10">
      <div className="max-w-[1100px] mx-auto ">
        <BookLists />
      </div>
    </div>
  );
}
