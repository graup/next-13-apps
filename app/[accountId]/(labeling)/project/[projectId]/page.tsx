import Image from 'next/image'

export default function Project({ params }: { params: { projectId: string } }) {
  return <>Welcome to project {params.projectId}</>;
}
