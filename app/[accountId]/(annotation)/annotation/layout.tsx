export default function AnnotationLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {
  return <>
    <em>Annotation layout {JSON.stringify(params, null, 2)}</em>
    <div className="layout" style={{ border: '10px solid #ddd' }}>{children}</div>
  </>;
}
