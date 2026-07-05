import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Chat01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ChatsPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-auto">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={Chat01Icon} />
          </EmptyMedia>
          <EmptyTitle>No conversations yet</EmptyTitle>
          <EmptyDescription>
            Your chats will appear here once you start a conversation. Create a
            new chat to begin messaging.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <HugeiconsIcon icon={Chat01Icon} data-icon="inline-start" />
            Start Chat
          </Button>
          <Button variant="outline">
            <HugeiconsIcon icon={Search01Icon} data-icon="inline-start" />
            Browse Chats
          </Button>
        </EmptyContent>
      </Empty>
    </main>
  );
}
