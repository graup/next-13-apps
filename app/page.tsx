import Link from "next/link";

export default function AccountPage() {
  return <>
    <ul>
      <li><Link href="/pingu">Visit Pingu Labeling</Link></li>
      <li><Link href="/pingu/dataops">Visit Pingu Dataops</Link></li>
      <li><Link href="/pingu/annotation/edit">Visit Pingu Annotation</Link></li>
    </ul>
  </>;
}