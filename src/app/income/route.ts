import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function GET() {
  const incomes = await prisma.income.findMany();
  return NextResponse.json(incomes);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newIncome = await prisma.income.create({
    data: body,
  });
  return NextResponse.json(newIncome);
}
