import { useRouter } from "next/router";
import Seo from "@/components/Seo";
export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h3>{title}</h3>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
