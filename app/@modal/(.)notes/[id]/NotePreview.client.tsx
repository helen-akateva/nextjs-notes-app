"use client";

import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

export default function NotePreviewClient() {
  const router = useRouter();
  const close = () => router.back();

  return (
    <>
      <Modal onClose={close}>
        <button className={css.backBtn} onClick={close}>
          Close
        </button>
        <NoteDetailsClient />
      </Modal>
    </>
  );
}
