"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, Trash2 } from "lucide-react";
import { deleteMessage, getApiError, getMessages } from "@/lib/api";
import { AdminShell, EmptyState } from "../_components/AdminShell";
import type { ContactMessage } from "../_components/types";
import { formatDate } from "../_components/types";

export default function ContactPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMessages = useCallback(async () => {
    setIsLoading(true);
    try {
      setMessages(await getMessages());
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to load messages"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadMessages();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadMessages]);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await deleteMessage(id);
      toast.success("Message deleted");
      await loadMessages();
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to delete message"));
    }
  };

  return (
    <AdminShell title="Contact" description="Read and manage messages from the contact form.">
      <div className="grid gap-4 xl:grid-cols-2">
        {messages.length === 0 ? (
          <EmptyState title={isLoading ? "Loading messages..." : "No messages found"} />
        ) : (
          messages.map((message) => (
            <article key={message.id} className="rounded-md border border-zinc-200 bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">
                    {message.first_name} {message.last_name || ""}
                  </h3>
                  <p className="text-sm text-zinc-500">{formatDate(message.created_at)}</p>
                </div>
                <button type="button" onClick={() => void handleDelete(message.id)} className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-red-600 hover:bg-red-50" title="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-600">
                <a className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-2 hover:bg-zinc-100" href={`mailto:${message.email}`}>
                  <Mail className="h-4 w-4" />
                  {message.email}
                </a>
                {message.phone ? (
                  <a className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-2 hover:bg-zinc-100" href={`tel:${message.phone}`}>
                    <Phone className="h-4 w-4" />
                    {message.phone}
                  </a>
                ) : null}
                {message.service ? <span className="rounded-md bg-emerald-50 px-3 py-2 text-emerald-800">{message.service}</span> : null}
              </div>

              <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-zinc-700">{message.message}</p>
            </article>
          ))
        )}
      </div>
    </AdminShell>
  );
}
