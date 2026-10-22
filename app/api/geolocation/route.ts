import type { IPifyResponse } from "@/types/IPify";
import type { NextRequest } from "next/server";
import { isIP } from "node:net";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query");
  const apiKey = process.env.IPIFY_API_KEY;
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  //TODO read user ip out of the header on deploy
  if (query) {
    if (isIP(query)) {
      url += `&ipAddress=${encodeURIComponent(query)}`;
    } else {
      url += `&domain=${encodeURIComponent(query)}`;
    }
  }

  const response = await fetch(url);
  if (!response.ok) {
    return Response.json(
      { error: "IP Address or domain not found" },
      { status: response.status },
    );
  }
  const data: IPifyResponse = await response.json();

  return Response.json(data);
}
