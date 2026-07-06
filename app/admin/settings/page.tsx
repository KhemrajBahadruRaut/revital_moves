"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Save } from "lucide-react";
import { changeAdminPassword, getApiError } from "@/lib/api";
import { AdminShell } from "../_components/AdminShell";

export default function SettingsPage() {
  const [passwordForm, setPasswordForm] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handlePasswordChange = async () => {
    if (!passwordForm.current_password || !passwordForm.new_password || !passwordForm.confirm_password) {
      toast.error("All password fields are required");
      return;
    }

    if (passwordForm.new_password !== passwordForm.confirm_password) {
      toast.error("New passwords do not match");
      return;
    }

    setIsSaving(true);
    try {
      await changeAdminPassword(passwordForm);
      toast.success("Password changed");
      setPasswordForm({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (error: unknown) {
      toast.error(getApiError(error, "Unable to change password"));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AdminShell title="Settings" description="Update administrator security settings.">
      <section className="max-w-xl rounded-md border border-zinc-200 bg-white p-4">
        <h3 className="font-semibold">Change password</h3>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" type="password" placeholder="Current password" value={passwordForm.current_password} onChange={(event) => setPasswordForm((current) => ({ ...current, current_password: event.target.value }))} />
          <input className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" type="password" placeholder="New password" value={passwordForm.new_password} onChange={(event) => setPasswordForm((current) => ({ ...current, new_password: event.target.value }))} />
          <input className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm" type="password" placeholder="Confirm new password" value={passwordForm.confirm_password} onChange={(event) => setPasswordForm((current) => ({ ...current, confirm_password: event.target.value }))} />
        </div>
        <button type="button" onClick={handlePasswordChange} disabled={isSaving} className="mt-4 inline-flex h-10 items-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-60">
          <Save className="h-4 w-4" />
          {isSaving ? "Saving..." : "Save password"}
        </button>
      </section>
    </AdminShell>
  );
}
