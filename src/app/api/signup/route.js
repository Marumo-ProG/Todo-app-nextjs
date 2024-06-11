import { NextResponse } from "next/server";
import { account } from "../../../lib/appwrite";
import { ID } from "appwrite";
const jwt = require("jsonwebtoken");

export async function POST(req) {
	try {
		const user = await req.json();
		const createdUser = await account.create(
			ID.unique(),
			user.email,
			user.password
		);
		const token = jwt.sign({ id: createdUser.$id }, process.env.JWT_SECRET);
		createdUser.token = token;
		return NextResponse.json(createdUser, { status: 201 });
	} catch (error) {
		console.error("Error creating user:", error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
