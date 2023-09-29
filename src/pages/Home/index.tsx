import { Chat } from '@/components/Chat';

export function Home(): JSX.Element {
  return (
    <div className="p-4 md:p-14 h-full">
      <Chat />
    </div>
  );
}
