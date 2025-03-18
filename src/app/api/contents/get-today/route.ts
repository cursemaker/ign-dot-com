import Backendless from "@/lib/backendless";

export async function GET() {
  try {
    const queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setWhereClause("category = 'today'");
    queryBuilder.setSortBy(["created ASC"]);
    const todayStoryData = await Backendless.Data.of("ign-content").find(queryBuilder);
    return Response.json(todayStoryData, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Failed to fetch content feed" }, { status: 500 });
  }
}
