import VLibras from "vlibras-nextjs"

export function VLibrasWidget() {
  return (
    <>
      {process.env.NODE_ENV === "production" && <VLibras forceOnload/>}
    </>
  )
}