"use client";

// shadcn
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/message-attachment-utils/attachment";
import {
  Bubble,
  BubbleContent,
} from "@/components/ui/message-attachment-utils/bubble";
import {
  Message,
  MessageContent,
} from "@/components/ui/message-attachment-utils/message";

// assets
import { DownloadIcon, FileTextIcon } from "lucide-react";

//  ------------------------------ | MESSAGE - ATTACHMENT | ------------------------------  //

export function MessageAttachment() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Message align="end">
        <MessageContent>
          <Attachment orientation="vertical">
            <AttachmentMedia variant="image">
              <img
                src="https://cdn.21st.dev/assets/mirror/e9/e935afc1f9e1c66d906f22118444d5f58de37197c966bf8e72e4d229c80f10d2.jpg"
                alt="Workspace"
              />
            </AttachmentMedia>
          </Attachment>
          <Bubble>
            <BubbleContent className="dark:text-white">
              Here&apos;s the image. Can you add it to the PDF? Use it for the
              cover page.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              Done. Here&apos;s the PDF with the image added as the cover page.
            </BubbleContent>
          </Bubble>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction
                type="button"
                title="Download"
                aria-label="Download"
                size="icon-sm"
                variant="secondary"
              >
                <DownloadIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent className="dark:text-white">
              Thanks. Looks good.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
}

export default MessageAttachment;
