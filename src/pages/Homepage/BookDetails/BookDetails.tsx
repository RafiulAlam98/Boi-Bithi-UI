import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../../redux/features/bookSlice/bookApi";
import Loading from "../../../components/Progress/Loading";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return <div>BookDetails</div>;
}
