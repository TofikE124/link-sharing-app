import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/authOptions/authOptions";

const page = async () => {
  const session = await getServerSession(authOptions);
  return <div className="m-8">{session?.user?.name || "NULL"}</div>;
};

export default page;
