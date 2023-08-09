import Header from "@/components/header";
import { useRouter } from "next/router";

const PokemonPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Header />
      <>{name}</>
    </>
  );
};

export default PokemonPage;
