import { NextResponse } from 'next/server';

export function createSuccessResponse(message: string, data: any, status: number = 200) {
  return NextResponse.json({ success: true, message, data }, { status });
}

export function createErrorResponse(message: string, status: number = 400) {
  return NextResponse.json({ success: false, message }, { status });
}