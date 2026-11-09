"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/v-form-13-utils/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/v-form-13-utils/field";
import { Form } from "@/components/ui/v-form-13-utils/form";
import { Input } from "@/components/ui/v-form-13-utils/input";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/v-form-13-utils/select";

export function Pattern() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Form className="w-full max-w-sm gap-4" onSubmit={onSubmit}>
      <div className="space-y-1">
        <h2 className="font-semibold">Invite team member</h2>
        <p className="text-muted-foreground text-sm">
          Send an invitation to join your workspace.
        </p>
      </div>

      <Field name="email">
        <FieldLabel>
          Email address <span className="text-destructive-foreground">*</span>
        </FieldLabel>
        <Input
          autoComplete="email"
          placeholder="colleague@company.com"
          required
          type="email"
        />
        <FieldError />
      </Field>

      <Field name="role">
        <FieldLabel>Role</FieldLabel>
        <Select
          defaultValue="member"
          items={[
            { label: "Admin", value: "admin" },
            { label: "Member", value: "member" },
            { label: "Viewer", value: "viewer" },
          ]}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="member">Member</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectPopup>
        </Select>
        <FieldDescription>
          Admins can manage members and billing.
        </FieldDescription>
      </Field>

      <div className="flex gap-3">
        <Button className="flex-1" type="reset" variant="outline">
          Cancel
        </Button>
        <Button className="flex-1" loading={loading} type="submit">
          {sent ? "Invitation sent!" : "Send invitation"}
        </Button>
      </div>
    </Form>
  );
}

export default Pattern;
