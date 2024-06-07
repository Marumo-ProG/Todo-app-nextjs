import { NextResponse } from "next/server";
import { databases } from "../../../lib/appwrite";
import { ID, Query } from "appwrite";

const collectionID = "6661a92f000c93b9faa1";
const databaseID = "6661897d0008aaea6154";

// getting all the comments for one specific todo
export async function GET(req) {
	const url = new URL(req.url);
	const todoID = url.searchParams.get("id");
	try {
		const comments = await databases.listDocuments(
			databaseID,
			collectionID,
			[Query.equal("todo", [todoID])]
		);
		return NextResponse.json(comments.documents, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function POST(req) {
	try {
		const newComment = await req.json();
		const createdTodo = await databases.createDocument(
			databaseID,
			collectionID,
			ID.unique(),
			newComment
		);
		return NextResponse.json(createdTodo, { status: 201 });
	} catch (error) {
		console.error("Error creating todo:", error);
		return NextResponse.error(error.message, { status: 500 });
	}
}
