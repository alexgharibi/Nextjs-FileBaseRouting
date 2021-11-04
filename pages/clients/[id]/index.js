import { useRouter } from "next/router";

const clientProjects = () => {
  const router = useRouter();

  const loadprojectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "projecta",
      },
    });
  };
  return (
    <div>
      <h1>projects of given client</h1>
      <button onClick={loadprojectHandler}>Load project a</button>
    </div>
  );
};

export default clientProjects;
