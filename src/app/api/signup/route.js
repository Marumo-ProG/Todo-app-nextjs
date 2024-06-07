import { NextResponse } from "next/server";
import { account } from "../../../lib/appwrite";
import { ID } from "appwrite";

export async function POST(req) {
	try {
		const user = await req.json();
		const createdUser = await account.create(
			ID.unique(),
			user.email,
			user.password
		);
		return NextResponse.json(createdUser, { status: 201 });
	} catch (error) {
		console.error("Error creating user:", error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
