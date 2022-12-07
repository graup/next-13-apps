import { redirect } from 'next/navigation';

export default function AccountPage({ params }: { params: { accountId: string } }) {
  return redirect(`/${params.accountId}/project`);
}
