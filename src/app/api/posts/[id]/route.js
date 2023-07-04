import { NextResponse } from "next/server";
import connect from "@/utils/db.js";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post Deleted", { status: 200 });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error", { status: 500 });
  }
};
