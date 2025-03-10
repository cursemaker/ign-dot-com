import Backendless from "@/lib/backendless";


export async function GET() {
  try {
    const queryBuilder = Backendless.DataQueryBuilder.create();
      queryBuilder.setWhereClause("category = 'contentFeed'");
    queryBuilder.setSortBy(["created DESC"]);
    queryBuilder.setPageSize(100);
    const contentFeedData = await Backendless.Data.of("ign-content").find(queryBuilder);
    console.log(contentFeedData);
    return Response.json(contentFeedData, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Failed to fetch content feed" }, { status: 500 });
  }
}
