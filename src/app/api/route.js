import { GET_SERVICES } from "@/lib/client.queries";

export async function GET(params) {
  const [services] = await GET_SERVICES();
  return Response.json(services);
}
