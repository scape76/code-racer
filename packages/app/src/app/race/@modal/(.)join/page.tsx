import CloseModal from "@/components/close-modal";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreateRoomForm } from "../../_components/create-room-form";
import { NoHistoryButton } from "@/components/no-history-button";

export default function JoinRoomModal() {
  return (
    <div className="fixed inset-0 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto relative">
        <div className="relative">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Race with friends</CardTitle>
              <CardDescription>
                Create or join a room to race with your friends in real-time.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col space-y-4">
              <CreateRoomForm />
              <NoHistoryButton path="/race/create">Create Room</NoHistoryButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}