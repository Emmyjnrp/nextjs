const students = [
  { id: 1, name: "John Doe", age: 21 },
  { id: 2, name: "Jane Smith", age: 20 },
  { id: 3, name: "Alice Johnson", age: 22 },
];
export async function GET() {
  return Response.json({ students });
}
