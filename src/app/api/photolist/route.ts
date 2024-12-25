import { microcmsClient } from "@/lib/microcms/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cache =
      req.nextUrl.searchParams.get("cache") === "false"
        ? "no-cache"
        : "force-cache";
    const data = await microcmsClient.get({
      // MicroCMSで設定したエンドポイント名を設置
      endpoint: "photolist",
    });
    return NextResponse.json(data, {
      headers: {
        "Cache-Control":
          cache === "no-cache" ? "no-cache" : "public, max-age=60",
      },
    });
  } catch (err) {
    console.error("Error fetching photo list:", err);
    return NextResponse.json(
      { message: "Error fetching photo list" },
      { status: 500 }
    );
  }
}
