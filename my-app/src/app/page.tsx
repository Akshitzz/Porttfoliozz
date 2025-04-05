import api from "../../lib/api";
import { LanyardResponse } from "react-use-lanyard";
import Home from "@/components/home";


export default async function Page() {
  try {
  



    try {
      // Get discord activity data
      const activity = await api.get<LanyardResponse>(
        `https://api.lanyard.rest/v1/users/762947755924258832`,
        { cache: "no-cache" }
      );

      return <Home  activity={activity.data} />;
    } catch (activityError) {
      console.error("Failed to fetch discord activity:", activityError);
      return <Home  activity={undefined} />;
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    return <Home  activity={undefined} />;
  }
}