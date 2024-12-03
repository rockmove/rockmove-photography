import { microcmsClient } from "@/lib/microcms/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await microcmsClient.get({
      // MicroCMSで設定したエンドポイント名を設置
      endpoint: "photolist",
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch photolist", error: (error as Error).message },
      { status: 500 }
    );
  }
}
