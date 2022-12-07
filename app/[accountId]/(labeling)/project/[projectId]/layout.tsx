export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: any
}) {
  return <>
    <em>Project layout {JSON.stringify(params, null, 2)}</em>
    <div className="layout" style={{ border: '10px solid #bbb' }}>
      {children}
    </div>
  </>;
}
