import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { NoteTag } from "@/types/note";

interface NotesPageProps {
  params: Promise<{ slug: [NoteTag | "all"] }>;
}

export default async function NotesPage  ({ params }: NotesPageProps)  {
  const queryClient = new QueryClient();

  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes({ tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
};

