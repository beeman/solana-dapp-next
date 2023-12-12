import { CounterIDL } from '@solana-dapp-next/anchor';

export default async function Index() {
  return (
    <div>
      <pre>{JSON.stringify(CounterIDL, null, 2)}</pre>
    </div>
  );
}
