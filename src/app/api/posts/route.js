import { NextResponse } from "next/server";
import connect from "@/utils/db.js";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username: username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error", { status: 500 });
  }
};

export const POST = async (request) => {
  console.log("POST");
  const body = await request.json();
  console.log(body);
  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();
    return new NextResponse("Post Created", { status: 201 });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error", { status: 500 });
  }
};
