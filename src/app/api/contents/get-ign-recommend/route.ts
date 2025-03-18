import Backendless from "@/lib/backendless";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const contentID = url.searchParams.get("contentID");

    const queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setWhereClause(`objectId != '${contentID}'AND category != 'header'`);
    queryBuilder.setSortBy(["created DESC"]);
    queryBuilder.setPageSize(8);

    const contentFeedData = await Backendless.Data.of("ign-content").find(queryBuilder);

    return Response.json(contentFeedData, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Failed to fetch content feed" }, { status: 500 });
  }
}
