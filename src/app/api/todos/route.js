import { NextResponse } from "next/server";
import { databases } from "../../../lib/appwrite";
import { ID } from "appwrite";

const collectionID = "66618a1e0037b338de23";
const databaseID = "6661897d0008aaea6154";

// getting all the todos
export async function GET() {
	try {
		const todos = await databases.listDocuments(
			databaseID,
			collectionID,
			[]
		);
		return NextResponse.json(todos.documents, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function POST(req) {
	try {
		const newTodo = await req.json();
		const createdTodo = await databases.createDocument(
			databaseID,
			collectionID,
			ID.unique(),
			newTodo
		);
		return NextResponse.json(createdTodo, { status: 201 });
	} catch (error) {
		console.error("Error creating todo:", error);
		return NextResponse.error(error.message, { status: 500 });
	}
}
