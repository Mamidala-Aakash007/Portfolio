export default async function TeamDetailsPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <div className="text-red-600">hi {name}</div>;
}
